'use client';

export default function Hero() {
  return (
    <div className="bg-[#050507] flex flex-col min-h-screen overflow-hidden">
      {/* Top Navbar Space */}
      <div className="h-20 bg-[#050507] flex-shrink-0" />

      {/* Hero Background (video on desktop, static poster on mobile) */}
      <div className="relative flex-1 w-full">
        <VideoBackground />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pt-20">
        {/* Small branding at top */}
        <div className="text-amber-300/90 text-sm tracking-[4px] mb-6 font-light">
          EST. 2026
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-[4.8rem] font-bold tracking-[-2.5px] text-white leading-none mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
          NOTHING IS IMPOSSIBLE
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-slate-100 font-light max-w-2xl md:max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
          We help ambitious entrepreneurs and business leaders use cutting-edge Super Intelligence (SI) to increase their companies&apos; productivity and revenue, taking their companies to levels of prosperity and scale that once seemed impossible.
        </p>

        {/* Button — high-tech premium style */}
        <button
          onClick={() => {
            const el = document.getElementById('cta');
            if (el) {
              const yOffset = -90; // offset for fixed navbar
              const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full border border-[#00f5ff] text-white text-lg font-medium tracking-[0.5px] transition-all duration-300 hover:bg-[#00f5ff]/10 hover:text-[#00f5ff] hover:border-[#00f5ff] hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] active:scale-[0.985] group mt-2 cursor-pointer"
        >
          Begin the Journey
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00f5ff]">→</span>
        </button>
      </div>

      {/* Bottom Black Band — Enterprise positioning */}
      <div className="bg-[#050507] flex-shrink-0 flex items-center justify-center border-t border-white/10 py-6 px-6">
        <p className="text-center text-sm md:text-base text-amber-300/90 max-w-4xl tracking-[0.5px]">
          Clear results. Real momentum. No jargon.
        </p>
      </div>
    </div>
  );
}

// Responsive Video Background Component
// SpaceX-style iOS / mobile optimized hero video background
function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline={true}
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        // Critical for iOS Safari autoplay (prevents fullscreen takeover)
        {...{ 'webkit-playsinline': true }}
        // Ensure no controls appear on the hero
        controls={false}
      >
        {/* Desktop / wide screens: high-quality horizontal epic video */}
        <source 
          src="/hero-video.mp4" 
          type="video/mp4" 
          media="(min-width: 768px)" 
        />
        {/* Mobile / portrait: vertical version (better sunrise focus) */}
        <source 
          src="/videos/hero-video-vertical.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Extremely light overlay in the upper area — lets the golden sunrise and sun rays shine */}
      <div className="absolute inset-0 bg-black/5 z-10" />

      {/* Very subtle vignette for cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,7,0.25)_85%)] z-10" />

      {/* Strong but elegant bottom gradient — protects title and "Begin the Journey" button */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[#050507] via-[#050507]/85 to-transparent z-10" />

      {/* Very light top fade for EST. 2026 text */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#050507]/20 to-transparent z-10" />
    </>
  );
}
