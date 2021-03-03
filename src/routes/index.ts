import { Router } from 'express';
import cors from 'cors';

import usersRouter from './user.routes';

const routes = Router();

routes.use(cors({}));

routes.use('/users', usersRouter);

export default routes;