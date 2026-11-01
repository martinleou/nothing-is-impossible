"use client";

export function Closing() {
  const scrollToCta = () => {
    const el = document.getElementById("cta");
    if (!el) return;
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#050507]">
      <img
        src="/images/kitesurfing-jump.jpg"
        alt="Kitesurfer high above the water"
        className="absolute inset-0 h-full w-full object-cover object-[46%_22%] md:object-[center_26%]"
      />

      <div className="absolute inset-0 bg-[#050507]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,7,0.08)_0%,rgba(5,5,7,0.12)_48%,rgba(5,5,7,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050507] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050507]/40 to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <div className="flex translate-y-[6vh] flex-col items-center md:translate-y-[3vh] lg:translate-y-[2vh]">
          <h2 className="font-display text-5xl font-semibold tracking-[-2.4px] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.65)] md:text-7xl lg:text-[5.4rem]">
            Nothing is Impossible!
          </h2>

          <button
            onClick={scrollToCta}
            className="group mt-5 inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#00f5ff] px-9 py-4 text-lg font-medium tracking-[0.5px] text-white transition-all duration-300 hover:border-[#00f5ff] hover:bg-[#00f5ff]/10 hover:text-[#00f5ff] hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] active:scale-[0.985] md:mt-6"
          >
            Begin the Journey
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00f5ff]">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
