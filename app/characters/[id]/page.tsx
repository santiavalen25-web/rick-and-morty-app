// app/characters/[id]/page.tsx
import Link from "next/link";
import { getCharacterById } from "../../../services/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CharacterDetailPage({ params }: Props) {
  // Obtenemos el ID de la URL
  const { id } = await params;
  const character = await getCharacterById(id);

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      {/* Botón para regresar */}
      <Link 
        href="/characters" 
        className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-2 w-fit"
      >
        ← Volver a Personajes
      </Link>

      {/* Tarjeta Detallada */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col md:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full md:w-80 h-80 object-cover"
        />
        
        <div className="p-6 md:p-8 flex flex-col justify-between gap-4 flex-grow">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{character.name}</h1>
            <p className="text-base font-medium text-slate-600 flex items-center mb-6">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                character.status === 'Alive' ? 'bg-green-500' : 
                character.status === 'Dead' ? 'bg-red-500' : 'bg-slate-400'
              }`}></span>
              {character.status} - {character.species}
            </p>

            <div className="space-y-3 border-t border-slate-100 pt-4 text-sm">
              <div>
                <span className="text-slate-400 font-semibold block">Género:</span>
                <span className="text-slate-800 font-medium">{character.gender}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">Tipo:</span>
                <span className="text-slate-800 font-medium">{character.type || "Desconocido / Estándar"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}