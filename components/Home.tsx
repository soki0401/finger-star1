
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { PALACES } from '../constants';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = scrollY * 0.15;
  const glowOpacity = Math.min(scrollY / 600, 1);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[120vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Dynamic Glowing Aura */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{ 
            opacity: glowOpacity,
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
          }}
        ></div>

        {/* 12 Palace Wheel */}
        <div 
          className="relative w-[320px] h-[320px] md:w-[650px] md:h-[650px] flex items-center justify-center transition-transform duration-150"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Main Ring */}
          <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full"></div>
          <div className="absolute inset-4 border border-purple-500/10 rounded-full"></div>
          
          {/* Inner Glow Center */}
          <div 
            className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full blur-[60px] md:blur-[100px] transition-all duration-500"
            style={{ backgroundColor: `rgba(167, 139, 250, ${0.1 + glowOpacity * 0.4})` }}
          ></div>

          {PALACES.map((name, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const radius = window.innerWidth < 768 ? 130 : 280;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div 
                key={name}
                className="absolute flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-20 border border-purple-500/20 rounded-lg bg-black/60 shadow-lg"
                style={{ 
                  left: `calc(50% + ${x}px - ${window.innerWidth < 768 ? '24px' : '40px'})`, 
                  top: `calc(50% + ${y}px - ${window.innerWidth < 768 ? '24px' : '40px'})`,
                  transform: `rotate(${-rotation}deg)`
                }}
              >
                <span className="text-purple-300 font-bold serif text-lg md:text-2xl">{name}</span>
                <span className="text-[8px] md:text-[10px] text-purple-600 uppercase tracking-widest mt-1">Palace</span>
              </div>
            );
          })}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-10 md:p-16 rounded-full bg-black/80 border border-purple-500/40 shadow-[0_0_50px_rgba(167,139,250,0.3)] glow-active text-center">
              <h1 className="text-4xl md:text-7xl serif font-bold text-white mb-2 tracking-widest">命盤</h1>
              <p className="text-purple-400 text-xs md:text-sm tracking-[0.5em] font-light">ECHOES OF THE STARS</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center px-4 max-w-2xl animate-pulse">
            <p className="text-xl md:text-3xl serif text-purple-100 italic font-light">"揭開屬於你我的的宇宙之謎..."</p>
        </div>
      </section>

      {/* Navigation Blocks */}
      <section className="py-32 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        <div 
          onClick={() => onNavigate(View.STORY)}
          className="group relative h-[450px] overflow-hidden rounded-3xl border border-purple-900/30 cursor-pointer transition-all duration-500 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
        >
          <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" alt="Story" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h3 className="text-3xl font-bold serif mb-3 text-white text-glow">指尖星語</h3>
            <p className="text-gray-400 text-sm leading-relaxed">沉浸式探索，踏入十四主星在凡間交織的神祕傳說。</p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate(View.CHARACTERS)}
          className="group relative h-[450px] overflow-hidden rounded-3xl border border-purple-900/30 cursor-pointer transition-all duration-500 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
        >
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" alt="Characters" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h3 className="text-3xl font-bold serif mb-3 text-white text-glow">主星檔案</h3>
            <p className="text-gray-400 text-sm leading-relaxed">深入瞭解每顆星曜的性格、天賦與人生課題。</p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate(View.QUIZ)}
          className="group relative h-[450px] overflow-hidden rounded-3xl border border-purple-900/30 cursor-pointer transition-all duration-500 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
        >
          <img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" alt="Quiz" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h3 className="text-3xl font-bold serif mb-3 text-white text-glow">命格測驗</h3>
            <p className="text-gray-400 text-sm leading-relaxed">透過直覺感應，找尋妳生命中的守護星君。</p>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="pb-40 px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl serif mb-10 text-purple-200">當星辰連成一線，命運即刻啟動</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
          紫微斗數，乃是流傳千年的星宮秘術。每個人的誕生，都對應著天上的一顆主星。
          無論是開創者的勇猛，還是領導者的尊貴，亦或是支援者的智慧，都早已銘刻在命盤之中。
        </p>
      </section>
    </div>
  );
};

export default Home;
