import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// ======= Countdown Helpers =======
export interface CountdownTime {
    hours: number;
    minutes: number;
    seconds: number;
    label: string;
    isIftar: boolean;
    sehriExpired: boolean;
}

export function getCountdown(sehriTime: string, iftarTime: string): CountdownTime {
    const now = new Date();
    const today = now.toISOString().split("T")[0];

    const sehri = new Date(`${today}T${sehriTime}:00`);
    const iftar = new Date(`${today}T${iftarTime}:00`);

    let target: Date;
    let label: string;
    let isIftar: boolean;
    let sehriExpired: boolean = false;

    if (now < sehri) {
        target = sehri;
        label = "সেহরি পর্যন্ত";
        isIftar = false;
    } else if (now < iftar) {
        target = iftar;
        label = "ইফতার পর্যন্ত";
        isIftar = true;
        sehriExpired = true;
    } else {
        // After iftar, count to next day sehri
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split("T")[0];
        target = new Date(`${tomorrowStr}T${sehriTime}:00`);
        label = "সেহরি পর্যন্ত";
        isIftar = false;
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds, label, isIftar, sehriExpired };
}

// ======= localStorage Helpers =======
export function getStoredItem<T>(key: string, fallback: T): T {
    if (typeof window === "undefined") return fallback;
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
    } catch {
        return fallback;
    }
}

export function setStoredItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // localStorage quota exceeded
    }
}

// ======= Geolocation → Upazila =======
interface UpazilaCoord {
    name: string;
    nameEn: string;
    lat: number;
    lng: number;
}

const UPAZILA_COORDS: UpazilaCoord[] = [
    { name: "নোয়াখালী সদর", nameEn: "Noakhali Sadar", lat: 22.8724, lng: 91.0973 },
    { name: "বেগমগঞ্জ", nameEn: "Begumganj", lat: 22.7969, lng: 91.0697 },
    { name: "সোনাইমুড়ী", nameEn: "Sonaimuri", lat: 22.9544, lng: 91.1547 },
    { name: "কবিরহাট", nameEn: "Kabirhat", lat: 22.7500, lng: 91.1333 },
    { name: "চাটখিল", nameEn: "Chatkhil", lat: 22.9522, lng: 91.2228 },
    { name: "সেনবাগ", nameEn: "Senbagh", lat: 22.9722, lng: 91.2333 },
    { name: "কোম্পানীগঞ্জ", nameEn: "Companiganj", lat: 22.7167, lng: 91.2167 },
    { name: "সুবর্ণচর", nameEn: "Subarnachar", lat: 22.6333, lng: 91.0500 },
    { name: "হাতিয়া", nameEn: "Hatiya", lat: 22.4300, lng: 91.1125 },
];

export function getNearestUpazila(lat: number, lng: number): string {
    let minDist = Infinity;
    let nearest = "noakhali-sadar";

    for (const u of UPAZILA_COORDS) {
        const dist = Math.sqrt(Math.pow(u.lat - lat, 2) + Math.pow(u.lng - lng, 2));
        if (dist < minDist) {
            minDist = dist;
            nearest = u.nameEn.toLowerCase().replace(/\s+/g, "-");
        }
    }

    return nearest;
}

// ======= Share Helper =======
export async function shareContent(title: string, text: string, url?: string) {
    if (navigator.share) {
        try {
            await navigator.share({ title, text, url: url || window.location.href });
        } catch {
            // User cancelled
        }
    } else {
        try {
            await navigator.clipboard.writeText(url || window.location.href);
            alert("লিংক কপি হয়েছে! 📋");
        } catch {
            // fallback
        }
    }
}

// ======= Format Time =======
export function formatTime12(time24: string): string {
    const [h, m] = time24.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

export function toBanglaNumber(num: number | string): string {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num).replace(/[0-9]/g, (d) => banglaDigits[parseInt(d)]);
}
