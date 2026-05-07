import { UserRepository } from '../domain/UserRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../domain/User';

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(userData: User): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password!, 10);
    const newUser = await this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });

    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  async login(email: string, passwordInput: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;
    
    const isPasswordValid = await bcrypt.compare(passwordInput, user.password!);
    if (!isPasswordValid) return null;

    const token = jwt.sign(
      { userId: user.id, email: user.email, firstName: user.firstName }, 
      process.env.JWT_SECRET || 'secret', 
      { expiresIn: '1d' }
    );
    return token;
  }
}
