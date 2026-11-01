export function About() {
  return (
    <section id="about" className="section max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="grid md:grid-cols-12 gap-x-16 gap-y-10 items-center">
        <div className="md:col-span-5">
          <div className="uppercase tracking-[3px] text-xs text-[#00e5ff] mb-3">OUR PHILOSOPHY</div>
          <h2 className="font-display text-6xl leading-[0.95] tracking-[-2.8px] font-semibold">
            We believe the only real limit is your own idea of what is possible.
          </h2>
        </div>

        <div className="md:col-span-7 text-[17px] text-text-secondary space-y-6 leading-relaxed">
          <p>
            We are here to help you expand that view and reach new heights, step by step.
          </p>
          <p>
            Most entrepreneurs don&apos;t need more complex technology.
            They need tools that actually increase production, income, and scale — fast.
          </p>
          <p>
            We use cutting-edge SI to help ambitious business leaders remove bottlenecks, multiply output, and reach levels of growth that previously felt out of reach — while keeping their judgment, creativity, and leadership firmly in the center.
          </p>
          <p>
            Clear results. Real momentum. No jargon.
          </p>
        </div>
      </div>
    </section>
  );
}
