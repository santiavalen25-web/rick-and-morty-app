const fs = require("fs");
const path = require("path");

const baseDir = fs.existsSync(path.join(__dirname, "rick-and-morty-app"))
  ? path.join(__dirname, "rick-and-morty-app")
  : __dirname;

const files = {
  "types/index.ts": `export interface IndustrialItem {
  id: number;
  name: string;
  category: "Bandas PVC / PU" | "Bandas de Caucho" | "Bandas Modulares" | "Rodillos y Accesorios" | "Servicios en Planta";
  industry: string;
  status: "Disponible en Stock" | "Fabricación a Medida" | "Servicio 24/7";
  thickness: string;
  tempRange: string;
  spliceType: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  clientSector: string;
  location: string;
  solution: string;
  resultMetric: string;
}
`,

  "services/api.ts": `import { IndustrialItem, CaseStudy } from "@/types";

export const INDUSTRIAL_CATALOG: IndustrialItem[] = [
  {
    id: 1,
    name: "Banda Sanitaria en PVC Blanca / Verde (2 y 3 Lonas)",
    category: "Bandas PVC / PU",
    industry: "Alimentos y Farmacéutica",
    status: "Disponible en Stock",
    thickness: "2.0 mm a 4.5 mm",
    tempRange: "-10 °C a +80 °C",
    spliceType: "Vulcanizado en caliente (Z) o Grapa inoxidable",
    description: "Banda transportadora con recubrimiento en PVC atóxico y antiestático, resistente a grasas animales, aceites vegetales y agentes de limpieza industrial.",
    features: ["Certificación grado alimenticio FDA", "Trama rígida transversal para estabilidad", "Instalación de perfiles guía y empujadores"],
    icon: "🛡️"
  },
  {
    id: 2,
    name: "Banda de Poliuretano (PU) de Alta Inocuidad",
    category: "Bandas PVC / PU",
    industry: "Alimentos y Farmacéutica",
    status: "Fabricación a Medida",
    thickness: "1.2 mm a 2.5 mm",
    tempRange: "-20 °C a +90 °C",
    spliceType: "Termofusión sin fin en sitio",
    description: "Diseñada para contacto directo con alimentos sin empaque (panadería, cárnicos, lácteos y confitería). Alta flexibilidad para trabajar en rodillos de diámetro reducido.",
    features: ["Máxima resistencia a cortes y abrasión", "Superficie lisa o grabada antiadherente", "Fácil higienización y desinfección"],
    icon: "✨"
  },
  {
    id: 3,
    name: "Banda de Caucho con Lona EP-400 / EP-500 Trabajo Pesado",
    category: "Bandas de Caucho",
    industry: "Canteras y Minería",
    status: "Disponible en Stock",
    thickness: "8.0 mm a 14.0 mm (3 y 4 lonas)",
    tempRange: "-25 °C a +110 °C",
    spliceType: "Vulcanizado en caliente / Frío o Grapa Alligator",
    description: "Banda de caucho negro de alta resistencia al impacto, abrasión severa e intemperie. Ideal para trituradoras, cementeras, ladrilleras y manejo de graneles pesados.",
    features: ["Carcasa textil de poliéster-nylon (EP)", "Bordes moldeados contra humedad", "Disponible en versión lisa o nervada (Chevron)"],
    icon: "⚙️"
  },
  {
    id: 4,
    name: "Banda Modular Plástica en Polipropileno / Acetal",
    category: "Bandas Modulares",
    industry: "Embotelladoras y Logística",
    status: "Fabricación a Medida",
    thickness: "Paso 1/2 pulg, 1 pulg y 2 pulg",
    tempRange: "-40 °C a +105 °C",
    spliceType: "Pasador plástico articulado con piñones de tracción",
    description: "Sistema de eslabones plásticos ensamblados para líneas de lavado, túneles de enfriamiento, pasteurizado y transporte curvo o recto sin deslizamiento.",
    features: ["Reparación rápida cambiando solo módulos dañados", "Superficie abierta (drenaje) o cerrada", "Tracción positiva mediante sprockets"],
    icon: "🔗"
  },
  {
    id: 5,
    name: "Rodillos de Carga, Impacto y Tambores Motrices",
    category: "Rodillos y Accesorios",
    industry: "Logística y Centros de Distribución",
    status: "Fabricación a Medida",
    thickness: "Diámetros desde 2 pulg hasta 6 pulg",
    tempRange: "Ambiente industrial pesado",
    spliceType: "Montaje en eje con rodamientos sellados",
    description: "Fabricación de rodillos metálicos en acero al carbono, galvanizados e inoxidables, además de tambores motrices con recubrimiento cerámico o en caucho ranurado.",
    features: ["Rodamientos protegidos contra polvo y agua", "Anillos amortiguadores para zonas de impacto", "Balanceo dinámico garantizado"],
    icon: "🔩"
  },
  {
    id: 6,
    name: "Grapas Mecánicas y Empalmes Metálicos de Emergencia",
    category: "Rodillos y Accesorios",
    industry: "Todas las Industrias",
    status: "Disponible en Stock",
    thickness: "Para bandas de 1.5 mm a 15 mm",
    tempRange: "Hasta +150 °C",
    spliceType: "Instalación mecánica rápida con pasador de acero",
    description: "Suministro e instalación de grapas metálicas en acero galvanizado e inoxidable (tipo Clipper, Alligator y bisagra) para reparaciones inmediatas en planta.",
    features: ["Reduce el tiempo de parada de línea al mínimo", "Pasadores recubiertos en nylon o acero", "Ideal para tener como repuesto en bodega"],
    icon: "🛠️"
  },
  {
    id: 7,
    name: "Servicio de Vulcanizado en Caliente y en Frío en Planta 24/7",
    category: "Servicios en Planta",
    industry: "Todas las Industrias",
    status: "Servicio 24/7",
    thickness: "Prensas para anchos desde 300 mm hasta 2000 mm",
    tempRange: "Prensado térmico controlado",
    spliceType: "Empalme continuo de alta resistencia mecánica",
    description: "Cuadrilla técnica móvil desplazada directamente a tu fábrica para realizar empalmes vulcanizados en caliente con prensa térmica o vulcanizado químico en frío.",
    features: ["Atención de emergencias por rotura de banda 24/7", "Garantía de alineación y tensión en línea", "Cobertura en Sabana de Bogotá y nivel nacional"],
    icon: "🔥"
  },
  {
    id: 8,
    name: "Mantenimiento Preventivo, Alineación y Engomado de Poleas",
    category: "Servicios en Planta",
    industry: "Logística y Manufactura",
    status: "Servicio 24/7",
    thickness: "Recubrimiento en caucho liso o diamantado (6 mm - 12 mm)",
    tempRange: "Operación continua",
    spliceType: "Vulcanizado de recubrimiento sobre tambor",
    description: "Diagnóstico integral de transportadores: corrección de desalineación de bandas, cambio de rodamientos, ajuste de raspadores, tensado y recubrimiento de tambores.",
    features: ["Previene paradas inesperadas de producción", "Aumenta la tracción del tambor motriz", "Informe técnico fotográfico para auditorías"],
    icon: "🔧"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Empalme de Emergencia en Línea de Panificación Industrial",
    clientSector: "Planta de Alimentos (Mosquera, Cundinamarca)",
    location: "Sabana de Bogotá",
    solution: "Sustitución y termofusión en sitio de banda de Poliuretano (PU) de 1200 mm de ancho en turno nocturno.",
    resultMetric: "Línea reactivada en 3.5 horas con certificación sanitaria"
  },
  {
    id: 2,
    title: "Modernización de Transportador de Cajas en Centro Logístico",
    clientSector: "Operador Logístico Nacional (Funza, Cundinamarca)",
    location: "Parque Industrial San Carlos",
    solution: "Instalación de banda PVC con perfil rugoso (Grip) para subida inclinada a 28° y cambio de 45 rodillos de carga.",
    resultMetric: "+35% en velocidad de despacho y cero deslizamiento"
  },
  {
    id: 3,
    title: "Vulcanizado de Banda EP-400 y Recubrimiento de Tambor Motriz",
    clientSector: "Planta de Agregados y Trituración (Tocancipá)",
    location: "Norte de la Sabana",
    solution: "Empalme vulcanizado de 4 lonas y recubrimiento en caucho diamantado de 10 mm para evitar patinaje.",
    resultMetric: "Reducción del 60% en paradas correctivas mensuales"
  }
];

export function getCatalogItems(search = "", category = "", industry = ""): IndustrialItem[] {
  return INDUSTRIAL_CATALOG.filter((item) => {
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || item.category === category;
    const matchesIndustry = !industry || item.industry.toLowerCase().includes(industry.toLowerCase());
    return matchesSearch && matchesCategory && matchesIndustry;
  });
}

export function getCatalogItemById(id: number): IndustrialItem | undefined {
  return INDUSTRIAL_CATALOG.find((item) => item.id === id);
}
`,

  "context/FavoritesContext.tsx": `"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IndustrialItem } from "@/types";

interface FavoritesContextType {
  favorites: IndustrialItem[];
  addFavorite: (item: IndustrialItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
const STORAGE_KEY = "bs_digital_connect_favorites_v1";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<IndustrialItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch (error) {
      console.error("Error leyendo almacenamiento local:", error);
    }
  }, []);

  const saveToStorage = (items: IndustrialItem[]) => {
    setFavorites(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(40);
      }
    } catch (error) {
      console.error("Error guardando en almacenamiento local:", error);
    }
  };

  const addFavorite = (item: IndustrialItem) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      saveToStorage([...favorites, item]);
    }
  };

  const removeFavorite = (id: number) => {
    saveToStorage(favorites.filter((item) => item.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((item) => item.id === id);
  const clearFavorites = () => saveToStorage([]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
  return context;
}
`,

  "components/Navbar.tsx": `"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

export const WHATSAPP_NUMBER = "573200000000";

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const [osPlatform, setOsPlatform] = useState<string>("Detectando SO...");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) setOsPlatform("Android OS");
      else if (/iPad|iPhone|iPod/.test(ua)) setOsPlatform("Apple iOS");
      else if (/Win/.test(ua)) setOsPlatform("Windows Desktop");
      else if (/Mac/.test(ua)) setOsPlatform("macOS");
      else setOsPlatform("Linux / Web");
    }
  }, []);

  const triggerEmergencyLineStop = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate([120, 60, 120]);
    }
    const msg = encodeURIComponent(
      "🚨 *URGENTE - PARADA DE LÍNEA EN PLANTA* 🚨\\nHola Bandas & Soluciones, tenemos una banda transportadora detenida y requerimos asistencia técnica prioritaria."
    );
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
  };

  const navTabs = [
    { href: "/", label: "Inicio", icon: "🏠" },
    { href: "/characters", label: "Catálogo", icon: "⚙️" },
    { href: "/episodes", label: "Cotizador", icon: "📸" },
    { href: "/favorites", label: "Guardados", icon: "⭐", badge: favorites.length },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xl font-bold text-emerald-400">
              B&S
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                BANDAS & SOLUCIONES
              </span>
              <span className="text-xs text-sky-400 font-medium">
                B&S Digital Connect • {osPlatform}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navTabs.map((tab) => {
              const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={
                    "px-4 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2 " +
                    (active
                      ? "bg-emerald-500 text-slate-950 shadow-md"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white")
                  }
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-sky-500 text-slate-950 font-bold">
                      {tab.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={triggerEmergencyLineStop}
            className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transition cursor-pointer"
          >
            <span>🚨</span>
            <span>Parada de Línea 24/7</span>
          </button>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur border-t border-slate-800 px-2 py-2 flex justify-around items-center">
        {navTabs.map((tab) => {
          const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={
                "flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-semibold relative " +
                (active ? "text-emerald-400" : "text-slate-400")
              }
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="absolute -top-1 right-1 px-1.5 text-[10px] rounded-full bg-sky-400 text-slate-950 font-extrabold">
                  {tab.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
`,

  "components/Footer.tsx": `import React from "react";
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
`,

  "components/CharacterCard.tsx": `"use client";

import React from "react";
import Link from "next/link";
import { IndustrialItem } from "@/types";
import { useFavorites } from "@/context/FavoritesContext";
import { WHATSAPP_NUMBER } from "./Navbar";

export default function CharacterCard({ character }: { character: IndustrialItem }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(character.id);

  const toggleFav = () => {
    if (fav) removeFavorite(character.id);
    else addFavorite(character);
  };

  const quoteViaWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hola *Bandas & Soluciones*, me interesa cotizar el siguiente ítem del catálogo:\\n\\n• *Producto/Servicio:* " +
        character.name +
        "\\n• *Categoría:* " +
        character.category +
        "\\n• *Aplicación:* " +
        character.industry +
        "\\n\\nQuedo atento a su asesoría técnica."
    );
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-5 flex flex-col justify-between transition shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
            {character.category}
          </span>
          <button
            onClick={toggleFav}
            className={
              "px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer " +
              (fav
                ? "bg-amber-500/20 border-amber-400 text-amber-300"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500")
            }
          >
            {fav ? "⭐ Guardado" : "☆ Guardar"}
          </button>
        </div>

        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl shrink-0">
            {character.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-snug">{character.name}</h3>
            <p className="text-xs text-emerald-400 font-semibold mt-0.5">
              🏭 Sector: {character.industry}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-4 line-clamp-3">{character.description}</p>

        <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5 mb-4">
          <div className="flex justify-between">
            <span className="text-slate-400">Espesor / Medida:</span>
            <span className="text-slate-200 font-semibold">{character.thickness}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Empalme:</span>
            <span className="text-slate-200 font-semibold truncate max-w-[180px]">{character.spliceType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Disponibilidad:</span>
            <span className="text-emerald-400 font-bold">{character.status}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
        <Link
          href={"/characters/" + character.id}
          className="text-center py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
        >
          📄 Ver Ficha Técnica
        </Link>
        <button
          onClick={quoteViaWhatsApp}
          className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition cursor-pointer"
        >
          💬 Cotizar Ahora
        </button>
      </div>
    </div>
  );
}
`,

  "components/SearchFilters.tsx": `"use client";

import React from "react";

interface SearchFiltersProps {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  industry: string;
  setIndustry: (v: string) => void;
}

export default function SearchFilters({
  search,
  setSearch,
  category,
  setCategory,
  industry,
  setIndustry,
}: SearchFiltersProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">
          Buscar Banda, Rodillo o Servicio
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ej. PVC, Caucho EP-400, Vulcanizado, Rodillos..."
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">
          Categoría Técnica
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
        >
          <option value="">Todas las Categorías</option>
          <option value="Bandas PVC / PU">Bandas Sanitarias PVC / PU</option>
          <option value="Bandas de Caucho">Bandas de Caucho Trabajo Pesado</option>
          <option value="Bandas Modulares">Bandas Modulares Plásticas</option>
          <option value="Rodillos y Accesorios">Rodillos, Poleas y Grapas</option>
          <option value="Servicios en Planta">Vulcanizado y Mantenimiento 24/7</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">
          Sector Industrial
        </label>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
        >
          <option value="">Todas las Industrias</option>
          <option value="Alimentos">Alimentos y Farmacéutica</option>
          <option value="Logística">Logística y Embotelladoras</option>
          <option value="Canteras">Canteras y Minería</option>
          <option value="Todas">Servicios Multi-Industria</option>
        </select>
      </div>
    </div>
  );
}
`,

  "components/EpisodeCard.tsx": `import React from "react";
import { CaseStudy } from "@/types";

export default function EpisodeCard({ episode }: { episode: CaseStudy }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <span className="text-xs font-bold text-emerald-400 uppercase">{episode.clientSector}</span>
      <h3 className="text-base font-bold text-white mt-1">{episode.title}</h3>
      <p className="text-sm text-slate-300 mt-2">{episode.solution}</p>
      <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
        <span className="text-slate-400">📍 {episode.location}</span>
        <span className="text-sky-400 font-bold">🏆 {episode.resultMetric}</span>
      </div>
    </div>
  );
}
`,

  "components/Pagination.tsx": `import React from "react";
export default function Pagination() {
  return null;
}
`,

  "app/layout.tsx": `import type { Metadata } from "next";
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
`,

  "app/page.tsx": `import React from "react";
import Link from "next/link";
import { INDUSTRIAL_CATALOG, CASE_STUDIES } from "@/services/api";
import CharacterCard from "@/components/CharacterCard";
import EpisodeCard from "@/components/EpisodeCard";

export default function HomePage() {
  const featuredItems = INDUSTRIAL_CATALOG.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/60 border border-slate-800 p-8 md:p-12 shadow-2xl">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            ⚡ INGENIERÍA EN MOVIMIENTO CONTINUO • ATENCIÓN 24/7
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Soluciones en Bandas Transportadoras y Mantenimiento Industrial
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            En <strong className="text-white">Bandas & Soluciones</strong> suministramos, empalmamos y reparamos bandas transportadoras en PVC, poliuretano, modulares y caucho pesado. Conectamos tu planta industrial directamente con nuestro equipo técnico sin demoras.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/episodes"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg transition"
            >
              📸 Abrir Cotizador Técnico + GPS
            </Link>
            <Link
              href="/characters"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
            >
              ⚙️ Explorar Catálogo de Materiales
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <p className="text-2xl font-extrabold text-emerald-400">24/7</p>
            <p className="text-xs text-slate-400 mt-1">Soporte en Paradas de Línea</p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <p className="text-2xl font-extrabold text-sky-400">-60%</p>
            <p className="text-xs text-slate-400 mt-1">Tiempo de Respuesta en Cotización</p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <p className="text-2xl font-extrabold text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Bandas a Medida (PVC, PU, Caucho)</p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <p className="text-2xl font-extrabold text-sky-400">In Situ</p>
            <p className="text-xs text-slate-400 mt-1">Vulcanizado en Caliente y Frío</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">🏭 Sectores Industriales que Atendemos</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          {[
            { icon: "🥖", name: "Alimentos y Panificación" },
            { icon: "📦", name: "Logística y Bodegas" },
            { icon: "💊", name: "Farmacéutica y Química" },
            { icon: "🍾", name: "Embotelladoras y Bebidas" },
            { icon: "🪨", name: "Canteras y Trituración" },
          ].map((sec) => (
            <div key={sec.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <div className="text-2xl mb-1">{sec.icon}</div>
              <p className="text-xs font-bold text-slate-200">{sec.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-white">⚙️ Transportadores, Materiales y Servicios Destacados</h2>
            <p className="text-sm text-slate-400">Guarda tus materiales de interés o solicita cotización inmediata</p>
          </div>
          <Link href="/characters" className="text-sm font-bold text-emerald-400 hover:underline">
            Ver catálogo completo →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-2">🏆 Muro de Casos de Éxito y Montajes Reales</h2>
        <p className="text-sm text-slate-400 mb-5">
          Intervenciones técnicas ejecutadas por Bandas & Soluciones en plantas industriales aliadas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <EpisodeCard key={cs.id} episode={cs} />
          ))}
        </div>
      </section>
    </div>
  );
}
`,

  "app/characters/page.tsx": `"use client";

import React, { useState } from "react";
import { getCatalogItems } from "@/services/api";
import CharacterCard from "@/components/CharacterCard";
import SearchFilters from "@/components/SearchFilters";

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [industry, setIndustry] = useState("");

  const items = getCatalogItems(search, category, industry);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-white">
          ⚙️ Catálogo Técnico de Bandas Transportadoras y Servicios
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Filtra por tipo de banda, material constructivo o sector industrial. Marca elementos en ⭐ Guardados para consultarlos sin conexión en planta.
        </p>
      </div>

      <SearchFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        industry={industry}
        setIndustry={setIndustry}
      />

      {items.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
          <p className="text-lg font-bold text-white">No se encontraron materiales con ese filtro</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("");
              setIndustry("");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      )}
    </div>
  );
}
`,

  "app/characters/[id]/page.tsx": `"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCatalogItemById } from "@/services/api";
import { useFavorites } from "@/context/FavoritesContext";
import { WHATSAPP_NUMBER } from "@/components/Navbar";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const item = getCatalogItemById(id);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  if (!item) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
        <h2 className="text-xl font-bold text-white">Especificación no encontrada</h2>
        <Link href="/characters" className="text-emerald-400 underline text-sm mt-3 inline-block">
          Volver al catálogo técnico
        </Link>
      </div>
    );
  }

  const fav = isFavorite(item.id);

  const sendDirectQuote = () => {
    const msg = encodeURIComponent(
      "Hola *Bandas & Soluciones*, solicito cotización técnica formal de:\\n• *Ítem:* " +
        item.name +
        "\\n• *Categoría:* " +
        item.category +
        "\\n• *Espesor/Medida:* " +
        item.thickness +
        "\\n• *Tipo de Empalme:* " +
        item.spliceType
    );
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">
      <Link href="/characters" className="text-xs font-bold text-sky-400 hover:underline">
        ← Volver al Catálogo de Materiales
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-4xl">
            {item.icon}
          </div>
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {item.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-2">{item.name}</h1>
          </div>
        </div>

        <button
          onClick={() => (fav ? removeFavorite(item.id) : addFavorite(item))}
          className={
            "px-4 py-2.5 rounded-xl text-xs font-bold border cursor-pointer " +
            (fav
              ? "bg-amber-500/20 border-amber-400 text-amber-300"
              : "bg-slate-800 border-slate-700 text-slate-200")
          }
        >
          {fav ? "⭐ Guardado en Planta" : "☆ Guardar en Favoritos"}
        </button>
      </div>

      <p className="text-slate-300 text-base leading-relaxed mt-6">{item.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block">Industria Recomendada</span>
          <span className="text-sm font-bold text-white">{item.industry}</span>
        </div>
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block">Espesor / Dimensiones</span>
          <span className="text-sm font-bold text-sky-400">{item.thickness}</span>
        </div>
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block">Rango de Temperatura</span>
          <span className="text-sm font-bold text-white">{item.tempRange}</span>
        </div>
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block">Método de Empalme</span>
          <span className="text-sm font-bold text-emerald-400">{item.spliceType}</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
          Características Técnicas y Ventajas Operativas
        </h3>
        <ul className="space-y-2">
          {item.features.map((f, i) => (
            <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
              <span className="text-emerald-400">✔</span> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
        <button
          onClick={sendDirectQuote}
          className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm cursor-pointer"
        >
          💬 Cotizar este Material por WhatsApp
        </button>
        <Link
          href="/episodes"
          className="py-3.5 px-6 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 font-bold text-sm text-center"
        >
          📸 Ir al Cotizador con Foto y GPS
        </Link>
      </div>
    </div>
  );
}
`,

  "app/episodes/page.tsx": `"use client";

import React, { useState, useEffect } from "react";
import { WHATSAPP_NUMBER } from "@/components/Navbar";

const DRAFT_STORAGE_KEY = "bs_quote_draft_v1";

export default function QuoterAndCalculatorPage() {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [serviceType, setServiceType] = useState("Suministro de Banda a Medida");
  const [beltMaterial, setBeltMaterial] = useState("Banda Sanitaria PVC / PU");
  const [dimensions, setDimensions] = useState("");
  const [urgency, setUrgency] = useState("Cotización Programada");
  const [notes, setNotes] = useState("");

  const [photoName, setPhotoName] = useState<string>("");
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [gpsCoords, setGpsCoords] = useState<string>("");
  const [gpsStatus, setGpsStatus] = useState<string>("Sin capturar aún");
  const [statusMessage, setStatusMessage] = useState<string>("Borrador sincronizado localmente (Modo Offline Activo)");

  const [centerDistance, setCenterDistance] = useState<string>("4.5");
  const [drumDiameter, setDrumDiameter] = useState<string>("250");
  const [beltWidth, setBeltWidth] = useState<string>("600");

  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        setCompanyName(parsed.companyName || "");
        setContactPerson(parsed.contactPerson || "");
        setServiceType(parsed.serviceType || "Suministro de Banda a Medida");
        setBeltMaterial(parsed.beltMaterial || "Banda Sanitaria PVC / PU");
        setDimensions(parsed.dimensions || "");
        setUrgency(parsed.urgency || "Cotización Programada");
        setNotes(parsed.notes || "");
        setGpsCoords(parsed.gpsCoords || "");
      }
    } catch (e) {
      console.error("Error cargando borrador local", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({
          companyName,
          contactPerson,
          serviceType,
          beltMaterial,
          dimensions,
          urgency,
          notes,
          gpsCoords,
        })
      );
    } catch (e) {
      console.error("Error guardando borrador", e);
    }
  }, [companyName, contactPerson, serviceType, beltMaterial, dimensions, urgency, notes, gpsCoords]);

  const handlePhotoCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
      setStatusMessage("📷 Evidencia fotográfica cargada: " + file.name);
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(50);
      }
    };
    reader.readAsDataURL(file);
  };

  const capturePlantGPS = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setGpsStatus("GPS no soportado en este navegador");
      return;
    }
    setGpsStatus("Obteniendo coordenadas satelitales...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        const mapsUrl = "https://maps.google.com/?q=" + lat + "," + lng;
        setGpsCoords(lat + ", " + lng + " (" + mapsUrl + ")");
        setGpsStatus("✅ Ubicación capturada: " + lat + ", " + lng);
        setStatusMessage("📍 Coordenadas GPS de la planta adjuntadas al reporte");
        if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
      },
      () => {
        setGpsStatus("⚠️ Permiso denegado o señal baja. Ingresa municipio en observaciones.");
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const cMeters = parseFloat(centerDistance) || 0;
  const dMeters = (parseFloat(drumDiameter) || 0) / 1000;
  const totalDevelopmentLength = (2 * cMeters + Math.PI * dMeters).toFixed(2);
  const recommendedSplice =
    parseFloat(drumDiameter) < 120
      ? "Termofusión / Vulcanizado sin fin (Tambor pequeño)"
      : "Vulcanizado en Caliente o Grapa Mecánica Inoxidable";

  const applyCalculationToQuote = () => {
    const calcText =
      "Desarrollo Total: " +
      totalDevelopmentLength +
      " m x Ancho: " +
      beltWidth +
      " mm (Tambor: " +
      drumDiameter +
      " mm)";
    setDimensions(calcText);
    setStatusMessage("📐 Medidas transferidas de la calculadora al formulario de cotización");
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(40);
  };

  const sendStructuredReportToWhatsApp = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate([80, 50, 120]);
    }
    const text =
      "🛠️ *SOLICITUD TÉCNICA - B&S DIGITAL CONNECT*\\n" +
      "• *Empresa:* " + (companyName || "Por confirmar") + "\\n" +
      "• *Contacto:* " + (contactPerson || "Ingeniero de Planta") + "\\n" +
      "• *Nivel de Urgencia:* " + urgency + "\\n" +
      "• *Servicio Requerido:* " + serviceType + "\\n" +
      "• *Material / Línea:* " + beltMaterial + "\\n" +
      "• *Medidas (Largo x Ancho):* " + (dimensions || "Por verificar en visita") + "\\n" +
      "• *Evidencia Fotográfica:* " + (photoName ? "Adjunta (" + photoName + ")" : "Pendiente") + "\\n" +
      "• *Ubicación GPS de Planta:* " + (gpsCoords || "Sabana de Bogotá / Nacional") + "\\n" +
      "• *Observaciones:* " + (notes || "Ninguna");

    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  };

  const shareNativeReport = async () => {
    const reportText =
      "Cotización Bandas & Soluciones - Empresa: " +
      companyName +
      " | Material: " +
      beltMaterial +
      " | Medidas: " +
      dimensions;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Reporte Técnico Bandas & Soluciones",
          text: reportText,
        });
        setStatusMessage("📤 Menú nativo de compartir ejecutado");
      } catch {
        setStatusMessage("Compartir cancelado por el usuario");
      }
    } else {
      navigator.clipboard?.writeText(reportText);
      setStatusMessage("📋 Reporte copiado al portapapeles");
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-white">
          📸 Cotizador Técnico Inteligente y Calculadora de Bandas
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Captura la foto del daño en planta, adjunta las coordenadas GPS de tu bodega y envía el diagnóstico directo al WhatsApp de Bandas & Soluciones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white">1. Datos de la Solicitud e Integración Nativa</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-bold">
              💾 Autoguardado Local
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Nombre de la Empresa / Planta
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Ej. Alimentos de la Sabana S.A.S."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Ingeniero / Jefe de Mantenimiento o Compras
              </label>
              <input
                type="text"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                placeholder="Tu nombre y cargo"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Tipo de Requerimiento
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white"
              >
                <option>Suministro de Banda a Medida</option>
                <option>Empalme / Vulcanizado en Planta</option>
                <option>Fabricación de Rodillos / Tambores</option>
                <option>Visita Técnica de Diagnóstico</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Material o Componente
              </label>
              <select
                value={beltMaterial}
                onChange={(e) => setBeltMaterial(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white"
              >
                <option>Banda Sanitaria PVC / PU</option>
                <option>Banda de Caucho con Lona (EP)</option>
                <option>Banda Modular Plástica</option>
                <option>Rodillos / Grapas Mecánicas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Nivel de Prioridad
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white"
              >
                <option>Cotización Programada</option>
                <option>Urgente - Mantenimiento esta semana</option>
                <option>🚨 CRÍTICO - Parada de Línea Hoy</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
              Dimensiones (Desarrollo Total x Ancho en mm, N° de Lonas)
            </label>
            <input
              type="text"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              placeholder="Ej. Largo 12.5 m x Ancho 600 mm, espesor 3 mm (O usa la calculadora de la derecha)"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
              <p className="text-xs font-bold text-sky-400 uppercase mb-1">
                📷 Funcionalidad Nativa 1: Cámara / Galería
              </p>
              <p className="text-xs text-slate-400 mb-3">
                Toma una foto a la banda rota, grapa o rodillo desgastado.
              </p>
              <label className="block w-full text-center py-2.5 px-4 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold text-xs cursor-pointer transition">
                📸 Tomar / Adjuntar Foto del Equipo
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoCapture}
                  className="hidden"
                />
              </label>
              {photoPreview && (
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={photoPreview}
                    alt="Vista previa de la banda"
                    className="w-14 h-14 object-cover rounded-lg border border-emerald-500"
                  />
                  <span className="text-xs text-emerald-400 font-semibold truncate">
                    ✔ {photoName}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
              <p className="text-xs font-bold text-emerald-400 uppercase mb-1">
                📍 Funcionalidad Nativa 2: Geolocalización GPS
              </p>
              <p className="text-xs text-slate-400 mb-3">
                Adjunta las coordenadas exactas de la fábrica para la visita técnica.
              </p>
              <button
                type="button"
                onClick={capturePlantGPS}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs cursor-pointer transition"
              >
                📍 Capturar Ubicación GPS de Planta
              </button>
              <p className="text-[11px] text-slate-300 mt-2">{gpsStatus}</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
              Observaciones Técnicas Adicionales
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej. Requiere perfiles guía, trabajo en altura o ingreso con ARL vigente..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white"
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={sendStructuredReportToWhatsApp}
              className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg cursor-pointer transition"
            >
              💬 Enviar Reporte Técnico a WhatsApp Business
            </button>
            <button
              type="button"
              onClick={shareNativeReport}
              className="py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer transition"
            >
              📤 Compartir Nativo
            </button>
          </div>

          <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-xs text-emerald-400 font-medium">
            Estado del Sistema: {statusMessage}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 h-fit">
          <div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400">
              VALOR AGREGADO B&S
            </span>
            <h2 className="text-xl font-bold text-white mt-2">
              📐 Calculadora Dinámica de Bandas
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Calcula el desarrollo total de la banda según la distancia entre centros y el diámetro de los tambores.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Distancia entre centros de rodillos (Metros)
              </label>
              <input
                type="number"
                step="0.1"
                value={centerDistance}
                onChange={(e) => setCenterDistance(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Diámetro de Tambor / Polea (Milímetros)
              </label>
              <input
                type="number"
                value={drumDiameter}
                onChange={(e) => setDrumDiameter(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Ancho de la Banda (Milímetros)
              </label>
              <input
                type="number"
                value={beltWidth}
                onChange={(e) => setBeltWidth(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Desarrollo Total Estimado:</span>
              <span className="text-xl font-extrabold text-emerald-400">
                {totalDevelopmentLength} m
              </span>
            </div>
            <div className="text-xs text-slate-300 pt-2 border-t border-slate-800">
              <strong className="text-sky-400 block mb-0.5">Empalme Recomendado:</strong>
              {recommendedSplice}
            </div>
          </div>

          <button
            type="button"
            onClick={applyCalculationToQuote}
            className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs cursor-pointer transition"
          >
            ← Pasar Medidas al Cotizador
          </button>
        </div>
      </div>
    </div>
  );
}
`,
"app/favorites/page.tsx": `"use client";

import React from "react";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import CharacterCard from "@/components/CharacterCard";
import { WHATSAPP_NUMBER } from "@/components/Navbar";

export default function SavedAndContactPage() {
  const { favorites, clearFavorites } = useFavorites();

  const quoteAllSaved = () => {
    const list = favorites.map((f) => "• " + f.name + " (" + f.category + ")").join("\\n");
    const msg = encodeURIComponent(
      "Hola *Bandas & Soluciones*, deseo cotizar los siguientes materiales guardados:\\n\\n" + list
    );
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            ⭐ Materiales Guardados (Modo Offline) y Contacto
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Almacenamiento local activo para consultar tus materiales incluso sin señal en planta.
          </p>
        </div>

        {favorites.length > 0 && (
          <div className="flex gap-3">
            <button
              onClick={quoteAllSaved}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs cursor-pointer"
            >
              💬 Cotizar Todos ({favorites.length}) por WhatsApp
            </button>
            <button
              onClick={clearFavorites}
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs cursor-pointer"
            >
              Limpiar Lista
            </button>
          </div>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-3">
          <p className="text-xl font-bold text-white">Aún no tienes bandas o servicios guardados</p>
          <Link
            href="/characters"
            className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs"
          >
            ⚙️ Ir al Catálogo de Materiales
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      )}
    </div>
  );
}
`
};

for (const [relPath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
  console.log("✔ Archivo actualizado:", relPath);
}

console.log("¡Transformación a B&S Digital Connect completada!");