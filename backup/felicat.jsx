import React, { useState } from 'react';
import { Heart, Shield, Check, Menu, X, Star, ChevronRight, Activity } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Colores de marca extraídos del manual
  const brandColors = {
    purpleDark: '#512684', // PMS 2597 C
    purpleLight: '#823891', // PMS 264 C
    green: '#00843D',       // PMS 7739 C (Aprox)
    white: '#FFFFFF',
    textDark: '#1A1A1A'
  };

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50 font-secondary">
      {/* --- CONFIGURACIÓN DE FUENTES (TIPOGRAFÍA ORIGINAL + FALLBACK) --- */}
      <style>{`
        /* 1. IMPORTAR FUENTES DE GOOGLE COMO RESPALDO VISUAL */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Nunito:wght@400;700;800;900&display=swap');
        
        /* 2. CONFIGURACIÓN DE TU FUENTE ORIGINAL (COBBLER SANS) */
        /* Instrucción: Coloca el archivo 'CobblerSansTest-Black.otf' en la carpeta 'public/fonts' o junto a este archivo */
        @font-face {
          font-family: 'Cobbler Sans';
          src: url('/fonts/CobblerSansTest-Black.otf') format('opentype'),
               url('./CobblerSansTest-Black.otf') format('opentype');
          font-weight: 900;
          font-style: normal;
        }

        /* 3. CLASES DE UTILIDAD PARA FUENTES */
        
        /* Prioridad: Cobbler Sans (Tu archivo) -> Nunito (Gemela visual de Google) -> Sans-serif */
        .font-primary {
          font-family: 'Cobbler Sans', 'Nunito', sans-serif;
        }
        
        /* Gotham Black se sustituye por Montserrat (Estándar web muy similar) */
        .font-secondary {
          font-family: 'Montserrat', sans-serif;
        }

        /* Animaciones */
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
      `}</style>
      
      {/* --- HEADER / NAV --- */}
      {/* Rol de NUBAC: Aval del sistema (esquina superior izquierda) */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <div className="flex items-center gap-4">
              {/* NUBAC Aval - Discreto como indica el manual */}
              <div className="hidden md:block border-r border-gray-300 pr-4 mr-2">
                <span className="text-xs font-bold text-gray-500 tracking-widest block font-secondary">RESPALDO</span>
                <span className="text-sm font-black tracking-tighter font-secondary" style={{ color: brandColors.textDark }}>NUBAC</span>
              </div>
              
              {/* Felicat Logo - Usará Cobbler Sans si está disponible, si no Nunito */}
              <div className="flex flex-col items-start group cursor-pointer">
                <div className="relative">
                  <h1 className="text-3xl font-black tracking-tight leading-none font-primary" style={{ color: brandColors.purpleDark }}>
                    Felicat
                    <span className="text-[0.6rem] align-top ml-0.5 font-secondary">®</span>
                  </h1>
                  {/* La sonrisa del logo */}
                  <div className="w-full h-2 rounded-b-full border-b-[5px] absolute -bottom-1 left-0" style={{ borderColor: brandColors.purpleDark }}></div>
                </div>
                <span className="text-[0.6rem] font-bold tracking-widest uppercase mt-2 text-gray-400 ml-1 font-secondary">Alimento para Gato</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#inicio" className="text-gray-600 hover:text-purple-700 font-bold font-secondary text-sm uppercase tracking-wide transition-colors">Inicio</a>
              <a href="#beneficios" className="text-gray-600 hover:text-purple-700 font-bold font-secondary text-sm uppercase tracking-wide transition-colors">Beneficios</a>
              <a href="#productos" className="text-gray-600 hover:text-purple-700 font-bold font-secondary text-sm uppercase tracking-wide transition-colors">Productos</a>
              <button className="px-6 py-2 rounded-full font-bold text-white transition-transform transform hover:scale-105 shadow-lg font-secondary" style={{ backgroundColor: brandColors.green }}>
                Comprar Ahora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              <a href="#inicio" className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-secondary" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#beneficios" className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-secondary" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
              <a href="#productos" className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-secondary" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <button className="w-full mt-4 px-6 py-3 rounded-full font-bold text-white font-secondary" style={{ backgroundColor: brandColors.green }}>
                Comprar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (NIVEL 1 & 3: SIGNIFICADO) --- */}
      {/* 62% del espacio visual según regla áurea del manual para el "Hero" */}
      <section id="inicio" className="relative pt-20 overflow-hidden">
        {/* Fondo con curva suave */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-100 to-white"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-purple-50 rounded-l-[100px] hidden lg:block opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Emocional */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-extrabold text-sm mb-4 font-secondary">
                <Heart size={16} fill={brandColors.purpleLight} />
                <span>Nutrimos vínculos, compartimos vida</span>
              </div>
              
              {/* Títulos en COBBLER SANS (Fuente Original) */}
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight font-primary" style={{ color: brandColors.purpleDark }}>
                Gánate su <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Corazón
                </span>
              </h1>
              
              {/* Cuerpo en MONTSERRAT (Simil Gotham) */}
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-secondary font-medium">
                El alimento que fortalece el vínculo más especial: el de tu gato, contigo. Nutrición balanceada con nuestro exclusivo sistema Gastro Inmune.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 font-secondary">
                <button className="px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: brandColors.purpleDark }}>
                  Conoce los productos <ChevronRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-purple-900 bg-white border-2 border-purple-100 hover:border-purple-300 transition-all flex items-center justify-center gap-2">
                  <Activity size={20} className="text-purple-600" />
                  Ver análisis nutricional
                </button>
              </div>
            </div>

            {/* Imagen Hero (Mujer + Gato según manual) */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder para la imagen de "Mujer apapachando gato" */}
                <div className="aspect-[4/5] bg-gray-200 relative group">
                    <img 
                        src="https://images.unsplash.com/photo-1548658097-df033c46e01a?q=80&w=2000&auto=format&fit=crop" 
                        alt="Mujer abrazando a su gato" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-secondary">
                        <p className="font-bold text-lg">Conexión real</p>
                        <p className="text-sm opacity-90">Momentos que alimentan el alma.</p>
                    </div>
                </div>
              </div>
              
              {/* Elemento decorativo flotante (Aval NUBAC) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow font-secondary">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield size={24} color={brandColors.green} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Respaldo Científico</p>
                  <p className="font-bold text-gray-800">Garantía NUBAC®</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFICIOS / CONFIANZA (NIVEL 2 & 4: EVIDENCIA) --- */}
      {/* Iconografía y Claims funcionales según la "Franja B" del manual */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 font-primary" style={{ color: brandColors.purpleDark }}>
              Fórmula Exclusiva Gastro Inmune®
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary font-medium">
              Ayuda a su sistema digestivo mejorando su salud intestinal y reforzando sus defensas naturales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="group p-8 rounded-3xl bg-purple-50 border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} color={brandColors.purpleDark} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-secondary">Microbiota Saludable</h3>
              <p className="text-gray-600 leading-relaxed font-secondary">
                Ingredientes prebióticos que equilibran la flora intestinal para una digestión óptima.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="group p-8 rounded-3xl bg-purple-50 border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl font-secondary uppercase tracking-wider">
                 Vitalidad
               </div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star size={32} color={brandColors.green} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-secondary">Piel y Pelo Brillante</h3>
              <p className="text-gray-600 leading-relaxed font-secondary">
                Ácidos grasos esenciales y vitaminas que nutren desde adentro para un pelaje radiante.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="group p-8 rounded-3xl bg-purple-50 border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart size={32} color={brandColors.purpleLight} fill={brandColors.purpleLight} className="opacity-80" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-secondary">Delicioso Sabor</h3>
              <p className="text-gray-600 leading-relaxed font-secondary">
                Una combinación irresistible de ingredientes que tu gato amará en cada bocado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE / TRANSACCIÓN (NIVEL 5 & 6) --- */}
      {/* Diseño del empaque y especificaciones técnicas */}
      <section id="productos" className="py-24 relative overflow-hidden" style={{ backgroundColor: brandColors.purpleDark }}>
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Packaging Image Simulation */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-72 md:w-80 h-[28rem] md:h-[32rem] bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 border-t-4 border-b-4 border-green-600 flex flex-col justify-between p-6">
                {/* Header Bag */}
                <div className="text-center">
                    <div className="bg-white/20 inline-block px-3 py-1 rounded text-white text-[0.65rem] font-bold mb-2 font-secondary tracking-widest">RESPALDO NUBAC</div>
                    <div className="text-white font-black text-5xl tracking-tighter mb-0 relative z-10 font-primary">Felicat</div>
                    <div className="w-24 h-2 border-b-4 border-white rounded-[50%] mx-auto -mt-1 opacity-80"></div>
                </div>
                
                {/* Center Image Bag */}
                <div className="flex-grow flex items-center justify-center my-4 relative">
                     <div className="absolute inset-0 bg-purple-900/20 rounded-full blur-xl"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" 
                        alt="Gato Naranja en Empaque" 
                        className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                     />
                </div>

                {/* Footer Bag */}
                <div className="bg-green-600 -mx-6 -mb-6 p-6 rounded-b-lg font-secondary">
                    <div className="flex justify-between items-end text-white">
                        <div>
                            <p className="text-[0.6rem] font-bold opacity-90 tracking-widest">SABOR</p>
                            <p className="font-bold text-lg leading-none">POLLO Y</p>
                            <p className="font-bold text-lg leading-none">PESCADO</p>
                        </div>
                        <div className="text-right">
                            <p className="text-4xl font-black font-primary">15 Kg</p>
                            <p className="text-xs font-bold">Cont. Net.</p>
                        </div>
                    </div>
                </div>

                {/* Protein Badge */}
                <div className="absolute top-4 left-4 bg-purple-900 text-white p-2 rounded-lg shadow-lg text-center border border-purple-400 font-secondary">
                    <p className="text-[0.6rem] uppercase font-bold">Fórmula con</p>
                    <p className="text-2xl font-black leading-none font-primary">30%</p>
                    <p className="text-[0.6rem] font-bold tracking-widest">PROTEÍNA</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 text-white">
              <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-2 block font-secondary">Presentación Adulto</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight font-secondary">
                Nutrición completa para gatos exigentes
              </h2>
              <p className="text-purple-100 text-lg mb-8 leading-relaxed font-secondary">
                Felicat Adulto está formulado para mantener la vitalidad de tu gato. Nuestra croqueta tiene el tamaño y textura ideal para su dentadura, con un sabor que les encanta.
              </p>

              <div className="space-y-4 mb-10 font-secondary">
                {[
                  "30% de Proteína de alta digestibilidad",
                  "Enriquecido con Taurina para su corazón y visión",
                  "Control de pH urinario",
                  "Sin colorantes artificiales dañinos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 font-secondary">
                <button className="px-8 py-4 rounded-full font-bold text-green-900 bg-white hover:bg-green-50 transition-colors shadow-lg">
                  Ver Tabla Nutricional
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
                  Dónde Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF / COMUNIDAD --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-gray-800 font-secondary">Historias de Vínculos Reales</h2>
                <p className="text-gray-500 mt-2 font-secondary font-medium">Ellas ya se ganaron su corazón con Felicat</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold font-primary text-xl">
                                {item === 1 ? 'M' : item === 2 ? 'L' : 'S'}
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 font-secondary">María y "Pelusa"</p>
                                <div className="flex text-yellow-400 text-xs">
                                    <Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 italic font-secondary">"Desde que cambié a Felicat, el pelo de Pelusa brilla muchísimo más y se acaba todo el plato. Me encanta verla tan sana."</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-purple-500 font-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-black mb-4 font-primary">Felicat<span className="text-sm align-top font-secondary">®</span></h2>
              <p className="text-gray-400 max-w-sm mb-6">
                Nutrición balanceada completa que entiende el vínculo único entre tú y tu gato. Orgullosamente parte de la familia NUBAC.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer font-bold">FB</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer font-bold">IG</div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-purple-400 uppercase tracking-wider text-sm">Explora</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Nuestros Productos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guía de Alimentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog Felino</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre NUBAC</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-purple-400 uppercase tracking-wider text-sm">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>01 800 FELICAT</li>
                <li>contacto@felicat.com.mx</li>
                <li className="text-sm mt-4 text-gray-500">
                  Capulines 101A-2 El Pinar,<br/>
                  Jurica, Querétaro. Qro.<br/>
                  México 76100
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Respaldo:</span>
                <span className="font-black text-xl tracking-tighter text-gray-300">NUBAC</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 NUBAC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;