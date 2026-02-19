"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Volume2, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { DUAS, ALLAH_NAMES, type Dua } from "@/data/duas";
import { getStoredItem, setStoredItem, shareContent, toBanglaNumber } from "@/lib/utils";

interface SavedDua {
    id: string;
    text: string;
    date: string;
}

export default function DuasTasbeehPage() {
    const [count, setCount] = useState(0);
    const [target, setTarget] = useState(33);
    const [nameIndex, setNameIndex] = useState(0);
    const [selectedDua, setSelectedDua] = useState<Dua | null>(null);
    const [savedDuas, setSavedDuas] = useState<SavedDua[]>([]);
    const [activeTab, setActiveTab] = useState<"tasbeeh" | "duas" | "names" | "saved">("tasbeeh");
    const [mounted, setMounted] = useState(false);
    const [animating, setAnimating] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        setMounted(true);
        setSavedDuas(getStoredItem<SavedDua[]>("savedDuas", []));
        setCount(getStoredItem<number>("tasbeehCount", 0));
    }, []);

    const increment = useCallback(() => {
        if (animating) return;
        setAnimating(true);
        const newCount = count + 1;
        setCount(newCount);
        setStoredItem("tasbeehCount", newCount);

        // Vibration
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }

        // Sound on milestones
        if (newCount % target === 0) {
            if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
        }

        setTimeout(() => setAnimating(false), 150);
    }, [count, target, animating]);

    const resetCount = () => {
        setCount(0);
        setStoredItem("tasbeehCount", 0);
    };

    const deleteSavedDua = (id: string) => {
        const updated = savedDuas.filter((d) => d.id !== id);
        setSavedDuas(updated);
        setStoredItem("savedDuas", updated);
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-4 md:pt-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                        📿 দোয়া ও তাসবীহ
                    </h1>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
                        তাসবীহ গণনা, রমজানের দোয়া ও আল্লাহর ৯৯ নাম
                    </p>
                </motion.div>
            </div>

            {/* Tabs */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {[
                        { value: "tasbeeh" as const, label: "📿 তাসবীহ", },
                        { value: "duas" as const, label: "🤲 দোয়া" },
                        { value: "names" as const, label: "✨ ৯৯ নাম" },
                        { value: "saved" as const, label: "💾 সংরক্ষিত" },
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${activeTab === tab.value
                                ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                                : "glass-card text-gray-400 hover:text-gray-300"
                                }`}
                            style={{ fontFamily: "Noto Sans Bengali" }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mb-16">
                {/* Tasbeeh Counter */}
                {activeTab === "tasbeeh" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                    >
                        {/* Target selector */}
                        <div className="flex gap-2 mb-8">
                            {[33, 99, 100, 500, 1000].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTarget(t)}
                                    className={`px-3 py-1.5 rounded-lg text-xs transition-all ${target === t
                                        ? "bg-emerald-600/30 text-emerald-300"
                                        : "bg-emerald-900/10 text-gray-500"
                                        }`}
                                >
                                    {toBanglaNumber(t)}
                                </button>
                            ))}
                        </div>

                        {/* Counter Display */}
                        <div className="text-center mb-6">
                            <p className="text-7xl md:text-9xl font-bold text-white animate-pulse-glow tabular-nums" style={{ fontFamily: "Inter" }}>
                                {toBanglaNumber(count)}
                            </p>
                            <p className="text-sm text-gray-400 mt-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                                লক্ষ্য: {toBanglaNumber(target)} | বাকি: {toBanglaNumber(Math.max(0, target - (count % target)))}
                            </p>
                            {/* Progress bar */}
                            <div className="w-48 h-1.5 bg-emerald-900/30 rounded-full mt-3 mx-auto overflow-hidden">
                                <motion.div
                                    className="h-full bg-emerald-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((count % target) / target) * 100}%` }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>
                        </div>

                        {/* Bead Button */}
                        <motion.button
                            whileTap={{ scale: 0.92 }}
                            onClick={increment}
                            className={`w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center transition-all duration-150 ${animating ? "animate-bead" : ""
                                }`}
                            style={{
                                background: "radial-gradient(circle at 35% 35%, #1A4D40, #0F2E26)",
                                boxShadow: `0 0 40px rgba(16, 185, 129, ${animating ? 0.5 : 0.2}), 0 0 80px rgba(16, 185, 129, ${animating ? 0.2 : 0.05})`,
                                border: "2px solid rgba(16, 185, 129, 0.3)",
                            }}
                        >
                            <span className="text-5xl md:text-6xl">📿</span>
                        </motion.button>

                        <p className="text-sm text-gray-500 mt-4" style={{ fontFamily: "Noto Sans Bengali" }}>ট্যাপ করুন গণনা করতে</p>

                        {/* Reset */}
                        <button
                            onClick={resetCount}
                            className="mt-4 flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-red-400 transition-all glass-card"
                            style={{ fontFamily: "Noto Sans Bengali" }}
                        >
                            <RotateCcw size={14} /> রিসেট
                        </button>
                    </motion.div>
                )}

                {/* Duas */}
                {activeTab === "duas" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                        {DUAS.map((dua, i) => (
                            <motion.div
                                key={dua.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-5 cursor-pointer hover:bg-emerald-900/10 transition-all"
                                onClick={() => setSelectedDua(selectedDua?.id === dua.id ? null : dua)}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-sm font-semibold text-emerald-400" style={{ fontFamily: "Noto Sans Bengali" }}>{dua.title}</h3>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${dua.category === "iftar" ? "bg-emerald-900/30 text-emerald-400" :
                                        dua.category === "sehri" ? "bg-orange-900/30 text-orange-400" :
                                            "bg-blue-900/30 text-blue-400"
                                        }`}>
                                        {dua.category === "iftar" ? "ইফতার" : dua.category === "sehri" ? "সেহরি" : dua.category === "daily" ? "দৈনিক" : "সাধারণ"}
                                    </span>
                                </div>

                                {/* Arabic */}
                                <p className="text-xl text-gold text-right leading-loose mb-3" style={{ fontFamily: "Amiri" }} dir="rtl">
                                    {dua.arabic}
                                </p>

                                <AnimatePresence>
                                    {selectedDua?.id === dua.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                        >
                                            <div className="arabesque-divider my-3" />
                                            <p className="text-sm text-gray-300 mb-2 leading-relaxed" style={{ fontFamily: "Noto Sans Bengali" }}>
                                                <strong className="text-emerald-400">বাংলা:</strong> {dua.bangla}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                <strong className="text-blue-400">English:</strong> {dua.english}
                                            </p>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    shareContent(dua.title, `${dua.arabic}\n\n${dua.bangla}\n\n${dua.english}`);
                                                }}
                                                className="mt-3 flex items-center gap-1 text-xs text-gray-500 hover:text-emerald-400 transition-colors"
                                            >
                                                <Share2 size={12} /> শেয়ার
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* 99 Names */}
                {activeTab === "names" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {/* Current name display */}
                        <div className="text-center mb-8">
                            <motion.div
                                key={nameIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-card p-8 glow-emerald max-w-sm mx-auto"
                            >
                                <p className="text-xs text-gray-400 mb-2">#{toBanglaNumber(ALLAH_NAMES[nameIndex].number)}</p>
                                <p className="text-5xl text-gold text-glow-gold mb-4" style={{ fontFamily: "Amiri" }}>
                                    {ALLAH_NAMES[nameIndex].arabic}
                                </p>
                                <p className="text-lg text-emerald-300 mb-1" style={{ fontFamily: "Noto Sans Bengali" }}>
                                    {ALLAH_NAMES[nameIndex].bangla}
                                </p>
                                <p className="text-sm text-gray-400 mb-1">{ALLAH_NAMES[nameIndex].english}</p>
                                <p className="text-sm text-gray-500">{ALLAH_NAMES[nameIndex].meaning}</p>
                            </motion.div>

                            <div className="flex items-center justify-center gap-4 mt-6">
                                <button
                                    onClick={() => setNameIndex((nameIndex - 1 + 99) % 99)}
                                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <span className="text-sm text-gray-500">{nameIndex + 1} / 99</span>
                                <button
                                    onClick={() => setNameIndex((nameIndex + 1) % 99)}
                                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                            {ALLAH_NAMES.map((name, i) => (
                                <button
                                    key={i}
                                    onClick={() => setNameIndex(i)}
                                    className={`p-2 rounded-lg text-center transition-all ${nameIndex === i
                                        ? "bg-emerald-600/30 border border-emerald-500/40 glow-emerald"
                                        : "bg-emerald-900/10 hover:bg-emerald-900/20"
                                        }`}
                                >
                                    <p className="text-lg" style={{ fontFamily: "Amiri" }}>{name.arabic}</p>
                                    <p className="text-[9px] text-gray-500 truncate">{name.bangla}</p>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Saved Duas */}
                {activeTab === "saved" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {savedDuas.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-4xl mb-4">🤲</p>
                                <p className="text-gray-400 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
                                    কোনো দোয়া সংরক্ষিত নেই
                                </p>
                                <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: "Noto Sans Bengali" }}>
                                    আপনার পছন্দের দোয়াগুলো এখানে সংরক্ষিত থাকবে
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {savedDuas.map((dua) => (
                                    <div key={dua.id} className="glass-card p-4 flex items-start justify-between">
                                        <div>
                                            <p className="text-sm text-gray-300" style={{ fontFamily: "Noto Sans Bengali" }}>{dua.text}</p>
                                            <p className="text-xs text-gray-500 mt-2">{dua.date}</p>
                                        </div>
                                        <button
                                            onClick={() => deleteSavedDua(dua.id)}
                                            className="text-gray-500 hover:text-red-400 text-xs flex-shrink-0 ml-3"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Hidden audio */}
            <audio ref={audioRef} preload="none" />
        </div>
    );
}
