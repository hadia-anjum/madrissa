"use client";

/** Fixed Arabic calligraphy watermark across the page */
export default function CalligraphyWatermark() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      aria-hidden
    >
      <div
        style={{
          fontFamily: "Scheherazade New, serif",
          fontSize: "clamp(4rem, 15vw, 11rem)",
          color: "#4a7c35",
          opacity: 0.028,
          userSelect: "none",
          lineHeight: 1.2,
          textAlign: "center",
          transform: "rotate(-12deg)",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}
      >
        الزہراوین
      </div>
    </div>
  );
}
