"use client";
import { useState } from 'react';
import VAC from '../../../public/d7eb08c10c9dde392c3552eef0abf936.jpeg'
import VAC2 from '../../../public/cartaz.jpg'
import VAC3 from '../../../public/cartaz (1).jpg'
import VAC4 from '../../../public/cartaz (2).jpg'
import VAC5 from '../../../public/vac.jpg'
import VAC6 from '../../../public/aaaaaaaa.jpg'
import VAC7 from '../../../public/vac7.webp'
import VAC8 from '../../../public/piri.jpg'
import VAC9 from '../../../public/pantanal.jpg'
import VAC10 from '../../../public/arari.jpg'
import plus from '../../../public/plus.png'
import info from '../../../public/info.png'
import RANCH from '../../../public/ranch.jpg'
import NORDESTE from '../../../public/nordeste.jpg'
import BRITOS from '../../../public/britos.webp'
import VAQUEIROS from '../../../public/vaqueiros.jpg'
import INTER from '../../../public/inter.avif'
import Vaquejadas from '@/components/Vaquejadas';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gradient-to-t from-[#3d3d3d] to-[#3d3d3d] text-white">
  <main>
    <div className="w-full h-[75vh] flex flex-col items-center md:relative bg-gradient-to-t from-brown-800 to-brown-400">
      
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center bg-brown-500 p-6 md:p-12 z-20">
        <h1 className="text-white text-2xl font-bold">Senha Pronta</h1>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="space-x-10 hidden md:flex">
          <a href="#" className="text-white hover:text-yellow-400">Vaquejadas</a>
          <a href="#" className="text-white hover:text-yellow-400">Minhas Senhas</a>
          <a href="#" className="text-white hover:text-yellow-400">Sobre</a>
          <a href="#" className="text-white hover:text-yellow-400">Entrar</a>
        </nav>
      </header>

      <div className="relative w-10/12 md:w-full h-auto md:h-full flex justify-center mt-10 md:mt-0">
      <div className="relative w-full md:w-full h-104 md:h-auto mt-10 md:mt-0">
        <img
          src={NORDESTE.src}
          alt="Imagem de fundo"
          className="w-full h-full object-cover md:object-[center_50%] rounded-2xl md:rounded-none"
        />
        <div className="hidden md:block absolute inset-0 md:rounded-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_1%,_rgba(0,0,0,0.8)_50%)] pointer-events-none"></div>
      </div>


        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-2xl md:hidden"></div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 w-10/12 justify-center md:bottom-30 md:left-10 md:translate-x-0 md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition shadow-lg md:px-8 md:py-4 md:text-lg text-sm cursor-pointer">
            <img src={plus.src} alt="Play" className="w-3 h-3" />
            Comprar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg md:px-8 md:py-4 md:text-lg text-sm cursor-pointer">
            <img src={info.src} alt="Info" className="w-3 h-3" />
            Info
          </button>
        </div>
      </div>

      <h1 className="hidden md:block absolute top-30 left-10 text-white text-4xl md:text-8xl font-bold max-w-lg drop-shadow-lg">
        VAQUEJADA <span className='text-yellow-400'>RAIZ</span> AGILIDADE <span className='text-yellow-400'>MODERNA</span>
      </h1>
    </div>

    <Vaquejadas/>

  </main>
</div>

  );
}