"use client";

export default function MoonAnimation() {
  return (
    <div className="fixed top-20 right-6 z-10 pointer-events-none select-none" aria-hidden>
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          width: "90px", height: "90px",
          background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
          animation: "moonGlow 4s ease-in-out infinite",
          top: "-20px", left: "-20px",
          width: "130px", height: "130px",
        }}
      />
      {/* Moon body */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #f5e6a3, #c9a84c 60%, #a07830)",
          boxShadow: "0 0 20px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.2), inset -6px -4px 12px rgba(160,120,48,0.4)",
          animation: "moonFloat 6s ease-in-out infinite",
          position: "relative",
        }}
      >
        {/* Moon craters */}
        <div style={{
          position: "absolute", top: "14px", left: "12px",
          width: "8px", height: "8px", borderRadius: "50%",
          background: "rgba(160,120,48,0.3)",
        }} />
        <div style={{
          position: "absolute", top: "28px", left: "26px",
          width: "5px", height: "5px", borderRadius: "50%",
          background: "rgba(160,120,48,0.25)",
        }} />
        {/* Crescent shadow */}
        <div style={{
          position: "absolute", top: "6px", right: "6px",
          width: "38px", height: "38px", borderRadius: "50%",
          background: "rgba(255,250,220,0.15)",
        }} />
      </div>
      {/* Orbiting stars */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "5px", height: "5px",
            color: "#c9a84c",
            fontSize: "10px",
            animation: `orbitStar${i + 1} ${5 + i}s linear infinite`,
            top: "50%", left: "50%",
          }}
        >
          ✦
        </div>
      ))}

      <style>{`
        @keyframes moonGlow {
          0%,100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes moonFloat {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          33% { transform: translateY(-8px) rotate(3deg); }
          66% { transform: translateY(-4px) rotate(-2deg); }
        }
        @keyframes orbitStar1 {
          0%   { transform: rotate(0deg)   translateX(36px) rotate(0deg); opacity:0.9; }
          100% { transform: rotate(360deg) translateX(36px) rotate(-360deg); opacity:0.9; }
        }
        @keyframes orbitStar2 {
          0%   { transform: rotate(120deg)  translateX(42px) rotate(-120deg); opacity:0.6; }
          100% { transform: rotate(480deg)  translateX(42px) rotate(-480deg); opacity:0.6; }
        }
        @keyframes orbitStar3 {
          0%   { transform: rotate(240deg)  translateX(30px) rotate(-240deg); opacity:0.75; }
          100% { transform: rotate(600deg)  translateX(30px) rotate(-600deg); opacity:0.75; }
        }
      `}</style>
    </div>
  );
}
