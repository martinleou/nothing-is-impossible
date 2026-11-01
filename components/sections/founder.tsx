export function Founder() {
  return (
    <section id="founder" className="section bg-[#0a0b10] py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="uppercase tracking-[3px] text-xs text-[#00e5ff] mb-3">ABOUT THE FOUNDER</div>

        <h2 className="font-display text-5xl md:text-6xl tracking-[-2.6px] font-semibold mb-12 md:mb-14">
          Founded by Martin-Leo Uvizl
        </h2>

        <div className="grid md:grid-cols-12 gap-x-10 lg:gap-x-14 gap-y-10 md:gap-y-0 items-center">
          {/* Main founder photo */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
            <div className="relative aspect-[3/4] w-[200px] md:w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#050507] shadow-xl">
              <img
                src="/images/martin-leo.jpg"
                alt="Martin-Leo Uvizl, Founder of Nothing Is Impossible"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Main bio */}
          <div className="md:col-span-8 lg:col-span-9 space-y-5 text-[16px] md:text-[17px] text-text-secondary leading-relaxed">
            <p>
              Martin-Leo Uvizl is the founder of Nothing Is Impossible.
            </p>
            <p>
              For more than 20 years he has helped entrepreneurs and business leaders turn ambitious goals into real, measurable results. His work has focused on practical growth: finding the real constraints holding companies back, implementing the right programs, and helping them reach levels of scale that previously felt out of reach, across leadership, marketing, sales, systems, and people.
            </p>
            <p>
              He is also a Senior Implementation Strategist to AI District Consulting.
            </p>
            <p>
              “I help entrepreneurs take production and income to a whole new level with advanced SI, while keeping their judgment and creativity firmly in the center.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
