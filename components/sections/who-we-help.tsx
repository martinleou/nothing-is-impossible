"use client";

import { Users, TrendingUp, Building2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const audiences = [
  {
    icon: Users,
    title: "Solo Entrepreneurs & Founders",
    description: "You wear every hat. We build AI that gives you leverage equivalent to a 10-person team — without the overhead.",
    outcome: "Reclaim 15–25 hours/week and focus on high-leverage work.",
  },
  {
    icon: TrendingUp,
    title: "Small Business Owners (5–25 employees)",
    description: "Your team is stretched thin. We implement AI systems that automate operations, sales, and customer experience at scale.",
    outcome: "Achieve enterprise-level efficiency with a lean team.",
  },
  {
    icon: Building2,
    title: "Scaling Companies (25–100 employees)",
    description: "Growth is creating complexity. We design AI-powered operating systems that maintain velocity while improving margins.",
    outcome: "Scale revenue without proportional increase in headcount.",
  },
  {
    icon: Award,
    title: "Established Business Leaders",
    description: "You've built something substantial. Now you want an unfair advantage. We embed next-generation AI into your strategy and leadership.",
    outcome: "Create defensible moats and 10x decision quality.",
  },
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="section bg-[#0a0b10] py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase text-xs tracking-[3px] text-[#00e5ff] mb-2">WHO WE SERVE</div>
          <h2 className="font-display text-6xl tracking-[-2.6px] font-semibold">Ambitious leaders who refuse average</h2>
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
                <div className="mt-7 pt-6 border-t border-white/10 text-sm text-[#d4af37] font-medium">
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
