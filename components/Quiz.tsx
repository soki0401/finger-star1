
import React, { useState } from 'react';
import { QUIZ_BANK } from '../constants';

const Quiz: React.FC = () => {
  const [step, setStep] = useState<'start' | 'playing' | 'result'>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({ Pioneer: 0, Leader: 0, Supporter: 0, Cooperator: 0 });

  const startQuiz = () => {
    setScores({ Pioneer: 0, Leader: 0, Supporter: 0, Cooperator: 0 });
    setCurrentIndex(0);
    setStep('playing');
  };

  const handleSelect = (attrs: any) => {
    setScores(prev => ({
      Pioneer: prev.Pioneer + (attrs.Pioneer || 0),
      Leader: prev.Leader + (attrs.Leader || 0),
      Supporter: prev.Supporter + (attrs.Supporter || 0),
      Cooperator: prev.Cooperator + (attrs.Cooperator || 0),
    }));

    if (currentIndex < QUIZ_BANK.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStep('result');
    }
  };

  const getResult = () => {
    const keys = Object.keys(scores) as Array<keyof typeof scores>;
    let maxKey = keys[0];
    keys.forEach(k => {
      if (scores[k] > scores[maxKey]) maxKey = k;
    });

    const mapping = {
      Leader: { name: "紫微星", desc: "妳天生具備尊貴的氣質與領導才能。在困境中，妳總是那顆能穩定軍心、指引方向的北極星。", img: "https://images.unsplash.com/photo-1518063311540-06497287b336?auto=format&fit=crop&q=80&w=800" },
      Pioneer: { name: "七殺星", desc: "妳充滿勇氣與衝勁。面對挑戰，妳絕不退縮，敢於打破傳統，為自己與他人開創全新的可能。", img: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=800" },
      Supporter: { name: "天機星", desc: "妳心思細密，富於謀略。妳不求台前的風光，但在幕後的運籌帷幄中，妳才是真正掌控局勢的人。", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" },
      Cooperator: { name: "太陰星", desc: "妳溫柔且富有同理心。妳的存在如同月光般靜謐而有力量，總是在和諧中成就偉大的事業。", img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800" }
    };

    return mapping[maxKey as keyof typeof mapping];
  };

  if (step === 'start') {
    return (
      <div className="max-w-3xl mx-auto py-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl serif font-bold text-white mb-8 text-glow">命格感應</h1>
        <div className="bg-purple-900/10 border border-purple-900/40 p-12 md:p-20 rounded-[50px] shadow-2xl">
          <p className="text-xl text-gray-300 mb-12 leading-relaxed serif">
            每個靈魂都對應著一顆遙遠的主星。透過本測驗，讓我們與你潛意識的頻率產生共鳴，找出那顆一直在背後默默守護星君。
          </p>
          <button 
            onClick={startQuiz}
            className="px-16 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white shadow-2xl hover:scale-110 transition-all text-xl"
          >
            啟動感應
          </button>
        </div>
      </div>
    );
  }

  if (step === 'playing') {
    const q = QUIZ_BANK[currentIndex];
    return (
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-bold uppercase tracking-[0.3em] text-sm">Current Query</span>
          <h2 className="text-4xl serif font-bold text-white mt-4">{q.title}</h2>
        </div>

        <div className="bg-black/60 border border-purple-900/30 rounded-[40px] p-8 md:p-14 shadow-2xl">
          <p className="text-2xl text-gray-200 mb-10 text-center serif italic leading-relaxed">{q.question}</p>
          
          {q.image && (
            <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-12 shadow-lg border border-purple-500/10">
              <img src={q.image} className="w-full h-full object-cover" alt="Question Scene" />
            </div>
          )}

          <div className="grid grid-cols-1 gap-5">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(opt.attributes)}
                className="w-full text-left p-7 rounded-2xl border border-purple-800/20 bg-purple-900/5 hover:bg-purple-500 hover:text-white transition-all text-lg font-medium text-gray-300"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const result = getResult();
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center animate-fadeIn">
      <div className="mb-14">
        <span className="text-purple-500 text-sm tracking-[0.4em] uppercase font-bold">Resonance Found</span>
        <h1 className="text-6xl md:text-8xl serif font-bold text-white mt-4 text-glow">{result.name}</h1>
      </div>

      <div className="bg-black/80 border border-purple-500/30 p-10 md:p-20 rounded-[50px] shadow-2xl flex flex-col items-center">
        <div className="w-full h-72 md:h-96 rounded-[40px] overflow-hidden mb-12 shadow-2xl border border-purple-500/20">
            <img src={result.img} className="w-full h-full object-cover" alt="Star Spirit" />
        </div>
        <p className="text-2xl text-gray-200 leading-relaxed mb-12 serif italic">
          「{result.desc}」
        </p>
        <button 
          onClick={() => setStep('start')}
          className="px-14 py-5 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all font-bold text-lg"
        >
          重新感應
        </button>
      </div>
    </div>
  );
};

export default Quiz;
