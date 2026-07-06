import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الزہراوین — ہفتہ واری حفظ کلاس | Al Zahrawain Weekly Hifz Class",
  description:
    "الزہراوین کی جانب سے ہفتہ واری حفظ کلاس — سورۃ البقرہ اور سورۃ آل عمران۔ ہر جمعرات 12:30 بجے مدرسہ ام نعیم للبنات، گرین ٹاؤن، فیصل آباد میں۔",
  keywords: "Quran Hifz, Islamic class, Al Zahrawain, Madrassa, Quran memorization, Faisalabad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;500;600;700;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
