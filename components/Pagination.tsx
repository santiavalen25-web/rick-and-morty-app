// components/Pagination.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Leemos la página actual de la URL (si no hay, asumimos que es la 1)
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage: number) => {
    // Clonamos los parámetros actuales para no perder los filtros (name, status)
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    
    // Actualizamos la URL
    router.push(`/characters?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-10 mb-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
      >
        Anterior
      </button>
      
      <span className="text-slate-700 font-bold bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
      >
        Siguiente
      </button>
    </div>
  );
}