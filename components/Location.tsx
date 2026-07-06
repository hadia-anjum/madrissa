"use client";
import { useEffect, useRef } from "react";

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="location" ref={ref} className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0f5ea 0%, #faf8f3 100%)" }}>
      <div className="absolute inset-0 arabesque-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ direction: "ltr" }}>
        
        {/* Header */}
        <div className="reveal text-center mb-12">
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] block mb-3">✦ ✦ ✦</span>
          <h2 className="font-bold text-[#2d4a1e] mb-2"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
            Our Location
          </h2>
          <p className="text-[#4a7c35]/70" style={{ fontFamily: "Poppins, sans-serif" }}>
            Come and visit us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Map Section */}
          <div className="reveal-left rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "1px solid rgba(74,124,53,0.2)" }}>
            <iframe
              src="https://maps.google.com/maps?q=Masjid+Siddiq-e-Akbar+Faisalabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, display: "block", filter: "saturate(0.7) hue-rotate(50deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madarsa Umm-e-Naeem Lil Banat - Faisalabad"
            />
            <div
              className="p-3 flex items-center gap-3 text-left"
              style={{ background: "#eef5e7", borderTop: "1px solid rgba(74,124,53,0.15)" }}
            >
              <span className="text-lg">📍</span>
              <span className="text-sm font-medium text-[#2d4a1e]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Green Town, opposite Siddique Akbar Masjid, Faisalabad
              </span>
            </div>
          </div>

          {/* Info Card Section */}
          <div className="reveal-right">
            <div
              className="rounded-2xl p-7"
              style={{
                background: "linear-gradient(145deg, #2d4a1e, #3d6b2a)",
                border: "1px solid rgba(201,168,76,0.3)",
                boxShadow: "0 12px 40px rgba(45,74,30,0.2)",
              }}
            >
              {/* Top gold line */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent mb-5" />

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🕌</span>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg"
                    style={{ fontFamily: "Poppins, sans-serif" }}>Madarsa Umm-e-Naeem Lil Banat</h3>
                  <p className="font-poppins text-[#c9a84c] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Faisalabad Campus
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: "📍", text: "Green Town, opposite Siddique Akbar Masjid, Faisalabad" },
                  { icon: "📞", text: "+92 321 6663494" },
                  { icon: "🕐", text: "Thursday · 12:30 PM – 1:10 PM" },
                  { icon: "📅", text: "Starting 2 July (Thursday)" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-base flex-shrink-0">{row.icon}</span>
                    <span
                      className="text-white/80 text-sm font-medium"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {row.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent mb-5" />

              <div className="flex flex-wrap gap-3 justify-end">
                <a
                  href="https://maps.google.com/?q=Siddique+Akbar+Masjid+Green+Town+Faisalabad"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e2c87a] text-[#2d4a1e] font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View on Map
                </a>
                <a
                  href="https://wa.me/923216663494"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
