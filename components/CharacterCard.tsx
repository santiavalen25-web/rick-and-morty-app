"use client";

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
      "Hola *Bandas & Soluciones*, me interesa cotizar el siguiente ítem del catálogo:\n\n• *Producto/Servicio:* " +
        character.name +
        "\n• *Categoría:* " +
        character.category +
        "\n• *Aplicación:* " +
        character.industry +
        "\n\nQuedo atento a su asesoría técnica."
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
