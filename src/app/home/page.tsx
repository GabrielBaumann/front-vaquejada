"use client";
import { useState } from 'react';
import VAC from '../../../public/d7eb08c10c9dde392c3552eef0abf936.jpeg'
import VAC2 from '../../../public/cartaz.jpg'
import VAC3 from '../../../public/cartaz (1).jpg'
import VAC4 from '../../../public/cartaz (2).jpg'
import VAC5 from '../../../public/vac.jpg'
import VAC6 from '../../../public/aaaaaaaa.jpg'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#141414] text-white font-sans">
      <header className="flex justify-between items-center bg-brown-500 p-4">
        <h1 className="text-white text-2xl font-bold">Senha Pronta</h1>
        
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="text-white hover:underline">Vaquejadas</a>
          <a href="#" className="text-white hover:underline">Minhas Senhas</a>
          <a href="#" className="text-white hover:underline">Sobre</a>
          <a href="#" className="text-white hover:underline">Entrar</a>
        </nav>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <a href="#" className="block py-2 hover:underline">Vaquejadas</a>
          <a href="#" className="block py-2 hover:underline">Minhas Senhas</a>
          <a href="#" className="block py-2 hover:underline">Sobre</a>
          <a href="#" className="block py-2 hover:underline">Entrar</a>
        </div>
      )}

      <main>
      <div className="relative w-full h-[500px] sm:h-[600px] bg-[#141414] flex justify-center sm:justify-start">
        <img
          src={VAC6.src}
          alt="Imagem de fundo"
          className="absolute top-0 sm:left-0 sm:w-full sm:h-full object-cover 
                    w-[80%] h-[80%] sm:w-full sm:h-full sm:object-cover rounded"
        />
        <div className="absolute bottom-10 left-5 p-4 rounded-md max-w-sm">
          <h2 className="text-3xl sm:text-6xl font-bold">Grande Vaquejada</h2>
          <div className="mt-4 flex space-x-2">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-yellow-700 sm:text-4xl sm:px-6 sm:py-3">
              Comprar Senha
            </button>
            <button className="bg-gray-400 bg-opacity-50 text-white px-4 py-2 rounded hover:bg-gray-700 sm:text-2xl sm:px-6 sm:py-3">
              Mais informações
            </button>
          </div>
        </div>
      </div>

        <section className="p-6">
          <h3 className="text-xl font-bold mb-4">Vaquejadas</h3>
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <div className="bg-gray-800 h-100 w-full rounded-md overflow-hidden">
              <img src={VAC.src} alt="Filme 1" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-100 w-full rounded-md overflow-hidden">
              <img src={VAC2.src} alt="Filme 2" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-100 w-full rounded-md overflow-hidden">
              <img src={VAC3.src} alt="Filme 3" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-100 w-full rounded-md overflow-hidden">
              <img src={VAC4.src} alt="Filme 4" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-100 w-full rounded-md overflow-hidden">
              <img src={VAC.src} alt="Filme 5" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-100 w-full rounded-md overflow-hidden">
              <img src={VAC2.src} alt="Filme 6" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="md:hidden flex overflow-x-auto space-x-4 pb-4">
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src={VAC.src} alt="Filme 1" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src={VAC2.src} alt="Filme 2" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src={VAC3.src} alt="Filme 3" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-800 h-96 min-w-[70%] rounded-md overflow-hidden">
              <img src={VAC4.src} alt="Filme 4" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}