export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  password?: string;
  createdAt?: Date;
}
