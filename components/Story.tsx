
import React, { useState, useEffect } from 'react';
import { STORY_BANK, STORY_ENDINGS } from '../storyData';
import { StoryEnding } from '../types';

const Story: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'calculating' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 屬性追蹤
  const [attributes, setAttributes] = useState({
    slacker: 0,      // 擺爛值
    combat: 0,       // 戰鬥值
    rational: 0,     // 理智/冷靜
    hedonism: 0,     // 享樂
    dependence: 0,   // 依附
    desire: 0,       // 慾望
    justice: 0,      // 是非/正義
    damage: 0,       // 受損
    hidden: 0,       // 隱蔽
    wisdom: 0,       // 智慧
    power: 0,        // 權力
    chaos: 0,        // 破壞/混沌
    awakening: 0,    // 覺醒
    wealth: 0,       // 財富
    sacrifice: 0     // 犧牲
  });

  const [finalEnding, setFinalEnding] = useState<StoryEnding | null>(null);

  const startStory = () => {
    setAttributes({
      slacker: 0, combat: 0, rational: 0, hedonism: 0, dependence: 0,
      desire: 0, justice: 0, damage: 0, hidden: 0, wisdom: 0,
      power: 0, chaos: 0, awakening: 0, wealth: 0, sacrifice: 0
    });
    setCurrentIndex(0);
    setGameState('playing');
  };

  const handleSelect = (index: number, optionIdx: number) => {
    const q = STORY_BANK[index];
    const opt = q.options[optionIdx];

    // 即時結局判定 (立即觸發)
    if (opt.immediateEnding) {
      const ending = STORY_ENDINGS.find(e => e.id === opt.immediateEnding);
      setFinalEnding(ending || STORY_ENDINGS[0]);
      setGameState('result');
      return;
    }

    // 更新屬性 (基於 OCR 邏輯簡化映射)
    const newAttrs = { ...attributes };
    if (optionIdx === 0) { // 選項 1
      if (index === 5) newAttrs.slacker += 5;
      if (index === 10) newAttrs.combat += 5;
      if (index === 20) newAttrs.hedonism += 5;
      if (index === 8) newAttrs.wealth += 5;
      if (index === 26) newAttrs.combat += 5;
    } else if (optionIdx === 1) { // 選項 2
      if (index === 22) newAttrs.sacrifice += 5;
      if (index === 29) newAttrs.awakening += 5;
    } else if (optionIdx === 2) { // 選項 3
      if (index === 5) newAttrs.slacker += 10;
      if (index === 21) newAttrs.slacker += 5;
    }

    setAttributes(newAttrs);

    if (currentIndex < STORY_BANK.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameState('calculating');
      setTimeout(() => calculateEnding(newAttrs), 2000);
    }
  };

  const calculateEnding = (finalAttrs: typeof attributes) => {
    let endingId = 12; // 默認平凡結局

    // 基於 OCR 提供的邏輯
    if (finalAttrs.slacker > 15) endingId = 2;
    else if (finalAttrs.hedonism > 4 && finalAttrs.slacker > 5) endingId = 3;
    else if (finalAttrs.combat > 8) endingId = 9;
    else if (finalAttrs.wealth > 8) endingId = 13;
    else if (finalAttrs.awakening > 5) endingId = 14;
    else if (finalAttrs.sacrifice > 4) endingId = 15;
    else if (finalAttrs.chaos > 8) endingId = 11;
    
    const ending = STORY_ENDINGS.find(e => e.id === endingId) || STORY_ENDINGS[11];
    setFinalEnding(ending);
    setGameState('result');
  };

  if (gameState === 'intro') {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl serif font-bold text-white mb-6 text-glow">故事劇場</h1>
        <p className="text-xl text-purple-300 italic mb-10">「指尖撥動著星辰的琴弦...」</p>
        <div className="bg-purple-900/10 border border-purple-500/20 p-12 rounded-[40px] shadow-2xl">
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            這是一段由你主宰的宿命。從命宮出發，穿越十二宮位，
            遇見守護星君，做出的每一個抉擇，都將決定你的最終下場。
          </p>
          <button onClick={startStory} className="px-14 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white shadow-2xl hover:scale-105 transition-all text-xl">
            啟動輪迴
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
        <div className="flex justify-between items-end mb-4">
          <span className="bg-purple-600 px-4 py-1 rounded text-sm font-bold uppercase tracking-widest">{q.palace} - {q.star}</span>
          <span className="text-gray-500 text-sm">{currentIndex + 1} / {STORY_BANK.length}</span>
        </div>
        <div className="w-full h-1.5 bg-purple-900/30 rounded-full mb-10 overflow-hidden">
          <div className="h-full bg-purple-500 transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="bg-black/60 backdrop-blur-xl border border-purple-500/20 rounded-[40px] overflow-hidden shadow-2xl">
          <div className="p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl serif font-bold text-white mb-8 text-center">{q.title}</h2>
            
            {q.image && (
              <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-10 border border-purple-500/10 shadow-lg">
                <img src={q.image} className="w-full h-full object-cover" alt="Scene" />
              </div>
            )}

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed serif mb-12 italic text-center min-h-[100px]">
              {q.description}
            </p>

            <div className="grid grid-cols-1 gap-5">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(currentIndex, i)}
                  className="group flex items-center gap-6 text-left p-6 md:p-8 rounded-2xl border border-purple-800/30 bg-purple-900/5 hover:bg-purple-800/20 hover:border-purple-400 transition-all"
                >
                  <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold group-hover:bg-purple-500 group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <span className="text-lg text-gray-300 group-hover:text-white">{opt.text}</span>
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
        <div className="w-24 h-24 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto mb-10"></div>
        <h2 className="text-2xl text-purple-400 serif italic animate-pulse">命運天秤正在傾斜...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center animate-fadeIn">
      <div className="mb-10">
        <span className="text-purple-500 text-sm tracking-[0.5em] uppercase font-bold">THE DESTINY REVEALED</span>
        <h1 className="text-6xl md:text-8xl serif font-bold text-white mt-6 text-glow">{finalEnding?.name}</h1>
        <div className="mt-6 px-6 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full inline-block text-purple-300 text-sm font-bold tracking-widest uppercase">
          {finalEnding?.type}
        </div>
      </div>

      <div className="bg-black/60 border border-purple-500/20 p-10 md:p-16 rounded-[40px] shadow-2xl relative text-left mb-16">
        <h3 className="text-purple-400 font-bold mb-6 flex items-center gap-3 tracking-widest text-sm uppercase">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          結局真相
        </h3>
        <p className="text-2xl text-gray-100 leading-relaxed mb-12 serif">{finalEnding?.description}</p>
        <h3 className="text-purple-400 font-bold mb-6 flex items-center gap-3 tracking-widest text-sm uppercase">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          星語寓意
        </h3>
        <p className="text-xl text-purple-300 italic font-light">「{finalEnding?.meaning}」</p>
      </div>

      <button onClick={startStory} className="px-12 py-5 bg-white text-purple-900 rounded-full font-bold shadow-xl hover:bg-purple-100 transition-all text-lg">
        重啟輪迴
      </button>
    </div>
  );
};

export default Story;
