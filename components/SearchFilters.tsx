// components/SearchFilters.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Leemos directamente de la URL, esto será nuestra única fuente de la verdad
  const defaultName = searchParams.get("name") || "";
  const defaultStatus = searchParams.get("status") || "";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Extraemos los datos nativos del formulario sin usar useState
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const status = formData.get("status") as string;
    
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (status) params.set("status", status);
    
    // Actualizamos la URL (esto dispara la nueva petición al servidor)
    router.push(`/characters?${params.toString()}`);
  };

  const handleClear = () => {
    router.push("/characters");
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-md border border-slate-200"
    >
      <input
        type="text"
        name="name"
        defaultValue={defaultName}
        placeholder="Buscar personaje (presiona Enter)..."
        className="flex-grow border border-slate-300 rounded-lg px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      <select
        name="status"
        defaultValue={defaultStatus}
        // Magia aquí: envía el formulario automáticamente al cambiar la opción
        onChange={(e) => e.target.form?.requestSubmit()} 
        className="border border-slate-300 rounded-lg px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
      >
        <option value="">Todos los estados</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <button 
        type="submit" 
        className="bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-2 px-6 rounded-lg transition-colors"
      >
        Buscar
      </button>
      
      {(defaultName || defaultStatus) && (
        <button 
          type="button" 
          onClick={handleClear}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Limpiar
        </button>
      )}
    </form>
  );
}