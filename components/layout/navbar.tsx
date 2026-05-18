"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Results" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar style + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#050507]/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#d4af37]" />
          <div>
            <div className="font-display font-semibold tracking-[-0.02em] text-xl">NOTHING IS IMPOSSIBLE</div>
            <div className="text-[10px] text-text-muted -mt-1.5">EST 2018</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "nav-link text-sm font-medium pb-1 transition-colors",
                activeSection === link.href.substring(1) && "active"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            variant="gold" 
            size="sm"
            onClick={() => scrollTo("#cta")}
          >
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-white transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050507]/98 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-text-primary hover:text-[#00e5ff] transition"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="gold" 
            className="mt-4 w-full"
            onClick={() => scrollTo("#cta")}
          >
            Book Your Free Strategy Call
          </Button>
        </div>
      )}
    </nav>
  );
}
