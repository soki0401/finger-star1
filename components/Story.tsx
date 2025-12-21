
import React, { useState } from 'react';
import { STORY_BANK, STORY_ENDINGS } from '../constants';
import { StoryEnding } from '../types';

const Story: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'calculating' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0 });
  const [finalEnding, setFinalEnding] = useState<StoryEnding | null>(null);

  const startStory = () => {
    setScores({ A: 0, B: 0, C: 0 });
    setCurrentIndex(0);
    setGameState('playing');
  };

  const handleSelect = (type: 'A' | 'B' | 'C') => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (currentIndex < STORY_BANK.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameState('calculating');
      setTimeout(() => calculateFinalEnding(newScores), 2000);
    }
  };

  const calculateFinalEnding = (finalScores: { A: number, B: number, C: number }) => {
    let endingId = 3; // Default
    if (finalScores.A > finalScores.B && finalScores.A > finalScores.C) endingId = 1;
    else if (finalScores.B > finalScores.A && finalScores.B > finalScores.C) endingId = 2;
    else if (finalScores.C > 1) endingId = 4;

    const ending = STORY_ENDINGS.find(e => e.id === endingId) || STORY_ENDINGS[0];
    setFinalEnding(ending);
    setGameState('result');
  };

  if (gameState === 'intro') {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <div className="mb-10 text-glow">
          <h1 className="text-5xl md:text-7xl serif font-bold text-white mb-6">星語劇場</h1>
          <p className="text-xl text-purple-300 italic">「妳的選擇，正編織著星圖的軌跡...」</p>
        </div>
        <div className="bg-purple-900/10 border border-purple-500/20 p-12 rounded-[40px] shadow-2xl">
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            這是一段跨越星空的旅程。妳將踏入不同的宮位，遇見不同的星君。
            每一個細微的決定，都將引導妳走向截然不同的宿命。
          </p>
          <button 
            onClick={startStory}
            className="px-14 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white shadow-2xl hover:scale-105 transition-all text-xl"
          >
            踏入命宮
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    const q = STORY_BANK[currentIndex];
    const progress = ((currentIndex + 1) / STORY_BANK.length) * 100;

    return (
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-purple-600 px-3 py-1 rounded-md text-sm font-bold">{q.palace}</span>
            <span className="text-purple-400 serif text-xl">{q.star}</span>
          </div>
          <span className="text-gray-500 text-sm tracking-widest">{currentIndex + 1} / {STORY_BANK.length}</span>
        </div>
        
        <div className="w-full h-[2px] bg-purple-900/30 rounded-full mb-12 overflow-hidden">
          <div className="h-full bg-purple-500 transition-all duration-700 shadow-[0_0_10px_#8b5cf6]" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="bg-black/60 backdrop-blur-2xl border border-purple-500/20 rounded-[40px] overflow-hidden shadow-2xl">
          <div className="p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl serif font-bold text-white mb-8 text-center">{q.title}</h2>
            
            {/* Image between title and question */}
            {q.image && (
              <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-10 shadow-xl border border-purple-500/10">
                <img src={q.image} className="w-full h-full object-cover" alt="Scene" />
              </div>
            )}

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed serif mb-12 italic text-center">
              {q.description}
            </p>

            <div className="grid grid-cols-1 gap-5">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.type)}
                  className="group relative text-left p-6 md:p-8 rounded-2xl border border-purple-800/30 bg-purple-900/5 hover:bg-purple-800/20 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold group-hover:bg-purple-500 group-hover:text-white transition-all">
                      {opt.type}
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'calculating') {
    return (
      <div className="max-w-4xl mx-auto py-48 px-6 text-center">
        <div className="relative inline-block mb-10">
          <div className="w-32 h-32 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-purple-400 font-bold animate-pulse text-sm">判定中</span>
          </div>
        </div>
        <h2 className="text-2xl text-gray-400 serif italic">命運之輪正在收束妳的所有選擇...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center">
      <div className="mb-14">
        <span className="text-purple-500 text-sm tracking-[0.5em] uppercase font-bold">THE FINAL ECHO</span>
        <h1 className="text-6xl md:text-8xl serif font-bold text-white mt-4 text-glow">
          {finalEnding?.name}
        </h1>
        <div className="mt-6 px-6 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full inline-block text-purple-300 text-sm font-bold uppercase tracking-widest">
          {finalEnding?.type}
        </div>
      </div>

      <div className="bg-black/60 border border-purple-500/20 p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden text-left mb-16">
        <div className="absolute -top-10 -right-10 opacity-5 text-[15rem] serif font-bold text-purple-500 pointer-events-none">終</div>
        
        <h3 className="text-purple-400 font-bold mb-6 flex items-center gap-3 tracking-widest text-sm uppercase">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
          結局描述
        </h3>
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-12 serif">
          {finalEnding?.description}
        </p>

        <h3 className="text-purple-400 font-bold mb-6 flex items-center gap-3 tracking-widest text-sm uppercase">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
          星語寓意
        </h3>
        <p className="text-lg md:text-xl text-purple-300/80 italic font-light">
          「{finalEnding?.meaning}」
        </p>
      </div>

      <button 
        onClick={startStory}
        className="px-12 py-5 bg-white text-purple-900 rounded-full font-bold shadow-xl hover:bg-purple-100 transition-all text-lg"
      >
        重新輪迴
      </button>
    </div>
  );
};

export default Story;
