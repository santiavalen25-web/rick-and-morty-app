// app/favorites/page.tsx
"use client";

import CharacterCard from "../../components/CharacterCard";
import { useFavorites } from "../../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-slate-800">Personajes Favoritos</h1>

      {favorites.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-slate-200 mt-4 flex flex-col items-center gap-4">
          <span className="text-5xl">❤️</span>
          <h2 className="text-xl font-bold text-slate-700">Aún no tienes favoritos</h2>
          <p className="text-slate-500 max-w-md">
            Explora la sección de personajes y haz clic en el icono de corazón en cualquier tarjeta para guardarlo aquí.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}