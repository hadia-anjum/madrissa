"use client";
import Image from "next/image";

/* ── Islamic arch frame ─────────────────────────────── */
function IslamicArch({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ maxWidth: "340px", margin: "0 auto" }}>
      <svg
        viewBox="0 0 340 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 8px 24px rgba(74,124,53,0.12))" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#e2c87a" />
            <stop offset="100%" stopColor="#a07830" />
          </linearGradient>
        </defs>
        {/* Body */}
        <path d="M 18 420 L 18 195 Q 18 28 170 16 Q 322 28 322 195 L 322 420 Z"
          fill="white" stroke="url(#archGold)" strokeWidth="2" opacity="0.94" />
        {/* Inner line */}
        <path d="M 30 420 L 30 198 Q 30 46 170 36 Q 310 46 310 198 L 310 420"
          fill="none" stroke="#4a7c35" strokeWidth="1" opacity="0.28" />
        {/* Scallop dots */}
        {Array.from({ length: 11 }).map((_, i) => {
          const a = (i / 10) * Math.PI;
          return (
            <circle key={i}
              cx={170 + 134 * Math.cos(Math.PI - a)}
              cy={120 - 90 * Math.sin(a) + 4}
              r="5" fill="white" stroke="url(#archGold)" strokeWidth="1.5" />
          );
        })}
        {/* Top crescent */}
        <circle cx="170" cy="20" r="12" fill="#4a7c35" opacity="0.85" />
        <circle cx="174" cy="16" r="9" fill="white" opacity="0.95" />
        {/* Corner stars */}
        <text x="12" y="400" fontFamily="serif" fontSize="18" fill="#c9a84c" opacity="0.3">✦</text>
        <text x="312" y="400" fontFamily="serif" fontSize="18" fill="#c9a84c" opacity="0.3">✦</text>
      </svg>

      {/* Content overlaid on arch */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ paddingTop: "52px", paddingBottom: "24px", paddingLeft: "28px", paddingRight: "28px" }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Hero section ───────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#faf8f3 0%,#f0f5ea 45%,#faf8f3 100%)",
        paddingTop: "100px",   /* clear fixed navbar (80px) + breathing room */
        paddingBottom: "64px",
      }}
    >
      {/* Subtle geometric BG */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ccircle cx='80' cy='80' r='60' fill='none' stroke='rgba(74,124,53,0.045)' stroke-width='1'/%3E%3Cpath d='M80 20 L140 50 L140 110 L80 140 L20 110 L20 50Z' fill='none' stroke='rgba(201,168,76,0.035)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Green leaf — left */}
      <div className="absolute top-24 left-0 w-24 h-40 pointer-events-none z-0"
        style={{ animation: "leafSway 4.5s ease-in-out infinite" }}>
        <svg viewBox="0 0 100 170" className="w-full h-full opacity-70">
          <path d="M 6 170 Q 50 138 68 65 Q 88 16 108 0 Q 94 52 68 106 Q 50 148 22 170Z" fill="#4a7c35" opacity="0.52"/>
          <path d="M 0 170 Q 42 142 58 72 Q 76 24 102 4 Q 88 57 62 112 Q 44 152 15 170Z" fill="#3d6b2a" opacity="0.32"/>
        </svg>
      </div>

      {/* Green leaf — right */}
      <div className="absolute bottom-10 right-0 w-20 h-32 pointer-events-none z-0"
        style={{ animation: "leafSway 5.5s ease-in-out infinite 2s" }}>
        <svg viewBox="0 0 100 148" className="w-full h-full opacity-60">
          <path d="M 100 148 Q 56 118 38 50 Q 20 4 0 0 Q 15 50 40 100 Q 56 135 86 148Z" fill="#4a7c35" opacity="0.48"/>
        </svg>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ══ LEFT — Text content ══ */}
          <div style={{ animation: "fadeSlideIn 0.8s ease-out both 0.05s" }}>

            {/* Badge */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-2 bg-[#eef5e7] border border-[#4a7c35]/22 text-[#4a7c35] px-5 py-1.5 rounded-full text-sm font-medium tracking-wide"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ✦ Al Zahrawain presents ✦
              </span>
            </div>

            {/* Urdu heading — RTL inline, loose line-height */}
            <h1
              className="font-bold text-[#2d4a1e] mb-3"
              dir="rtl"
              style={{
                fontFamily: "Noto Nastaliq Urdu, serif",
                fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
                lineHeight: 2.2,
                wordSpacing: "0.2em",
              }}
            >
              ہفتہ واری حفظ کلاس
            </h1>

            {/* Arabic brand name — Scheherazade bold gradient */}
            <div className="mb-3">
              <span
                className="block font-bold"
                style={{
                  fontFamily: "Scheherazade New, serif",
                  fontSize: "clamp(2.8rem, 7vw, 5rem)",
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg,#2d4a1e 0%,#4a7c35 40%,#c9a84c 70%,#a07830 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  direction: "rtl",
                }}
              >
                الزہراوین
              </span>
            </div>

            {/* Arabic surah names */}
            <p
              className="text-[#4a7c35] font-semibold mb-5"
              dir="rtl"
              style={{
                fontFamily: "Scheherazade New, serif",
                fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)",
                lineHeight: 1.9,
              }}
            >
              سورۃ البقرہ وآل عمران
            </p>

            {/* Gold divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px bg-gradient-to-r from-[#4a7c35]/35 to-transparent w-16" />
              <span className="text-[#c9a84c] text-xs">✦</span>
              <div className="h-px bg-gradient-to-l from-[#4a7c35]/35 to-transparent w-16" />
            </div>

            {/* English description */}
            <p
              className="text-[#3a5228]/70 leading-relaxed mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
                lineHeight: 1.85,
              }}
            >
              Illuminate your heart with the blessings of the Holy Quran. Join our weekly Hifz
              class every Thursday and embark on a beautiful spiritual journey.
            </p>

            {/* WhatsApp CTA */}
            <div className="mb-8">
              <a
                href="https://wa.me/923216663494"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "#25D366",
                  color: "white",
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.38)",
                  animation: "waPulse 2.5s ease-in-out infinite",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Ask on WhatsApp
              </a>
            </div>

            {/* Quick stats — LTR */}
            <div
              className="border border-[#4a7c35]/14 rounded-2xl p-2.5 sm:p-4 bg-white/55 backdrop-blur-sm grid grid-cols-3 gap-1.5 sm:gap-3 text-center"
            >
              {[
                { num: "40",     unit: "min",   label: "Duration" },
                { num: "Thurs",  unit: "",      label: "Every week" },
                { num: "2",      unit: "July",  label: "Starts" },
              ].map((s, i) => (
                <div key={i} className={`py-1 ${i > 0 ? "border-l border-[#4a7c35]/10" : ""}`}>
                  <p className="font-bold text-[#2d4a1e] text-sm sm:text-lg leading-tight"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                    {s.num}
                    {s.unit && (
                      <span className="text-[10px] sm:text-xs font-medium text-[#4a7c35] ml-0.5"
                        style={{ fontFamily: "Poppins, sans-serif" }}>
                        {s.unit}
                      </span>
                    )}
                  </p>
                  <p className="text-[#4a7c35]/55 text-[9px] sm:text-xs font-semibold mt-0.5 uppercase tracking-wider"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — Poster in Arch ══ */}
          <div
            className="flex justify-center"
            style={{ animation: "fadeSlideIn 0.8s ease-out both 0.25s" }}
          >
            <div className="relative w-full" style={{ maxWidth: "320px" }}>
              <IslamicArch>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/poster.png`}
                  alt="Weekly Hifz Class Poster"
                  width={250}
                  height={340}
                  className="rounded-xl object-cover w-full h-auto"
                  style={{
                    boxShadow: "0 12px 36px rgba(45,74,30,0.18), 0 4px 12px rgba(201,168,76,0.12)",
                    border: "2px solid rgba(201,168,76,0.22)",
                    animation: "posterFloat 6s ease-in-out infinite",
                  }}
                  priority
                />
              </IslamicArch>
              {/* Ground glow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 rounded-full bg-[#4a7c35]/8 blur-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
