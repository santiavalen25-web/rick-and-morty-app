"use client";

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
      "🚨 *URGENTE - PARADA DE LÍNEA EN PLANTA* 🚨\nHola Bandas & Soluciones, tenemos una banda transportadora detenida y requerimos asistencia técnica prioritaria."
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
