"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Opportunity Mapping",
    description: "We dive deep into your business model, bottlenecks, and ambitions. Together we identify the highest-leverage opportunities for AI to create asymmetric advantage.",
  },
  {
    number: "02",
    title: "Deep AI Readiness Audit",
    description: "Comprehensive analysis of your data, processes, team capabilities, and technology stack. We surface quick wins and long-term strategic bets.",
  },
  {
    number: "03",
    title: "Custom Strategy & Architecture",
    description: "We design your bespoke AI operating system — specific agents, workflows, integrations, and governance. You receive a clear roadmap with timelines and expected ROI.",
  },
  {
    number: "04",
    title: "Build, Integrate & Launch",
    description: "Our team builds and deploys production systems with your team. Rigorous testing, change management, and knowledge transfer ensure seamless adoption.",
  },
  {
    number: "05",
    title: "Measure, Optimize & Scale",
    description: "We continuously monitor performance, refine models, and expand capabilities. Your system gets smarter and more valuable every month.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="section py-20 border-t border-white/10 bg-[#0a0b10]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#00e5ff] text-xs tracking-[3px]">THE PROCESS</div>
          <h2 className="font-display text-6xl tracking-[-2.6px] font-semibold mt-3">A proven path to transformation</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps List */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`step w-full text-left p-6 rounded-2xl border transition-all flex gap-6 group ${
                  activeStep === index 
                    ? "border-[#00e5ff] bg-[#111214]" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className={`step-number font-display text-4xl font-semibold tracking-tighter transition-colors shrink-0 ${
                  activeStep === index ? "text-[#050507]" : "text-white/30 group-hover:text-white/60"
                }`}>
                  {step.number}
                </div>
                <div>
                  <div className={`font-semibold text-xl tracking-tight transition-colors ${activeStep === index ? "text-white" : "text-white/80"}`}>
                    {step.title}
                  </div>
                  {activeStep === index && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-text-secondary mt-3 leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Visual / Summary Panel */}
          <div className="hidden lg:block sticky top-24 glass rounded-3xl p-12 h-fit border border-white/10">
            <div className="text-xs uppercase tracking-[3px] text-[#00e5ff] mb-6">STEP {steps[activeStep].number}</div>
            
            <h3 className="font-display text-[42px] leading-[1.0] tracking-[-1.8px] font-semibold mb-8">
              {steps[activeStep].title}
            </h3>
            
            <p className="text-lg text-text-secondary">
              {steps[activeStep].description}
            </p>

            <div className="mt-12 pt-8 border-t border-white/10 text-sm text-text-muted">
              Average engagement length: <span className="text-white font-medium">6–14 weeks</span> to full operational deployment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
