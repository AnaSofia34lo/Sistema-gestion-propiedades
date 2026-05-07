import { Property } from '../domain/Property';
import { PropertyRepository, PropertyFilter, PaginatedResult } from '../domain/PropertyRepository';

export class PropertyService {
  constructor(private propertyRepository: PropertyRepository) {}

  async getAllProperties(filter: PropertyFilter): Promise<PaginatedResult<Property>> {
    return this.propertyRepository.findAll(filter);
  }

  async getPropertyById(id: number): Promise<Property | null> {
    return this.propertyRepository.findById(id);
  }

  async createProperty(property: Property): Promise<Property> {
    return this.propertyRepository.create(property);
  }

  async updateProperty(id: number, property: Partial<Property>): Promise<Property | null> {
    return this.propertyRepository.update(id, property);
  }

  async deleteProperty(id: number): Promise<boolean> {
    return this.propertyRepository.delete(id);
  }
}
