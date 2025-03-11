"use client";
import { useState } from 'react';
import VAC from '../../../public/d7eb08c10c9dde392c3552eef0abf936.jpeg'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white font-sans">
      <header className="flex justify-between items-center p-4 bg-black">
        <h1 className="text-red-600 text-2xl font-bold">NETFLIX</h1>
        
        {/* Ícone de hamburger para o menu */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu no desktop */}
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="text-white hover:underline">Início</a>
          <a href="#" className="text-white hover:underline">Séries</a>
          <a href="#" className="text-white hover:underline">Filmes</a>
          <a href="#" className="text-white hover:underline">Bombando</a>
        </nav>
      </header>

      {/* Menu toggle no mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <a href="#" className="block py-2 hover:underline">Início</a>
          <a href="#" className="block py-2 hover:underline">Séries</a>
          <a href="#" className="block py-2 hover:underline">Filmes</a>
          <a href="#" className="block py-2 hover:underline">Bombando</a>
        </div>
      )}

      <main>
        <div className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('net.png')" }}>
          <div className="absolute bottom-10 left-5 bg-black bg-opacity-60 p-4 rounded-md max-w-sm">
            <h2 className="text-3xl font-bold">Civilization VI</h2>
            <p className="text-sm">Jogo para celulares • Estratégia</p>
            <p className="text-sm mt-2">Incluído na sua assinatura</p>
            <p className="text-sm mt-2">Erga cidades gigantescas, invista em progresso cultural e crie alianças... ou declare guerras.</p>
            <div className="mt-4 flex space-x-2">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Baixar o jogo para celulares</button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Enviar para meu celular ou tablet</button>
            </div>
          </div>
        </div>

        <section className="p-6">
          <h3 className="text-xl font-bold mb-4">Filmes e séries em português</h3>
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <div className="bg-gray-800 h-80 w-full rounded-md overflow-hidden">
              <img src={VAC.src} alt="Filme 1" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-80 w-full rounded-md overflow-hidden">
              <img src="movie2.jpg" alt="Filme 2" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-80 w-full rounded-md overflow-hidden">
              <img src="movie3.jpg" alt="Filme 3" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-80 w-full rounded-md overflow-hidden">
              <img src="movie4.jpg" alt="Filme 4" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-80 w-full rounded-md overflow-hidden">
              <img src="movie5.jpg" alt="Filme 5" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-80 w-full rounded-md overflow-hidden">
              <img src="movie6.jpg" alt="Filme 6" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="md:hidden flex overflow-x-auto space-x-4 pb-4">
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src={VAC.src} alt="Filme 1" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src="movie2.jpg" alt="Filme 2" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src="movie3.jpg" alt="Filme 3" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src="movie4.jpg" alt="Filme 4" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
