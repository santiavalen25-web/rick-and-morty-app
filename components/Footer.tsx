import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10 mt-16 mb-14 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">Bandas & Soluciones</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Suministro, empalme, vulcanizado y mantenimiento preventivo y correctivo de bandas transportadoras y componentes mecánicos industriales.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
            Navegación Rápida (Tabs)
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-emerald-400">🏠 Inicio y Presentación</Link></li>
            <li><Link href="/characters" className="hover:text-emerald-400">⚙️ Catálogo de Bandas y Rodillos</Link></li>
            <li><Link href="/episodes" className="hover:text-emerald-400">📸 Cotizador Técnico + Calculadora</Link></li>
            <li><Link href="/favorites" className="hover:text-emerald-400">⭐ Guardados Offline y Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
            Cobertura e Ingeniería
          </h4>
          <p className="text-sm">📍 Sabana de Bogotá (Funza, Mosquera, Madrid, Cota, Tocancipá) y Despachos Nacionales.</p>
          <p className="text-sm mt-2 text-emerald-400 font-semibold">⚡ Atención de Emergencias en Planta 24/7</p>
          <p className="text-xs text-slate-500 mt-4">
            B&S Digital Connect • Desarrollado por Santiago Hernández Valencia (UCompensar)
          </p>
        </div>
      </div>
    </footer>
  );
}
