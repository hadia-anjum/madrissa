"use client";

export default function Footer() {
  const links = [
    { href: "#home",       label: "Home" },
    { href: "#about",      label: "About" },
    { href: "#event-info", label: "Event Details" },
    { href: "#benefits",   label: "Benefits" },
    { href: "#location",   label: "Location" },
    { href: "#contact",    label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: "#1a2f0f", direction: "ltr" }}>
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 5 L75 22 L75 58 L40 75 L5 58 L5 22 Z' fill='none' stroke='%23c9a84c' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c]/12 border border-[#c9a84c]/28 flex items-center justify-center text-[#c9a84c] text-lg">☽</div>
              <div>
                <span className="font-bold text-2xl text-[#c9a84c] block leading-tight"
                  style={{ fontFamily: "Scheherazade New, serif" }}>الزہراوین</span>
                <span className="text-white/40 text-xs tracking-wide"
                  style={{ fontFamily: "Poppins, sans-serif" }}>Al Zahrawain</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}>
              A dedicated platform for Quranic education and weekly Hifz classes.
            </p>
            <div className="h-px bg-gradient-to-r from-[#c9a84c]/28 to-transparent mb-4" />
            {/* Arabic only for Bismillah */}
            <p className="text-[#c9a84c]/65 text-lg"
              style={{ fontFamily: "Scheherazade New, serif" }}>
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#c9a84c] mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "Poppins, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-white/50 hover:text-[#c9a84c] text-sm font-medium transition-colors duration-200 tracking-wide"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#c9a84c] mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "Poppins, sans-serif" }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/50 font-medium"
              style={{ fontFamily: "Poppins, sans-serif" }}>
              <p>📍 Madarsa Umm-e-Naeem, Green Town, Faisalabad</p>
              <p>📞 +92 321 6663494</p>
              <p>🕐 Thursday · 12:30 – 1:10 PM</p>
            </div>
            <div className="h-px bg-gradient-to-r from-[#c9a84c]/22 to-transparent mt-4 mb-4" />
            <a
              href="https://wa.me/923216663494"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/8 text-center">
          <p className="text-[#c9a84c]/35 text-xs tracking-widest mb-2">✦ ✦ ✦</p>
          <p className="text-white/28 text-xs mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
            © 2025 Al Zahrawain — All Rights Reserved
          </p>
          <p className="text-[#c9a84c]/50 text-sm" style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}>
            "May Allah accept your efforts." — Āmīn
          </p>
        </div>
      </div>
    </footer>
  );
}
