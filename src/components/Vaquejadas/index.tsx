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
import { useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, CreditCard, Calendar, Info } from "lucide-react";

const images = [VAC, VAC2, VAC3, VAC4];

export default function VaquejadaSection() {
  return (
    <div className='bg-gradient-to-t from-[blue] to-[#2B2B2B] text-white'>
      <section className="p-6 relative flex flex-col items-center md:h-185">
      <h1 className="font-semibold text-align-left text-3xl mb-2 md:hidden">Todas as Vaquejadas</h1>

      <div className="relative flex items-center justify-center w-full">
        <button className="hidden md:flex absolute left-4 bg-black/50 p-3 rounded-full z-10">
          <ChevronLeft size={40} className="text-white" />
        </button>

        <div className="hidden md:flex md:ml-30 md:mr-30 gap-4 justify-center overflow-hidden md:p-5">
  {images.map((img, index) => (
    <div key={index} className="group bg-gray-800 h-[40rem] w-[30rem] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 relative">
      
      <img
        src={img.src}
        alt={`Vaquejada ${index + 1}`}
        className="object-cover w-full h-full cursor-pointer"
      />

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-x-0 bottom-2 p-4 flex flex-col justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="flex items-center justify-center gap-2 w-full h-[50px] bg-yellow-400 text-black font-semibold hover:bg-yellow-500 rounded mb-2 transition shadow-lg md:px-4 md:py-2 md:text-sm text-xs cursor-pointer">
          <img src={plus.src} alt="Comprar" className="w-4 h-4 md:w-5 md:h-5" />
          Comprar Senha
        </button>
        
        <button className="flex items-center justify-center gap-2 w-full h-[50px] bg-gray-700 text-white font-semibold hover:bg-gray-800 rounded mb-2 transition shadow-lg md:px-4 md:py-2 md:text-sm text-xs cursor-pointer">
          <img src={info.src} alt="Info" className="w-4 h-4 md:w-5 md:h-5" />
          Mais Informações
        </button>
      </div>

    </div>
  ))}
</div>


        <div className="md:hidden flex overflow-x-auto space-x-4 pb-4 w-full px-6">
          {images.slice(0, 4).map((img, index) => (
            <div key={index} className="bg-gray-800 h-96 min-w-[80%] rounded-lg overflow-hidden">
              <img src={img.src} alt={`Vaquejada ${index + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        <button className="hidden md:flex absolute right-4 bg-black/50 p-3 rounded-full z-10">
          <ChevronRight size={40} className="text-white" />
        </button>
      </div>
    </section>

      <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Como funciona o Senha Pronta?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="bg-white border-2 border-blue-500 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <CheckCircle size={50} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Escolha sua senha</h3>
            <p className="text-gray-700">Navegue pela lista de senhas disponíveis para sua vaquejada preferida.</p>
          </div>

          <div className="bg-white border-2 border-green-500 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <CreditCard size={50} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Pagamento rápido</h3>
            <p className="text-gray-700">Finalize sua compra com segurança usando diferentes formas de pagamento.</p>
          </div>

          <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <Calendar size={50} className="text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">Confirmação imediata</h3>
            <p className="text-gray-700">Receba a confirmação da sua senha no mesmo instante, sem complicações.</p>
          </div>

          <div className="bg-white border-2 border-red-500 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
            <Info size={50} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold">Suporte sempre disponível</h3>
            <p className="text-gray-700">Nossa equipe está pronta para te ajudar caso tenha dúvidas ou problemas.</p>
          </div>
        </div>
      </section>

      <section className="mt-0 bg-gray-100 w-full h-screen md:h-120 py-12 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Gerencie suas Vaquejadas com Facilidade</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Nosso sistema de controle de vaquejadas permite a venda de senhas de forma organizada e eficiente.
          Tenha total controle sobre suas vendas e melhore sua gestão com nossa tecnologia intuitiva.
        </p>
        
        <div className="flex gap-6 mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Quero comprar
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition">
            Entrar em Contato
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white w-full py-8 flex flex-col items-center text-center">
        <p className="text-lg">Senha pronta</p>
        <div className="flex gap-6 mt-4">
          <a href="#" className="text-blue-400 hover:underline">Vaquejadas</a>
          <a href="#" className="text-blue-400 hover:underline">Senhas</a>
          <a href="#" className="text-blue-400 hover:underline">Sobre</a>
          <a href="#" className="text-blue-400 hover:underline">Entrar</a>
        </div>
      </footer>
    </div>
  );
}