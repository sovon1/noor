export interface Mosque {
    id: string;
    name: string;
    nameEn: string;
    address: string;
    lat: number;
    lng: number;
    taraweehTime: string;
    description: string;
    image: string;
    isFeatured?: boolean;
}

// Optimized placeholder image (abstract Islamic architecture or geometric pattern)
export const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1542652694-40abf526446e?w=800";

export const MOSQUES: Mosque[] = [
    {
        id: "bajra-shahi",
        name: "বজরা শাহী মসজিদ",
        nameEn: "Bajra Shahi Mosque",
        address: "বজরা, সোনাইমুড়ী, নোয়াখালী",
        lat: 22.9582,
        lng: 91.1563,
        taraweehTime: "20:15",
        description: "বাংলার তাজমহল — ১৭৪১ সালে নির্মিত মুঘল স্থাপত্য।",
        image: PLACEHOLDER_IMAGE,
        isFeatured: true,
    },
    {
        id: "maijdee-jame",
        name: "মাইজদী জামে মসজিদ",
        nameEn: "Maijdee Jame Masjid",
        address: "মাইজদী, নোয়াখালী সদর",
        lat: 22.8680, lng: 91.1010,
        taraweehTime: "20:15",
        description: "নোয়াখালী শহরের প্রধান জামে মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "sonaimuri-jame",
        name: "সোনাইমুড়ী জামে মসজিদ",
        nameEn: "Sonaimuri Jame Masjid",
        address: "সোনাইমুড়ী বাজার",
        lat: 22.9490, lng: 91.1540,
        taraweehTime: "20:15",
        description: "সোনাইমুড়ী উপজেলার কেন্দ্রীয় মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "begumganj-jame",
        name: "বেগমগঞ্জ বড় মসজিদ",
        nameEn: "Begumganj Boro Masjid",
        address: "বেগমগঞ্জ বাজার",
        lat: 22.7920, lng: 91.0690,
        taraweehTime: "20:15",
        description: "বেগমগঞ্জ উপজেলার ঐতিহাসিক বড় মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "chatkhil-jame",
        name: "চাটখিল জামে মসজিদ",
        nameEn: "Chatkhil Jame Masjid",
        address: "চাটখিল বাজার",
        lat: 22.9510, lng: 91.2200,
        taraweehTime: "20:15",
        description: "চাটখিল উপজেলার প্রধান মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "kabirhat-jame",
        name: "কবিরহাট জামে মসজিদ",
        nameEn: "Kabirhat Jame Masjid",
        address: "কবিরহাট বাজার",
        lat: 22.7490, lng: 91.1320,
        taraweehTime: "20:15",
        description: "কবিরহাট উপজেলার কেন্দ্রীয় মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "senbagh-jame",
        name: "সেনবাগ জামে মসজিদ",
        nameEn: "Senbagh Jame Masjid",
        address: "সেনবাগ বাজার",
        lat: 22.9700, lng: 91.2300,
        taraweehTime: "20:15",
        description: "সেনবাগ উপজেলার প্রধান মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "companiganj-jame",
        name: "কোম্পানীগঞ্জ জামে মসজিদ",
        nameEn: "Companiganj Jame Masjid",
        address: "কোম্পানীগঞ্জ বাজার",
        lat: 22.7150, lng: 91.2150,
        taraweehTime: "20:15",
        description: "কোম্পানীগঞ্জ উপজেলার প্রধান মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "subarnachar-jame",
        name: "সুবর্ণচর জামে মসজিদ",
        nameEn: "Subarnachar Jame Masjid",
        address: "সুবর্ণচর বাজার",
        lat: 22.6300, lng: 91.0480,
        taraweehTime: "20:15",
        description: "সুবর্ণচর উপজেলার প্রশাসনিক এলাকার মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "hatiya-jame",
        name: "হাতিয়া বড় মসজিদ",
        nameEn: "Hatiya Boro Masjid",
        address: "হাতিয়া বাজার",
        lat: 22.4280, lng: 91.1100,
        taraweehTime: "20:15",
        description: "হাতিয়া দ্বীপের সবচেয়ে বড় মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
    {
        id: "choumuhani-jame",
        name: "চৌমুহনী জামে মসজিদ",
        nameEn: "Choumuhani Jame Masjid",
        address: "চৌমুহনী, বেগমগঞ্জ",
        lat: 22.7850, lng: 91.0850,
        taraweehTime: "20:15",
        description: "ব্যবসায়িক শহর চৌমুহনীর কেন্দ্রীয় মসজিদ।",
        image: PLACEHOLDER_IMAGE,
    },
];
