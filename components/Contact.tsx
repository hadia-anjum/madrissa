"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible"); }),
      { threshold: 0.15 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2d4a1e 0%, #3d6b2a 50%, #2d4a1e 100%)" }}>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z' fill='none' stroke='%23c9a84c' stroke-width='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
          opacity: 0.05,
        }}
      />

      {/* SVG Floral Border Top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 28" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 60 + 30},14)`}>
              {[0,72,144,216,288].map((a,j) => (
                <ellipse key={j}
                  cx={11 * Math.cos(a * Math.PI / 180)} cy={11 * Math.sin(a * Math.PI / 180)}
                  rx="5.5" ry="2.8" fill="#c9a84c" opacity="0.22"
                  transform={`rotate(${a},${11*Math.cos(a*Math.PI/180)},${11*Math.sin(a*Math.PI/180)})`}
                />
              ))}
              <circle cx="0" cy="0" r="2.5" fill="#c9a84c" opacity="0.35" />
            </g>
          ))}
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)", animation: "slowGlow 6s ease-in-out infinite" }} />
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,124,53,0.12) 0%, transparent 70%)", animation: "slowGlow 6s ease-in-out infinite 3s" }} />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center" style={{ direction: "ltr" }}>
        <div className="reveal space-y-8">
          <span className="text-[#c9a84c] text-sm tracking-[0.4em] block">✦ ✦ ✦</span>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="font-bold text-white tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: "1.2" }}>
              Have a Question?
            </h2>
            <p className="text-white/80 font-medium max-w-xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: "1.5" }}>
              Reach out to us on WhatsApp — we're happy to answer any queries!
            </p>
          </div>

          {/* Quranic Ayah Card - Beautified & Spacious */}
          <div
            className="rounded-3xl p-8 sm:p-10 mx-auto max-w-lg shadow-2xl relative"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(201,168,76,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p className="font-bold text-[#e2c87a] mb-4 text-center" dir="rtl"
              style={{
                fontFamily: "Scheherazade New, serif",
                fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                textShadow: "0 0 20px rgba(201,168,76,0.35)",
                lineHeight: "1.8"
              }}>
              ﴿ وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ ﴾
            </p>
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.02em" }}>
              "And We have certainly made the Quran easy for remembrance."
            </p>
          </div>

          {/* WhatsApp Button - Non-congested */}
          <div className="pt-4">
            <a
              href="https://wa.me/923216663494"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 font-semibold px-10 py-5 rounded-full text-base sm:text-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "#25D366",
                color: "white",
                boxShadow: "0 8px 30px rgba(37,211,102,0.45), 0 0 60px rgba(37,211,102,0.15)",
                animation: "greenGlow 2.5s ease-in-out infinite",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">Message Us on WhatsApp</span>
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-15"
                style={{ background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.5) 50%,transparent 60%)", animation: "shimmer 2.5s linear infinite" }} />
            </a>
          </div>

          {/* Info Strip - Styled Neatly and Centered */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm sm:text-base border-t border-white/10 pt-8 max-w-xl mx-auto">
              {[
                { icon: "📞", text: "+92 321 6663494" },
                { icon: "📍", text: "Green Town, Faisalabad" },
                { icon: "🕐", text: "Thursday · 12:30 – 1:10 PM" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/70 font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  <span className="text-lg">{row.icon}</span>
                  <span className="tracking-wide">{row.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Floral Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ transform: "scaleY(-1)" }}>
        <svg viewBox="0 0 1440 28" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 60 + 30},14)`}>
              {[0,72,144,216,288].map((a,j) => (
                <ellipse key={j}
                  cx={11 * Math.cos(a * Math.PI / 180)} cy={11 * Math.sin(a * Math.PI / 180)}
                  rx="5.5" ry="2.8" fill="#c9a84c" opacity="0.22"
                  transform={`rotate(${a},${11*Math.cos(a*Math.PI/180)},${11*Math.sin(a*Math.PI/180)})`}
                />
              ))}
              <circle cx="0" cy="0" r="2.5" fill="#c9a84c" opacity="0.35" />
            </g>
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes greenGlow {
          0%,100% { box-shadow: 0 4px 30px rgba(37,211,102,0.55), 0 0 60px rgba(37,211,102,0.2); }
          50%      { box-shadow: 0 6px 45px rgba(37,211,102,0.85), 0 0 90px rgba(37,211,102,0.35); }
        }
        @keyframes slowGlow {
          0%,100% { opacity:0.7; transform:translateY(-50%) scale(1); }
          50%      { opacity:1;   transform:translateY(-50%) scale(1.1); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}
