"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { UPAZILAS, PRAYER_TIMES, type CalculationMethod } from "@/data/prayer-times";
import { formatTime12, toBanglaNumber, getStoredItem, setStoredItem } from "@/lib/utils";

const RAMADAN_START = new Date("2026-02-18");
const BANGLA_MONTHS = ["ফেব্রুয়ারি", "মার্চ"];

function getRamadanDay(): number {
    const now = new Date();
    const diff = Math.floor((now.getTime() - RAMADAN_START.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(30, diff));
}

export default function RamadanCalendarPage() {
    const [upazila, setUpazila] = useState("noakhali-sadar");
    const [method] = useState<CalculationMethod>("bangladesh");
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setUpazila(getStoredItem<string>("selectedUpazila", "noakhali-sadar"));
    }, []);

    const times = PRAYER_TIMES[upazila]?.[method] || [];
    const todayRamadan = getRamadanDay();
    const selected = selectedDay !== null ? times.find((t) => t.day === selectedDay) : null;

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-4 md:pt-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                        📅 রমজান ক্যালেন্ডার ২০২৬
                    </h1>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
                        ১ রমজান — ১৮ ফেব্রুয়ারি ২০২৬ | ৩০ রমজান — ১৯ মার্চ ২০২৬
                    </p>
                </motion.div>
            </div>

            {/* Upazila Selector */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <div className="glass-card p-3">
                    <div className="flex gap-2 overflow-x-auto pb-1">
                        {UPAZILAS.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => { setUpazila(u.id); setStoredItem("selectedUpazila", u.id); }}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${upazila === u.id
                                        ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                                        : "text-gray-400 hover:bg-emerald-900/20"
                                    }`}
                                style={{ fontFamily: "Noto Sans Bengali" }}
                            >
                                {u.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <div className="grid grid-cols-5 md:grid-cols-6 gap-2">
                    {times.map((day, i) => {
                        const isToday = day.day === todayRamadan;
                        const isSelected = day.day === selectedDay;

                        return (
                            <motion.button
                                key={day.day}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.02 }}
                                onClick={() => setSelectedDay(isSelected ? null : day.day)}
                                className={`relative p-3 rounded-xl text-center transition-all duration-200 ${isSelected
                                        ? "bg-emerald-600/40 border-2 border-emerald-400 glow-emerald"
                                        : isToday
                                            ? "bg-gold/10 border border-gold/40"
                                            : day.day < todayRamadan
                                                ? "glass-card opacity-60"
                                                : "glass-card hover:bg-emerald-900/20"
                                    }`}
                            >
                                {isToday && (
                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                )}
                                <p className="text-lg font-bold text-white" style={{ fontFamily: "Inter" }}>
                                    {toBanglaNumber(day.day)}
                                </p>
                                <p className="text-[9px] text-gray-500 mt-0.5">{day.date.slice(5)}</p>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Selected Day Detail */}
            {selected && (
                <motion.div
                    key={selected.day}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto px-4 mb-8"
                >
                    <div className="glass-card p-5 glow-emerald">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar size={18} className="text-emerald-400" />
                            <h3 className="text-lg font-bold text-white" style={{ fontFamily: "Noto Sans Bengali" }}>
                                রোজা {toBanglaNumber(selected.day)} — {selected.date}
                            </h3>
                            {selected.day === todayRamadan && (
                                <span className="px-2 py-0.5 bg-emerald-600/30 text-emerald-300 text-[10px] rounded-full">আজ</span>
                            )}
                        </div>

                        {/* Sehri & Iftar Highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-orange-900/15 border border-orange-800/20 text-center">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <Sunrise size={14} className="text-orange-400" />
                                    <span className="text-xs text-orange-300" style={{ fontFamily: "Noto Sans Bengali" }}>সেহরি শেষ</span>
                                </div>
                                <p className="text-xl font-bold text-white">{formatTime12(selected.sehriEnd)}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-emerald-900/15 border border-emerald-800/20 text-center">
                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                    <Sunset size={14} className="text-emerald-400" />
                                    <span className="text-xs text-emerald-300" style={{ fontFamily: "Noto Sans Bengali" }}>ইফতার</span>
                                </div>
                                <p className="text-xl font-bold text-white">{formatTime12(selected.iftarStart)}</p>
                            </div>
                        </div>

                        {/* All Prayers */}
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                            {[
                                { label: "ফজর", time: selected.fajr, icon: <Moon size={12} /> },
                                { label: "সূর্যোদয়", time: selected.sunrise, icon: <Sun size={12} /> },
                                { label: "যোহর", time: selected.dhuhr, icon: <Sun size={12} /> },
                                { label: "আসর", time: selected.asr, icon: <Sun size={12} /> },
                                { label: "মাগরিব", time: selected.maghrib, icon: <Sunset size={12} /> },
                                { label: "ইশা", time: selected.isha, icon: <Moon size={12} /> },
                            ].map((p, i) => (
                                <div key={i} className="text-center p-2 rounded-lg bg-emerald-900/15">
                                    <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">{p.icon}</div>
                                    <p className="text-[10px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>{p.label}</p>
                                    <p className="text-sm font-semibold text-white mt-0.5">{formatTime12(p.time)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Legend */}
            <div className="max-w-4xl mx-auto px-4 mb-16">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span style={{ fontFamily: "Noto Sans Bengali" }}>আজ</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold/50" />
                        <span style={{ fontFamily: "Noto Sans Bengali" }}>আজকের রোজা</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                        <span style={{ fontFamily: "Noto Sans Bengali" }}>সম্পন্ন</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
