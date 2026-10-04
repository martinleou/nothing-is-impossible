import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="section max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="grid md:grid-cols-12 gap-x-16 gap-y-10 items-center">
        <div className="md:col-span-5">
          <div className="uppercase tracking-[3px] text-xs text-[#00e5ff] mb-3">OUR PHILOSOPHY</div>
          <h2 className="font-display text-6xl leading-[0.95] tracking-[-2.8px] font-semibold">
            We believe the only limit is imagination.
          </h2>
        </div>

        <div className="md:col-span-7 text-[17px] text-text-secondary space-y-6">
          <p>
            Nothing Is Impossible was founded on a simple but radical premise: every ambitious entrepreneur and business leader deserves access to world-class SI that actually moves the needle on performance and income.
          </p>
          <p>
            We don't sell generic tools. We architect custom SI operating systems tailored to your business — systems that multiply output, sharpen decision quality, and create compounding advantages your competitors cannot copy.
          </p>
        </div>
      </div>

      {/* Stats / Beliefs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        {[
          { number: "30–50%", label: "Average performance increase within 90 days" },
          { number: "4.9×", label: "Average return on SI investment in year one" },
          { number: "200+", label: "Entrepreneurs & companies transformed" },
        ].map((stat, i) => (
          <Card key={i} className="text-center py-9">
            <div className="font-display text-6xl font-semibold tracking-[-2.5px] text-[#d4af37] mb-3">{stat.number}</div>
            <div className="text-text-secondary text-[15px] max-w-[260px] mx-auto">{stat.label}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
