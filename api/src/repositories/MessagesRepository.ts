import { Repository, getRepository } from 'typeorm';

import Message from '../models/Message';
import IMessageRepository from './IMessageRepository';
import ICreateMessageDTO from '../dtos/ICreateMessageDTO';

import AppError from '../errors/AppError';

class MessageRepository implements IMessageRepository {
  private ormRepository: Repository<Message>;

  constructor() {
    this.ormRepository = getRepository(Message);
  }

  public async create({
    detail,
    subject,
  }: ICreateMessageDTO): Promise<Message> {
    if (!detail) {
      throw new AppError('Failed to create new message');
    }

    if (!subject) {
      throw new AppError('Failed to create new message');
    }

    const message = this.ormRepository.create({ detail, subject });

    await this.ormRepository.save(message);

    return message;
  }

  public async save(message_id: string): Promise<Message> {
    const message = await this.ormRepository.findOne(message_id);

    if (!message) {
      throw new AppError('Id not found in the database');
    }

    message.read = true;

    await this.ormRepository.save(message);

    return message;
  }

  public async index(): Promise<Message[]> {
    const messages = await this.ormRepository.find();

    return messages;
  }
}

export default MessageRepository;
