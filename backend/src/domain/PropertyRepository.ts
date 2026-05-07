import { Property } from './Property';

export interface PropertyFilter {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface PropertyRepository {
  findAll(filter: PropertyFilter): Promise<PaginatedResult<Property>>;
  findById(id: number): Promise<Property | null>;
  create(property: Property): Promise<Property>;
  update(id: number, property: Partial<Property>): Promise<Property | null>;
  delete(id: number): Promise<boolean>;
}
