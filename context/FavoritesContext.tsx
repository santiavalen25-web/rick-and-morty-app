// context/FavoritesContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Character } from "../types";

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>([]);

  // Cargar favoritos guardados en localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("rick_morty_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Error al cargar favoritos", e);
      }
    }
  }, []);

  // Guardar en localStorage cada vez que cambien los favoritos
  const saveFavorites = (newFavs: Character[]) => {
    setFavorites(newFavs);
    localStorage.setItem("rick_morty_favorites", JSON.stringify(newFavs));
  };

  const addFavorite = (character: Character) => {
    if (!favorites.some((c) => c.id === character.id)) {
      saveFavorites([...favorites, character]);
    }
  };

  const removeFavorite = (id: number) => {
    saveFavorites(favorites.filter((c) => c.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((c) => c.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe ser usado dentro de un FavoritesProvider");
  }
  return context;
}