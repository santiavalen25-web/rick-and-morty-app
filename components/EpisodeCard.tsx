import React from "react";
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
