"use client";

const lanternData = [
  { top: "18%",  left: "3%",   size: 36, delay: "0s",   duration: "7s",  opacity: 0.75 },
  { top: "42%",  left: "1.5%", size: 28, delay: "2.5s", duration: "9s",  opacity: 0.60 },
  { top: "70%",  left: "4%",   size: 32, delay: "5s",   duration: "8s",  opacity: 0.70 },
  { top: "25%",  right: "2%",  size: 30, delay: "1.5s", duration: "8.5s",opacity: 0.65 },
  { top: "60%",  right: "3%",  size: 34, delay: "4s",   duration: "7.5s",opacity: 0.72 },
];

export default function FloatingLanterns() {
  return (
    <>
      {lanternData.map((l, i) => (
        <div
          key={i}
          className="fixed pointer-events-none select-none z-10"
          style={{
            top: l.top,
            left: "left" in l ? (l as { left: string }).left : undefined,
            right: "right" in l ? (l as { right: string }).right : undefined,
            opacity: l.opacity,
            animation: `lanternFloat ${l.duration} ease-in-out infinite`,
            animationDelay: l.delay,
            filter: "drop-shadow(0 0 10px rgba(201,168,76,0.45))",
          }}
        >
          {/* SVG Lantern */}
          <svg
            width={l.size}
            height={l.size * 1.6}
            viewBox="0 0 40 65"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hanging string */}
            <line x1="20" y1="0" x2="20" y2="8" stroke="#a07830" strokeWidth="1.5" />
            {/* Top cap */}
            <path d="M 12 8 Q 20 5 28 8 L 27 12 Q 20 10 13 12 Z" fill="#c9a84c" />
            {/* Lantern body */}
            <path d="M 14 12 Q 8 28 10 42 Q 20 48 30 42 Q 32 28 26 12 Z" fill="url(#lg1)" />
            {/* Ribs */}
            <path d="M 14 12 Q 20 20 26 12" fill="none" stroke="#a07830" strokeWidth="0.8" opacity="0.6" />
            <path d="M 11 25 Q 20 30 29 25" fill="none" stroke="#a07830" strokeWidth="0.8" opacity="0.6" />
            <path d="M 10 38 Q 20 43 30 38" fill="none" stroke="#a07830" strokeWidth="0.8" opacity="0.6" />
            {/* Bottom cap */}
            <path d="M 13 42 Q 20 45 27 42 L 26 47 Q 20 50 14 47 Z" fill="#c9a84c" />
            {/* Inner glow */}
            <ellipse cx="20" cy="27" rx="7" ry="10" fill="rgba(255,220,100,0.35)" />
            {/* Bottom drip */}
            <line x1="20" y1="47" x2="20" y2="52" stroke="#a07830" strokeWidth="1.2" />
            <circle cx="20" cy="54" r="3" fill="#c9a84c" opacity="0.8" />
            {/* Gradient */}
            <defs>
              <radialGradient id="lg1" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#e2c87a" />
                <stop offset="50%" stopColor="#c9a84c" />
                <stop offset="100%" stopColor="#7a5c20" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes lanternFloat {
          0%,100% { transform: translateY(0) rotate(-4deg); }
          33%      { transform: translateY(-18px) rotate(4deg); }
          66%      { transform: translateY(-8px) rotate(-2deg); }
        }
      `}</style>
    </>
  );
}
