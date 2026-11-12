"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IndustrialItem } from "@/types";

interface FavoritesContextType {
  favorites: IndustrialItem[];
  addFavorite: (item: IndustrialItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
const STORAGE_KEY = "bs_digital_connect_favorites_v1";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<IndustrialItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch (error) {
      console.error("Error leyendo almacenamiento local:", error);
    }
  }, []);

  const saveToStorage = (items: IndustrialItem[]) => {
    setFavorites(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(40);
      }
    } catch (error) {
      console.error("Error guardando en almacenamiento local:", error);
    }
  };

  const addFavorite = (item: IndustrialItem) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      saveToStorage([...favorites, item]);
    }
  };

  const removeFavorite = (id: number) => {
    saveToStorage(favorites.filter((item) => item.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((item) => item.id === id);
  const clearFavorites = () => saveToStorage([]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
  return context;
}
