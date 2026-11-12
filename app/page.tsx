import React from "react";
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
