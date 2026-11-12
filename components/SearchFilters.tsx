"use client";

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
