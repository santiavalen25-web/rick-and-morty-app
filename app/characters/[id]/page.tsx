"use client";

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
      "Hola *Bandas & Soluciones*, solicito cotización técnica formal de:\n• *Ítem:* " +
        item.name +
        "\n• *Categoría:* " +
        item.category +
        "\n• *Espesor/Medida:* " +
        item.thickness +
        "\n• *Tipo de Empalme:* " +
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
