import { Router, Request, Response } from 'express';
import User from '../models/User';

import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();

//Listando Clientes cadastrados
usersRoutes.get('/', async(request: Request, response: Response) => {
  const users = await User.find()

  return response.status(200).json({ users });
});

//Criando cliente no banco de dados
usersRoutes.post('/create', async(request: Request, response: Response) => {
  const { firstName, lastName, address, phone } = request.body;

  try {
    const createUser = new CreateUserService()

    const user = await createUser.execute({ firstName, lastName, address, phone })

    return response.status(200).json({ user });
  } catch ( err ) {
    return response.status(400).json({ error: err.message })
  }
});

export default usersRoutes;