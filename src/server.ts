import 'reflect-metadata';
import { MongoRepository, getRepository } from 'typeorm';
import express, { request, response } from 'express';
import '../src/database';

import createUser from '../src/database/schemas/CreateUser';

const app = express();

app.use(express.json());
app.get('/', (request, response) => {
  console.log(request)
})

app.post('/create', async (request, response) => {
  const { 
    name,
    surname,
    state,
    city,
    district,
    street,
    number,
 
  } = request.body
  const ormUserRepository = getRepository(createUser)
  const use = await ormUserRepository.save({ 
    name,
    surname,
    state,
    city,
    district,
    street,
    number,
  })
  return response.status(200).json(use);
})


app.listen(3333, () => {
  console.log('Server stared on port 3333')
})