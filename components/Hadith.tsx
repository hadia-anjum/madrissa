"use client";
import { useEffect, useRef } from "react";

export default function Hadith() {
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
    <section ref={ref} className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#2d4a1e 0%,#3d6b2a 50%,#2d4a1e 100%)" }}>
      {/* Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 5 L75 22 L75 58 L40 75 L5 58 L5 22 Z' fill='none' stroke='%23c9a84c' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/45 to-transparent" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-5xl opacity-18 pointer-events-none"
        style={{ animation: "posterFloat 7s ease-in-out infinite" }}>🪔</div>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-5xl opacity-18 pointer-events-none"
        style={{ animation: "posterFloat 7s ease-in-out infinite 3s" }}>🪔</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal">
          <div
            className="relative rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,168,76,0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="absolute top-5 right-7 text-[#c9a84c]/15 text-8xl font-serif leading-none select-none">&ldquo;</span>
            <span className="absolute bottom-1 left-7 text-[#c9a84c]/15 text-8xl font-serif leading-none select-none rotate-180">&ldquo;</span>

            {/* Arabic Hadith Header */}
            <p className="font-bold mb-4 leading-relaxed"
              style={{
                fontFamily: "Scheherazade New, serif",
                fontSize: "clamp(1.4rem,3.5vw,2.2rem)",
                color: "#e2c87a",
                textShadow: "0 0 30px rgba(201,168,76,0.25)",
              }}>
              اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ
            </p>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#c9a84c]/45" />
              <div className="w-2 h-2 rotate-45 bg-[#c9a84c]/65" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#c9a84c]/45" />
            </div>

            {/* Urdu Hadith from Poster - spacious formatting */}
            <p className="text-white/90 leading-loose mb-6 text-right" dir="rtl"
              style={{
                fontFamily: "Noto Nastaliq Urdu, serif",
                fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
                lineHeight: "2.3",
                wordSpacing: "0.08em"
              }}>
              "قرآن پڑھا کرو، کیونکہ وہ قیامت کے دن اپنے پڑھنے والوں کی سفارش کرے گا۔ دو روشن سورتیں، سورۃ البقرہ اور سورۃ آل عمران، پڑھا کرو، کیونکہ یہ قیامت کے دن اس طرح آئیں گی جیسے دو بادل، یا دو سائبان، یا پروں کو پھیلائے ہوئے پرندوں کے دو غول ہوں، اور اپنے پڑھنے والوں کی طرف سے جھگڑ کر (سفارش کر) رہی ہوں گی۔ سورۃ البقرہ ضرور پڑھا کرو، کیونکہ اس کو اختیار کرنا باعثِ برکت ہے، اس کو چھوڑ دینا باعثِ حسرت ہے، اور جادوگر اس کا مقابلہ نہیں کر سکتے۔"
            </p>

            {/* English Hadith Translation */}
            <p className="text-white/70 leading-relaxed mb-6 text-left" dir="ltr"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
                lineHeight: "1.8"
              }}>
              "Recite the Quran, for on the Day of Resurrection it will come as an intercessor for those who recite it. Recite the two luminous ones, Surah Al-Baqarah and Surah Al-Imran, for on the Day of Resurrection they will come as two clouds or two shades, or two flocks of birds in ranks, pleading for those who recite them. Recite Surah Al-Baqarah, for to take recourse to it is a blessing and to give it up is a cause of grief, and the magicians cannot confront it."
            </p>

            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/12 border border-[#c9a84c]/28 text-[#c9a84c] px-5 py-2 rounded-full text-sm font-medium tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}>
              — Sahih Muslim, Hadith 804
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes posterFloat {
          0%,100% { transform:translateY(0) rotate(-5deg); }
          50%      { transform:translateY(-10px) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}
