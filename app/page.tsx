import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800">
        Bienvenido al Universo de <span className="text-green-500">Rick and Morty</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl">
        Explora la lista completa de personajes, episodios y guarda tus favoritos en esta aplicación moderna construida con Next.js y React.
      </p>
      
      <div className="flex gap-4 mt-4">
        <Link 
          href="/characters" 
          className="bg-green-500 hover:bg-green-600 text-slate-900 font-bold px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Ver Personajes
        </Link>
        <Link 
          href="/episodes" 
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Ver Episodios
        </Link>
      </div>
    </div>
  );
}