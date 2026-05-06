import { z } from 'zod';

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }),
});

export const registerSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().optional(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }),
});

export const propertySchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    price: z.number(),
    location: z.string().min(1, 'Location is required'),
    available: z.boolean().optional(),
  }),
});

export const propertyUpdateSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/).transform(Number),
  }),
  body: z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    location: z.string().optional(),
    available: z.boolean().optional(),
  }),
});

export const propertyIdParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/).transform(Number),
  }),
});
