"use client";
import { useEffect, useRef } from "react";

const cards = [
  { icon: "⏱", title: "Duration",    value: "40",      unit: "Minutes",   sub: "Per session" },
  { icon: "📅", title: "Start Date",  value: "2",       unit: "July",      sub: "First class" },
  { icon: "🌿", title: "Day",         value: "Thursday",unit: "",          sub: "Every week" },
  { icon: "🕐", title: "Time",        value: "12:30",   unit: "– 1:10 PM", sub: "PKT" },
];

function BadgeLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mb-1">
      <div
        className="bg-[#2d4a1e] text-white text-sm font-semibold px-8 py-1.5 tracking-wide"
        style={{
          fontFamily: "Poppins, sans-serif",
          clipPath: "polygon(10px 0%,calc(100% - 10px) 0%,100% 50%,calc(100% - 10px) 100%,10px 100%,0% 50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function EventInfo() {
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
    <section id="event-info" ref={ref} className="py-20 relative overflow-hidden"
      style={{ background: "#faf8f3" }}>
      <div className="absolute inset-0 arabesque-bg opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-12" style={{ direction: "ltr" }}>
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] block mb-3">✦ ✦ ✦</span>
          <h2 className="font-bold text-[#2d4a1e] mb-2 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            Event Details
          </h2>
          <p className="text-[#4a7c35]/70 font-medium"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>
            Join us every Thursday for a spiritual journey
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4a7c35]/30" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a84c]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4a7c35]/30" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6" style={{ direction: "ltr" }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className="reveal group relative bg-white rounded-2xl p-6 text-center transition-all duration-400 hover:-translate-y-2"
              style={{
                border: "1px solid rgba(74,124,53,0.18)",
                boxShadow: "0 4px 20px rgba(74,124,53,0.07)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
              <span className="absolute top-2 right-2 text-[#c9a84c]/25 text-xs">✦</span>
              <span className="absolute top-2 left-2 text-[#c9a84c]/25 text-xs">✦</span>
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-[#4a7c35] text-sm mb-2 uppercase tracking-wider"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                {c.title}
              </h3>
              <p className="font-bold text-[#2d4a1e] text-2xl leading-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                {c.value}
                {c.unit && <span className="text-sm font-medium text-[#4a7c35] ml-1">{c.unit}</span>}
              </p>
              <p className="text-[#4a7c35]/55 text-xs mt-1 font-medium tracking-wide"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                {c.sub}
              </p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#4a7c35]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Location bar - Prominent & Centered */}
        <div className="reveal relative max-w-2xl mx-auto" style={{ animationDelay: "0.4s", direction: "ltr" }}>
          <BadgeLabel>Venue</BadgeLabel>
          <div
            className="bg-white rounded-3xl px-8 py-8 text-center mt-2 relative"
            style={{
              border: "2px solid rgba(201,168,76,0.35)",
              boxShadow: "0 10px 30px rgba(74,124,53,0.1)",
            }}
          >
            <span className="absolute top-4 right-6 text-[#c9a84c]/20 text-3xl">✦</span>
            <span className="absolute top-4 left-6 text-[#c9a84c]/20 text-3xl">✦</span>
            
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-4xl animate-bounce" style={{ animationDuration: "3s" }}>🕌</span>
              <h3 className="font-bold text-[#2d4a1e] tracking-tight"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)" }}>
                Madarsa Umm-e-Naeem Lil Banat
              </h3>
              <p className="text-[#4a7c35] font-semibold text-sm sm:text-base max-w-md"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.5" }}>
                Green Town, opposite Siddique Akbar Masjid, Faisalabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
