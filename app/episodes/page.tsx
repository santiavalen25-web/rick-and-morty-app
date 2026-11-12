"use client";

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
      "🛠️ *SOLICITUD TÉCNICA - B&S DIGITAL CONNECT*\n" +
      "• *Empresa:* " + (companyName || "Por confirmar") + "\n" +
      "• *Contacto:* " + (contactPerson || "Ingeniero de Planta") + "\n" +
      "• *Nivel de Urgencia:* " + urgency + "\n" +
      "• *Servicio Requerido:* " + serviceType + "\n" +
      "• *Material / Línea:* " + beltMaterial + "\n" +
      "• *Medidas (Largo x Ancho):* " + (dimensions || "Por verificar en visita") + "\n" +
      "• *Evidencia Fotográfica:* " + (photoName ? "Adjunta (" + photoName + ")" : "Pendiente") + "\n" +
      "• *Ubicación GPS de Planta:* " + (gpsCoords || "Sabana de Bogotá / Nacional") + "\n" +
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
