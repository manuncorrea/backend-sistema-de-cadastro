import { Router, Request, Response } from 'express';
import User from '../models/User';

import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';

const usersRoutes = Router();

//Listando todos Clientes cadastrados
usersRoutes.get('/', async(request: Request, response: Response) => {
  const users = await User.find()

  return response.status(200).json({ users });
});

//Listando apenas um cliente cadastrado
usersRoutes.get('/:_id', async(request: Request, response: Response) => {
  const {_id} = request.params
  const users = await User.findOne({ _id });

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

//Deletando rotas
usersRoutes.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params

  try {
    const deleteUser = new DeleteUserService()

    await deleteUser.execute({ id })

    return response.status(200).json();
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

//Update de cliente no banco de dados
usersRoutes.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params
  const { firstName, lastName, address, phone } = request.body;

  try {
    const updateUser = new UpdateUserService()

    const user = await updateUser.execute({ id, firstName, lastName, address, phone })

    return response.status(200).json({ user });
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
});


export default usersRoutes;
