// services/api.ts
import { Character, CharacterResponse, Episode, EpisodeResponse } from "../types";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(
  page: number = 1, 
  name: string = "", 
  status: string = ""
): Promise<CharacterResponse | null> {
  const res = await fetch(`${BASE_URL}/character?page=${page}&name=${name}&status=${status}`);
  
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Error al obtener los personajes");
  }
  
  return res.json();
}

export async function getCharacterById(id: string | number): Promise<Character> {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) throw new Error("Error al obtener el detalle del personaje");
  return res.json();
}

export async function getEpisodes(page: number = 1): Promise<EpisodeResponse> {
  const res = await fetch(`${BASE_URL}/episode?page=${page}`);
  if (!res.ok) throw new Error("Error al obtener los episodios");
  return res.json();
}