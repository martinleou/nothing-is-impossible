"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Impact } from "@/components/sections/impact";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTA } from "@/components/sections/cta";
import { Founder } from "@/components/sections/founder";
import { Closing } from "@/components/sections/closing";

export default function NothingIsImpossibleLanding() {
  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#00e5ff] selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Impact />
        <WhoWeHelp />
        <Services />
        <HowItWorks />
        <Founder />
        <CTA />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
