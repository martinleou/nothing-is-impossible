const results = [
  {
    outcome: "Six Continents",
    detail:
      "Helped ambitious founders remove critical bottlenecks and reach new levels of scale across six continents.",
  },
  {
    outcome: "$50K → $400K",
    detail:
      "Turned a declining company from $50,000 to $400,000 in monthly revenue within a few months through precise diagnosis and focused programs.",
  },
  {
    outcome: "Root-Cause Growth",
    detail:
      "Known for isolating the real underlying barriers to expansion — whether leadership, systems, marketing, sales, or people — and delivering rapid, measurable growth.",
  },
];

export function Impact() {
  return (
    <section id="impact" className="section py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="uppercase tracking-[3px] text-xs text-[#00e5ff] leading-relaxed">
            REAL WORK WITH REAL ENTREPRENEURS AND LEADERS FROM AROUND THE WORLD
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-[-2.8px] font-semibold mt-3">
            They stopped playing small.
          </h2>
        </div>

        <div className="relative w-full mt-10 md:mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#050507]">
          <img
            src="/dubai.jpg"
            alt="Martin-Leo with clients and ambitious entrepreneurs in Dubai"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-10">
          {results.map((item) => (
            <div
              key={item.outcome}
              className="relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-[#111214]/90 p-7 md:p-8 overflow-hidden transition-all duration-300 hover:border-[#f4d03f]/30 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4),0_0_28px_rgba(244,208,63,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f4d03f]/75 to-transparent" />
              <div className="w-8 h-px bg-[#f4d03f]/80 mb-5" />
              <h3
                className="font-display text-[1.55rem] md:text-[1.7rem] tracking-[-0.9px] font-semibold text-[#f4d03f] leading-tight mb-4"
                style={{ textShadow: "0 0 10px rgba(244, 208, 63, 0.28)" }}
              >
                {item.outcome}
              </h3>
              <p className="text-[15px] md:text-[16px] text-text-secondary leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
