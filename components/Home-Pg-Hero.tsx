export default function Hero() {
  return (
    <header className="relative py-16 px-5 text-center overflow-hidden bg-white">
      {/* Welcome Tag */}
      <div className="flex items-center justify-center gap-3 text-[11px] tracking-[4px] font-bold uppercase mb-4">
        <span className="w-3 h-3 bg-cyan-400"></span>
        WELCOME TO
        <span className="w-3 h-3 bg-cyan-400"></span>
      </div>

     
      <h1 className="text-[clamp(40px,8vw,90px)] font-black leading-none tracking-tighter uppercase mb-8">
        INN<span className="text-cyan-400">O</span>VATI<span className="text-cyan-400">O</span>N LAB
      </h1>

    
      <div className="flex justify-center gap-4 relative z-10">
        <button className="bg-black text-white px-9 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors">
          Explore
        </button>
        <button className="bg-black text-white px-9 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors">
          News
        </button>
      </div>

      {/* Decorative Bars (Left) */}
      <div className="absolute left-12 bottom-0 flex items-end gap-2 hidden lg:flex">
        <div className="w-4 h-6 bg-cyan-400 opacity-50"></div>
        <div className="w-4 h-12 bg-cyan-400 opacity-80"></div>
        <div className="w-4 h-20 bg-cyan-400"></div>
      </div>

      {/* Decorative SVG (Right) */}
      <div className="absolute right-12 bottom-0 w-24 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C0 44.77 44.77 0 100 0 L100 100 Z" fill="black" />
          <circle cx="20" cy="80" r="20" fill="#22d3ee" /> 
        </svg>
      </div>
    </header>
  );
}