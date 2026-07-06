"use client";

/** Full-page mosque silhouette as a fixed background layer */
export default function MosqueSilhouette() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none select-none z-0"
      style={{ height: "220px", opacity: 0.055 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full"
      >
        {/* Fill color */}
        <defs>
          <linearGradient id="mosqueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d4a1e" stopOpacity="1" />
            <stop offset="100%" stopColor="#2d4a1e" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Ground */}
        <rect x="0" y="200" width="1440" height="20" fill="url(#mosqueGrad)" />

        {/* ─── Center large mosque ─── */}
        {/* Main dome */}
        <path d="M 620 200 L 620 140 Q 720 60 820 140 L 820 200 Z" fill="url(#mosqueGrad)" />
        {/* Dome top onion */}
        <path d="M 700 140 Q 720 100 740 140" fill="url(#mosqueGrad)" />
        <circle cx="720" cy="96" r="8" fill="url(#mosqueGrad)" />
        {/* Mini flanking domes */}
        <path d="M 580 200 L 580 160 Q 620 130 660 160 L 660 200 Z" fill="url(#mosqueGrad)" />
        <path d="M 780 200 L 780 160 Q 820 130 860 160 L 860 200 Z" fill="url(#mosqueGrad)" />

        {/* Left minaret group */}
        <rect x="520" y="90" width="22" height="110" fill="url(#mosqueGrad)" />
        <path d="M 520 90 Q 531 68 542 90" fill="url(#mosqueGrad)" />
        <circle cx="531" cy="64" r="6" fill="url(#mosqueGrad)" />
        <rect x="560" y="120" width="16" height="80" fill="url(#mosqueGrad)" />
        <path d="M 560 120 Q 568 102 576 120" fill="url(#mosqueGrad)" />
        <circle cx="568" cy="98" r="4" fill="url(#mosqueGrad)" />

        {/* Right minaret group */}
        <rect x="898" y="90" width="22" height="110" fill="url(#mosqueGrad)" />
        <path d="M 898 90 Q 909 68 920 90" fill="url(#mosqueGrad)" />
        <circle cx="909" cy="64" r="6" fill="url(#mosqueGrad)" />
        <rect x="864" y="120" width="16" height="80" fill="url(#mosqueGrad)" />
        <path d="M 864 120 Q 872 102 880 120" fill="url(#mosqueGrad)" />
        <circle cx="872" cy="98" r="4" fill="url(#mosqueGrad)" />

        {/* Main building wall */}
        <rect x="560" y="160" width="320" height="40" fill="url(#mosqueGrad)" />

        {/* Arched windows in wall */}
        {[590, 640, 690, 760, 810, 860].map((x) => (
          <path key={x} d={`M ${x} 200 L ${x} 178 Q ${x + 10} 168 ${x + 20} 178 L ${x + 20} 200 Z`}
            fill="url(#mosqueGrad)" opacity="0.5" />
        ))}

        {/* ─── Left small mosque ─── */}
        <path d="M 200 200 L 200 158 Q 260 118 320 158 L 320 200 Z" fill="url(#mosqueGrad)" />
        <path d="M 248 158 Q 260 136 272 158" fill="url(#mosqueGrad)" />
        <circle cx="260" cy="130" r="6" fill="url(#mosqueGrad)" />
        <rect x="165" y="110" width="16" height="90" fill="url(#mosqueGrad)" />
        <path d="M 165 110 Q 173 90 181 110" fill="url(#mosqueGrad)" />
        <circle cx="173" cy="86" r="5" fill="url(#mosqueGrad)" />
        <rect x="335" y="120" width="14" height="80" fill="url(#mosqueGrad)" />
        <path d="M 335 120 Q 342 103 349 120" fill="url(#mosqueGrad)" />
        <circle cx="342" cy="99" r="4" fill="url(#mosqueGrad)" />

        {/* ─── Right small mosque ─── */}
        <path d="M 1120 200 L 1120 158 Q 1180 118 1240 158 L 1240 200 Z" fill="url(#mosqueGrad)" />
        <path d="M 1168 158 Q 1180 136 1192 158" fill="url(#mosqueGrad)" />
        <circle cx="1180" cy="130" r="6" fill="url(#mosqueGrad)" />
        <rect x="1086" y="112" width="16" height="88" fill="url(#mosqueGrad)" />
        <path d="M 1086 112 Q 1094 92 1102 112" fill="url(#mosqueGrad)" />
        <circle cx="1094" cy="88" r="5" fill="url(#mosqueGrad)" />
        <rect x="1254" y="120" width="14" height="80" fill="url(#mosqueGrad)" />
        <path d="M 1254 120 Q 1261 103 1268 120" fill="url(#mosqueGrad)" />
        <circle cx="1261" cy="99" r="4" fill="url(#mosqueGrad)" />

        {/* Connecting walls */}
        <rect x="0" y="190" width="165" height="10" fill="url(#mosqueGrad)" />
        <rect x="349" y="185" width="175" height="15" fill="url(#mosqueGrad)" />
        <rect x="920" y="185" width="168" height="15" fill="url(#mosqueGrad)" />
        <rect x="1268" y="190" width="172" height="10" fill="url(#mosqueGrad)" />

        {/* Stars */}
        {[[400, 40], [720, 20], [1050, 35], [280, 55], [1160, 48]].map(([x, y], i) => (
          <text key={i} x={x} y={y} fontSize="14" fill="url(#mosqueGrad)" fontFamily="serif" textAnchor="middle">✦</text>
        ))}
      </svg>
    </div>
  );
}
