
import React from 'react';

const NexusSite: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans flex">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-r border-slate-200 flex flex-col p-4 shadow-sm">
        <div className="h-12 w-12 bg-blue-600 rounded-xl mb-12 flex items-center justify-center text-white font-bold text-xl mx-auto md:mx-0">N</div>
        <nav className="flex-1 space-y-2">
          {['Dashboard', 'Analytics', 'Team', 'Settings'].map((item, i) => (
            <div key={i} className={`p-3 rounded-lg flex items-center gap-4 cursor-pointer transition-colors ${i === 0 ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50'}`}>
              <div className="w-5 h-5 bg-slate-200 rounded-sm"></div>
              <span className="hidden md:block font-medium">{item}</span>
            </div>
          ))}
        </nav>
        <button onClick={onBack} className="p-3 hover:bg-red-50 text-red-500 rounded-lg flex items-center gap-4 transition-colors">
          <div className="w-5 h-5 border border-red-500 rounded-sm flex items-center justify-center text-[8px]">X</div>
          <span className="hidden md:block font-medium">Exit Site</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-slate-200 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-xl font-bold">Project Overview</h2>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-slate-200"></div>
             <span className="hidden sm:block font-semibold">Alex Rivers</span>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             {[
               { label: 'Active Users', val: '12,450', change: '+12%' },
               { label: 'Revenue', val: '$84,200', change: '+5%' },
               { label: 'System Load', val: '32%', change: '-2%' }
             ].map((card, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <p className="text-slate-400 text-sm mb-1">{card.label}</p>
                 <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{card.val}</span>
                    <span className={`text-xs font-bold ${card.change.startsWith('+') ? 'text-green-500' : 'text-blue-500'}`}>{card.change}</span>
                 </div>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 min-h-[400px]">
                <h3 className="font-bold text-lg mb-6">Real-time Performance</h3>
                <div className="w-full h-64 bg-slate-50 rounded-2xl flex items-end p-4 gap-2">
                   {[40, 60, 45, 90, 65, 80, 50, 70, 40, 95].map((h, i) => (
                     <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-500/20 hover:bg-blue-500 transition-colors rounded-t-sm"></div>
                   ))}
                </div>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg mb-6">Recent Activity</h3>
                <div className="space-y-6">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">U</div>
                        <div className="flex-1">
                           <p className="text-sm font-semibold">User feedback resolved</p>
                           <p className="text-xs text-slate-400">2 minutes ago</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NexusSite;
