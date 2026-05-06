import { Request, Response } from 'express';
import { PropertyService } from '../../application/PropertyService';

export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  getAll = async (req: Request, res: Response) => {
    try {
      const filter = {
        location: req.query.location as string,
        minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
        maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
        page: req.query.page ? Number(req.query.page) : 1,
        limit: req.query.limit ? Number(req.query.limit) : 5,
      };
      const result = await this.propertyService.getAllProperties(filter);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  getById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const property = await this.propertyService.getPropertyById(id);
      if (!property) return res.status(404).json({ error: 'Property not found' });
      res.json(property);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const property = await this.propertyService.createProperty(req.body);
      res.status(201).json(property);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const property = await this.propertyService.updateProperty(id, req.body);
      if (!property) return res.status(404).json({ error: 'Property not found' });
      res.json(property);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const deleted = await this.propertyService.deleteProperty(id);
      if (!deleted) return res.status(404).json({ error: 'Property not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
