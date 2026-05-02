'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Lock, ArrowRight, ShieldCheck, Home } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 max-w-[600px] bg-white">
        <div className="flex items-center gap-3 mb-12 font-bold text-2xl text-primary">
          <Home size={32} strokeWidth={2.5} />
          <span>InmueblePro</span>
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Bienvenido de nuevo</h1>
          <p className="text-gray-500 text-lg">Acceda a su panel de gestión inmobiliaria.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">
              Correo Electrónico
            </label>
            <div className="relative flex items-center">
              <Mail size={18} className="absolute left-4 text-gray-400" />
              <input 
                type="email" 
                placeholder="nombre@inmueblepro.com" 
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">
                Contraseña
              </label>
              <Link href="#" className="text-sm font-medium text-primary-dark hover:underline">
                ¿Olvidó su contraseña?
              </Link>
            </div>
            <div className="relative flex items-center">
              <Lock size={18} className="absolute left-4 text-gray-400" />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
              <span>Recordar sesión en este equipo</span>
            </label>
          </div>

          <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
            Iniciar Sesión <ArrowRight size={20} />
          </button>
        </form>

        <p className="mt-12 text-center text-gray-500 text-sm">
          ¿No tiene una cuenta? <Link href="/register" className="text-primary-dark font-semibold hover:underline">Regístrese aquí</Link>
        </p>
      </div>

      {/* Right Section - Image & Info */}
      <div className="hidden lg:block flex-[1.2] relative overflow-hidden">
        <Image 
          src="/login.png" 
          alt="Modern House" 
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-16 text-white">
          <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-md inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            <ShieldCheck size={16} />
            Portal Administrativo Seguro
          </div>
          <h2 className="text-5xl font-bold leading-[1.1] mb-6">
            Gestione su cartera con precisión quirúrgica.
          </h2>
          <p className="text-xl opacity-90 max-w-lg mb-12">
            Visualice rendimientos, controle la ocupación y optimice sus activos 
            en tiempo real con la tecnología más avanzada del sector.
          </p>

          <div className="flex gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex-1">
              <span className="block text-3xl font-bold">98.4%</span>
              <span className="text-sm opacity-80">Tasa de Ocupación</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex-1">
              <span className="block text-3xl font-bold">+12.5%</span>
              <span className="text-sm opacity-80">Rendimiento Anual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
