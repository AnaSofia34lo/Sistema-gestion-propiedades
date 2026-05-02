'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Lock, User, UserPlus, ShieldCheck, Home, Phone } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 max-w-[600px] bg-white">
        <div className="flex items-center gap-3 mb-8 font-bold text-2xl text-primary">
          <Home size={32} strokeWidth={2.5} />
          <span>InmueblePro</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Cree su cuenta</h1>
          <p className="text-gray-500">Únase a la plataforma líder en gestión inmobiliaria.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">Nombre</label>
              <div className="relative flex items-center">
                <User size={18} className="absolute left-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Juan" 
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">Apellido</label>
              <div className="relative flex items-center">
                <User size={18} className="absolute left-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Pérez" 
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">Correo Electrónico</label>
            <div className="relative flex items-center">
              <Mail size={18} className="absolute left-4 text-gray-400" />
              <input 
                type="email" 
                placeholder="nombre@empresa.com" 
                className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">Teléfono de contacto</label>
            <div className="relative flex items-center">
              <Phone size={18} className="absolute left-4 text-gray-400" />
              <input 
                type="tel" 
                placeholder="+57 300 000 0000" 
                className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">Contraseña</label>
              <div className="relative flex items-center">
                <Lock size={18} className="absolute left-4 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600">Confirmar</label>
              <div className="relative flex items-center">
                <Lock size={18} className="absolute left-4 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-600 mt-2">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-primary rounded" />
            <span>Acepto los términos de servicio y la política de privacidad de InmueblePro.</span>
          </label>

          <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg mt-4">
            Crear Cuenta <UserPlus size={20} />
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm">
          ¿Ya tiene una cuenta? <Link href="/login" className="text-primary-dark font-semibold hover:underline">Inicie sesión</Link>
        </p>
      </div>

      {/* Right Section - Image & Info */}
      <div className="hidden lg:block flex-[1.2] relative overflow-hidden">
        <Image 
          src="/login.png" 
          alt="Modern Architecture" 
          fill
          priority
          className="object-cover scale-x-[-1]"
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-16 text-white">
          <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-md inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            <ShieldCheck size={16} />
            Registro de Usuarios Autorizados
          </div>
          <h2 className="text-5xl font-bold leading-[1.1] mb-6">
            Transforme su manera de hacer negocios.
          </h2>
          <p className="text-xl opacity-90 max-w-lg">
            Al registrarse, obtendrá acceso a herramientas exclusivas de análisis 
            de mercado, gestión de clientes y reportes automatizados.
          </p>
        </div>
      </div>
    </div>
  );
}
