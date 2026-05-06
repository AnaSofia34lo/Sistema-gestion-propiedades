import { PropertyRepository, PropertyFilter, PaginatedResult } from '../../domain/PropertyRepository';
import { Property } from '../../domain/Property';
import { prisma } from './PrismaClient';
import { Prisma } from '../../../generated/prisma';

export class PrismaPropertyRepository implements PropertyRepository {
  async findAll(filter: PropertyFilter): Promise<PaginatedResult<Property>> {
    const page = filter.page || 1;
    const limit = filter.limit || 10;
    const skip = (page - 1) * limit;

    const where: Prisma.PropertyWhereInput = {};
    if (filter.location) {
      where.location = { contains: filter.location, mode: 'insensitive' };
    }
    if (filter.minPrice !== undefined) {
      where.price = { ...where.price as Prisma.FloatFilter, gte: filter.minPrice };
    }
    if (filter.maxPrice !== undefined) {
      where.price = { ...where.price as Prisma.FloatFilter, lte: filter.maxPrice };
    }

    const [data, total] = await Promise.all([
      prisma.property.findMany({ where, skip, take: limit }),
      prisma.property.count({ where }),
    ]);

    return { data, total, page, limit };
  }

  async findById(id: number): Promise<Property | null> {
    return prisma.property.findUnique({ where: { id } });
  }

  async create(property: Property): Promise<Property> {
    return prisma.property.create({ data: property as any });
  }

  async update(id: number, property: Partial<Property>): Promise<Property | null> {
    const exists = await prisma.property.findUnique({ where: { id } });
    if (!exists) return null;
    return prisma.property.update({ where: { id }, data: property as any });
  }

  async delete(id: number): Promise<boolean> {
    const exists = await prisma.property.findUnique({ where: { id } });
    if (!exists) return false;
    await prisma.property.delete({ where: { id } });
    return true;
  }
}
