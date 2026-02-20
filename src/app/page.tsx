"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Clock, MapPin, BookOpen, Sparkles, Share2, Calendar, Calculator, Navigation } from "lucide-react";
import { UPAZILAS } from "@/data/prayer-times";
import { getTodayPrayer, getCurrentPrayer } from "@/data/prayer-times";
import { IFTAR_TIPS } from "@/data/duas";
import { getCountdown, toBanglaNumber, formatTime12, shareContent, getStoredItem, setStoredItem, getNearestUpazila } from "@/lib/utils";
import type { CountdownTime } from "@/lib/utils";

export default function HomePage() {
  const [upazila, setUpazila] = useState("noakhali-sadar");
  const [countdown, setCountdown] = useState<CountdownTime | null>(null);
  const [mounted, setMounted] = useState(false);
  const [tip] = useState(() => IFTAR_TIPS[Math.floor(Math.random() * IFTAR_TIPS.length)]);

  useEffect(() => {
    setMounted(true);
    const saved = getStoredItem<string>("selectedUpazila", "noakhali-sadar");
    setUpazila(saved);

    // Try geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const nearest = getNearestUpazila(pos.coords.latitude, pos.coords.longitude);
          setUpazila(nearest);
          setStoredItem("selectedUpazila", nearest);
        },
        () => { } // ignore errors
      );
    }
  }, []);

  const updateCountdown = useCallback(() => {
    const today = getTodayPrayer(upazila);
    if (today) {
      setCountdown(getCountdown(today.sehriEnd, today.iftarStart));
    }
  }, [upazila]);

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);

  const todayPrayer = getTodayPrayer(upazila);
  const currentPrayer = todayPrayer ? getCurrentPrayer(todayPrayer) : null;
  const currentUpazilaInfo = UPAZILAS.find((u) => u.id === upazila);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl animate-crescent mb-4">🌙</div>
          <p className="text-emerald-400 animate-pulse" style={{ fontFamily: "Noto Sans Bengali" }}>নোয়াখালীর নূর লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-[#0A1F1A] to-[#0A1F1A]" />
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bajra_Shahi_Mosque%2CSonaimuri%2CNoakhali.jpg/1280px-Bajra_Shahi_Mosque%2CSonaimuri%2CNoakhali.jpg')] bg-cover bg-center opacity-15" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-12 pb-16 text-center">
          {/* Crescent Moon */}
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -20 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-7xl md:text-8xl mb-4 animate-crescent inline-block"
          >
            🌙
          </motion.div>

          {/* Arabic Calligraphy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-3xl md:text-5xl text-gold mb-2 text-glow-gold" style={{ fontFamily: "Amiri" }}>
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-2 text-glow-emerald"
            style={{ fontFamily: "Noto Sans Bengali" }}
          >
            নোয়াখালীর নূর
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-emerald-300/80 text-lg mb-1"
            style={{ fontFamily: "Noto Sans Bengali" }}
          >
            রমজান ২০২৬ — নোয়াখালীর রমজান সঙ্গী
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-1.5 text-gray-400 text-sm mb-8"
          >
            <MapPin size={14} />
            <span style={{ fontFamily: "Noto Sans Bengali" }}>{currentUpazilaInfo?.name || "নোয়াখালী সদর"}</span>
          </motion.div>

          {/* Countdown */}
          <AnimatePresence mode="wait">
            {countdown && (
              <motion.div
                key="countdown"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="glass-card p-6 md:p-8 max-w-md mx-auto glow-emerald"
              >
                {countdown.sehriExpired && (
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg px-3 py-2 mb-4 text-center">
                    <p className="text-orange-400 text-sm font-medium" style={{ fontFamily: "Noto Sans Bengali" }}>
                      ⚠️ সেহরি খাওয়ার সময় শেষ হয়েছে
                    </p>
                  </div>
                )}
                <p className="text-emerald-300 text-sm mb-3 flex items-center justify-center gap-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                  <Clock size={16} />
                  {countdown.label}
                </p>
                <div className="flex items-center justify-center gap-3 md:gap-5">
                  {[
                    { value: countdown.hours, label: "ঘণ্টা" },
                    { value: countdown.minutes, label: "মিনিট" },
                    { value: countdown.seconds, label: "সেকেন্ড" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl md:text-6xl font-bold text-white animate-pulse-glow tabular-nums" style={{ fontFamily: "Inter" }}>
                        {toBanglaNumber(String(item.value).padStart(2, "0"))}
                      </div>
                      <p className="text-[10px] text-emerald-400/70 mt-1" style={{ fontFamily: "Noto Sans Bengali" }}>
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Sehri / Iftar times */}
                {todayPrayer && (
                  <div className="flex justify-center gap-6 mt-5 pt-4 border-t border-emerald-900/30">
                    <div className="text-center">
                      <p className="text-[10px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>সেহরি শেষ</p>
                      <p className={`text-lg font-semibold ${countdown.sehriExpired ? "text-gray-500 line-through" : "text-white"}`}>{formatTime12(todayPrayer.sehriEnd)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>ইফতার</p>
                      <p className="text-lg font-semibold text-emerald-400">{formatTime12(todayPrayer.iftarStart)}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Current Prayer */}
      {currentPrayer && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="max-w-4xl mx-auto px-4 -mt-4 mb-8"
        >
          <div className="glass-card p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>বর্তমান ওয়াক্ত</p>
              <p className="text-lg font-semibold text-emerald-400" style={{ fontFamily: "Noto Sans Bengali" }}>{currentPrayer.current}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>পরবর্তী</p>
              <p className="text-sm text-white" style={{ fontFamily: "Noto Sans Bengali" }}>
                {currentPrayer.next} — {formatTime12(currentPrayer.nextTime)}
              </p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Upazila Selector */}
      <section className="max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: "Noto Sans Bengali" }}>
          <MapPin size={20} className="text-emerald-400" />
          উপজেলা নির্বাচন করুন
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {UPAZILAS.map((u) => (
            <motion.button
              key={u.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setUpazila(u.id);
                setStoredItem("selectedUpazila", u.id);
              }}
              className={`p-3 rounded-xl text-center transition-all duration-200 ${upazila === u.id
                ? "bg-emerald-600/30 border border-emerald-500/50 glow-emerald"
                : "glass-card hover:bg-emerald-900/20"
                }`}
            >
              <p className="text-xs font-medium truncate" style={{ fontFamily: "Noto Sans Bengali" }}>
                {u.name}
              </p>
            </motion.button>
          ))}
        </div>
      </section>


      {/* Quick Links */}
      <section className="max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Noto Sans Bengali" }}>
          <Sparkles size={20} className="text-gold inline mr-2" />
          দ্রুত লিংক
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: "/prayer-times", icon: <Moon size={24} />, label: "নামাজের সময়সূচী", color: "text-emerald-400" },
            { href: "/ramadan-calendar", icon: <Calendar size={24} />, label: "রমজান ক্যালেন্ডার", color: "text-gold" },
            { href: "/quran", icon: <BookOpen size={24} />, label: "আল-কোরআন", color: "text-emerald-300" },
            { href: "/mosques", icon: <MapPin size={24} />, label: "মসজিদ খুঁজুন", color: "text-blue-400" },
            { href: "/duas-tasbeeh", icon: <Sparkles size={24} />, label: "দোয়া ও তাসবীহ", color: "text-purple-400" },
            { href: "/zakat", icon: <Calculator size={24} />, label: "যাকাত ক্যালকুলেটর", color: "text-gold" },
            { href: "/qibla", icon: <Navigation size={24} />, label: "কিবলা কম্পাস", color: "text-red-400" },
            { href: "#", icon: <Share2 size={24} />, label: "শেয়ার করুন", color: "text-pink-400", action: true },
          ].map((link, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              {link.action ? (
                <button
                  onClick={() => shareContent("নোয়াখালীর নূর", "নোয়াখালীর রমজান ২০২৬ এর সম্পূর্ণ গাইড")}
                  className="glass-card p-4 w-full text-left hover:bg-emerald-900/20 transition-all group"
                >
                  <span className={`${link.color} group-hover:scale-110 inline-block transition-transform`}>{link.icon}</span>
                  <p className="text-sm font-medium mt-2 text-gray-200" style={{ fontFamily: "Noto Sans Bengali" }}>{link.label}</p>
                </button>
              ) : (
                <a href={link.href} className="glass-card p-4 block hover:bg-emerald-900/20 transition-all group">
                  <span className={`${link.color} group-hover:scale-110 inline-block transition-transform`}>{link.icon}</span>
                  <p className="text-sm font-medium mt-2 text-gray-200" style={{ fontFamily: "Noto Sans Bengali" }}>{link.label}</p>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily Dua + Iftar Tip */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">💡</span>
            <h3 className="text-sm font-semibold text-gold" style={{ fontFamily: "Noto Sans Bengali" }}>আজকের ইফতার টিপ</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Noto Sans Bengali" }}>
            {tip}
          </p>
        </div>
      </section>
    </div>
  );
}
