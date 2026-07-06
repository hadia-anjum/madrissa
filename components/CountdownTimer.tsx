"use client";
import { useEffect, useState } from "react";

function getNextThursday(): Date {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 4=Thu, 5=Fri, 6=Sat
  const daysUntilThursday = day <= 4 ? 4 - day : 7 - day + 4;
  const target = new Date(now);
  target.setDate(now.getDate() + (daysUntilThursday === 0 ? 7 : daysUntilThursday));
  target.setHours(12, 30, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 7);
  return target;
}

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [target] = useState<Date>(() => getNextThursday());

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) return null;

  const units = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#f0f5ea 0%,#faf8f3 100%)" }}>
      {/* Floral corner ornaments */}
      <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-12">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          {[0,60,120,180,240,300].map((a,i) => (
            <ellipse key={i}
              cx={60+28*Math.cos(a*Math.PI/180)} cy={60+28*Math.sin(a*Math.PI/180)}
              rx="13" ry="6" fill="#c9a84c"
              transform={`rotate(${a},${60+28*Math.cos(a*Math.PI/180)},${60+28*Math.sin(a*Math.PI/180)})`} />
          ))}
          <circle cx="60" cy="60" r="9" fill="#4a7c35" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none opacity-12" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          {[0,60,120,180,240,300].map((a,i) => (
            <ellipse key={i}
              cx={60+28*Math.cos(a*Math.PI/180)} cy={60+28*Math.sin(a*Math.PI/180)}
              rx="13" ry="6" fill="#c9a84c"
              transform={`rotate(${a},${60+28*Math.cos(a*Math.PI/180)},${60+28*Math.sin(a*Math.PI/180)})`} />
          ))}
          <circle cx="60" cy="60" r="9" fill="#4a7c35" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ direction: "ltr" }}>
        <div className="text-center mb-10">
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] block mb-3">✦ ✦ ✦</span>
          <h2 className="font-bold text-[#2d4a1e] mb-1 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.6rem,3.5vw,2.3rem)" }}>
            Next Class Countdown
          </h2>
          <p className="text-[#4a7c35]/65 font-medium text-sm mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}>
            Join us this Thursday in-sha'Allah
          </p>
          <div
            className="inline-flex items-center gap-2 bg-[#2d4a1e] text-[#c9a84c] px-5 py-1.5 rounded-full text-sm font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            📅 {target.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })} — 12:30 PM
          </div>
        </div>

        {/* Timer blocks - centered flex layout */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {units.map((u, i) => (
            <div key={i} className="relative group w-20 sm:w-28 flex-shrink-0">
              <div
                className="rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  border: "1px solid rgba(74,124,53,0.18)",
                  boxShadow: "0 6px 24px rgba(74,124,53,0.06)",
                }}
              >
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/45 to-transparent rounded-full" />
                <div
                  key={u.value}
                  className="font-black text-[#2d4a1e] mb-1 tabular-nums"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                    lineHeight: 1,
                    animation: "flipNum 0.3s ease-out",
                  }}
                >
                  {String(u.value).padStart(2, "0")}
                </div>
                <p className="font-semibold text-[#4a7c35] text-[10px] sm:text-xs uppercase tracking-widest"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  {u.label}
                </p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 18px rgba(74,124,53,0.1)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Arabic inscription only */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4a7c35]/28" />
          <span className="text-[#c9a84c] text-base"
            style={{ fontFamily: "Scheherazade New, serif" }}>وَاللَّهُ خَيْرُ الْحَافِظِينَ</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4a7c35]/28" />
        </div>
      </div>

      <style>{`
        @keyframes flipNum {
          from { transform:rotateX(-90deg); opacity:0; }
          to   { transform:rotateX(0deg);  opacity:1; }
        }
        @keyframes dotPulse {
          0%,100% { opacity:0.35; transform:scale(0.8); }
          50%      { opacity:1;   transform:scale(1.2); }
        }
      `}</style>
    </section>
  );
}
