"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ArrowUpRight } from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  short: string;
  overview: string[];
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "We find where you’re actually stuck",
    short:
      "A focused conversation to get past symptoms and identify the real bottleneck holding you back.",
    overview: [
      "Most entrepreneurs come in with a sense of what the problem is, but the real bottleneck is often one level deeper.",
      "In this first step we have a focused conversation (not a long form or questionnaire). We listen carefully, ask the right questions, and get past the symptoms to identify the actual constraint that is holding growth back.",
      "By the end of this step you have clear visibility on where you are truly stuck, and why previous efforts may not have produced the results you expected.",
    ],
  },
  {
    number: "02",
    title: "We isolate your next step",
    short:
      "Using SI to focus on what matters, we identify the one or two moves that will create real momentum.",
    overview: [
      "Once we know the real bottleneck, the next challenge is choosing the right move.",
      "Most businesses get overwhelmed by long lists of things they “should” do. We use SI and practical analysis to isolate the one or two highest-impact actions that will create real momentum.",
      "You leave this step with one clear next step, not a 40-page plan that never gets opened.",
    ],
  },
  {
    number: "03",
    title: "We build it with you",
    short:
      "Whatever the next step requires (strategy, marketing, sales, or systems), we work alongside you to get it built and running, using SI to move faster.",
    overview: [
      "A clear next step only creates results when it is actually built and put into motion.",
      "In this step we work alongside you to implement whatever is needed, whether that is strategy, marketing and visibility, sales systems, or SI-supported execution. We use cutting-edge SI to move faster than either of us could alone, while keeping everything practical and grounded in your real business.",
      "The important work gets done and starts producing results.",
    ],
  },
  {
    number: "04",
    title: "We find the next one",
    short:
      "Once you’re moving, we go back to the start and find the next barrier and the next high-impact step so growth keeps compounding.",
    overview: [
      "Growth exposes new barriers. What worked at one stage of the business often becomes the constraint at the next.",
      "In this step we stay with you and return to the beginning of the process at a higher level. We identify the next barrier holding growth back and the next high-impact step that will clear it.",
      "This keeps momentum going, so progress doesn’t stall after the first breakthrough.",
    ],
  },
];

function StepModalContent({ step }: { step: ProcessStep }) {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00e5ff] via-[#00b4d8] to-[#00e5ff] opacity-20 blur-xl" />
      <div className="relative border border-[#00e5ff]/40 rounded-2xl p-6 md:p-8 bg-[#050507]">
        <div className="text-[#00e5ff] text-xs tracking-[2.5px] mb-2">STEP {step.number}</div>
        <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-[-1.5px] font-semibold pr-8">
          {step.title}
        </h3>

        <div className="mt-6 space-y-4 text-[15px] md:text-[16px] leading-relaxed text-text-secondary">
          {step.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="section max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-center mb-14 max-w-3xl mx-auto">
        <div className="uppercase tracking-[3px] text-xs text-[#00e5ff]">HOW IT WORKS</div>
        <h2 className="font-display text-5xl md:text-6xl tracking-[-2.8px] font-semibold mt-3">
          Four clear steps from stuck to take-off
        </h2>
        <p className="mt-6 text-[16px] md:text-[17px] text-text-secondary leading-relaxed">
          No long strategy decks. Just a clear path from stuck to moving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            className="service-card group flex flex-col cursor-pointer min-h-[220px]"
            onClick={() => setSelectedStep(index)}
          >
            <div className="flex-1">
              <div className="text-[#00e5ff] text-xs tracking-[2px] mb-2">{step.number}</div>
              <div className="font-semibold text-xl md:text-2xl tracking-[-0.6px] leading-tight mb-3 group-hover:text-[#00e5ff] transition-colors">
                {step.title}
              </div>
              <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
                {step.short}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-[#00e5ff] font-medium">Learn more</span>
              <ArrowUpRight
                className="text-[#00e5ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                size={17}
              />
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={selectedStep !== null}
        onClose={() => setSelectedStep(null)}
        className="max-w-2xl"
      >
        {selectedStep !== null && <StepModalContent step={steps[selectedStep]} />}
      </Modal>
    </section>
  );
}
