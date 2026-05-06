import { Router } from 'express';
import { PropertyController } from '../controllers/PropertyController';
import { PrismaPropertyRepository } from '../../infrastructure/database/PrismaPropertyRepository';
import { PropertyService } from '../../application/PropertyService';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validate } from '../middlewares/validationMiddleware';
import { propertySchema, propertyUpdateSchema, propertyIdParamSchema } from '../middlewares/schemas';

export const propertyRouter = Router();

const repository = new PrismaPropertyRepository();
const service = new PropertyService(repository);
const controller = new PropertyController(service);

propertyRouter.get('/', controller.getAll);
propertyRouter.get('/:id', validate(propertyIdParamSchema), controller.getById);
propertyRouter.post('/', authMiddleware, validate(propertySchema), controller.create);
propertyRouter.put('/:id', authMiddleware, validate(propertyUpdateSchema), controller.update);
propertyRouter.delete('/:id', authMiddleware, validate(propertyIdParamSchema), controller.delete);
