
import React from 'react';
import { CHARACTER_BANK } from '../constants';

const Characters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl serif font-bold mb-6 text-white text-glow">主星檔案庫</h1>
        <p className="text-purple-300/70 tracking-[0.2em] uppercase text-sm">Vault of the Main Stars</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {CHARACTER_BANK.map((char) => (
          <div key={char.name} className="group bg-black/40 border border-purple-900/30 rounded-[40px] overflow-hidden hover:border-purple-400 transition-all duration-700 flex flex-col shadow-lg">
            <div className="relative h-96 overflow-hidden">
              <img 
                src={char.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                alt={char.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-6 right-6 px-4 py-1.5 bg-purple-600/90 backdrop-blur-md rounded-full text-xs font-bold text-white tracking-widest uppercase">
                {char.type}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold serif text-white group-hover:text-purple-300 transition-colors">{char.name}</h3>
                <p className="text-purple-500 text-sm italic font-medium mt-1">{char.title}</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {char.description}
              </p>
              <button className="w-full py-3 rounded-2xl border border-purple-500/20 text-purple-400 text-sm font-bold tracking-widest group-hover:bg-purple-500 group-hover:text-white transition-all">
                探索星語
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
