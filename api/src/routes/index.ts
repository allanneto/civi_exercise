import { Router } from 'express';

import messagesRouter from './messages.routes';

const routes = Router();

routes.use('/messages', messagesRouter);

export default routes;
