"use client";

import { Users, TrendingUp, Building2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const audiences = [
  {
    icon: Users,
    title: "Stuck on Strategy",
    description: "“I have the drive, but I don’t know what to prioritize.”",
    outcome: "We isolate the one or two moves that will actually move the needle, not a long plan you’ll never open.",
  },
  {
    icon: TrendingUp,
    title: "Stuck on Marketing & Visibility",
    description: "“I know I have something valuable, but the right people aren’t finding me.”",
    outcome: "We sharpen your positioning and messaging with SI so your offer becomes obvious to the people who need it.",
  },
  {
    icon: Building2,
    title: "Stuck on Sales",
    description: "“Leads come in, but they don’t convert the way they should.”",
    outcome: "We fix the gap between interest and commitment: the conversations, the follow-up, and the close.",
  },
  {
    icon: Award,
    title: "Stuck on Execution",
    description: "“I know what needs to be done, I just can’t get it all done.”",
    outcome: "We build practical systems and SI support so the important work actually gets finished.",
  },
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="section bg-[#0a0b10] py-16 md:py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="uppercase text-xs tracking-[3px] text-[#00e5ff] mb-2">Turning Obstacles into Momentum</div>
          <h2 className="font-display text-5xl md:text-6xl tracking-[-2.6px] font-semibold">Where are you stuck?</h2>
        </div>

        <div className="max-w-3xl mx-auto mb-8 md:mb-9 text-center">
          <p className="text-[15px] md:text-[16px] text-text-secondary leading-snug">
            Here are some of the ways we can help you find your way through.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-7">
                  <Icon className="text-[#00e5ff]" size={24} />
                </div>
                <h3 className="font-semibold text-2xl tracking-tight mb-4">{item.title}</h3>
                <p className="text-[15px] text-text-secondary flex-grow leading-relaxed">{item.description}</p>
                <div className="mt-7 pt-6 border-t border-white/10 text-sm text-[#f4d03f] font-medium" style={{ textShadow: '0 0 6px rgba(244, 208, 63, 0.5)' }}>
                  {item.outcome}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
