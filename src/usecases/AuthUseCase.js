import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository.js';
import AppError from '../errors/AppError.js';

class AuthUseCase {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signupUser({ nome, email, senha, telefones }) {
    if (await this.userRepository.findUserByEmail(email)) {
      throw new AppError('E-mail já existente', 400);
    }

    const user = await this.userRepository.createUser({ nome, email, senha, telefones });

    return {
      id: user.id,
      data_criacao: user.data_criacao,
      data_atualizacao: user.data_atualizacao,
      ultimo_login: user.ultimo_login,
      token: this.generateAuthToken(user.id),
    };
  }

  async signinUser({ email, senha }) {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      throw new AppError('Usuário e/ou senha inválidos', 401);
    }

    await this.userRepository.updateLastLogin(user.id);

    return {
      id: user.id,
      data_criacao: user.data_criacao,
      data_atualizacao: user.data_atualizacao,
      ultimo_login: new Date(),
      token: this.generateAuthToken(user.id),
    };
  }

  generateAuthToken(userId) {
    return jwt.sign({ userId }, 'secretjwt', { expiresIn: '30' });
  }
}

export default AuthUseCase;
