import type { Metadata } from "next";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "B&S Digital Connect | Bandas & Soluciones",
  description:
    "Plataforma Híbrida Corporativa, Catálogo de Bandas Transportadoras y Cotizador Técnico Industrial para Bandas & Soluciones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
            {children}
          </main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
