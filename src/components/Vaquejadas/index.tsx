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
import { useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, CreditCard, Calendar, Info } from "lucide-react";

const FOTO = { src: '../../../public/d7eb08c10c9dde392c3552eef0abf936.jpeg' };
const FOTO2 = { src: '../../../public/cartaz.jpg'};
const FOTO3 = { src: '../../../public/cartaz (1).jpg' };
const FOTO4 = { src: '../../../public/cartaz (2).jpg'};

export default function VaquejadaSection() {
    const scrollRef = useRef(null);


  return (
    <div>
      <section className="p-6 relative flex flex-col items-center">
      <h1 className="font-semibold text-4xl mb-6">Todas as Vaquejadas</h1>
      
      {/* Botões de navegação */}
      <button 
        
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-10"
      >
        <ChevronLeft size={40} className="text-white" />
      </button>
      <button 
        
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-10"
      >
        <ChevronRight size={40} className="text-white" />
      </button>

      <div ref={scrollRef} className="hidden md:flex gap-8 overflow-x-scroll no-scrollbar w-full justify-center">
        {[VAC, VAC2, VAC3, VAC4, VAC, VAC2].map((img, index) => (
          <div key={index} className="bg-gray-800 h-[28rem] w-[22rem] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10 relative">
            <img src={img.src} alt={`Vaquejada ${index + 1}`} className="object-cover w-full h-full cursor-pointer" />
          </div>
        ))}
      </div>

      <div className="md:hidden flex overflow-x-auto space-x-4 pb-4 w-full px-6">
        {[VAC, VAC2, VAC3, VAC4].map((img, index) => (
          <div key={index} className="bg-gray-800 h-96 min-w-[80%] rounded-lg overflow-hidden">
            <img src={img.src} alt={`Vaquejada ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
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

      <section className="mt-12 bg-gray-100 w-full py-12 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Gerencie suas Vaquejadas com Facilidade</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Nosso sistema de controle de vaquejadas permite a venda de senhas de forma organizada e eficiente.
          Tenha total controle sobre suas vendas e melhore sua gestão com nossa tecnologia intuitiva.
        </p>
        
        <div className="flex gap-6 mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Contratar Serviço
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition">
            Entrar em Contato
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white w-full py-8 flex flex-col items-center text-center">
        <p className="text-lg">© 2025 Sistema de Vaquejada. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4">
          <a href="#" className="text-blue-400 hover:underline">Política de Privacidade</a>
          <a href="#" className="text-blue-400 hover:underline">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
}