"use client";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: "📖",
    title: "Quran Memorization",
    desc: "Structured Hifz of Surah Al-Baqarah & Surah Al-Imran",
    back: "A systematic approach to memorizing the longest surahs, guided by experienced female teachers.",
    arabic: "حَافِظُ الْقُرْآنِ",
  },
  {
    icon: "🤲",
    title: "Strengthen Imaan",
    desc: "Deepen your connection with the Holy Quran",
    back: "Every verse memorized brings you closer to Allah and strengthens your faith every day.",
    arabic: "نُورٌ عَلَى نُورٍ",
  },
  {
    icon: "✨",
    title: "Peace of Heart",
    desc: "Find tranquility through Quranic recitation",
    back: "The remembrance of Allah truly gives the heart its peace — a feeling unmatched by anything else.",
    arabic: "طُمَأنِينَةُ الْقَلْبِ",
  },
  {
    icon: "🌸",
    title: "Weekly Gathering",
    desc: "Righteous company every Thursday",
    back: "Good company and a blessed environment every Thursday — nourishment for your soul and spirit.",
    arabic: "الصُّحْبَةُ الصَّالِحَةُ",
  },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="benefits" ref={ref} className="pt-20 pb-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#f0f5ea 0%,#faf8f3 100%)" }}>
      <div className="absolute inset-0 arabesque-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal text-center mb-12" style={{ direction: "ltr" }}>
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] block mb-3">✦ ✦ ✦</span>
          <h2 className="font-bold text-[#2d4a1e] mb-2 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            Why Join Us?
          </h2>
          {/* Arabic only for the Quranic phrase */}
          <p className="font-bold text-[#4a7c35]"
            style={{ fontFamily: "Scheherazade New, serif", fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>
            فضائل القرآن الكريم
          </p>
          <p className="text-[#4a7c35]/45 text-xs mt-2 tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}>
            Hover cards to learn more
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal group"
              style={{ animationDelay: `${i * 0.1}s`, perspective: "1000px", height: "230px" }}
            >
              <div className="relative w-full h-full transition-all duration-700"
                style={{ transformStyle: "preserve-3d" }}>

                {/* Front */}
                <div className="absolute inset-0 rounded-2xl p-6 text-center flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    background: "white",
                    border: "1px solid rgba(74,124,53,0.16)",
                    boxShadow: "0 4px 18px rgba(74,124,53,0.07)",
                    direction: "ltr",
                  }}>
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />
                  <div className="w-15 h-15 rounded-full flex items-center justify-center mb-4"
                    style={{ width: "58px", height: "58px", background: "rgba(74,124,53,0.07)", border: "1px solid rgba(74,124,53,0.18)" }}>
                    <span className="text-2xl">{b.icon}</span>
                  </div>
                  <h3 className="font-bold text-[#2d4a1e] mb-2 text-sm leading-snug"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                    {b.title}
                  </h3>
                  <p className="text-[#4a7c35]/65 text-xs leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                    {b.desc}
                  </p>
                  <div className="absolute bottom-2 right-2 text-[#c9a84c]/25 text-xs">↻</div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-2xl p-6 text-center flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "linear-gradient(135deg,#2d4a1e,#3d6b2a)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}>
                  {/* Arabic phrase only */}
                  <p className="font-bold text-[#c9a84c] mb-3"
                    style={{ fontFamily: "Scheherazade New, serif", fontSize: "1.15rem" }}>
                    {b.arabic}
                  </p>
                  <div className="h-px w-10 bg-[#c9a84c]/30 mb-3" />
                  {/* English explanation */}
                  <p className="text-white/80 text-xs leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif", direction: "ltr" }}>
                    {b.back}
                  </p>
                  <span className="text-2xl mt-3">{b.icon}</span>
                </div>
              </div>

              <style>{`.group:hover > div { transform: rotateY(180deg) !important; }`}</style>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4a7c35]/40 to-transparent" />
    </section>
  );
}
