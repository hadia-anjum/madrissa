"use client";
import { useEffect, useRef } from "react";

const galleries = [
  { label: "القرآن",   bg: "linear-gradient(135deg,#2d4a1e,#4a7c35)", pattern: "star" },
  { label: "التعلیم",  bg: "linear-gradient(135deg,#c9a84c,#a07830)", pattern: "hex" },
  { label: "الإسلام",  bg: "linear-gradient(135deg,#3d6b2a,#2d4a1e)", pattern: "circle" },
  { label: "الإيمان",  bg: "linear-gradient(135deg,#4a7c35,#6b9e4d)", pattern: "diamond" },
  { label: "النور",    bg: "linear-gradient(135deg,#a07830,#c9a84c)", pattern: "star" },
  { label: "الحفظ",   bg: "linear-gradient(135deg,#2d4a1e,#3d6b2a)", pattern: "circle" },
];

export default function Gallery() {
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
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: "#faf8f3" }}>
      <div className="absolute inset-0 arabesque-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal text-center mb-12">
          <span className="text-[#c9a84c] text-xs tracking-widest block mb-3">✦ ✦ ✦</span>
          <h2 className="font-urdu font-bold text-[#2d4a1e] mb-2"
            style={{ fontFamily: "Noto Nastaliq Urdu, serif", fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
            جھلکیاں
          </h2>
          <p className="font-urdu text-[#4a7c35]/70" style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}>
            ہمارے روحانی ماحول کی ایک جھلک
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleries.map((g, i) => (
            <div
              key={i}
              className="reveal group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s`, aspectRatio: "4/3" }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: g.bg }}
              />
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='22' fill='none' stroke='white' stroke-width='1'/%3E%3Cpath d='M30 8 L52 20 L52 44 L30 52 L8 44 L8 20Z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />
              {/* Islamic arch frame overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 130" className="w-1/2 h-auto opacity-20">
                  <path d="M 10 130 L 10 65 Q 10 10 50 5 Q 90 10 90 65 L 90 130 Z"
                    fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                <span
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: "Scheherazade New, serif", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                >
                  {g.label}
                </span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                <span
                  className="text-white/80 text-sm font-bold block text-center"
                  style={{ fontFamily: "Scheherazade New, serif" }}
                >
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
