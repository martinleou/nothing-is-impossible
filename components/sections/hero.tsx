'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[#050507] flex flex-col min-h-screen">
      {/* Top Navbar Space */}
      <div className="h-20 bg-[#050507] flex-shrink-0" />

      {/* Sharp Vibrant Image */}
      <div className="relative flex-1 w-full">
        <Image
          src="/sunrise-earth.jpg"
          alt="Earth at dawn"
          fill
          className="object-cover object-top brightness-110 contrast-110"
          priority
          quality={100}
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/45" />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
        <div className="text-amber-300/90 text-sm tracking-[4px] mb-6 font-light">
          EST. 2018
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-[4.8rem] font-bold tracking-[-2.5px] text-white leading-none mb-8 drop-shadow-2xl">
          NOTHING IS IMPOSSIBLE
        </h1>

        <p className="text-2xl text-slate-100 font-light max-w-2xl mx-auto mb-12">
          A new dawn of possibilities.
        </p>

        {/* Button moved up a bit */}
        <button
          onClick={() => {
            const el = document.getElementById('cta');
            if (el) {
              const yOffset = -90; // offset for fixed navbar
              const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-4 px-12 py-6 bg-white hover:bg-amber-300 text-black rounded-full text-xl font-medium transition-all duration-300 shadow-2xl group mt-4 cursor-pointer"
        >
          Begin the Journey
          <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </div>

      {/* Bottom Black Band */}
      <div className="h-24 bg-[#050507] flex-shrink-0 flex items-center justify-center border-t border-white/10">
        {/* Empty for now */}
      </div>
    </div>
  );
}