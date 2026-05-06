import { Request, Response } from 'express';
import { AuthService } from '../../application/AuthService';

export class AuthController {
  constructor(private authService: AuthService) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const token = await this.authService.login(email, password);
      
      if (!token) return res.status(401).json({ error: 'Invalid credentials' });
      
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  register = async (req: Request, res: Response) => {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      if (error.message === 'User already exists') {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
