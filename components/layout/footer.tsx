import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050507] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-y-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#d4af37]" />
            <span className="font-display font-semibold tracking-[-0.02em] text-xl">NOTHING IS IMPOSSIBLE</span>
          </div>
          <p className="max-w-xs text-text-secondary text-[15px]">
            Maximizing human potential through precision AI systems for ambitious entrepreneurs and business leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-4 text-white/80">Company</div>
            <div className="space-y-2.5 text-text-secondary">
              <a href="#about" className="block hover:text-white transition">About</a>
              <a href="#services" className="block hover:text-white transition">Services</a>
              <a href="#how-it-works" className="block hover:text-white transition">Process</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4 text-white/80">Resources</div>
            <div className="space-y-2.5 text-text-secondary">
              <a href="#testimonials" className="block hover:text-white transition">Client Results</a>
              <div className="block text-text-muted">Case Studies (Coming Soon)</div>
              <div className="block text-text-muted">AI Playbook</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4 text-white/80">Connect</div>
            <div className="flex gap-4 mt-1">
              <a href="https://x.com" target="_blank" rel="noopener" className="text-text-secondary hover:text-[#00e5ff] transition">
                <Twitter size={19} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-text-secondary hover:text-[#00e5ff] transition">
                <Linkedin size={19} />
              </a>
            </div>
            <div className="mt-8 text-xs text-text-muted">
              © {new Date().getFullYear()} Nothing Is Impossible LLC
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-text-muted max-w-7xl mx-auto px-6">
        Precision AI for those who refuse to accept limits.
      </div>
    </footer>
  );
}
