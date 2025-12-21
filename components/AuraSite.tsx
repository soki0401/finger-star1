
import React from 'react';

const AuraSite: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-stone-50 text-stone-900 font-luxury min-h-screen">
      <nav className="p-8 flex justify-between items-center">
        <button onClick={onBack} className="text-sm border-b border-stone-300 tracking-widest">BACK</button>
        <div className="text-3xl tracking-[0.2em] font-bold">AURA</div>
        <div className="space-x-8 text-sm tracking-widest hidden md:block">
          <span>COLLECTIONS</span>
          <span>STORY</span>
          <span>CART</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <h1 className="text-6xl md:text-8xl leading-tight mb-8">Ethereal<br/>Glow</h1>
            <p className="font-sans text-stone-500 leading-relaxed max-w-sm mb-12">
              Our 2024 Winter collection captures the stillness of moonlight in recycled platinum and ethically sourced diamonds.
            </p>
            <button className="bg-stone-900 text-white px-10 py-4 font-sans text-sm tracking-widest hover:bg-stone-800 transition-colors">
              DISCOVER MORE
            </button>
          </div>
          <div className="order-1 md:order-2 h-[600px] bg-stone-200">
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Jewelry" />
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl tracking-widest">CURATED SELECTION</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="space-y-4">
                <div className="aspect-[3/4] bg-stone-100 overflow-hidden">
                  <img src={`https://picsum.photos/seed/aura${i}/600/800`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Product" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm tracking-wide">SILK RING 00{i}</h3>
                  <p className="text-stone-400 text-xs mt-1">$1,200.00</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuraSite;
