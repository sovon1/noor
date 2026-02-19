export interface UpazilaInfo {
    id: string;
    name: string;
    nameEn: string;
    lat: number;
    lng: number;
}

export const UPAZILAS: UpazilaInfo[] = [
    { id: "noakhali-sadar", name: "নোয়াখালী সদর", nameEn: "Noakhali Sadar", lat: 22.8724, lng: 91.0973 },
    { id: "begumganj", name: "বেগমগঞ্জ", nameEn: "Begumganj", lat: 22.7969, lng: 91.0697 },
    { id: "sonaimuri", name: "সোনাইমুড়ী", nameEn: "Sonaimuri", lat: 22.9544, lng: 91.1547 },
    { id: "kabirhat", name: "কবিরহাট", nameEn: "Kabirhat", lat: 22.7500, lng: 91.1333 },
    { id: "chatkhil", name: "চাটখিল", nameEn: "Chatkhil", lat: 22.9522, lng: 91.2228 },
    { id: "senbagh", name: "সেনবাগ", nameEn: "Senbagh", lat: 22.9722, lng: 91.2333 },
    { id: "companiganj", name: "কোম্পানীগঞ্জ", nameEn: "Companiganj", lat: 22.7167, lng: 91.2167 },
    { id: "subarnachar", name: "সুবর্ণচর", nameEn: "Subarnachar", lat: 22.6333, lng: 91.0500 },
    { id: "hatiya", name: "হাতিয়া", nameEn: "Hatiya", lat: 22.4300, lng: 91.1125 },
];

export interface DayPrayerTime {
    date: string;       // "2026-02-20"
    day: number;
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    sehriEnd: string;
    iftarStart: string;
}

// Ramadan 2026 is approximately Feb 18 – Mar 19, 2026
// These are approximate times for Noakhali (22.87°N, 91.10°E)
// Slight adjustments per upazila based on longitude offset

function generateRamadanTimes(offsetMin: number = 0): DayPrayerTime[] {
    const baseTimes = [
        { day: 1, date: "2026-02-18", fajr: "05:06", sunrise: "06:23", dhuhr: "12:09", asr: "15:35", maghrib: "17:55", isha: "19:10", sehriEnd: "04:56", iftarStart: "17:55" },
        { day: 2, date: "2026-02-19", fajr: "05:05", sunrise: "06:22", dhuhr: "12:09", asr: "15:36", maghrib: "17:56", isha: "19:11", sehriEnd: "04:55", iftarStart: "17:56" },
        { day: 3, date: "2026-02-20", fajr: "05:04", sunrise: "06:21", dhuhr: "12:09", asr: "15:36", maghrib: "17:57", isha: "19:12", sehriEnd: "04:54", iftarStart: "17:57" },
        { day: 4, date: "2026-02-21", fajr: "05:03", sunrise: "06:20", dhuhr: "12:09", asr: "15:37", maghrib: "17:58", isha: "19:12", sehriEnd: "04:53", iftarStart: "17:58" },
        { day: 5, date: "2026-02-22", fajr: "05:02", sunrise: "06:19", dhuhr: "12:08", asr: "15:37", maghrib: "17:58", isha: "19:13", sehriEnd: "04:52", iftarStart: "17:58" },
        { day: 6, date: "2026-02-23", fajr: "05:01", sunrise: "06:18", dhuhr: "12:08", asr: "15:38", maghrib: "17:59", isha: "19:13", sehriEnd: "04:51", iftarStart: "17:59" },
        { day: 7, date: "2026-02-24", fajr: "05:00", sunrise: "06:17", dhuhr: "12:08", asr: "15:38", maghrib: "18:00", isha: "19:14", sehriEnd: "04:50", iftarStart: "18:00" },
        { day: 8, date: "2026-02-25", fajr: "04:59", sunrise: "06:16", dhuhr: "12:08", asr: "15:38", maghrib: "18:00", isha: "19:14", sehriEnd: "04:49", iftarStart: "18:00" },
        { day: 9, date: "2026-02-26", fajr: "04:58", sunrise: "06:15", dhuhr: "12:08", asr: "15:39", maghrib: "18:01", isha: "19:15", sehriEnd: "04:48", iftarStart: "18:01" },
        { day: 10, date: "2026-02-27", fajr: "04:57", sunrise: "06:14", dhuhr: "12:07", asr: "15:39", maghrib: "18:01", isha: "19:15", sehriEnd: "04:47", iftarStart: "18:01" },
        { day: 11, date: "2026-02-28", fajr: "04:56", sunrise: "06:13", dhuhr: "12:07", asr: "15:39", maghrib: "18:02", isha: "19:16", sehriEnd: "04:46", iftarStart: "18:02" },
        { day: 12, date: "2026-03-01", fajr: "04:55", sunrise: "06:12", dhuhr: "12:07", asr: "15:40", maghrib: "18:02", isha: "19:16", sehriEnd: "04:45", iftarStart: "18:02" },
        { day: 13, date: "2026-03-02", fajr: "04:53", sunrise: "06:11", dhuhr: "12:06", asr: "15:40", maghrib: "18:03", isha: "19:17", sehriEnd: "04:43", iftarStart: "18:03" },
        { day: 14, date: "2026-03-03", fajr: "04:52", sunrise: "06:10", dhuhr: "12:06", asr: "15:40", maghrib: "18:03", isha: "19:17", sehriEnd: "04:42", iftarStart: "18:03" },
        { day: 15, date: "2026-03-04", fajr: "04:51", sunrise: "06:09", dhuhr: "12:06", asr: "15:40", maghrib: "18:04", isha: "19:18", sehriEnd: "04:41", iftarStart: "18:04" },
        { day: 16, date: "2026-03-05", fajr: "04:49", sunrise: "06:07", dhuhr: "12:05", asr: "15:41", maghrib: "18:04", isha: "19:18", sehriEnd: "04:39", iftarStart: "18:04" },
        { day: 17, date: "2026-03-06", fajr: "04:48", sunrise: "06:06", dhuhr: "12:05", asr: "15:41", maghrib: "18:05", isha: "19:19", sehriEnd: "04:38", iftarStart: "18:05" },
        { day: 18, date: "2026-03-07", fajr: "04:47", sunrise: "06:05", dhuhr: "12:05", asr: "15:41", maghrib: "18:05", isha: "19:19", sehriEnd: "04:37", iftarStart: "18:05" },
        { day: 19, date: "2026-03-08", fajr: "04:45", sunrise: "06:04", dhuhr: "12:04", asr: "15:41", maghrib: "18:06", isha: "19:20", sehriEnd: "04:35", iftarStart: "18:06" },
        { day: 20, date: "2026-03-09", fajr: "04:44", sunrise: "06:03", dhuhr: "12:04", asr: "15:41", maghrib: "18:06", isha: "19:20", sehriEnd: "04:34", iftarStart: "18:06" },
        { day: 21, date: "2026-03-10", fajr: "04:43", sunrise: "06:02", dhuhr: "12:04", asr: "15:41", maghrib: "18:07", isha: "19:21", sehriEnd: "04:33", iftarStart: "18:07" },
        { day: 22, date: "2026-03-11", fajr: "04:41", sunrise: "06:00", dhuhr: "12:03", asr: "15:41", maghrib: "18:07", isha: "19:21", sehriEnd: "04:31", iftarStart: "18:07" },
        { day: 23, date: "2026-03-12", fajr: "04:40", sunrise: "05:59", dhuhr: "12:03", asr: "15:42", maghrib: "18:07", isha: "19:22", sehriEnd: "04:30", iftarStart: "18:07" },
        { day: 24, date: "2026-03-13", fajr: "04:38", sunrise: "05:58", dhuhr: "12:02", asr: "15:42", maghrib: "18:08", isha: "19:22", sehriEnd: "04:28", iftarStart: "18:08" },
        { day: 25, date: "2026-03-14", fajr: "04:37", sunrise: "05:57", dhuhr: "12:02", asr: "15:42", maghrib: "18:08", isha: "19:23", sehriEnd: "04:27", iftarStart: "18:08" },
        { day: 26, date: "2026-03-15", fajr: "04:35", sunrise: "05:56", dhuhr: "12:02", asr: "15:42", maghrib: "18:09", isha: "19:23", sehriEnd: "04:25", iftarStart: "18:09" },
        { day: 27, date: "2026-03-16", fajr: "04:34", sunrise: "05:54", dhuhr: "12:01", asr: "15:42", maghrib: "18:09", isha: "19:24", sehriEnd: "04:24", iftarStart: "18:09" },
        { day: 28, date: "2026-03-17", fajr: "04:32", sunrise: "05:53", dhuhr: "12:01", asr: "15:42", maghrib: "18:10", isha: "19:24", sehriEnd: "04:22", iftarStart: "18:10" },
        { day: 29, date: "2026-03-18", fajr: "04:31", sunrise: "05:52", dhuhr: "12:00", asr: "15:42", maghrib: "18:10", isha: "19:25", sehriEnd: "04:21", iftarStart: "18:10" },
        { day: 30, date: "2026-03-19", fajr: "04:29", sunrise: "05:51", dhuhr: "12:00", asr: "15:42", maghrib: "18:10", isha: "19:25", sehriEnd: "04:19", iftarStart: "18:10" },
    ];

    if (offsetMin === 0) return baseTimes;

    return baseTimes.map((t) => ({
        ...t,
        fajr: adjustTime(t.fajr, offsetMin),
        sunrise: adjustTime(t.sunrise, offsetMin),
        dhuhr: adjustTime(t.dhuhr, offsetMin),
        asr: adjustTime(t.asr, offsetMin),
        maghrib: adjustTime(t.maghrib, offsetMin),
        isha: adjustTime(t.isha, offsetMin),
        sehriEnd: adjustTime(t.sehriEnd, offsetMin),
        iftarStart: adjustTime(t.iftarStart, offsetMin),
    }));
}

function adjustTime(time: string, offsetMin: number): string {
    const [h, m] = time.split(":").map(Number);
    const totalMin = h * 60 + m + offsetMin;
    const newH = Math.floor(((totalMin % 1440) + 1440) % 1440 / 60);
    const newM = ((totalMin % 60) + 60) % 60;
    return `${newH.toString().padStart(2, "0")}:${Math.round(newM).toString().padStart(2, "0")}`;
}

// Saudi-aligned times are typically a few minutes earlier for Sehri
function generateSaudiAligned(offsetMin: number = 0): DayPrayerTime[] {
    const base = generateRamadanTimes(offsetMin);
    return base.map((t) => ({
        ...t,
        sehriEnd: adjustTime(t.sehriEnd, -5),
        fajr: adjustTime(t.fajr, -3),
    }));
}

export type CalculationMethod = "bangladesh" | "saudi";

export const PRAYER_TIMES: Record<string, Record<CalculationMethod, DayPrayerTime[]>> = {
    "noakhali-sadar": {
        bangladesh: generateRamadanTimes(0),
        saudi: generateSaudiAligned(0),
    },
    "begumganj": {
        bangladesh: generateRamadanTimes(-1),
        saudi: generateSaudiAligned(-1),
    },
    "sonaimuri": {
        bangladesh: generateRamadanTimes(1),
        saudi: generateSaudiAligned(1),
    },
    "kabirhat": {
        bangladesh: generateRamadanTimes(-1),
        saudi: generateSaudiAligned(-1),
    },
    "chatkhil": {
        bangladesh: generateRamadanTimes(2),
        saudi: generateSaudiAligned(2),
    },
    "senbagh": {
        bangladesh: generateRamadanTimes(2),
        saudi: generateSaudiAligned(2),
    },
    "companiganj": {
        bangladesh: generateRamadanTimes(1),
        saudi: generateSaudiAligned(1),
    },
    "subarnachar": {
        bangladesh: generateRamadanTimes(-1),
        saudi: generateSaudiAligned(-1),
    },
    "hatiya": {
        bangladesh: generateRamadanTimes(0),
        saudi: generateSaudiAligned(0),
    },
};

export function getTodayPrayer(upazilaId: string, method: CalculationMethod = "bangladesh"): DayPrayerTime | undefined {
    const times = PRAYER_TIMES[upazilaId]?.[method];
    if (!times) return times;

    const today = new Date().toISOString().split("T")[0];
    return times.find((t) => t.date === today) || times[0];
}

export function getCurrentPrayer(prayer: DayPrayerTime): { current: string; next: string; nextTime: string } {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

    const prayers = [
        { name: "ফজর", time: prayer.fajr },
        { name: "সূর্যোদয়", time: prayer.sunrise },
        { name: "যোহর", time: prayer.dhuhr },
        { name: "আসর", time: prayer.asr },
        { name: "মাগরিব", time: prayer.maghrib },
        { name: "ইশা", time: prayer.isha },
    ];

    for (let i = prayers.length - 1; i >= 0; i--) {
        if (currentTime >= prayers[i].time) {
            const next = prayers[(i + 1) % prayers.length];
            return {
                current: prayers[i].name,
                next: next.name,
                nextTime: next.time,
            };
        }
    }

    return {
        current: "ইশা",
        next: "ফজর",
        nextTime: prayer.fajr,
    };
}
