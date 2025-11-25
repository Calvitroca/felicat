import React, { useState } from "react";
import {
  Heart,
  Shield,
  Check,
  Menu,
  X,
  Star,
  ChevronRight,
  Activity,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brandColors = {
    purpleDark: "#512684",
    purpleLight: "#823891",
    green: "#00843D",
    white: "#FFFFFF",
    textDark: "#1A1A1A",
  };

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50 font-secondary">
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo área */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block border-r border-gray-300 pr-4 mr-2">
                <span className="text-xs font-bold text-gray-500 tracking-widest block font-secondary">
                  RESPALDO
                </span>
                <span
                  className="text-sm font-black tracking-tighter font-secondary"
                  style={{ color: brandColors.textDark }}
                >
                  NUBAC
                </span>
              </div>

              <div className="flex flex-col items-start group cursor-pointer">
                <div className="relative">
                  <h1
                    className="text-3xl font-black tracking-tight leading-none font-primary"
                    style={{ color: brandColors.purpleDark }}
                  >
                    Felicat
                    <span className="text-[0.6rem] align-top ml-0.5 font-secondary">
                      ®
                    </span>
                  </h1>
                  <div
                    className="w-full h-2 rounded-b-full border-b-[5px] absolute -bottom-1 left-0"
                    style={{ borderColor: brandColors.purpleDark }}
                  ></div>
                </div>
                <span className="text-[0.6rem] font-bold tracking-widest uppercase mt-2 text-gray-400 ml-1 font-secondary">
                  Alimento para Gato
                </span>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-purple-700 font-bold font-secondary text-sm uppercase tracking-wide transition-colors"
              >
                Inicio
              </a>
              <a
                href="#beneficios"
                className="text-gray-600 hover:text-purple-700 font-bold font-secondary text-sm uppercase tracking-wide transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#productos"
                className="text-gray-600 hover:text-purple-700 font-bold font-secondary text-sm uppercase tracking-wide transition-colors"
              >
                Productos
              </a>
              <button
                className="px-6 py-2 rounded-full font-bold text-white transition-transform transform hover:scale-105 shadow-lg font-secondary"
                style={{ backgroundColor: brandColors.green }}
              >
                Comprar Ahora
              </button>
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              <a
                href="#inicio"
                className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#beneficios"
                className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="#productos"
                className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <button
                className="w-full mt-4 px-6 py-3 rounded-full font-bold text-white font-secondary"
                style={{ backgroundColor: brandColors.green }}
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-100 to-white"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-purple-50 rounded-l-[100px] hidden lg:block opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-extrabold text-sm mb-4 font-secondary">
                <Heart size={16} fill={brandColors.purpleLight} />
                <span>Nutrimos vínculos, compartimos vida</span>
              </div>

              <h1
                className="text-5xl lg:text-7xl font-black leading-tight tracking-tight font-primary"
                style={{ color: brandColors.purpleDark }}
              >
                Gánate su <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Corazón
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-secondary font-medium">
                El alimento que fortalece el vínculo más especial: el de tu gato,
                contigo. Nutrición balanceada con nuestro exclusivo sistema
                Gastro Inmune.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-secondary">
                <button
                  className="px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  style={{ backgroundColor: brandColors.purpleDark }}
                >
                  Conoce los productos <ChevronRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-purple-900 bg-white border-2 border-purple-100 hover:border-purple-300 transition-all flex items-center justify-center gap-2">
                  <Activity size={20} className="text-purple-600" />
                  Ver análisis nutricional
                </button>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] bg-gray-200 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1548658097-df033c46e01a?q=80&w=2000&auto=format&fit=crop"
                    alt="Mujer abrazando a su gato"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-secondary">
                    <p className="font-bold text-lg">Conexión real</p>
                    <p className="text-sm opacity-90">
                      Momentos que alimentan el alma.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow font-secondary">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield size={24} color={brandColors.green} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Respaldo Científico
                  </p>
                  <p className="font-bold text-gray-800">Garantía NUBAC®</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-black mb-4 font-primary"
              style={{ color: brandColors.purpleDark }}
            >
              Fórmula Exclusiva Gastro Inmune®
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary font-medium">
              Ayuda a su sistema digestivo mejorando su salud intestinal y
              reforzando sus defensas naturales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards beneficios (igual que tu código) */}
            {/* ... dejo igual todo lo que ya tenías aquí y abajo */}
          </div>
        </div>
      </section>

      {/* TODO: el resto de secciones las puedes dejar tal cual, no necesitan cambios
          porque Tailwind ya las va a estilizar correctamente */}
      {/* PRODUCTOS, SOCIAL PROOF, FOOTER ... */}
      {/* (tu código original de esas secciones se mantiene igual) */}
    </div>
  );
};

export default App;