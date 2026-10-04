"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "SI Business Operating System Audit",
    short: "Deep diagnostic of your current workflows, decision bottlenecks, and hidden automation opportunities.",
    full: "A comprehensive 360° audit of your business operations, leadership decision processes, and revenue systems. We deliver a prioritized roadmap with projected ROI for every recommended SI intervention.",
    outcome: "Clear 90-day action plan with quantified impact.",
  },
  {
    title: "Custom SI Agent Development",
    short: "Bespoke intelligent agents trained on your business data, processes, and voice.",
    full: "We design, train, and deploy production-grade SI agents that handle high-value repetitive work — from sophisticated lead qualification and proposal generation to customer success playbooks and internal knowledge retrieval.",
    outcome: "Agents that feel like senior team members from day one.",
  },
  {
    title: "Revenue Acceleration Engine",
    short: "SI-powered systems that multiply pipeline quality, conversion rates, and customer lifetime value.",
    full: "End-to-end revenue systems combining predictive lead scoring, personalized outreach at scale, intelligent follow-up sequences, and churn prediction — all orchestrated by SI that learns your best customers.",
    outcome: "Predictable, compounding revenue growth.",
  },
  {
    title: "Executive SI Transformation",
    short: "Personal operating system redesign for founders and executives who want maximum leverage.",
    full: "We rebuild how you work — calendar, decision frameworks, research, communication, and strategic planning — with SI as a true co-pilot. Includes 1:1 coaching and system implementation.",
    outcome: "You operate at the level of a 10-person strategic team.",
  },
  {
    title: "SI Team Enablement Program",
    short: "Transform your entire organization into an SI-fluent, high-performance machine.",
    full: "Custom training, playbooks, and change management for leadership teams and departments. We don't just teach tools — we install new ways of thinking and working that create lasting cultural advantage.",
    outcome: "An organization that gets smarter every week.",
  },
  {
    title: "Ongoing SI Performance Partnership",
    short: "Continuous optimization, new capability deployment, and strategic advisory.",
    full: "Retainer relationship for companies that want to stay at the absolute frontier. Monthly strategy sessions, quarterly system audits, early access to new models and techniques, and a dedicated SI architect.",
    outcome: "Permanent competitive asymmetry.",
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="section max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#00e5ff]">WHAT WE DELIVER</div>
        <h2 className="font-display text-6xl tracking-[-2.8px] font-semibold mt-3">Precision SI systems.<br />Compounding results.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="service-card group flex flex-col cursor-pointer"
            onClick={() => setSelectedService(index)}
          >
            <div className="flex-1">
              <div className="font-semibold text-2xl tracking-[-0.6px] leading-tight mb-4 group-hover:text-[#00e5ff] transition-colors">
                {service.title}
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {service.short}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm">
              <span className="text-[#d4af37] font-medium">Learn more</span>
              <ArrowUpRight className="text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" size={17} />
            </div>
          </Card>
        ))}
      </div>

      {/* Service Detail Modal */}
      <Modal isOpen={selectedService !== null} onClose={() => setSelectedService(null)}>
        {selectedService !== null && (
          <div>
            <div className="text-[#00e5ff] text-xs tracking-[2px] mb-2">SERVICE</div>
            <h3 className="font-display text-4xl leading-[1.05] tracking-[-1.5px] font-semibold pr-8">
              {services[selectedService].title}
            </h3>

            <div className="mt-7 space-y-6 text-[15px] leading-relaxed text-text-secondary">
              <p>{services[selectedService].full}</p>
              <div className="pt-5 border-t border-white/10">
                <div className="font-medium text-white mb-1">Expected Outcome</div>
                <div className="text-[#d4af37]">{services[selectedService].outcome}</div>
              </div>
            </div>

            <Button 
              variant="gold" 
              size="lg" 
              className="w-full mt-9"
              onClick={() => {
                setSelectedService(null);
                setTimeout(() => {
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 180);
              }}
            >
              Start with a Strategy Call
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
