export default function errorHandlerMiddleware(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  const response = {
    mensagem: err.message,
  };

  res.status(statusCode).json(response);
}
