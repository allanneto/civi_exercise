import { Repository, getRepository } from 'typeorm';

import Message from '../models/Message';
import IMessageRepository from '../repositories/IMessageRepository';

import AppError from '../errors/AppError';

export default class UpdateReadService {
  constructor(private messagesRepository: IMessageRepository) {}

  public async execute(message_id: string): Promise<Message> {
    const message = await this.messagesRepository.save(message_id);

    if (!message) {
      throw new AppError('Id not found in the database');
    }

    return message;
  }
}
