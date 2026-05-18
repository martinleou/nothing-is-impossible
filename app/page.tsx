"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function NothingIsImpossibleLanding() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const openBooking = () => {
    const cta = document.getElementById("cta");
    if (cta) {
      cta.scrollIntoView({ behavior: "smooth", block: "start" });
      // Small delay to let scroll finish then trigger modal if wanted
      setTimeout(() => {
        const bookBtn = cta.querySelector("button");
        bookBtn?.click();
      }, 650);
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#00e5ff] selection:text-black">
      <Navbar />

      <main>
        <Hero onBookCall={openBooking} onSeeHow={scrollToHowItWorks} />
        <About />
        <WhoWeHelp />
        <Services />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
