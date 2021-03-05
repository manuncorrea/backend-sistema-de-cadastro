import 'dotenv/config';

import express from 'express';
import routes from './routes'
import './database';

const app = express();

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('Sistema de cadastro de clientes server started');
});

