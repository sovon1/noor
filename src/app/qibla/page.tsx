"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Navigation, LocateFixed, AlertCircle, RotateCcw } from "lucide-react";
import { toBanglaNumber } from "@/lib/utils";

// Kaaba coordinates
const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

// Noakhali approximate coordinates (fallback)
const NOAKHALI_LAT = 22.87;
const NOAKHALI_LNG = 91.10;

function calculateQiblaDirection(lat: number, lng: number): number {
    const latRad = (lat * Math.PI) / 180;
    const lngRad = (lng * Math.PI) / 180;
    const kaabaLatRad = (KAABA_LAT * Math.PI) / 180;
    const kaabaLngRad = (KAABA_LNG * Math.PI) / 180;

    const dLng = kaabaLngRad - lngRad;

    const x = Math.sin(dLng);
    const y = Math.cos(latRad) * Math.tan(kaabaLatRad) - Math.sin(latRad) * Math.cos(dLng);

    let qibla = (Math.atan2(x, y) * 180) / Math.PI;
    if (qibla < 0) qibla += 360;

    return qibla;
}

export default function QiblaPage() {
    const [mounted, setMounted] = useState(false);
    const [compassHeading, setCompassHeading] = useState<number | null>(null);
    const [qiblaAngle, setQiblaAngle] = useState<number>(0);
    const [userLat, setUserLat] = useState(NOAKHALI_LAT);
    const [userLng, setUserLng] = useState(NOAKHALI_LNG);
    const [locationStatus, setLocationStatus] = useState<"loading" | "granted" | "denied" | "unsupported">("loading");
    const [compassStatus, setCompassStatus] = useState<"loading" | "active" | "unavailable">("loading");
    const [permissionRequested, setPermissionRequested] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Get user location
        if (!navigator.geolocation) {
            setLocationStatus("unsupported");
            setQiblaAngle(calculateQiblaDirection(NOAKHALI_LAT, NOAKHALI_LNG));
        } else {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setUserLat(pos.coords.latitude);
                    setUserLng(pos.coords.longitude);
                    setQiblaAngle(calculateQiblaDirection(pos.coords.latitude, pos.coords.longitude));
                    setLocationStatus("granted");
                },
                () => {
                    setLocationStatus("denied");
                    setQiblaAngle(calculateQiblaDirection(NOAKHALI_LAT, NOAKHALI_LNG));
                }
            );
        }
    }, []);

    // Device orientation for compass
    const startCompass = useCallback(() => {
        const handleOrientation = (e: DeviceOrientationEvent) => {
            // @ts-expect-error - webkitCompassHeading is Safari-specific
            const heading = e.webkitCompassHeading ?? (e.alpha !== null ? (360 - e.alpha) : null);
            if (heading !== null) {
                setCompassHeading(heading);
                setCompassStatus("active");
            }
        };

        // Check if DeviceOrientationEvent is available
        if (typeof DeviceOrientationEvent !== "undefined") {
            // @ts-expect-error - requestPermission is iOS 13+ specific
            if (typeof DeviceOrientationEvent.requestPermission === "function") {
                // @ts-expect-error - requestPermission is iOS 13+ specific
                DeviceOrientationEvent.requestPermission()
                    .then((permission: string) => {
                        if (permission === "granted") {
                            window.addEventListener("deviceorientation", handleOrientation, true);
                            setCompassStatus("active");
                        } else {
                            setCompassStatus("unavailable");
                        }
                    })
                    .catch(() => setCompassStatus("unavailable"));
            } else {
                window.addEventListener("deviceorientation", handleOrientation, true);
                // Check after a timeout if we actually get data
                setTimeout(() => {
                    setCompassStatus((prev) => prev === "loading" ? "unavailable" : prev);
                }, 2000);
            }
        } else {
            setCompassStatus("unavailable");
        }

        setPermissionRequested(true);
    }, []);

    useEffect(() => {
        if (mounted && !permissionRequested) {
            startCompass();
        }
    }, [mounted, permissionRequested, startCompass]);

    // The rotation for the compass needle
    // If compass is active: rotate by (qiblaAngle - compassHeading) so the needle points to Qibla
    // If compass unavailable: show static angle
    const needleRotation = compassHeading !== null
        ? qiblaAngle - compassHeading
        : 0;

    const compassRotation = compassHeading !== null
        ? -compassHeading
        : 0;

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-4 md:pt-8 bg-[#0A1F1A] pb-24">
            {/* Header */}
            <div className="max-w-md mx-auto px-4 mb-8">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-emerald-900/30 rounded-full text-emerald-400">
                            <Navigation size={24} />
                        </div>
                        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "Noto Sans Bengali" }}>
                            কিবলা কম্পাস
                        </h1>
                    </div>
                    <p className="text-gray-400 text-xs ml-12" style={{ fontFamily: "Noto Sans Bengali" }}>
                        মক্কার দিকে মুখ করুন — কিবলা নির্দেশক
                    </p>
                </motion.div>
            </div>

            <div className="max-w-md mx-auto px-4">
                {/* Compass Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Qibla Angle Info */}
                    <div className="text-center mb-8">
                        <p className="text-gray-400 text-xs mb-1" style={{ fontFamily: "Noto Sans Bengali" }}>কিবলা দিক</p>
                        <p className="text-3xl font-bold text-gold text-glow-gold" style={{ fontFamily: "Inter" }}>
                            {toBanglaNumber(Math.round(qiblaAngle))}°
                        </p>
                        <p className="text-emerald-400 text-sm mt-1" style={{ fontFamily: "Noto Sans Bengali" }}>
                            পশ্চিম (মক্কা)
                        </p>
                    </div>

                    {/* THE COMPASS */}
                    <div className="relative w-72 h-72 md:w-80 md:h-80">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-full" style={{
                            background: "radial-gradient(circle, transparent 45%, rgba(16, 185, 129, 0.1) 60%, rgba(16, 185, 129, 0.05) 70%, transparent 80%)",
                        }} />

                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-emerald-900/40" />
                        <div className="absolute inset-2 rounded-full border border-emerald-900/20" />

                        {/* Rotating compass dial */}
                        <motion.div
                            className="absolute inset-4 rounded-full"
                            style={{ transform: `rotate(${compassRotation}deg)` }}
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        >
                            {/* Compass background */}
                            <div className="absolute inset-0 rounded-full" style={{
                                background: "radial-gradient(circle at center, #0D2B23 0%, #071A15 60%, #050F0C 100%)",
                                boxShadow: "inset 0 0 40px rgba(0,0,0,0.5), 0 0 30px rgba(16,185,129,0.1)",
                            }} />

                            {/* Degree marks */}
                            {Array.from({ length: 72 }, (_, i) => {
                                const deg = i * 5;
                                const isMajor = deg % 30 === 0;
                                const isCardinal = deg % 90 === 0;
                                return (
                                    <div
                                        key={i}
                                        className="absolute top-0 left-1/2 origin-bottom"
                                        style={{
                                            transform: `translateX(-50%) rotate(${deg}deg)`,
                                            height: "50%",
                                        }}
                                    >
                                        <div
                                            className={`mx-auto ${isCardinal ? "w-0.5 h-4 bg-emerald-400" :
                                                isMajor ? "w-px h-3 bg-emerald-500/60" :
                                                    "w-px h-1.5 bg-emerald-900/60"
                                                }`}
                                        />
                                    </div>
                                );
                            })}

                            {/* Cardinal directions */}
                            {[
                                { label: "N", bangla: "উ", deg: 0, color: "text-red-400" },
                                { label: "E", bangla: "পূ", deg: 90, color: "text-gray-400" },
                                { label: "S", bangla: "দ", deg: 180, color: "text-gray-400" },
                                { label: "W", bangla: "প", deg: 270, color: "text-gray-400" },
                            ].map((dir) => (
                                <div
                                    key={dir.label}
                                    className="absolute top-0 left-1/2 origin-bottom"
                                    style={{
                                        transform: `translateX(-50%) rotate(${dir.deg}deg)`,
                                        height: "50%",
                                    }}
                                >
                                    <div className={`text-center -mt-1 ${dir.color}`}>
                                        <span className="text-sm font-bold block" style={{ transform: `rotate(-${dir.deg + compassRotation}deg)`, display: "inline-block" }}>
                                            {dir.label}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Inter-cardinal directions */}
                            {[
                                { label: "NE", deg: 45 },
                                { label: "SE", deg: 135 },
                                { label: "SW", deg: 225 },
                                { label: "NW", deg: 315 },
                            ].map((dir) => (
                                <div
                                    key={dir.label}
                                    className="absolute top-0 left-1/2 origin-bottom"
                                    style={{
                                        transform: `translateX(-50%) rotate(${dir.deg}deg)`,
                                        height: "50%",
                                    }}
                                >
                                    <div className="text-center mt-1">
                                        <span className="text-[9px] text-gray-600 font-medium" style={{ transform: `rotate(-${dir.deg + compassRotation}deg)`, display: "inline-block" }}>
                                            {dir.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Qibla Needle (always points to Qibla) */}
                        <motion.div
                            className="absolute inset-4 rounded-full pointer-events-none"
                            style={{ transform: `rotate(${needleRotation}deg)` }}
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        >
                            {/* Needle */}
                            <div className="absolute top-0 left-1/2 origin-bottom" style={{ transform: "translateX(-50%)", height: "50%" }}>
                                <div className="relative flex flex-col items-center">
                                    {/* Kaaba icon */}
                                    <div className="text-2xl -mt-2 drop-shadow-lg" style={{ filter: "drop-shadow(0 0 8px rgba(232, 185, 35, 0.6))" }}>
                                        🕋
                                    </div>
                                    {/* Needle line */}
                                    <div className="w-0.5 bg-gradient-to-b from-gold via-gold/60 to-transparent" style={{ height: "calc(50% - 20px)" }} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" style={{
                                boxShadow: "0 0 15px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.3)",
                            }} />
                            <div className="absolute w-2 h-2 rounded-full bg-white" />
                        </div>

                        {/* Fixed top indicator triangle */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                            <div className="w-0 h-0" style={{
                                borderLeft: "8px solid transparent",
                                borderRight: "8px solid transparent",
                                borderTop: "12px solid #10B981",
                                filter: "drop-shadow(0 2px 4px rgba(16, 185, 129, 0.5))"
                            }} />
                        </div>
                    </div>

                    {/* Status */}
                    <div className="mt-8 space-y-3 w-full">
                        {/* Compass Status */}
                        <div className={`glass-card p-3 flex items-center gap-3 ${compassStatus === "active"
                            ? "border border-emerald-500/30"
                            : compassStatus === "unavailable"
                                ? "border border-orange-500/30"
                                : "border border-gray-700/30"
                            }`}>
                            <div className={`w-2 h-2 rounded-full ${compassStatus === "active"
                                ? "bg-emerald-400 animate-pulse"
                                : compassStatus === "unavailable"
                                    ? "bg-orange-400"
                                    : "bg-gray-500 animate-pulse"
                                }`} />
                            <div className="flex-1">
                                <p className="text-xs text-gray-300" style={{ fontFamily: "Noto Sans Bengali" }}>
                                    {compassStatus === "active" && "কম্পাস সক্রিয় — আপনার ফোন ঘোরান"}
                                    {compassStatus === "unavailable" && "কম্পাস অনুপলব্ধ — ম্যানুয়ালি দিক নির্ণয় করুন"}
                                    {compassStatus === "loading" && "কম্পাস সংযোগ হচ্ছে..."}
                                </p>
                            </div>
                            {compassStatus === "unavailable" && (
                                <button onClick={startCompass} className="p-1.5 rounded-lg hover:bg-emerald-900/30 text-gray-400">
                                    <RotateCcw size={14} />
                                </button>
                            )}
                        </div>

                        {/* Location Status */}
                        <div className="glass-card p-3 flex items-center gap-3">
                            <LocateFixed size={14} className={locationStatus === "granted" ? "text-emerald-400" : "text-gray-500"} />
                            <div className="flex-1">
                                <p className="text-[11px] text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>
                                    {locationStatus === "granted"
                                        ? `অবস্থান: ${userLat.toFixed(4)}°N, ${userLng.toFixed(4)}°E`
                                        : locationStatus === "denied"
                                            ? "অবস্থান অনুমতি দেওয়া হয়নি — নোয়াখালী ব্যবহার করা হচ্ছে"
                                            : "অবস্থান নির্ণয় হচ্ছে..."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Manual Direction Info */}
                    {compassStatus === "unavailable" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 bg-emerald-900/20 border border-emerald-900/30 rounded-xl p-4 w-full"
                        >
                            <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                                <Navigation size={14} />
                                ম্যানুয়াল নির্দেশনা
                            </h3>
                            <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: "Noto Sans Bengali" }}>
                                নোয়াখালী থেকে কিবলার দিক প্রায় <strong className="text-gold">{toBanglaNumber(Math.round(qiblaAngle))}°</strong> (পশ্চিম দিকে)।
                                সূর্যাস্তের দিকে সামান্য ডানে মুখ করুন — এটিই কিবলার আনুমানিক দিক।
                            </p>
                        </motion.div>
                    )}

                    {/* Disclaimer */}
                    <div className="mt-6 flex gap-2 items-start text-[10px] text-gray-500 w-full">
                        <AlertCircle size={12} className="flex-shrink-0 mt-0.5" />
                        <p style={{ fontFamily: "Noto Sans Bengali" }}>
                            সর্বোচ্চ নির্ভুলতার জন্য আপনার ডিভাইসটি ক্যালিব্রেট করুন (৮ আকারে ঘোরান)। ধাতব বস্তু থেকে দূরে রাখুন।
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
