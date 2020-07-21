import Message from '../models/Message';
import IMessageRepository from '../repositories/IMessageRepository';

import AppError from '../errors/AppError';

interface Request {
  subject: string;
  detail: string;
}

export default class CreateMessageService {
  constructor(private messagesRepository: IMessageRepository) {}

  public async execute({ detail, subject }: Request): Promise<Message> {
    const message = await this.messagesRepository.create({ detail, subject });

    if (!message) {
      throw new AppError('Failed to create new message');
    }
    return message;
  }
}
