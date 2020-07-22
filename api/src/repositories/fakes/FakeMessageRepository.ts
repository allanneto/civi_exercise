import { uuid } from 'uuidv4';

import Message from '../../models/Message';

import IMessagesRepository from '../IMessageRepository';
import ICreateMessageDTO from '../../dtos/ICreateMessageDTO';

class MessageRepository implements IMessagesRepository {
  private messages: Message[] = [];

  public async create({
    detail,
    subject,
  }: ICreateMessageDTO): Promise<Message> {
    const message = new Message();

    Object.assign(message, {
      id: uuid(),
      detail,
      subject,
    });

    this.messages.push(message);

    return message;
  }

  public async save(message_id: string): Promise<Message> {
    const findMessage = this.messages.findIndex(
      message => message.id === message_id,
    );

    // if (!findMessage) {
    //   throw new AppError('ID not found in the database');
    // }

    this.messages[findMessage].read = true;

    return this.messages[findMessage];
  }

  public async index(): Promise<Message[]> {
    return this.messages;
  }
}

export default MessageRepository;
