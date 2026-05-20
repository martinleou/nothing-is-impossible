"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Please enter your company name"),
  size: z.enum(["solo", "5-25", "25-100", "100+"]),
  challenge: z.string().min(20, "Please describe your biggest challenge (min 20 characters)"),
  timeframe: z.enum(["immediately", "30-days", "this-quarter", "exploring"]),
});

type FormData = z.infer<typeof formSchema>;

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: "5-25",
      timeframe: "30-days",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call (replace with real endpoint or Resend/Loops/etc later)
    await new Promise((resolve) => setTimeout(resolve, 950));

    console.log("Strategy Call Request:", data);

    toast.success("Request received. We'll be in touch within 4 hours to schedule your call.", {
      description: "Check your email for a confirmation and calendar link.",
      duration: 6000,
    });

    setIsSubmitting(false);
    setIsModalOpen(false);
    reset();
  };

  return (
    <section id="cta" className="section relative py-24 bg-[#050507] border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1f2128_0.8px,transparent_1px)] bg-[length:3px_3px] opacity-70" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="text-[#d4af37] text-sm tracking-[4px] mb-4">THE NEXT MOVE IS YOURS</div>
        
        <h2 className="font-display text-6xl md:text-7xl tracking-[-3.2px] font-semibold leading-none mb-6">
          Ready to make the<br />impossible possible?
        </h2>
        
        <p className="text-2xl text-text-secondary mb-10 max-w-lg mx-auto">
          Join the leaders who are already operating at a level their competitors cannot match.
        </p>

        <Button 
          variant="gold" 
          size="lg" 
          onClick={() => setIsModalOpen(true)}
          className="text-lg px-14 h-14"
        >
          Book Your Free 30-Minute Strategy Call
        </Button>

        <div className="mt-6 text-xs text-text-muted tracking-wide">
          100% confidential. No hard sell. Pure strategic value.
        </div>
      </div>

      {/* Booking Modal with Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="max-w-[520px]">
        <div className="pr-4">
          <div className="text-[#00e5ff] text-xs tracking-[2.5px] mb-1">NEXT STEP</div>
          <h3 className="font-display text-4xl tracking-[-1.3px] font-semibold leading-none">Book Your Strategy Call</h3>
          <p className="text-text-secondary mt-4">Tell us a little about your business. We'll prepare a customized 30-minute session focused entirely on your opportunities.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-text-secondary block mb-1.5">FULL NAME</label>
              <input {...register("name")} className="input w-full rounded-xl px-5 h-12 text-base" placeholder="Alex Rivera" />
              {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
            </div>
            <div>
              <label className="text-xs text-text-secondary block mb-1.5">WORK EMAIL</label>
              <input {...register("email")} type="email" className="input w-full rounded-xl px-5 h-12 text-base" placeholder="you@company.com" />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs text-text-secondary block mb-1.5">COMPANY NAME</label>
            <input {...register("company")} className="input w-full rounded-xl px-5 h-12 text-base" placeholder="Acme Ventures" />
            {errors.company && <p className="text-red-400 text-xs mt-1.5">{errors.company.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-text-secondary block mb-1.5">COMPANY SIZE</label>
              <select {...register("size")} className="input w-full rounded-xl px-5 h-12 text-base appearance-none">
                <option value="solo">Solo / Founder</option>
                <option value="5-25">5–25 employees</option>
                <option value="25-100">25–100 employees</option>
                <option value="100+">100+ employees</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-text-secondary block mb-1.5">WHEN ARE YOU LOOKING TO START?</label>
              <select {...register("timeframe")} className="input w-full rounded-xl px-5 h-12 text-base appearance-none">
                <option value="immediately">Immediately</option>
                <option value="30-days">Within 30 days</option>
                <option value="this-quarter">This quarter</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-text-secondary block mb-1.5">WHAT'S YOUR BIGGEST AI / PERFORMANCE CHALLENGE RIGHT NOW?</label>
            <textarea 
              {...register("challenge")} 
              rows={4}
              className="input w-full rounded-2xl px-5 py-4 text-base resize-y min-h-[108px]" 
              placeholder="We’re growing fast but our sales process is still manual. I’m spending too much time on low-leverage tasks..."
            />
            {errors.challenge && <p className="text-red-400 text-xs mt-1.5">{errors.challenge.message}</p>}
          </div>

          <Button 
            type="submit" 
            variant="gold" 
            size="lg" 
            className="w-full mt-2 h-14 text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING REQUEST..." : "REQUEST MY STRATEGY CALL"}
          </Button>

          <p className="text-center text-[11px] text-text-muted pt-1">
            We typically respond within 4 hours during business days.
          </p>
        </form>
      </Modal>
    </section>
  );
}
