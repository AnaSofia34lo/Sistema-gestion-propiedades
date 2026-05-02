import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InmueblePro | Gestión Inmobiliaria",
  description: "Plataforma avanzada para la gestión de propiedades y activos inmobiliarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
