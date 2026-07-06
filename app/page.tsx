"use client";
import { useEffect } from "react";

// Layout layers
import ParticleCanvas       from "@/components/ParticleCanvas";
import MosqueSilhouette     from "@/components/MosqueSilhouette";
import FloatingLanterns     from "@/components/FloatingLanterns";
import MoonAnimation        from "@/components/MoonAnimation";
import CalligraphyWatermark from "@/components/CalligraphyWatermark";
import FloatingActions      from "@/components/FloatingActions";

// Page sections
import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import CountdownTimer  from "@/components/CountdownTimer";
import EventInfo       from "@/components/EventInfo";
import Hadith          from "@/components/Hadith";
import Benefits        from "@/components/Benefits";
import About           from "@/components/About";
import Timeline        from "@/components/Timeline";
import Location        from "@/components/Location";
import Contact         from "@/components/Contact";
import Footer          from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // ── Page loader ──
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 2000);
    }

    // ── Scroll progress bar ──
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      if (!bar) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? scrolled / total : 0;
      bar.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Page loader overlay ── */}
      <div
        id="loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700"
        style={{ background: "#faf8f3" }}
      >
        {/* Loader rings */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 rounded-full"
            style={{ width: "96px", height: "96px", top: "-8px", left: "-8px",
              background: "radial-gradient(circle, rgba(74,124,53,0.15) 0%, transparent 70%)",
              animation: "moonGlow 2s ease-in-out infinite" }}
          />
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, #4a7c35, #2d4a1e)",
              boxShadow: "0 0 30px rgba(74,124,53,0.4), 0 0 60px rgba(74,124,53,0.15)",
            }}
          >
            <span className="text-[#c9a84c] text-4xl" style={{ fontFamily: "Scheherazade New, serif" }}>☽</span>
          </div>
        </div>

        {/* Brand */}
        <p className="font-bold text-[#2d4a1e] mb-1"
          style={{ fontFamily: "Scheherazade New, serif", fontSize: "1.8rem" }}>
          الزہراوین
        </p>
        <p className="text-[#4a7c35]/60 text-xs mb-5"
          style={{ fontFamily: "Poppins, sans-serif" }}>
          Al Zahrawain — Loading
        </p>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#c9a84c]"
              style={{ animation: `bounce 1.2s ease-in-out infinite`, animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </div>

        <style>{`
          @keyframes bounce {
            0%,80%,100% { transform: scale(0.6); opacity: 0.4; }
            40%          { transform: scale(1.2); opacity: 1; }
          }
          @keyframes moonGlow {
            0%,100% { transform: scale(1); opacity: 0.7; }
            50%      { transform: scale(1.2); opacity: 1; }
          }
          #loader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        `}</style>
      </div>

      {/* ── Scroll progress bar ── */}
      <div
        id="progress-bar"
        className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
        style={{
          background: "linear-gradient(90deg, #2d4a1e, #c9a84c, #4a7c35, #c9a84c)",
          transform: "scaleX(0)",
          boxShadow: "0 0 8px rgba(201,168,76,0.5)",
        }}
      />

      {/* ── Global background layers (fixed, z-0) ── */}
      <ParticleCanvas />
      <MosqueSilhouette />
      <CalligraphyWatermark />

      {/* ── Floating UI elements (fixed, z-10+) ── */}
      <FloatingLanterns />
      <MoonAnimation />
      <FloatingActions />

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main content ── */}
      <main className="relative z-10">
        <Hero />
        <CountdownTimer />
        <EventInfo />
        <Hadith />
        <Benefits />
        <About />
        <Timeline />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
