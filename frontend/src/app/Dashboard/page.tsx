'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Home, 
  MapPin, 
  Plus, 
  Search, 
  ChevronRight, 
  Filter,
  LogOut,
  Settings
} from 'lucide-react';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Apartamento de Lujo en El Poblado",
    price: 850000000,
    location: "Medellín, El Poblado",
    available: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Casa Moderna en Envigado",
    price: 1200000000,
    location: "Envigado, Loma de las Brujas",
    available: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Penthouse con Vista al Norte",
    price: 650000000,
    location: "Bello, Cabañas",
    available: false,
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Loft Industrial en Ciudad del Río",
    price: 450000000,
    location: "Medellín, Ciudad del Río",
    available: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Apartamento Campestre",
    price: 580000000,
    location: "Sabaneta, La Doctora",
    available: true,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Casa de Campo",
    price: 2100000000,
    location: "Rionegro, Llanogrande",
    available: true,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-bottom border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <Home size={28} strokeWidth={2.5} />
              <span>InmueblePro</span>
            </div>
            
            <nav className="hidden md:flex gap-8">
              <Link href="/dashboard" className="text-primary font-semibold border-b-2 border-primary h-16 flex items-center">Propiedades</Link>
              <Link href="#" className="text-gray-600 font-medium hover:text-primary h-16 flex items-center transition-colors">Clientes</Link>
              <Link href="#" className="text-gray-600 font-medium hover:text-primary h-16 flex items-center transition-colors">Reportes</Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-primary transition-colors"><Settings size={20} /></button>
              <div className="w-10 h-10 bg-primary-light text-primary-dark rounded-full flex items-center justify-center font-bold">JD</div>
              <Link href="/login" className="text-gray-500 hover:text-red-500 transition-colors"><LogOut size={20} /></Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Propiedades</h1>
              <p className="text-gray-500 text-lg">Administre y visualice todas sus propiedades activas.</p>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
              <Plus size={20} /> Nueva Propiedad
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6 mb-12 items-stretch lg:items-end">
            <div className="flex-[2] space-y-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Buscar</label>
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar por título o ubicación..." 
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Ubicación</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer">
                <option>Todas las ubicaciones</option>
                <option>El Poblado</option>
                <option>Envigado</option>
                <option>Sabaneta</option>
              </select>
            </div>
            <div className="flex-1 space-y-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Rango de Precio</label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer">
                <option>Cualquier precio</option>
                <option>Hasta $500M</option>
                <option>$500M - $1000M</option>
                <option>Más de $1000M</option>
              </select>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-md font-bold flex items-center justify-center gap-2 transition-colors">
              <Filter size={18} /> Filtrar
            </button>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROPERTIES.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={property.image} 
                    alt={property.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md bg-white/90 shadow-sm ${property.available ? 'text-emerald-600' : 'text-red-600'}`}>
                    {property.available ? 'Disponible' : 'Vendido'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <MapPin size={16} className="text-primary" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center pt-5 border-t border-gray-50">
                    <span className="text-2xl font-bold text-primary-dark">{formatPrice(property.price)}</span>
                    <button className="text-gray-600 font-bold flex items-center gap-1 hover:text-primary transition-colors group/btn">
                      Ver detalles <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">10</button>
          </div>
        </div>
      </main>
    </div>
  );
}
