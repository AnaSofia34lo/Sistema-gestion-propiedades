import { UserRepository } from '../../domain/UserRepository';
import { User } from '../../domain/User';
import { prisma } from './PrismaClient';

export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async create(user: User): Promise<User> {
    return prisma.user.create({ 
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: user.password!,
      } 
    });
  }
}
