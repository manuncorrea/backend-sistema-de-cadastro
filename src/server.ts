import express from 'express';
import './database';

const app = express();

app.use(express.json())
app.listen(process.env.PORT || 3333, () => {
  console.log('Sistema de Cadastro, server started')
});