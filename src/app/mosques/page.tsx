"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { MOSQUES } from "@/data/mosques";
import { formatTime12 } from "@/lib/utils";

// Dynamic import for Leaflet (no SSR)
import dynamic from "next/dynamic";
const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

export default function MosquesPage() {
    const [selectedMosque, setSelectedMosque] = useState<string | null>(null);
    const [mapReady, setMapReady] = useState(false);

    const selected = MOSQUES.find((m) => m.id === selectedMosque);

    return (
        <div className="min-h-screen pt-4 md:pt-8">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Noto Sans Bengali" }}>
                        📍 নোয়াখালীর মসজিদসমূহ
                    </h1>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "Noto Sans Bengali" }}>
                        মানচিত্রে মসজিদ খুঁজুন ও তারাবীহর সময় জানুন
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Map */}
                    <div className="lg:col-span-2">
                        <div className="glass-card overflow-hidden" style={{ height: "500px" }}>
                            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
                            <MapContainer
                                center={[22.83, 91.10]}
                                zoom={10}
                                style={{ height: "100%", width: "100%" }}
                                whenReady={() => setMapReady(true)}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                />
                                {mapReady && MOSQUES.map((mosque) => (
                                    <Marker
                                        key={mosque.id}
                                        position={[mosque.lat, mosque.lng]}
                                        eventHandlers={{ click: () => setSelectedMosque(mosque.id) }}
                                    >
                                        <Popup>
                                            <div className="text-sm">
                                                <strong>{mosque.name}</strong><br />
                                                {mosque.address}
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>

                    {/* Mosque List / Detail */}
                    <div className="lg:col-span-1">
                        {selected ? (
                            <motion.div
                                key={selected.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <button
                                        onClick={() => setSelectedMosque(null)}
                                        className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/50 text-white text-xs"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Noto Sans Bengali" }}>{selected.name}</h3>
                                    <p className="text-sm text-gray-400 mb-3" style={{ fontFamily: "Noto Sans Bengali" }}>{selected.address}</p>
                                    <p className="text-sm text-gray-300 mb-4" style={{ fontFamily: "Noto Sans Bengali" }}>{selected.description}</p>

                                    <div className="flex items-center gap-2 mb-4 p-2 rounded-lg bg-emerald-900/20">
                                        <span className="text-xs text-gray-400" style={{ fontFamily: "Noto Sans Bengali" }}>তারাবীহ:</span>
                                        <span className="text-sm font-semibold text-emerald-400">{formatTime12(selected.taraweehTime)}</span>
                                    </div>

                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600/30 text-emerald-300 text-sm font-medium hover:bg-emerald-600/40 transition-all"
                                        style={{ fontFamily: "Noto Sans Bengali" }}
                                    >
                                        <Navigation size={16} />
                                        দিকনির্দেশনা নিন
                                        <ExternalLink size={12} />
                                    </a>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                                {MOSQUES.map((mosque, i) => (
                                    <motion.button
                                        key={mosque.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setSelectedMosque(mosque.id)}
                                        className="w-full text-left glass-card p-3 hover:bg-emerald-900/20 transition-all group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={mosque.image} alt={mosque.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-white truncate" style={{ fontFamily: "Noto Sans Bengali" }}>
                                                    {mosque.name}
                                                    {mosque.isFeatured && <span className="ml-1 text-gold">⭐</span>}
                                                </h4>
                                                <p className="text-xs text-gray-400 truncate" style={{ fontFamily: "Noto Sans Bengali" }}>{mosque.address}</p>
                                                <p className="text-xs text-emerald-400 mt-1">তারাবীহ: {formatTime12(mosque.taraweehTime)}</p>
                                            </div>
                                            <MapPin size={14} className="text-gray-500 group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-1" />
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
