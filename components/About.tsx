"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const features = [
    { title: "Purpose",           desc: "Memorize the Holy Quran and benefit from its eternal blessings in daily life." },
    { title: "Teaching Method",   desc: "Structured, easy-to-follow system under the guidance of experienced female teachers." },
    { title: "Peaceful Setting",  desc: "A fully air-conditioned, calm, and peaceful women-only environment designed to help you focus and grow spiritually." },
    { title: "Weekly Progress",   desc: "Regular Thursday sessions with tracked progress and personal attention." },
    { title: "Righteous Company", desc: "Surround yourself with like-minded sisters in faith every week." },
  ];

  return (
    <section id="about" ref={ref} className="pt-32 pb-20 relative overflow-hidden" style={{ background: "#faf8f3" }}>
      <div className="absolute inset-0 arabesque-bg opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Mosque illustration */}
          <div className="order-1 flex justify-center reveal-left">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg,#f0f5ea,#faf8f3)",
                  border: "1px solid rgba(74,124,53,0.16)",
                  boxShadow: "0 12px 40px rgba(74,124,53,0.09)",
                }}>
                <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c]/45 to-transparent" />
                <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <defs>
                    <linearGradient id="skyGA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4e8c4" />
                      <stop offset="100%" stopColor="#f0f5ea" />
                    </linearGradient>
                    <linearGradient id="goldGA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e2c87a" />
                      <stop offset="100%" stopColor="#a07830" />
                    </linearGradient>
                    <linearGradient id="greenGA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4a7c35" />
                      <stop offset="100%" stopColor="#2d4a1e" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="320" fill="url(#skyGA)" rx="12" />
                  {[[50,25],[120,15],[200,10],[290,20],[350,35]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="2" fill="#c9a84c" opacity="0.7" />
                  ))}
                  <circle cx="65" cy="55" r="20" fill="#c9a84c" opacity="0.85" />
                  <circle cx="75" cy="49" r="16" fill="#d4e8c4" opacity="0.97" />
                  <path d="M 360 0 Q 370 40 340 80 Q 360 50 380 10 Z" fill="#4a7c35" opacity="0.55" />
                  <path d="M 380 0 Q 395 50 360 90 Q 385 55 400 5 Z" fill="#3d6b2a" opacity="0.38" />
                  <path d="M 120 190 Q 200 90 280 190" fill="url(#greenGA)" />
                  <ellipse cx="200" cy="190" rx="80" ry="12" fill="#2d4a1e" opacity="0.12" />
                  <path d="M 248 158 Q 260 136 272 158" fill="url(#goldGA)" />
                  <circle cx="260" cy="132" r="5" fill="#c9a84c" />
                  <rect x="85" y="155" width="16" height="65" fill="url(#greenGA)" rx="2" />
                  <path d="M 85 155 Q 93 135 101 155" fill="url(#goldGA)" />
                  <circle cx="93" cy="131" r="4" fill="#c9a84c" />
                  <rect x="299" y="155" width="16" height="65" fill="url(#greenGA)" rx="2" />
                  <path d="M 299 155 Q 307 135 315 155" fill="url(#goldGA)" />
                  <circle cx="307" cy="131" r="4" fill="#c9a84c" />
                  <rect x="102" y="190" width="196" height="85" fill="url(#greenGA)" rx="4" />
                  {[140,260].map((x) => (
                    <ellipse key={x} cx={x} cy={218} rx="11" ry="17" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                  ))}
                  <path d="M 187 275 L 187 242 Q 200 228 213 242 L 213 275 Z" fill="#c9a84c" opacity="0.45" />
                  <rect x="0" y="275" width="400" height="45" fill="url(#skyGA)" />
                  <line x1="0" y1="275" x2="400" y2="275" stroke="#4a7c35" strokeWidth="1" opacity="0.25" />
                  <text x="200" y="68" textAnchor="middle" fontFamily="Scheherazade New,serif" fontSize="15" fill="#c9a84c" opacity="0.85">بِسْمِ اللَّهِ</text>
                </svg>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 rounded-full bg-[#4a7c35]/8 blur-xl" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 reveal-right" style={{ direction: "ltr" }}>
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] block mb-3">✦ ✦ ✦</span>
            <h2 className="font-bold text-[#2d4a1e] mb-2 tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
              About the Class
            </h2>
            {/* Arabic subtitle only */}
            <p className="font-bold text-[#4a7c35] mb-6"
              style={{ fontFamily: "Scheherazade New, serif", fontSize: "clamp(1rem,2.2vw,1.3rem)" }}>
              عن الدروس الأسبوعية
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-[#4a7c35]/30 to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-[#c9a84c]/60" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4a7c35]/30" />
            </div>

            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-[#4a7c35]/10 hover:border-[#4a7c35]/28 hover:bg-white transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#4a7c35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#c9a84c] text-xs">✦</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d4a1e] text-sm mb-0.5"
                      style={{ fontFamily: "Poppins, sans-serif" }}>
                      {f.title}
                    </h4>
                    <p className="text-[#4a7c35]/65 text-xs leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
