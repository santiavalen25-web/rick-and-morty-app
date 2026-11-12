"use client";

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
