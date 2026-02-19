"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, Play, Mic } from "lucide-react";
import { QURAN, type Surah } from "@/data/quran";
import { toBanglaNumber, shareContent } from "@/lib/utils";

export default function QuranPage() {
    const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-4 md:pt-8 bg-[#0A1F1A]">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-4 mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                        📖 আল-কোরআন
                    </h1>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
                        বাংলা অনুবাদ ও উচ্চারণসহ নির্বাচিত সূরাসমূহ
                    </p>
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mb-16">
                <AnimatePresence mode="wait">
                    {!selectedSurah ? (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                        >
                            {QURAN.map((surah, i) => (
                                <motion.div
                                    key={surah.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setSelectedSurah(surah)}
                                    className="glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-emerald-900/20 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                                            {toBanglaNumber(surah.id)}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "Noto Sans Bengali" }}>
                                                {surah.name}
                                            </h3>
                                            <p className="text-xs text-gray-500">{surah.nameEn} • {surah.meaning}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500" style={{ fontFamily: "Noto Sans Bengali" }}>
                                            {toBanglaNumber(surah.verses.length)} আয়াত
                                        </p>
                                        <ChevronRight size={16} className="text-emerald-600 group-hover:text-emerald-400 ml-auto mt-1" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            {/* Surah Header */}
                            <div className="flex items-center gap-2 mb-6">
                                <button
                                    onClick={() => setSelectedSurah(null)}
                                    className="p-2 rounded-full glass-card hover:bg-emerald-900/20 text-gray-400 hover:text-white transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <div>
                                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "Noto Sans Bengali" }}>
                                        {selectedSurah.name}
                                    </h2>
                                    <p className="text-xs text-gray-400">{selectedSurah.nameEn} • {selectedSurah.meaning}</p>
                                </div>
                            </div>

                            {/* Bismillah (except Surah Tawbah, but simplified logic here) */}
                            {selectedSurah.id !== 9 && (
                                <div className="text-center mb-8">
                                    <p className="text-2xl text-gold" style={{ fontFamily: "Amiri" }}>
                                        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                                    </p>
                                </div>
                            )}

                            {/* Verses */}
                            <div className="space-y-6">
                                {selectedSurah.verses.map((verse) => (
                                    <div key={verse.id} className="glass-card p-5 border-b-4 border-emerald-900/0 hover:border-emerald-500/30 transition-all">
                                        {/* Arabic */}
                                        <div className="flex justify-between items-start gap-4 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-900/20 flex items-center justify-center text-xs text-emerald-500 font-medium flex-shrink-0 mt-1">
                                                {toBanglaNumber(verse.id)}
                                            </div>
                                            <p className="text-2xl text-right text-white leading-loose font-amiri" style={{ fontFamily: "Amiri" }} dir="rtl">
                                                {verse.arabic}
                                            </p>
                                        </div>

                                        {/* Translations */}
                                        <div className="space-y-2 pl-12 border-l-2 border-emerald-900/30 ml-4">
                                            {/* Pronunciation */}
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5 flex items-center gap-1">
                                                    <Mic size={10} /> উচ্চারণ
                                                </p>
                                                <p className="text-sm text-gray-300 italic" style={{ fontFamily: "Noto Sans Bengali" }}>
                                                    {verse.pronunciation}
                                                </p>
                                            </div>

                                            {/* Bangla */}
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-emerald-500/70 mb-0.5">অনুবাদ</p>
                                                <p className="text-sm text-emerald-100 font-medium leading-relaxed" style={{ fontFamily: "Noto Sans Bengali" }}>
                                                    {verse.bangla}
                                                </p>
                                            </div>

                                            {/* English */}
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-blue-500/60 mb-0.5">English</p>
                                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                                    {verse.english}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Share */}
                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => shareContent(selectedSurah.name, `${selectedSurah.name} (${selectedSurah.nameEn})\n\nhttps://noakhali-noor.vercel.app/quran`)}
                                    className="px-6 py-2 rounded-full glass-card text-emerald-400 text-sm font-medium hover:bg-emerald-900/20 transition-all"
                                    style={{ fontFamily: "Noto Sans Bengali" }}
                                >
                                    এই সূরাটি শেয়ার করুন
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
