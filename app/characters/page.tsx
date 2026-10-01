// app/characters/page.tsx
import { Suspense } from "react";
import CharacterCard from "../../components/CharacterCard";
import SearchFilters from "../../components/SearchFilters";
import Pagination from "../../components/Pagination"; // <-- 1. Importamos el nuevo componente
import { getCharacters } from "../../services/api";

interface Props {
  searchParams: Promise<{ name?: string; status?: string; page?: string }>;
}

export default async function CharactersPage({ searchParams }: Props) {
  const params = await searchParams;
  const name = params.name || "";
  const status = params.status || "";
  const page = Number(params.page) || 1;

  const data = await getCharacters(page, name, status);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-slate-800">Personajes</h1>

      <Suspense fallback={<div className="h-16 bg-slate-200 animate-pulse rounded-xl mb-8"></div>}>
        <SearchFilters />
      </Suspense>

      {!data ? (
        <div className="bg-red-50 text-red-500 p-8 text-center rounded-xl font-medium border border-red-100">
          No se encontraron personajes con esos filtros.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          {/* <-- 2. Agregamos el componente de paginación enviándole el total de páginas que nos dice la API */}
          <Pagination totalPages={data.info.pages} />
        </>
      )}
    </div>
  );
}