// components/CharacterCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";
import { Character } from "../types";

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(character.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar a la página de detalle al hacer clic en el corazón
    if (favorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100 flex flex-col justify-between relative group">
      {/* Botón de Favorito */}
      <button
        onClick={toggleFavorite}
        aria-label="Guardar en favoritos"
        className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white transition-all transform active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={favorite ? "#ef4444" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={favorite ? "#ef4444" : "#64748b"}
          className="w-6 h-6 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <Link href={`/characters/${character.id}`}>
        <div className="relative w-full h-64">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
            {character.name}
          </h2>
          <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
            <span
              className={`w-3 h-3 rounded-full ${
                character.status === "Alive"
                  ? "bg-green-500"
                  : character.status === "Dead"
                  ? "bg-red-500"
                  : "bg-gray-400"
              }`}
            />
            <span>
              {character.status} - {character.species}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}