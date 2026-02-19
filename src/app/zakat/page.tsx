"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronDown, ChevronUp, AlertCircle, Info, Coins } from "lucide-react";
import { toBanglaNumber } from "@/lib/utils";

// Nisab Values (Approximate) - Should be updated dynamically or manually
const DEFAULT_GOLD_PRICE_PER_GRAM = 10500; // ~1.2 Lakh BDT per bhori (11.66g)
const DEFAULT_SILVER_PRICE_PER_GRAM = 140; // ~1600 BDT per bhori

const NISAB_GOLD_GRAMS = 87.48;
const NISAB_SILVER_GRAMS = 612.36;

interface AssetCategory {
    id: string;
    label: string;
    icon: string;
    items: AssetItem[];
}

interface AssetItem {
    id: string;
    label: string;
    value: number;
    description?: string;
}

export default function ZakatCalculatorPage() {
    const [mounted, setMounted] = useState(false);
    const [goldPrice, setGoldPrice] = useState(DEFAULT_GOLD_PRICE_PER_GRAM);
    const [silverPrice, setSilverPrice] = useState(DEFAULT_SILVER_PRICE_PER_GRAM);
    const [assets, setAssets] = useState<Record<string, number>>({});
    const [openCategory, setOpenCategory] = useState<string | null>("gold_silver");

    useEffect(() => {
        setMounted(true);
    }, []);

    const categories: AssetCategory[] = [
        {
            id: "gold_silver",
            label: "স্বর্ণ ও রৌপ্য",
            icon: "🏆",
            items: [
                { id: "gold_grams", label: "স্বর্ণ (গ্রাম)", value: 0, description: "গহনা, বার, বা কয়েন" },
                { id: "silver_grams", label: "রৌপ্য (গ্রাম)", value: 0, description: "গহনা, বাসন, বা বার" },
            ]
        },
        {
            id: "cash",
            label: "নগদ ও ব্যাংক",
            icon: "💵",
            items: [
                { id: "cash_in_hand", label: "হাতে নগদ", value: 0 },
                { id: "bank_balance", label: "ব্যাংক জমা", value: 0 },
                { id: "mobile_wallet", label: "মোবাইল ওয়ালেট (বিকাশ/নগদ)", value: 0 },
            ]
        },
        {
            id: "investments",
            label: "বিনিয়োগ ও অন্যান্য",
            icon: "📈",
            items: [
                { id: "stocks", label: "শেয়ার বাজার", value: 0, description: "বর্তমান বাজার মূল্য" },
                { id: "business_goods", label: "ব্যবসায়িক পণ্য", value: 0, description: "বিক্রয়ের জন্য মজুদ পণ্য" },
                { id: "given_loans", label: "প্রদত্ত ঋণ", value: 0, description: "যে টাকা ফেরত পাওয়ার আশা আছে" },
            ]
        },
        {
            id: "liabilities",
            label: "ঋণ ও দায় (বিয়োগ হবে)",
            icon: "📉",
            items: [
                { id: "debts", label: "ঋল", value: 0, description: "তাৎক্ষণিক পরিশোধযোগ্য ঋণ" },
                { id: "due_bills", label: "বকেয়া বিল/বেতন", value: 0 },
            ]
        }
    ];

    const handleInputChange = (id: string, value: string) => {
        const numValue = parseFloat(value) || 0;
        setAssets(prev => ({ ...prev, [id]: numValue }));
    };

    // Calculate Totals
    const totalGoldValue = (assets["gold_grams"] || 0) * goldPrice;
    const totalSilverValue = (assets["silver_grams"] || 0) * silverPrice;

    // Calculate Nisab Thresholds
    const goldNisabValue = NISAB_GOLD_GRAMS * goldPrice;
    const silverNisabValue = NISAB_SILVER_GRAMS * silverPrice;

    // Choose the lower Nisab (Silver) usually safer for poor, but can toggle
    // For this calculator, we check if Gold >= 87.48g OR Silver >= 612.36g OR
    // Total Cash Equivalent >= Silver Nisab Value (Standard practice)

    const nisabThreshold = silverNisabValue;

    const totalCashAssets =
        (assets["cash_in_hand"] || 0) +
        (assets["bank_balance"] || 0) +
        (assets["mobile_wallet"] || 0) +
        (assets["stocks"] || 0) +
        (assets["business_goods"] || 0) +
        (assets["given_loans"] || 0);

    const totalLiabilities =
        (assets["debts"] || 0) +
        (assets["due_bills"] || 0);

    const totalNetAssets = totalGoldValue + totalSilverValue + totalCashAssets - totalLiabilities;

    const isEligible = totalNetAssets >= nisabThreshold;
    const zakatAmount = Math.max(0, totalNetAssets * 0.025);

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-4 md:pt-8 bg-[#0A1F1A] pb-24">
            {/* Header */}
            <div className="max-w-md mx-auto px-4 mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-emerald-900/30 rounded-full text-emerald-400">
                            <Calculator size={24} />
                        </div>
                        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "Noto Sans Bengali" }}>
                            যাকাত ক্যালকুলেটর
                        </h1>
                    </div>
                    <p className="text-gray-400 text-xs ml-12" style={{ fontFamily: "Noto Sans Bengali" }}>
                        সহজে আপনার যাকাতের পরিমাণ হিসাব করুন
                    </p>
                </motion.div>
            </div>

            <div className="max-w-md mx-auto px-4 space-y-6">

                {/* Result Card (Sticky/Top) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`sticky top-20 z-30 glass-card p-6 border transition-colors shadow-lg ${isEligible ? "border-emerald-500/30 bg-emerald-900/40 backdrop-blur-xl" : "border-gray-700/30 bg-[#0A1F1A]/80 backdrop-blur-md"
                        }`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm text-gray-400 mb-1" style={{ fontFamily: "Noto Sans Bengali" }}>মোট যাকাত দিতে হবে</p>
                            <h2 className={`text-4xl font-bold ${isEligible ? "text-gold text-glow-gold" : "text-gray-500"}`} style={{ fontFamily: "Inter" }}>
                                ৳ {toBanglaNumber(Math.round(zakatAmount))}
                            </h2>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${isEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-700/50 text-gray-400"
                            }`}>
                            {isEligible ? "যাকাত ফরজ" : "যাকাত ফরজ নয়"}
                        </div>
                    </div>

                    <div className="space-y-2 text-xs text-gray-400 border-t border-gray-700/30 pt-3">
                        <div className="flex justify-between">
                            <span>মোট সম্পদ (Net Assets)</span>
                            <span className="text-white">৳ {toBanglaNumber(Math.round(totalNetAssets))}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>নিসাব (Nisab Limit)</span>
                            <span className="text-emerald-400">৳ {toBanglaNumber(Math.round(nisabThreshold))}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Settings (Gold/Silver Price) */}
                <div className="glass-card p-4">
                    <div className="flex items-center gap-2 mb-3 text-emerald-400 text-sm font-medium">
                        <Coins size={16} />
                        <span style={{ fontFamily: "Noto Sans Bengali" }}>বর্তমান বাজার মূল্য (প্রতি গ্রাম)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">স্বর্ণ (Gold)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-gray-400 text-xs">৳</span>
                                <input
                                    type="number"
                                    value={goldPrice}
                                    onChange={(e) => setGoldPrice(Number(e.target.value))}
                                    className="w-full bg-emerald-900/10 border border-emerald-900/30 rounded-lg py-2 pl-7 pr-3 text-sm text-white focus:outline-none focus:border-emerald-500/50"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">রৌপ্য (Silver)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-gray-400 text-xs">৳</span>
                                <input
                                    type="number"
                                    value={silverPrice}
                                    onChange={(e) => setSilverPrice(Number(e.target.value))}
                                    className="w-full bg-emerald-900/10 border border-emerald-900/30 rounded-lg py-2 pl-7 pr-3 text-sm text-white focus:outline-none focus:border-emerald-500/50"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                        <Info size={10} /> নিসাব ক্যালকুলেশনের জন্য আজকের বাজার মূল্য দিন।
                    </p>
                </div>

                {/* Asset Categories */}
                <div className="space-y-4">
                    {categories.map((category) => (
                        <div key={category.id} className="glass-card overflow-hidden">
                            <button
                                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                                className="w-full flex items-center justify-between p-4 bg-emerald-900/10 hover:bg-emerald-900/20 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{category.icon}</span>
                                    <span className="font-medium text-gray-200" style={{ fontFamily: "Noto Sans Bengali" }}>
                                        {category.label}
                                    </span>
                                </div>
                                {openCategory === category.id ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                            </button>

                            <AnimatePresence>
                                {openCategory === category.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-emerald-900/20"
                                    >
                                        <div className="p-4 space-y-4">
                                            {category.items.map((item) => (
                                                <div key={item.id}>
                                                    <div className="flex justify-between mb-1">
                                                        <label className="text-sm text-gray-300" style={{ fontFamily: "Noto Sans Bengali" }}>{item.label}</label>
                                                        {item.description && (
                                                            <span className="text-[10px] text-gray-500">{item.description}</span>
                                                        )}
                                                    </div>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-2.5 text-gray-500 text-xs">
                                                            {item.id.includes("grams") ? "gm" : "৳"}
                                                        </span>
                                                        <input
                                                            type="number"
                                                            placeholder="0"
                                                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                                                            className="w-full bg-[#05110E] border border-emerald-900/30 rounded-lg py-2 pl-8 pr-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-700"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="bg-orange-900/10 border border-orange-900/30 rounded-xl p-4 flex gap-3 items-start">
                    <AlertCircle size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-xs font-bold text-orange-400 mb-1" style={{ fontFamily: "Noto Sans Bengali" }}>সতর্কতা</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed" style={{ fontFamily: "Noto Sans Bengali" }}>
                            এটি একটি সাধারণ ক্যালকুলেটর। জটিল আর্থিক পরিস্থিতির জন্য (শেয়ার বাজার, দীর্ঘমেয়াদী বিনিয়োগ) একজন বিজ্ঞ আলেমের পরামর্শ নিন। নিসাব হিসাব করার জন্য স্থানীয় স্বর্ণের দোকানের বর্তমান মূল্য যাচাই করুন।
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
