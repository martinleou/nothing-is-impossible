"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  short: string;
  detail: string[];
};

const services: Service[] = [
  {
    title: "SI Business Clarity Audit",
    short:
      "A focused look at where you are actually stuck — operations, bottlenecks, priorities, and opportunities. You leave knowing the highest-impact next moves.",
    detail: [
      "Most entrepreneurs feel busy but unclear on what will actually move the needle.",
      "In this focused audit we look at your current operations, bottlenecks, priorities, and opportunities. We cut through the noise and identify the highest-impact places where SI can create real gains — fast.",
      "You leave with clear priorities and a practical roadmap of the next moves that will increase production and income.",
    ],
  },
  {
    title: "Custom SI Agents",
    short:
      "We build SI agents that take over repetitive and time-consuming work so you and your team can focus on the decisions and relationships that drive growth.",
    detail: [
      "Repetitive and time-consuming work is one of the biggest hidden drains on growth.",
      "We design and build SI agents that fit the way your business actually works. These agents take over the tasks that slow you and your team down — so you can focus on the decisions, relationships, and creative work that drive results.",
      "The goal is simple: more output in less time, with less friction.",
    ],
  },
  {
    title: "Revenue & Sales Acceleration",
    short:
      "SI systems that help you generate better leads, close more deals, and increase the value of each customer — without needing a bigger team.",
    detail: [
      "Many small and growing businesses face one of two core problems:",
      "They don’t have enough qualified leads coming in, or",
      "Leads come in but don’t convert well enough (and customer value stays lower than it could be).",
      "We build SI systems that can help with both.",
      "For businesses that need more leads, we use SI to improve visibility, outreach, and lead generation so more of the right people find you.",
      "For businesses that already get attention, we improve conversion, follow-up, and customer value — so more of those leads turn into real revenue without needing a larger sales team.",
      "The focus is practical revenue growth, not complexity.",
    ],
  },
  {
    title: "Founder & Leadership Support",
    short:
      "SI support built for the founder or leadership team. It helps you get more done in less time, make clearer decisions faster, and free up space for the creative and future-oriented work only you can do.",
    detail: [
      "As a founder or leader, your time and attention are the most valuable resources in the company.",
      "We create SI support that helps you get more of the important work done in less time, make clearer decisions faster, and free up mental space for the creative and future-oriented work only you can do.",
      "This is about leverage for the person at the center of the business.",
    ],
  },
  {
    title: "Team SI Enablement",
    short: "We equip your team to use SI effectively in their daily work so the gains spread across the whole company.",
    detail: [
      "SI only creates lasting results when the whole team knows how to use it well.",
      "We train and equip your people to work effectively with SI in their daily tasks. The goal is that the gains spread across the company instead of staying limited to one person or department.",
      "This turns SI from a tool into a real capability of the business.",
    ],
  },
  {
    title: "Ongoing Partnership",
    short: "A long-term collaboration focused on continuous improvement. We keep finding the next bottleneck and the next high-impact step as your company grows.",
    detail: [
      "Growth is not a one-time project. New bottlenecks appear as the company scales.",
      "In an ongoing partnership we keep watching results, refining the systems, and identifying the next high-impact step. You get continuous improvement and a trusted partner who stays focused on increasing production and income as the business grows.",
    ],
  },
];

function ServiceModalContent({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <div>
      <div className="text-[#00e5ff] text-xs tracking-[2.5px] mb-2">SERVICE</div>
      <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-[-1.5px] font-semibold pr-10">
        {service.title}
      </h3>

      <div className="mt-7 space-y-6">
        <div className="rounded-2xl border border-white/[0.08] bg-[#050507]/50 px-5 py-5 md:px-6 md:py-6">
          <div className="text-[11px] uppercase tracking-[2px] text-[#00e5ff] mb-3">
            What This Delivers
          </div>
          <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-text-secondary">
            {service.detail.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          onClose();
          setTimeout(() => {
            document.getElementById("cta")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 180);
        }}
        className="w-full mt-8 inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full border border-[#00f5ff] text-white text-base md:text-lg font-medium tracking-[0.5px] transition-all duration-300 hover:bg-[#00f5ff]/10 hover:text-[#00f5ff] hover:border-[#00f5ff] hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] active:scale-[0.985] group cursor-pointer"
      >
        Start with a Strategy Call
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00f5ff]">
          →
        </span>
      </button>
    </div>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="section max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-center mb-14 max-w-3xl mx-auto">
        <div className="uppercase tracking-[3px] text-xs text-[#00e5ff]">WHAT WE DELIVER</div>
        <h2 className="font-display text-5xl md:text-6xl tracking-[-2.8px] font-semibold mt-3">
          Precision systems for real momentum
        </h2>
        <p className="mt-6 text-[16px] md:text-[17px] text-text-secondary leading-relaxed">
          We help ambitious entrepreneurs and leaders achieve breakthroughs in production and income by finding the real bottleneck and the next high-impact moves.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="service-card group flex flex-col cursor-pointer min-h-[240px]"
            onClick={() => setSelectedService(index)}
          >
            <div className="flex-1">
              <div className="font-semibold text-xl md:text-2xl tracking-[-0.6px] leading-tight mb-4 group-hover:text-[#00e5ff] transition-colors">
                {service.title}
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed">{service.short}</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm">
              <span
                className="text-[#f4d03f] font-medium"
                style={{ textShadow: "0 0 8px rgba(244, 208, 63, 0.5)" }}
              >
                Learn more
              </span>
              <ArrowUpRight
                className="text-[#f4d03f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                size={17}
                style={{ filter: "drop-shadow(0 0 4px rgba(244, 208, 63, 0.5))" }}
              />
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        className="max-w-2xl"
      >
        {selectedService !== null && (
          <ServiceModalContent
            service={services[selectedService]}
            onClose={() => setSelectedService(null)}
          />
        )}
      </Modal>
    </section>
  );
}
