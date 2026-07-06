"use client";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3 items-center">
      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-400"
        style={{
          background: showTop
            ? "linear-gradient(135deg, #2d4a1e, #4a7c35)"
            : "transparent",
          border: "2px solid rgba(74,124,53,0.3)",
          boxShadow: showTop ? "0 4px 16px rgba(45,74,30,0.3)" : "none",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0) scale(1)" : "translateY(10px) scale(0.8)",
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke={showTop ? "white" : "#4a7c35"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
