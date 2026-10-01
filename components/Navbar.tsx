import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo / Inicio */}
        <Link href="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          Rick & Morty 
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex gap-4 sm:gap-6 font-medium">
          <Link href="/characters" className="hover:text-green-400 transition-colors">Personajes</Link>
          <Link href="/episodes" className="hover:text-green-400 transition-colors">Episodios</Link>
          <Link href="/favorites" className="hover:text-green-400 transition-colors">Favoritos</Link>
        </div>
      </div>
    </nav>
  );
}