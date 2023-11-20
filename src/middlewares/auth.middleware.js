import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError.js';
import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return next(new AppError('Não autorizado', 401));
  }

  try {
    const decodedToken = jwt.verify(token, 'secretjwt');

    const user = await userRepository.findUserById(decodedToken.userId);

    if (!user) {
      return next(new AppError('Não autorizado', 401));
    }

    const tokenExpirationTime = decodedToken.exp * 1000; 
    const currentTime = new Date().getTime();

    if (currentTime > tokenExpirationTime) {
      return next(new AppError('Sessão inválida', 401));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new AppError('Não autorizado', 401));
  }
}

export default authMiddleware;
