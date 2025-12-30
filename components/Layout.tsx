
import React from 'react';
import { View } from '../types';

interface LayoutProps {
  currentView: View;
  onViewChange: (view: View) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onViewChange, children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Starscape */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-950/20 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-purple-900/30 px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 cursor-pointer text-glow"
          onClick={() => onViewChange(View.HOME)}
        >
          指尖星語
        </div>
        <nav className="flex gap-4 md:gap-10">
          {[
            { id: View.HOME, label: '首頁' },
            { id: View.STORY, label: '故事劇場' },
            { id: View.CHARACTERS, label: '主星檔案' },
            { id: View.QUIZ, label: '命格測驗' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`text-sm md:text-base tracking-widest transition-all duration-300 relative group ${
                currentView === item.id ? 'text-purple-400 font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </nav>
      </header>

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className="bg-black/80 border-t border-purple-900/20 py-10 px-6 text-center">
        <p className="text-gray-500 text-sm serif tracking-[0.2em]">© 指尖星語 finger star.</p>
      </footer>
    </div>
  );
};

export default Layout;
