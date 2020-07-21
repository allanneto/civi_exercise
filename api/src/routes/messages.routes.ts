import { Router } from "express";

import MessageRepository from "../repositories/MessagesRepository";
import CreateMessageService from "../services/CreateMessageService";
import UpdateMessageService from "../services/UpdateReadService";

const messagesRouter = Router();

messagesRouter.get("/", async (req, res) => {
  const messagesRepository = new MessageRepository();

  const messages = await messagesRepository.index();

  return res.json(messages);
});

messagesRouter.post("/", async (req, res) => {
  const messagesRepository = new MessageRepository();

  const createMessage = new CreateMessageService(messagesRepository);

  const { detail, subject } = req.body;

  const message = await createMessage.execute({ detail, subject });

  return res.json(message);
});

messagesRouter.put("/", async (req, res) => {
  const { message_id } = req.body;

  const messagesRepository = new MessageRepository();

  const updateMessage = new UpdateMessageService(messagesRepository);

  const updatedMessage = await updateMessage.execute(message_id);

  return res.json(updatedMessage);
});

export default messagesRouter;
