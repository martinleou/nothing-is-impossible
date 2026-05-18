"use client";

import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Nothing Is Impossible didn&apos;t just implement AI — they fundamentally rewired how our leadership team thinks and operates. We&apos;ve seen a 47% increase in output and closed our largest deal in company history using their systems.",
    name: "Elena Vasquez",
    role: "Founder & CEO",
    company: "Vanguard Dynamics",
    result: "+47% team output",
  },
  {
    quote: "I went from drowning in operations to having an AI co-founder that handles 70% of my previous workload. The revenue engine they built for us is now our single biggest growth driver. Best investment I&apos;ve ever made.",
    name: "Marcus Chen",
    role: "Founder",
    company: "Aether Labs",
    result: "3.8× pipeline in 5 months",
  },
  {
    quote: "The executive transformation program gave me back 22 hours a week. More importantly, the quality of my strategic decisions has improved dramatically. My board noticed within one quarter.",
    name: "Dr. Priya Malhotra",
    role: "Managing Partner",
    company: "Horizon Capital",
    result: "22 hrs/week reclaimed",
  },
  {
    quote: "We&apos;ve worked with several AI consultancies. Nothing Is Impossible is in a different league. They delivered working systems in weeks, not months, and the ROI was visible in our P&amp;L within 60 days.",
    name: "Thomas Bergmann",
    role: "CEO",
    company: "Nordic Precision Group",
    result: "ROI visible in 60 days",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <div className="text-[#00e5ff] text-xs tracking-[3px] mb-2">REAL RESULTS FROM REAL LEADERS</div>
        <h2 className="font-display text-6xl tracking-[-2.5px] font-semibold">They stopped playing small.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial flex flex-col justify-between p-9">
            <div>
              <div className="text-2xl leading-tight tracking-[-0.4px] font-medium mb-9">
                “{testimonial.quote}”
              </div>
            </div>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-text-secondary">{testimonial.role} at {testimonial.company}</div>
              <div className="inline-block mt-4 px-3.5 py-1 bg-white/5 text-[#d4af37] text-xs font-medium rounded">
                {testimonial.result}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
