import ICreateMessageDTO from "../dtos/ICreateMessageDTO";
import Message from "../models/Message";

export default interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message | undefined>;
  save(message_id: string): Promise<Message | undefined>;
  index(): Promise<Message[]>;
}
