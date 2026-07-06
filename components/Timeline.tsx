"use client";
import { useEffect, useRef } from "react";

const steps = [
  { icon: "🌟", title: "First Class",       desc: "Starting 2nd July" },
  { icon: "📖", title: "Weekly Sessions",   desc: "Every Thursday at 12:30 PM" },
];

export default function Timeline() {
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
    <section ref={ref} className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#faf8f3 0%,#f0f5ea 100%)" }}>
      <div className="absolute inset-0 arabesque-bg opacity-40 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal text-center mb-14" style={{ direction: "ltr" }}>
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] block mb-3">✦ ✦ ✦</span>
          <h2 className="font-bold text-[#2d4a1e] mb-2 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
            Class Schedule
          </h2>
          <p className="text-[#4a7c35]/70 font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}>
            Key details of our weekly sessions
          </p>
        </div>

        {/* Desktop - Centered 2 steps */}
        <div className="hidden md:flex items-start justify-center gap-24 relative" style={{ direction: "ltr" }}>
          {/* Connector line */}
          <div className="absolute top-9 left-1/4 right-1/4 h-px bg-gradient-to-r from-[#4a7c35]/20 via-[#c9a84c]/40 to-[#4a7c35]/20" />
          
          {steps.map((s, i) => (
            <div key={i} className="reveal flex flex-col items-center text-center w-48 relative"
              style={{ animationDelay: `${i * 0.15}s` }}>
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-2xl mb-4 z-10 relative transition-all duration-300 hover:scale-110"
                style={{
                  background: "white",
                  border: "2px solid rgba(201,168,76,0.45)",
                  boxShadow: "0 4px 20px rgba(74,124,53,0.1), 0 0 0 6px rgba(201,168,76,0.07)",
                }}
              >
                {s.icon}
              </div>
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#2d4a1e] text-[#c9a84c] text-xs flex items-center justify-center font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {i + 1}
              </div>
              <h4 className="font-bold text-[#2d4a1e] text-sm mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}>{s.title}</h4>
              <p className="text-[#4a7c35]/60 text-xs font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4" style={{ direction: "ltr" }}>
          {steps.map((s, i) => (
            <div key={i} className="reveal flex items-center gap-4 p-4 bg-white rounded-2xl"
              style={{ border: "1px solid rgba(74,124,53,0.14)", animationDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "#eef5e7", border: "2px solid rgba(201,168,76,0.35)" }}>
                {s.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#2d4a1e] text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}>{s.title}</h4>
                <p className="text-[#4a7c35]/60 text-xs font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}>{s.desc}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#2d4a1e] text-[#c9a84c] text-xs flex items-center justify-center font-bold flex-shrink-0"
                style={{ fontFamily: "Poppins, sans-serif" }}>{i + 1}</div>
            </div>
          ))}
        </div>
        {/* Online Attendance Info Box */}
        <div className="reveal mt-12 max-w-xl mx-auto text-center" style={{ animationDelay: "0.3s" }}>
          <div
            className="rounded-2xl p-5 border bg-white/80"
            style={{
              borderColor: "rgba(201,168,76,0.35)",
              boxShadow: "0 4px 20px rgba(74,124,53,0.04)"
            }}
          >
            <p className="text-sm text-[#3a5228]/90 font-medium leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
              💻 <span className="text-[#2d4a1e] font-bold">Online Attendance:</span> If you are unable to attend the classes in person, you can easily join online via <span className="text-[#4a7c35] font-semibold">WhatsApp Call</span> or <span className="text-[#4a7c35] font-semibold">Zoom</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
