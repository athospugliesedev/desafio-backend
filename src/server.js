import express from 'express';
import bodyParser from 'body-parser';
import AppError from './errors/AppError.js';
import router from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/', router);

app.use((req, res, next) => {
  const error = new AppError('Rota não encontrada', 404);
  next(error);
});

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      mensagem: err.message,
    });
  } else {
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Erro interno do servidor',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app;