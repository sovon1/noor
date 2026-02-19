import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "নোয়াখালীর নূর — Noakhali Noor | রমজান ২০২৬",
  description: "নোয়াখালীর রমজান সঙ্গী — সেহরি-ইফতারের সময়সূচী, মসজিদের মানচিত্র, দোয়া ও তাসবীহ। সব উপজেলার জন্য।",
  keywords: ["noakhali", "ramadan", "নোয়াখালী", "রমজান", "iftar", "sehri", "prayer times"],
  authors: [{ name: "Noakhali Noor Team" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "নোয়াখালীর নূর — Noakhali Noor",
    description: "নোয়াখালী জেলার রমজান ২০২৬ এর সম্পূর্ণ গাইড — ইফতার-সেহরি, মসজিদ ও দোয়া",
    type: "website",
    locale: "bn_BD",
    siteName: "Noakhali Noor",
  },
  twitter: {
    card: "summary_large_image",
    title: "নোয়াখালীর নূর — Noakhali Noor",
    description: "নোয়াখালী জেলার রমজান ২০২৬ এর সম্পূর্ণ গাইড",
  },
};

export const viewport: Viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Bengali:wght@300;400;500;600;700;800&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen bg-[#0A1F1A] text-gray-100 antialiased islamic-pattern">
        <DesktopNav />
        <main className="pb-safe">
          {children}
        </main>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}

function DesktopNav() {
  const links = [
    { href: "/prayer-times", label: "নামাজের সময়" },
    { href: "/ramadan-calendar", label: "রমজান ক্যালেন্ডার" },
    { href: "/quran", label: "আল-কোরআন" },
    { href: "/mosques", label: "মসজিদ" },
    { href: "/duas-tasbeeh", label: "দোয়া ও তাসবীহ" },
    { href: "/zakat", label: "যাকাত" },
    { href: "/qibla", label: "কিবলা" },
  ];

  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-3 glass border-b border-emerald-900/30 sticky top-0 z-50">
      <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <span className="text-2xl">🌙</span>
        <span className="text-lg font-bold text-emerald-400" style={{ fontFamily: "Noto Sans Bengali" }}>নোয়াখালীর নূর</span>
      </a>
      <div className="flex items-center gap-5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
            style={{ fontFamily: "Noto Sans Bengali" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function BottomNav() {
  const links = [
    { href: "/", icon: "🏠", label: "হোম" },
    { href: "/ramadan-calendar", icon: "📅", label: "ক্যালেন্ডার" },
    { href: "/quran", icon: "📖", label: "কোরআন" },
    { href: "/duas-tasbeeh", icon: "📿", label: "দোয়া" },
    { href: "/mosques", icon: "📍", label: "মসজিদ" },
    { href: "/zakat", icon: "💰", label: "যাকাত" },
    { href: "/qibla", icon: "🧭", label: "কিবলা" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-emerald-900/30 safe-area-bottom md:hidden">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 hover:bg-emerald-900/30 active:scale-95"
          >
            <span className="text-lg">{link.icon}</span>
            <span className="text-[10px] font-medium text-gray-300" style={{ fontFamily: "Noto Sans Bengali" }}>
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-900/20 py-8 px-4 text-center mb-20 md:mb-0">
      <div className="arabesque-divider mb-6 max-w-xs mx-auto" />
      <p className="text-emerald-400/80 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
        Made with ❤️ for নোয়াখালী
      </p>
      <p className="text-gray-500 text-xs mt-2" style={{ fontFamily: "Noto Sans Bengali" }}>
        নোয়াখালীর নূর — রমজান ২০২৬
      </p>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <a href="/prayer-times" className="text-gold/60 hover:text-gold text-xs transition-colors">নামাজের সময়</a>
        <a href="/ramadan-calendar" className="text-gold/60 hover:text-gold text-xs transition-colors">রমজান ক্যালেন্ডার</a>
        <a href="/quran" className="text-gold/60 hover:text-gold text-xs transition-colors">আল-কোরআন</a>
        <a href="/duas-tasbeeh" className="text-gold/60 hover:text-gold text-xs transition-colors">দোয়া ও তাসবীহ</a>
        <a href="/zakat" className="text-gold/60 hover:text-gold text-xs transition-colors">যাকাত ক্যালকুলেটর</a>
        <a href="/qibla" className="text-gold/60 hover:text-gold text-xs transition-colors">কিবলা কম্পাস</a>
      </div>
    </footer>
  );
}
