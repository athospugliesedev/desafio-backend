import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

class UserRepository {
  async createUser({ nome, email, senha, telefones }) {
    const hashedPassword = await bcrypt.hash(senha, 10);

    return prisma.user.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
        telefones: {
          create: telefones.map(({ numero, ddd }) => ({ numero, ddd })),
        },
      },
    });
  }

  async findUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
  }

  async updateLastLogin(userId) {
    return prisma.user.update({
      where: { id: userId },
      data: { ultimo_login: new Date() },
    });
  }
}

export default UserRepository;