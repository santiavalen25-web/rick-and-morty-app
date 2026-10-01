// components/EpisodeCard.tsx
import { Episode } from "../types";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
          {episode.episode}
        </span>
        <h2 className="text-xl font-bold text-slate-800 mt-3 mb-1">
          {episode.name}
        </h2>
        <p className="text-sm text-slate-500">
          Fecha de estreno: <span className="font-medium text-slate-700">{episode.air_date}</span>
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
        <span>Personajes: {episode.characters.length}</span>
      </div>
    </div>
  );
}