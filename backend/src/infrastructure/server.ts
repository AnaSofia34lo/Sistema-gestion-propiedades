import express from 'express';
import cors from 'cors';
import { propertyRouter } from '../interfaces/routes/propertyRoutes';
import { authRouter } from '../interfaces/routes/authRoutes';

const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

app.use('/api/v1/properties', propertyRouter);
app.use('/api/v1/auth', authRouter);

export { app };
