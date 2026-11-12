"use client";

import React from "react";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import CharacterCard from "@/components/CharacterCard";
import { WHATSAPP_NUMBER } from "@/components/Navbar";

export default function SavedAndContactPage() {
  const { favorites, clearFavorites } = useFavorites();

  const quoteAllSaved = () => {
    const list = favorites.map((f) => "• " + f.name + " (" + f.category + ")").join("\n");
    const msg = encodeURIComponent(
      "Hola *Bandas & Soluciones*, deseo cotizar los siguientes materiales guardados:\n\n" + list
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
