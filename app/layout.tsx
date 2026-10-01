// app/layout.tsx
import Navbar from "../components/Navbar";
import { FavoritesProvider } from "../context/FavoritesContext";
import "./globals.css";

export const metadata = {
  title: "Rick and Morty App",
  description: "Aplicación interactiva de Rick and Morty con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 min-h-screen text-slate-800 flex flex-col justify-between antialiased">
        <FavoritesProvider>
          <div>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </div>
          <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
            Desarrollado para el proyecto de Aplicaciones Híbridas - API de Rick and Morty
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}