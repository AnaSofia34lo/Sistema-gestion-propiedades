import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { PrismaUserRepository } from '../../infrastructure/database/PrismaUserRepository';
import { AuthService } from '../../application/AuthService';
import { validate } from '../middlewares/validationMiddleware';
import { loginSchema, registerSchema } from '../middlewares/schemas';

export const authRouter = Router();

const repository = new PrismaUserRepository();
const service = new AuthService(repository);
const controller = new AuthController(service);

authRouter.post('/login', validate(loginSchema), controller.login);
authRouter.post('/register', validate(registerSchema), controller.register);
