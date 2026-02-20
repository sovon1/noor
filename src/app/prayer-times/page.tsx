"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Bell, Volume2 } from "lucide-react";
import { UPAZILAS, PRAYER_TIMES, getTodayPrayer, type CalculationMethod } from "@/data/prayer-times";
import { formatTime12, toBanglaNumber, getStoredItem, setStoredItem, shareContent } from "@/lib/utils";

export default function PrayerTimesPage() {
    const [upazila, setUpazila] = useState("noakhali-sadar");
    const [method, setMethod] = useState<CalculationMethod>("bangladesh");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setUpazila(getStoredItem<string>("selectedUpazila", "noakhali-sadar"));
    }, []);

    const times = PRAYER_TIMES[upazila]?.[method] || [];
    const today = getTodayPrayer(upazila, method);
    const _now = new Date();
    const todayDate = `${_now.getFullYear()}-${String(_now.getMonth() + 1).padStart(2, "0")}-${String(_now.getDate()).padStart(2, "0")}`;
    const upazilaInfo = UPAZILAS.find((u) => u.id === upazila);

    const requestNotification = async () => {
        if ("Notification" in window) {
            const perm = await Notification.requestPermission();
            if (perm === "granted") {
                new Notification("নোয়াখালীর নূর 🌙", {
                    body: "ইফতার/সেহরির রিমাইন্ডার সক্রিয় হয়েছে!",
                    icon: "/icons/icon-192.png",
                });
            }
        }
    };

    if (!mounted) {
        return <div className="min-h-screen flex items-center justify-center"><div className="shimmer w-64 h-8 rounded-lg" /></div>;
    }

    return (
        <div className="min-h-screen pt-4 md:pt-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                        🕌 নামাজের সময়সূচী
                    </h1>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
                        রমজান ২০২৬ — {upazilaInfo?.name}
                    </p>
                </motion.div>
            </div>

            {/* Controls */}
            <div className="max-w-4xl mx-auto px-4 mb-6 space-y-4">
                {/* Upazila Selector */}
                <div className="glass-card p-4">
                    <label className="text-xs text-gray-400 block mb-2" style={{ fontFamily: "Noto Sans Bengali" }}>উপজেলা নির্বাচন</label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                        {UPAZILAS.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => { setUpazila(u.id); setStoredItem("selectedUpazila", u.id); }}
                                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${upazila === u.id
                                    ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                                    : "bg-emerald-900/10 text-gray-400 hover:bg-emerald-900/20 border border-transparent"
                                    }`}
                                style={{ fontFamily: "Noto Sans Bengali" }}
                            >
                                {u.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Method Toggle */}
                <div className="glass-card p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-300" style={{ fontFamily: "Noto Sans Bengali" }}>গণনা পদ্ধতি</span>
                    <div className="flex bg-emerald-900/20 rounded-lg p-1 gap-1">
                        {[
                            { value: "bangladesh" as CalculationMethod, label: "ইসলামিক ফাউন্ডেশন" },
                            { value: "saudi" as CalculationMethod, label: "সৌদি পদ্ধতি" },
                        ].map((m) => (
                            <button
                                key={m.value}
                                onClick={() => setMethod(m.value)}
                                className={`px-3 py-1.5 rounded-md text-xs transition-all ${method === m.value
                                    ? "bg-emerald-600/40 text-emerald-300"
                                    : "text-gray-400 hover:text-gray-300"
                                    }`}
                                style={{ fontFamily: "Noto Sans Bengali" }}
                            >
                                {m.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={requestNotification}
                        className="flex-1 glass-card p-3 text-center text-sm text-emerald-400 hover:bg-emerald-900/20 transition-all flex items-center justify-center gap-2"
                        style={{ fontFamily: "Noto Sans Bengali" }}
                    >
                        <Bell size={16} /> রিমাইন্ডার সেট করুন
                    </button>
                    <button
                        onClick={() => shareContent("নামাজের সময়সূচী", `${upazilaInfo?.name} — রমজান ২০২৬`)}
                        className="glass-card p-3 text-gray-400 hover:text-emerald-400 transition-all"
                    >
                        <Volume2 size={16} />
                    </button>
                </div>
            </div>

            {/* Today's Highlight */}
            {today && (
                <div className="max-w-4xl mx-auto px-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-5 glow-emerald"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <Clock size={16} className="text-emerald-400" />
                            <span className="text-sm font-semibold text-emerald-400" style={{ fontFamily: "Noto Sans Bengali" }}>
                                আজকের সময়সূচী — রোজা {toBanglaNumber(today.day)}
                            </span>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                            {[
                                { label: "ফজর", time: today.fajr },
                                { label: "সূর্যোদয়", time: today.sunrise },
                                { label: "যোহর", time: today.dhuhr },
                                { label: "আসর", time: today.asr },
                                { label: "মাগরিব", time: today.maghrib },
                                { label: "ইশা", time: today.isha },
                            ].map((p, i) => (
                                <div key={i} className="text-center p-2 rounded-lg bg-emerald-900/20">
                                    <p className="text-[10px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>{p.label}</p>
                                    <p className="text-sm font-semibold text-white mt-1">{formatTime12(p.time)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-8 mt-4 pt-3 border-t border-emerald-900/30">
                            <div className="text-center">
                                <p className="text-[10px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>সেহরি শেষ</p>
                                <p className="text-lg font-bold text-gold">{formatTime12(today.sehriEnd)}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>ইফতার</p>
                                <p className="text-lg font-bold text-emerald-400">{formatTime12(today.iftarStart)}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Full Calendar Table */}
            <div className="max-w-4xl mx-auto px-4 mb-16">
                <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Noto Sans Bengali" }}>
                    📅 সম্পূর্ণ রমজান সময়সূচী
                </h2>
                <div className="glass-card overflow-x-auto">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-emerald-900/30">
                                {["রোজা", "তারিখ", "সেহরি", "ফজর", "যোহর", "আসর", "মাগরিব/ইফতার", "ইশা"].map((h) => (
                                    <th key={h} className="p-3 text-left text-emerald-400 font-medium whitespace-nowrap" style={{ fontFamily: "Noto Sans Bengali" }}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {times.map((t) => (
                                <tr
                                    key={t.day}
                                    className={`border-b border-emerald-900/10 transition-colors hover:bg-emerald-900/10 ${t.date === todayDate ? "bg-emerald-900/20" : ""
                                        }`}
                                >
                                    <td className="p-3 font-semibold text-gold">{toBanglaNumber(t.day)}</td>
                                    <td className="p-3 text-gray-400 whitespace-nowrap">{t.date}</td>
                                    <td className="p-3 text-orange-300 font-medium">{formatTime12(t.sehriEnd)}</td>
                                    <td className="p-3">{formatTime12(t.fajr)}</td>
                                    <td className="p-3">{formatTime12(t.dhuhr)}</td>
                                    <td className="p-3">{formatTime12(t.asr)}</td>
                                    <td className="p-3 text-emerald-400 font-medium">{formatTime12(t.iftarStart)}</td>
                                    <td className="p-3">{formatTime12(t.isha)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
