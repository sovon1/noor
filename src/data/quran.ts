export interface Surah {
    id: number;
    name: string;
    nameEn: string;
    meaning: string;
    verses: Verse[];
}

export interface Verse {
    id: number;
    arabic: string;
    bangla: string;
    english: string;
    pronunciation: string;
}

export const QURAN: Surah[] = [
    {
        id: 1,
        name: "আল-ফাতিহা",
        nameEn: "Al-Fatiha",
        meaning: "সূচনা",
        verses: [
            {
                id: 1,
                arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
                bangla: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
                english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
                pronunciation: "বিসমিল্লাহির রাহমানির রাহিম"
            },
            {
                id: 2,
                arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
                bangla: "যাবতীয় প্রশংসা আল্লাহ তা'আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
                english: "[All] praise is [due] to Allah, Lord of the worlds -",
                pronunciation: "আলহামদু লিল্লাহি রাব্বিল আলামিন"
            },
            {
                id: 3,
                arabic: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
                bangla: "যিনি নিতান্ত মেহেরবান ও দয়ালু।",
                english: "The Entirely Merciful, the Especially Merciful,",
                pronunciation: "আর রাহমানির রাহিম"
            },
            {
                id: 4,
                arabic: "مَٰلِكِ يَوْمِ ٱلدِّينِ",
                bangla: "যিনি বিচার দিনের মালিক।",
                english: "Sovereign of the Day of Recompense.",
                pronunciation: "মালিকি ইয়াওমিদ্দিন"
            },
            {
                id: 5,
                arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                bangla: "আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।",
                english: "It is You we worship and You we ask for help.",
                pronunciation: "ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাস্তাঈন"
            },
            {
                id: 6,
                arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
                bangla: "আমাদেরকে সরল পথ দেখাও।",
                english: "Guide us to the straight path -",
                pronunciation: "ইহদিনাস সিরাতাল মুস্তাকিম"
            },
            {
                id: 7,
                arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
                bangla: "সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।",
                english: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
                pronunciation: "সিরাতাল্লাজিনা আনআমতা আলাইহিম, গাইরিল মাগদুবি আলাইহিম ওয়ালাদ্দাল্লিন"
            }
        ]
    },
    {
        id: 67,
        name: "আল-মুলক",
        nameEn: "Al-Mulk",
        meaning: "সার্বভৌমত্ব",
        verses: [
            {
                id: 1,
                arabic: "تَبَٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ",
                bangla: "পুণ্যময় তিনি, যাঁর হাতে রাজত্ব। তিনি সবকিছুর উপর সর্বশক্তিমান।",
                english: "Blessed is He in whose hand is dominion, and He is over all things competent -",
                pronunciation: "তাবারাকাল্লাজি বিইয়াদিল মুলকু ওয়া হুওয়া আলা কুল্লি শাইয়িন কাদির"
            },
            {
                id: 2,
                arabic: "ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ",
                bangla: "যিনি সৃষ্টি করেছেন মরণ ও জীবন, যাতে তোমাদেরকে পরীক্ষা করেন-কে তোমাদের মধ্যে কর্মে শ্রেষ্ঠ? তিনি পরাক্রমশালী, ক্ষমাশীল।",
                english: "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -",
                pronunciation: "আল্লাজি খালাকাল মাওতা ওয়াল হায়াতা লিয়াবলুয়াকুম আইয়ুকুম আহসানু আমালা; ওয়া হুয়াল আযিযুল গাফুর"
            },
            {
                id: 3,
                arabic: "ٱلَّذِى خَلَقَ سَبْعَ سَمَٰوَٰتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَٰنِ مِن تَفَٰوُتٍ ۖ فَٱرْجِعِ ٱلْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
                bangla: "যিনি সাত আকাশ স্তরে স্তরে সৃষ্টি করেছেন। আপনি করুণাময় আল্লাহ তা’আলার সৃষ্টিতে কোন তফাত দেখতে পাবেন না। আবার দৃষ্টিফেরান; কোন ফাটল দেখতে পান কি?",
                english: "[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision [to the sky]; do you see any breaks?",
                pronunciation: "আল্লাজি খালাকা সাবআ সামাওয়াতিন তিবাকান, মা তারা ফি খালকির রাহমানি মিন তাফাওুত; ফারজিই'ল বাসারা হাল তারা মিন ফুতুর"
            },
            {
                id: 4,
                arabic: "ثُمَّ ٱرْجِعِ ٱلْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ ٱلْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
                bangla: "অতঃপর আপনি পুনরায় দৃষ্টিফেরান, সে দৃষ্টি ব্যর্থ ও ক্লান্ত হয়ে আপনার দিকে ফিরে আসবে।",
                english: "Then return [your] vision twice again. [Your] vision will return to you humbled while it is fatigued.",
                pronunciation: "সুম্মার জিই'ল বাসারা কাররাতাইনি ইয়ানকালিব ইলাইকাল বাসারু খাসিয়াও ওয়া হুওয়া হাসির"
            },
            {
                id: 5,
                arabic: "وَلَقَدْ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنْيَا بِمَصَٰبِيحَ وَجَعَلْنَٰهَا رُجُومًا لِّلشَّيَٰطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ ٱلسَّعِيرِ",
                bangla: "আমি সর্বনিম্ন আকাশকে প্রদীপমালা দ্বারা সুশোভিত করেছি এবং সেগুলোকে শয়তানদের জন্যে রজম বানিয়েছি এবং তাদের জন্যে প্রস্তুত রেখেছি জ্বলন্ত অগ্নির শাস্তি।",
                english: "And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils and have prepared for them the punishment of the Blaze.",
                pronunciation: "ওয়া লাকাদ যাইয়ান্নাস সামাআদ দুনিয়া বিমাসাবিহা ওয়া জাআলনাহা রুজুমাল লিশশায়াতিনি ওয়া আ'তাদনা লাহুম আযাবাস সাঈর"
            },
            {
                id: 6,
                arabic: "وَلِلَّذِينَ كَفَرُوا۟ بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ ٱلْمَصِيرُ",
                bangla: "আর যারা তাদের পালনকর্তাকে অস্বীকার করে তাদের জন্যে রয়েছে জাহান্নামের শাস্তি। সেটা কতই না নিকৃষ্ট স্থান।",
                english: "And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination.",
                pronunciation: "ওয়া লিল্লাযিনা কাফারু বিরাব্বিহিম আযাবু জাহান্নামা ওয়া বি'সাল মাসীর"
            },
            {
                id: 7,
                arabic: "إِذَآ أُلْقُوا۟ فِيهَا سَمِعُوا۟ لَهَا شَهِيقًا وَهِىَ تَفُورُ",
                bangla: "যখন তারা তথায় নিক্ষিপ্ত হবে, তখন তার বিকট গর্জন শুনতে পাবে। আর তা উথলিয়ে উঠবে।",
                english: "When they are thrown into it, they hear from it a [dreadful] inhaling while it boils up.",
                pronunciation: "ইজা উলকু ফিহা সামিউ লাহা শাহিকান ওয়া হিয়া তাফুর"
            },
            {
                id: 8,
                arabic: "تَكَادُ تَمَيَّزُ مِنَ ٱلْغَيْظِ ۖ كُلَّمَآ أُلْقِىَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَآ أَلَمْ يَأْتِكُمْ نَذِيرٌ",
                bangla: "ক্রোধে জাহান্নাম যেন ফেটে পড়বে। যখনই তাতে কোন দলকে নিক্ষেপ করা হবে, তখন তাদেরকে তার প্রহরীরা জিজ্ঞেস করবে, তোমাদের কাছে কি কোন সতর্ককারী আগমন করেনি?",
                english: "It almost bursts with rage. Every time a company is thrown into it, its keepers ask them, Did there not come to you a warner?",
                pronunciation: "তাকাদু তামাইয়াইযু মিনাল গাইযি; কুল্লামা উলকিয়া ফিহা ফাওজুন সাআলাহুম খাযানাতুহা আলাম ইয়া'তিকুম নাযীর"
            },
            {
                id: 9,
                arabic: "قَالُوا۟ بَلَىٰ قَدْ جَآءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ ٱللَّهُ مِن شَىْءٍ إِنْ أَنتُمْ إِلَّا فِى ضَلَٰلٍ كَبِيرٍ",
                bangla: "তারা বলবে, হ্যাঁ আমাদের কাছে সতর্ককারী আগমন করেছিল, অতঃপর আমরা মিথ্যারোপ করেছিলাম এবং বলেছিলাম, আল্লাহ তা’আলা কোন কিছু নাযিল করেননি। তোমরা তো মহাবিভ্রান্তিতে পড়ে আছ।",
                english: "They will say, Yes, a warner had come to us, but we denied and said, 'Allah has not sent down anything. You are not but in great error.'",
                pronunciation: "কালু বালা কাদ জাআনা নাযীরুন ফাকাযযাবনা ওয়া কুলনা মা নাযযাল্লাল্লাহু মিন শাইয়িন ইন আনতুল ইল্লা ফি দালালিং কাবীর"
            },
            {
                id: 10,
                arabic: "وَقَالُوا۟ لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِىٓ أَصْحَٰبِ ٱلسَّعِيرِ",
                bangla: "তারা আরও বলবে, যদি আমরা শুনতাম অথবা বুদ্ধি খাটাতাম, তবে আমরা জাহান্নামবাসীদের মধ্যে থাকতাম না।",
                english: "And they will say, If we had been listening or reasoning, we would not have been among the companions of the Blaze.",
                pronunciation: "ওয়া কালু লাও কুন্না নাসমাউ আও না'কিলু মা কুন্না ফি আসহাবিস সাঈর"
            },
            {
                id: 11,
                arabic: "فَٱعْتَرَفُوا۟ بِذَنۢبِهِمْ فَسُحْقًا لِّأَصْحَٰبِ ٱلسَّعِيرِ",
                bangla: "অতঃপর তারা তাদের অপরাধ স্বীকার করবে। জাহান্নামীরা দূর হোক।",
                english: "And they will admit their sin, so [it is] alienation for the companions of the Blaze.",
                pronunciation: "ফা'তারাফু বিযানবিহিম ফাসুহকাল লিআসহাবিস সাঈর"
            },
            {
                id: 12,
                arabic: "إِنَّ ٱلَّذِينَ يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
                bangla: "নিশ্চয় যারা তাদের পালনকর্তাকে না দেখে ভয় করে, তাদের জন্যে রয়েছে ক্ষমা ও মহাপুরস্কার।",
                english: "Indeed, those who fear their Lord unseen will have forgiveness and great reward.",
                pronunciation: "ইন্নাল্লাযিনা ইয়াখশাওনা রাব্বাহুম বিল গাইবি লাহুম মাগফিরাতুওঁ ওয়া আজরুং কাবীর"
            },
            {
                id: 13,
                arabic: "وَأَسِرُّوا۟ قَوْلَكُمْ أَوِ ٱجْهَرُوا۟ بِهِۦٓ ۖ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
                bangla: "তোমরা তোমাদের কথা গোপনে বল অথবা প্রকাশ্যে বল, তিনি তো অন্তরের বিষয়াদি সম্পর্কে সম্যক জ্ঞাত।",
                english: "And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts.",
                pronunciation: "ওয়া আসিররু কাওলাকুম আওয়িজহারু বিহি, ইন্নাহু আলীমুম বিযাতিস সুদুর"
            },
            {
                id: 14,
                arabic: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ ٱللَّطِيفُ ٱلْخَبِيرُ",
                bangla: "যিনি সৃষ্টি করেছেন, তিনি কি জানেন না? তিনি সূক্ষ্মজ্ঞানী, সম্যক জ্ঞাত।",
                english: "Does He who created not know, while He is the Subtle, the Acquainted?",
                pronunciation: "আলা ইয়া'লামু মান খালাকা ওয়া হুওয়াল লাতিফুল খাবীর"
            },
            {
                id: 15,
                arabic: "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًا فَٱمْشُوا۟ فِى مَنَاكِبِهَا وَكُلُوا۟ مِن رِّزْقِهِۦ ۖ وَإِلَيْهِ ٱلنُّشُورُ",
                bangla: "তিনিই তোমাদের জন্য পৃথিবীকে সুগম করেছেন, অতএব তোমরা তার কাঁধে বিচরণ কর এবং তাঁর দেয়া রিযিক আহার কর। আর তাঁরই কাছে পুনরুজ্জীবন হবে।",
                english: "It is He who made the earth tame for you - so walk among its slopes and eat of His provision - and to Him is the resurrection.",
                pronunciation: "হুওয়াল্লাযি জাআলা লাকুমুল আরদা যালুলান ফামশু ফি মানাকিবিহা ওয়া কুলু মির রিযকিহি ওয়া ইলাইহিন নুশুর"
            },
            {
                id: 16,
                arabic: "ءَأَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يَخْسِفَ بِكُمُ ٱلْأَرْضَ فَإِذَا هِىَ تَمُورُ",
                bangla: "তোমরা কি ভাবনুক্ত হয়ে গেছ যে, আকাশে যিনি আছেন, তিনি তোমাদেরকে সহ ভূমিতে ধসিয়ে দেবেন না, অতঃপর তা কাঁপতে থাকবে?",
                english: "Do you feel secure that He who [holds authority] in the heaven would not cause the earth to swallow you and suddenly it would sway?",
                pronunciation: "আআমিন্তুম মান ফিস সামা-ই আইঁ ইয়াখসিফা বিকুমুল আরদা ফাইযা হিয়া তামুর"
            },
            {
                id: 17,
                arabic: "أَمْ أَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ",
                bangla: "নাকি তোমরা ভাবনুক্ত হয়ে গেছ যে, আকাশে যিনি আছেন, তিনি তোমাদের উপর প্রস্তর বৃষ্টি বর্ষণ করবেন না? অতঃপর তোমরা জানতে পারবে কেমন ছিল আমার সতর্কবাণী।",
                english: "Or do you feel secure that He who [holds authority] in the heaven would not send against you a storm of stones? Then you would know how [severe] was My warning.",
                pronunciation: "আম আমিন্তুম মান ফিস সামা-ই আইঁ ইউরসিলা আলাইকুম হাসিবান ফাসাতালামুনা কাইফা নাযীর"
            },
            {
                id: 18,
                arabic: "وَلَقَدْ كَذَّبَ ٱلَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ",
                bangla: "তাদের পূর্ববর্তীরাও মিথ্যারোপ করেছিল, অতঃপর আমার শাস্তি কত কঠোর ছিল!",
                english: "And already had those before them denied, and how [terrible] was My reproach.",
                pronunciation: "ওয়া লাকাদ কাযযাবাল্লাযিনা মিন কাবলিহিম ফাকাইফা কানা নাকির"
            },
            {
                id: 19,
                arabic: "أَوَلَمْ يَرَوْا۟ إِلَى ٱلطَّيْرِ فَوْقَهُمْ صَٰٓفَّٰتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا ٱلرَّحْمَٰنُ ۚ إِنَّهُۥ بِكُلِّ شَىْءٍۭ بَصِيرٌ",
                bangla: "তারা কি লক্ষ্য করে না, তাদের মাথার উপর উড়ন্ত পক্ষীকুলের প্রতি পাখা বিস্তারকারী ও পাখা সংকুচনকারী? করুণাময় আল্লাহ ছাড়া কেউ তাদেরকে ধরে রাখে না। তিনি সবকিছুর সম্যক দ্রষ্টা।",
                english: "Do they not see the birds above them with wings outspread and [sometimes] folded in? None holds them [aloft] except the Most Merciful. Indeed He is, of all things, Seeing.",
                pronunciation: "আওয়ালাম ইয়ারাও ইলাত তাইরি ফাওকাহুম সাফফাতিন ওয়া ইয়াকবিদনা মা ইউমসিকুহুন্না ইল্লার রাহমান; ইন্নাহু বিকুল্লি শাইয়িম বাসীর"
            },
            {
                id: 20,
                arabic: "أَمَّنْ هَٰذَا ٱلَّذِى هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ ٱلرَّحْمَٰنِ ۚ إِنِ ٱلْكَٰفِرُونَ إِلَّا فِى غُرُورٍ",
                bangla: "রহমান আল্লাহ তা’আলা ছাড়া তোমাদের সাহায্যকারী সৈন্যদল কে আছে? কাফেররা তো মহাপ্রতারণায় লিপ্ত রয়েছে।",
                english: "Or who is it that could be an army for you to aid you other than the Most Merciful? The disbelievers are not but in delusion.",
                pronunciation: "আম্মান হাজাল্লাযি হুওয়া জুনদুল লাকুম ইয়ানসুরুকুম মিন দুনির রাহমান; ইনিল কাফিরুনা ইল্লা ফি গুরুর"
            },
            {
                id: 21,
                arabic: "أَمَّنْ هَٰذَا ٱلَّذِى يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُۥ ۚ بَل لَّجُّوا۟ فِى عُتُوٍّ وَنُفُورٍ",
                bangla: "অথবা কে আছে এমন, যে তোমাদেরকে রিযিক দান করবে যদি তিনি তাঁর রিযিক বন্ধ করে দেন? বরং তারা অবাধ্যতা ও বিমুখতায় অবিচল রয়েছে।",
                english: "Or who is it that could provide for you if He withheld His provision? But they have persisted in insolence and aversion.",
                pronunciation: "আম্মান হাজাল্লাযি ইয়ারযুকুকুম ইন আমসাকা রিযকাহু বাল লাজজু ফি উতুউইওঁ ওয়া নুফুর"
            },
            {
                id: 22,
                arabic: "أَفَمَن يَمْشِى مُكِبًّا عَلَىٰ وَجْهِهِۦٓ أَهْدَىٰٓ أَمَّن يَمْشِى سَوِيًّا عَلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ",
                bangla: "যে ব্যক্তি উপুড় হয়ে মুখে ভর দিয়ে চলে, সে-ই কি সৎপথে চলে, না সে ব্যক্তি যে, সোজা হয়ে সরলপথে চলে?",
                english: "Then is one who walks fallen on his face better guided or one who walks erect on a straight path?",
                pronunciation: "আফামাইঁ ইয়ামশি মুকিব্বান আলা ওয়াজহিহি আহদা আম্মাইঁ ইয়ামশি সাউইয়্যান আলা সিরাতিম মুস্তাকীম"
            },
            {
                id: 23,
                arabic: "قُلْ هُوَ ٱلَّذِىٓ أَنشَأَكُمْ وَجَعَلَ لَكُمُ ٱلسَّمْعَ وَٱلْأَبْصَٰرَ وَٱلْأَفْـِٔدَةَ ۖ قَلِيلًا مَّا تَشْكُرُونَ",
                bangla: "বলুন, তিনিই তোমাদেরকে সৃষ্টি করেছেন এবং দিয়েছেন কর্ণ, চক্ষু ও অন্তর। তোমরা অল্পই কৃতজ্ঞতা প্রকাশ কর।",
                english: "Say, It is He who has produced you and made for you hearing and vision and hearts; little are you grateful.",
                pronunciation: "কুল হুওয়াল্লাযি আনশাআকুম ওয়া জাআলা লাকুমুস সামআ ওয়াল আবসারা ওয়াল আফইদাতা কাল লীলাম মা তাশকুরুন"
            },
            {
                id: 24,
                arabic: "قُلْ هُوَ ٱلَّذِى ذَرَأَكُمْ فِى ٱلْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
                bangla: "বলুন, তিনিই তোমাদেরকে পৃথিবীতে ছড়িয়ে দিয়েছেন এবং তাঁরই দিকে তোমরা সমবেত হবে।",
                english: "Say, It is He who has multiplied you throughout the earth, and to Him you will be gathered.",
                pronunciation: "কুল হুওয়াল্লাযি যারাআকুম ফিল আরদি ওয়া ইলাইহি তুহশারুন"
            },
            {
                id: 25,
                arabic: "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَٰدِقِينَ",
                bangla: "তারা বলে, যদি তোমরা সত্যবাদী হও, তবে বল এই প্রতিশ্রুতি কবে পূর্ণ হবে?",
                english: "And they say, When is this promise, if you should be truthful?",
                pronunciation: "ওয়া ইয়াকুলুনা মাতা হাজাল ওয়াদূ ইন কুন্তুম সাদিকীন"
            },
            {
                id: 26,
                arabic: "قُلْ إِنَّمَا ٱلْعِلْمُ عِندَ ٱللَّهِ وَإِنَّمَآ أَنَا۠ نَذِيرٌ مُّبِينٌ",
                bangla: "বলুন, এর জ্ঞান তো আল্লাহ তা’আলার কাছেই আছে, আমি তো কেবল একজন সুস্পষ্ট সতর্ককারী।",
                english: "Say, The knowledge is only with Allah, and I am only a clear warner.",
                pronunciation: "কুল ইন্নামাল ইলমু ইন্দাল্লাহি ওয়া ইন্নামা আনা নাযীরুম মুবীন"
            },
            {
                id: 27,
                arabic: "فَلَمَّا رَأَوْهُ زُلْفَةً سِيٓئَتْ وُجُوهُ ٱلَّذِينَ كَفَرُوا۟ وَقِيلَ هَٰذَا ٱلَّذِى كُنتُم بِهِۦ تَدَّعُونَ",
                bangla: "যখন তারা সেই প্রতিশ্রুতিকে নিকটবর্তী দেখবে তখন কাফেরদের মুখমন্ডল মলিন হয়ে যাবে এবং বলা হবে, এটাই তো তা, যা তোমরা চাইতে।",
                english: "But when they see it approaching, the faces of those who disbelieve will be distressed, and it will be said, This is that for which you used to call.",
                pronunciation: "ফালাম্মা রাআওহু যুলফাতান সীআত উজুহুল্লাযিনা কাফারু ওয়া কীলা হাজাল্লাযি কুন্তুম বিহি তাদ্দাউন"
            },
            {
                id: 28,
                arabic: "قُلْ أَرَءَيْتُمْ إِنْ أَهْلَكَنِىَ ٱللَّهُ وَمَن مَّعِىَ أَوْ رَحِمَنَا فَمَن يُجِيرُ ٱلْكَٰفِرِينَ مِنْ عَذَابٍ أَلِيمٍ",
                bangla: "বলুন, তোমরা কি ভেবে দেখেছ-যদি আল্লাহ তা’আলা আমাকে ও আমার সঙ্গীদেরকে ধ্বংস করেন অথবা আমাদের প্রতি অনুকম্পা করেন, তবে কাফেরদেরকে যন্ত্রণাদায়ক শাস্তি থেকে কে রক্ষা করবে?",
                english: "Say, Have you considered: whether Allah should destroy me and those with me or have mercy upon us - who can protect the disbelievers from a painful punishment?",
                pronunciation: "কুল আরাইতুম ইন আহলাকানিয়াল্লাহু ওয়া মাম মা'ইয়া আও রাহিমানা ফামাইঁ ইউজিরুল কাফিরিনা মিন আযাবিন আলীম"
            },
            {
                id: 29,
                arabic: "قُلْ هُوَ ٱلرَّحْمَٰنُ ءَامَنَّا بِهِۦ وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هُوَ فِى ضَلَٰلٍ مُّبِينٍ",
                bangla: "বলুন, তিনি রহমান, আমরা তাঁর প্রতি বিশ্বাস স্থাপন করেছি এবং তাঁরই উপর ভরসা করেছি। শীঘ্রই তোমরা জানতে পারবে, কে প্রকাশ্য বিভ্রান্তিতে রয়েছে।",
                english: "Say, He is the Most Merciful; we have believed in Him, and upon Him we have relied. And you will surely know who it is that is in clear error.",
                pronunciation: "কুল হুওয়ার রাহমানু আমান্না বিহি ওয়া আলাইহি তাওয়াক্কালনা ফাসাতালামুনা মান হুওয়া ফি দালালিং মুবীন"
            },
            {
                id: 30,
                arabic: "قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَآءٍ مَّعِينٍۭ",
                bangla: "বলুন, তোমরা ভেবে দেখেছ কি, যদি তোমাদের পানি ভূগর্ভে চলে যায়, তবে কে তোমাদেরকে সরবরাহ করবে পানির স্রোতধারা?",
                english: "Say, Have you considered: if your water was to become sunken [into the earth], then who could bring you flowing water?",
                pronunciation: "কুল আরাইতুম ইন আসবাহা মাউকুশ গাওরান ফামাইঁ ইয়া'তিকুম বিমায়িম মাঈন"
            }
        ]
    },
    {
        id: 93,
        name: "আদ-দুহা",
        nameEn: "Ad-Duha",
        meaning: "পূর্বাহ্ন",
        verses: [
            {
                id: 1,
                arabic: "وَٱلضُّحَىٰ",
                bangla: "শপথ পূর্বাহ্নের,",
                english: "By the morning brightness",
                pronunciation: "ওয়াদ্দুহা"
            },
            {
                id: 2,
                arabic: "وَٱلَّيْلِ إِذَا سَجَىٰ",
                bangla: "শপথ রাত্রির যখন তা গভীর হয়,",
                english: "And [by] the night when it covers with darkness,",
                pronunciation: "ওয়াল লাইলি ইজা সাজা"
            },
            {
                id: 3,
                arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
                bangla: "আপনার পালনকর্তা আপনাকে ত্যাগ করেননি এবং আপনার প্রতি বিরূপও হননি।",
                english: "Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].",
                pronunciation: "মা ওয়াদ্দায়াকা রাব্বুকা ওয়ামা কালা"
            },
            {
                id: 4,
                arabic: "وَلَلْءَاخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ",
                bangla: "আপনার জন্য পরকাল ইহকাল অপেক্ষা শ্রেয়।",
                english: "And the Hereafter is better for you than the first [life].",
                pronunciation: "ওয়া লাল আখিরাতু খাইরুল লাকা মিনাল উলা"
            },
            {
                id: 5,
                arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
                bangla: "আপনার পালনকর্তা শীঘ্রই আপনাকে এত দেবেন যে, আপনি সন্তুষ্ট হবেন।",
                english: "And your Lord is going to give you, and you will be satisfied.",
                pronunciation: "ওয়া লাসাওফা ইউ'তিকা রাব্বুকা ফাতারদা"
            },
            {
                id: 6,
                arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَـَٔاوَىٰ",
                bangla: "তিনি কি আপনাকে এতিমরূপে পাননি? অতঃপর তিনি আশ্রয় দিয়েছেন।",
                english: "Did He not find you an orphan and give [you] refuge?",
                pronunciation: "আলাম ইয়াজিদকা ইয়াতিমান ফাআওয়া"
            },
            {
                id: 7,
                arabic: "وَوَجَدَكَ ضَآلًّا فَهَدَىٰ",
                bangla: "তিনি আপনাকে পেলেন পথহারা, অতঃপর পথপ্রদর্শন করলেন।",
                english: "And He found you lost and guided [you],",
                pronunciation: "ওয়া ওয়াজাদাকা দাল্লান ফাহাদা"
            },
            {
                id: 8,
                arabic: "وَوَجَدَكَ عَآئِلًا فَأَغْنَىٰ",
                bangla: "তিনি আপনাকে পেলেন নিঃস্ব, অতঃপর অভাবমুক্ত করলেন।",
                english: "And He found you poor and made [you] self-sufficient.",
                pronunciation: "ওয়া ওয়াজাদাকা আয়িলান ফাআগনা"
            },
            {
                id: 9,
                arabic: "فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ",
                bangla: "সুতরাং আপনি এতিমের প্রতি কঠোর হবেন না;",
                english: "So as for the orphan, do not oppress [him].",
                pronunciation: "ফা আম্মাল ইয়াতিমা ফালা তাকহার"
            },
            {
                id: 10,
                arabic: "وَأَمَّا ٱلسَّآئِلَ فَلَا تَنْهَرْ",
                bangla: "এবং সওয়ালকারীকে ধমক দেবেন না,",
                english: "And as for the petitioner, do not repel [him].",
                pronunciation: "ওয়া আম্মাস সায়িলা ফালা তানহার"
            },
            {
                id: 11,
                arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
                bangla: "এবং আপনার পালনকর্তার নেয়ামতের কথা প্রকাশ করুন।",
                english: "But as for the favor of your Lord, report [it].",
                pronunciation: "ওয়া আম্মিা বিনি'মাতি রাব্বিকা ফাহাদ্দিস"
            }
        ]
    },
    {
        id: 94,
        name: "আশ-শারহ",
        nameEn: "Ash-Sharh",
        meaning: "প্রশস্তকরণ",
        verses: [
            {
                id: 1,
                arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
                bangla: "আমি কি আপনার বক্ষ উম্মুক্ত করে দেইনি?",
                english: "Did We not expand for you, [O Muhammad], your breast?",
                pronunciation: "আলাম নাশরাহ লাকা সাদরাক"
            },
            {
                id: 2,
                arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
                bangla: "আমি নামিয়ে দিয়েছি আপনার বোঝা,",
                english: "And We removed from you your burden",
                pronunciation: "ওয়া ওয়াদায়না আনকা উইযরাক"
            },
            {
                id: 3,
                arabic: "ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ",
                bangla: "যা আপনার পিঠ ভেঙ্গে দিচ্ছিল।",
                english: "Which had weighed upon your back",
                pronunciation: "আল্লাজি আনকাদা যাহরাক"
            },
            {
                id: 4,
                arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
                bangla: "আমি আপনার আলোচনার উচ্চকিত করেছি।",
                english: "And raised high for you your repute.",
                pronunciation: "ওয়া রাফায়না লাকা যিকরাক"
            },
            {
                id: 5,
                arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
                bangla: "নিশ্চয় কষ্টের সাথে স্বস্তি আছে।",
                english: "For indeed, with hardship [will be] ease.",
                pronunciation: "ফাইন্না মাআল উসরি ইউসরা"
            },
            {
                id: 6,
                arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
                bangla: "নিশ্চয় কষ্টের সাথে স্বস্তি আছে।",
                english: "Indeed, with hardship [will be] ease.",
                pronunciation: "ইন্না মাআল উসরি ইউসরা"
            },
            {
                id: 7,
                arabic: "fَإِذَا فَرَغْتَ فَٱنصَبْ",
                bangla: "অতএব, যখন অবসর পান পরিশ্রম করুন।",
                english: "So when you have finished [your duties], then stand up [for worship].",
                pronunciation: "ফাইযা ফারগতা ফানসাব"
            },
            {
                id: 8,
                arabic: "وَإِلَىٰ رَبِّكَ فَٱرْغَب",
                bangla: "এবং আপনার পালনকর্তার প্রতি মনোনিবেশ করুন।",
                english: "And to your Lord direct [your] longing.",
                pronunciation: "ওয়া ইলা রাব্বিকা ফারগাব"
            }
        ]
    },
    {
        id: 95,
        name: "আত-তীন",
        nameEn: "At-Tin",
        meaning: "ডুমুর",
        verses: [
            {
                id: 1,
                arabic: "وَٱلتِّينِ وَٱلزَّيْتُونِ",
                bangla: "শপথ ডুমুর ও জয়তুনের,",
                english: "By the fig and the olive",
                pronunciation: "ওয়াত্তীনি ওয়া যাইতুন"
            },
            {
                id: 2,
                arabic: "وَطُورِ سِينِينَ",
                bangla: "শপথ সিনাই পর্বতের,",
                english: "And [by] Mount Sinai",
                pronunciation: "ওয়া তুরি সীনীন"
            },
            {
                id: 3,
                arabic: "وَهَٰذَا ٱلْبَلَدِ ٱلْأَمِينِ",
                bangla: "এবং শপথ এই নিরাপদ নগরীর।",
                english: "And [by] this secure city [Makkah],",
                pronunciation: "ওয়া হাজাল বালাদিল আমীন"
            },
            {
                id: 4,
                arabic: "لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ",
                bangla: "আমি সৃষ্টি করেছি মানুষকে সুন্দরতম অবয়বে।",
                english: "We have certainly created man in the best of stature;",
                pronunciation: "লাকাদ খালাকনাল ইনসানা ফি আহসানি তাকউইম"
            },
            {
                id: 5,
                arabic: "ثُمَّ رَدَدْنَٰهُ أَسْفَلَ سَٰفِلِينَ",
                bangla: "অতঃপর তাকে নামিয়ে দিয়েছি নীচ থেকে নীচে,",
                english: "Then We return him to the lowest of the low,",
                pronunciation: "সুম্মা রাদাদনাহু আসফালা সাফীলিন"
            },
            {
                id: 6,
                arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
                bangla: "কিন্তু যারা বিশ্বাস স্থাপন করেছে ও সৎকর্ম করেছে, তাদের জন্যে রয়েছে অশেষ পুরস্কার।",
                english: "Except for those who believe and do righteous deeds, for they will have a reward uninterrupted.",
                pronunciation: "ইল্লাল্লাযিনা আমানু ওয়া আমিলুস সালিহাতি ফালাহুম আজরুন গাইরু মামনুন"
            },
            {
                id: 7,
                arabic: "فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ",
                bangla: "অতঃপর পরকাল সম্পর্কে তোমাকে কিসে অবিশ্বাসী করে?",
                english: "So what yet causes you to deny the Recompense?",
                pronunciation: "ফামা ইউকাজজিবুকা বা'দু বিদ্দীন"
            },
            {
                id: 8,
                arabic: "أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَٰكِمِينَ",
                bangla: "আল্লাহ কি বিচারকদের মধ্যে শ্রেষ্ঠতম বিচারক নন?",
                english: "Is not Allah the most just of judges?",
                pronunciation: "আলাইসাল্লাহু বিআহকামিল হাকিমীন"
            }
        ]
    },
    {
        id: 96,
        name: "আল-আলাক",
        nameEn: "Al-Alaq",
        meaning: "রক্তপিণ্ড",
        verses: [
            {
                id: 1,
                arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
                bangla: "পাঠ করুন আপনার পালনকর্তার নামে যিনি সৃষ্টি করেছেন",
                english: "Recite in the name of your Lord who created -",
                pronunciation: "ইকরা বিইসমি রাব্বিকাল্লাজি খালাক"
            },
            {
                id: 2,
                arabic: "خَلَقَ ٱلْإِنسَٰنَ مِنْ عَلَقٍ",
                bangla: "সৃষ্টি করেছেন মানুষকে জমাট রক্ত থেকে।",
                english: "Created man from a clinging substance.",
                pronunciation: "খালাকাল ইনসানা মিন আলাক"
            },
            {
                id: 3,
                arabic: "ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ",
                bangla: "পাঠ করুন, আপনার পালনকর্তা মহা দয়ালু,",
                english: "Recite, and your Lord is the most Generous -",
                pronunciation: "ইকরা ওয়া রাব্বুকাল আকরাম"
            },
            {
                id: 4,
                arabic: "ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ",
                bangla: "যিনি কলমের সাহায্যে শিক্ষা দিয়েছেন,",
                english: "Who taught by the pen -",
                pronunciation: "আল্লাজি আল্লামা বিল কালাম"
            },
            {
                id: 5,
                arabic: "عَلَّمَ ٱلْإِنسَٰنَ مَا لَمْ يَعْلَمْ",
                bangla: "শিক্ষা দিয়েছেন মানুষকে যা সে জানত না।",
                english: "Taught man that which he knew not.",
                pronunciation: "আল্লামাল ইনসানা মা লাম ইয়া'লাম"
            },
            {
                id: 6,
                arabic: "كَلَّآ إِنَّ ٱلْإِنسَٰنَ لَيَطْغَىٰٓ",
                bangla: "সত্যি সত্যি মানুষ সীমা লঙ্ঘন করে,",
                english: "No! Indeed, man transgresses",
                pronunciation: "কাল্লা ইন্নাল ইনসানা লাইয়াতগা"
            },
            {
                id: 7,
                arabic: "أَن رَّءَاهُ ٱسْتَغْنَىٰ",
                bangla: "এ কারণে যে, সে নিজেকে অভাবমুক্ত মনে করে।",
                english: "Because he sees himself self-sufficient.",
                pronunciation: "আর রাআহুস তাগনা"
            },
            {
                id: 8,
                arabic: "إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰٓ",
                bangla: "নিশ্চয় আপনার পালনকর্তার দিকেই প্রত্যাবর্তন করতে হবে।",
                english: "Indeed, to your Lord is the return.",
                pronunciation: "ইন্না ইলা রাব্বিকার রুজআ"
            }
        ]
    },
    {
        id: 97,
        name: "আল-কদর",
        nameEn: "Al-Qadr",
        meaning: "মহিমান্বিত",
        verses: [
            {
                id: 1,
                arabic: "إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
                bangla: "আমি একে নাযিল করেছি শবে-কদরে।",
                english: "Indeed, We sent the Qur'an down during the Night of Decree.",
                pronunciation: "ইন্না আনজালনাহু ফি লাইলাতিল কদর"
            },
            {
                id: 2,
                arabic: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
                bangla: "শবে-কদর সমন্ধে আপনি কি জানেন?",
                english: "And what can make you know what is the Night of Decree?",
                pronunciation: "ওয়া মা আদরাকা মা লাইলাতুল কদর"
            },
            {
                id: 3,
                arabic: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
                bangla: "শবে-কদর হল এক হাজার মাস অপেক্ষা শ্রেষ্ঠ।",
                english: "The Night of Decree is better than a thousand months.",
                pronunciation: "লাইলাতুল কদরি খাইরুম মিন আলফি শাহর"
            },
            {
                id: 4,
                arabic: "تَنَزَّلُ ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
                bangla: "এতে প্রত্যেক কাজের জন্যে ফেরেশতাগণ ও রূহ অবতীর্ণ হয় তাদের পালনকর্তার নির্দেশক্রমে।",
                english: "The angels and the Spirit descend therein by permission of their Lord for every matter.",
                pronunciation: "তানাজ্জালুল মালাইকাতু ওয়ার রুহু ফিহা বিইজনি রাব্বিহিম মিন কুল্লি আমরি"
            },
            {
                id: 5,
                arabic: "سَلَٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ",
                bangla: "এটা নিরাপত্তা, যা ফজর উদয় হওয়া পর্যন্ত অব্যাহত থাকে।",
                english: "Peace it is until the emergence of dawn.",
                pronunciation: "সালামুন হিয়া হাত্তা মাতলাইল ফজর"
            }
        ]
    },
    {
        id: 108,
        name: "আল-কাওসার",
        nameEn: "Al-Kawthar",
        meaning: "প্রাচুর্য",
        verses: [
            {
                id: 1,
                arabic: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ",
                bangla: "নিশ্চয় আমি আপনাকে কাউসার দান করেছি।",
                english: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
                pronunciation: "ইন্না আ'তাইনা কাল কাউসার"
            },
            {
                id: 2,
                arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
                bangla: "অতএব আপনার পালনকর্তার উদ্দেশ্যে নামায পড়ুন এবং কোরবানী করুন।",
                english: "So pray to your Lord and sacrifice [to Him alone].",
                pronunciation: "ফাসাল্লি লি রাব্বিকা ওয়ানহার"
            },
            {
                id: 3,
                arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
                bangla: "যে আপনার শত্রু, সেই তো লেজকাটা, নির্বংশ।",
                english: "Indeed, your enemy is the one cut off.",
                pronunciation: "ইন্না শানিয়াকা হুওয়াল আবতার"
            }
        ]
    },
    {
        id: 98,
        name: "আল-বাইয়্যিনাহ",
        nameEn: "Al-Bayyinah",
        meaning: "সুস্পষ্ট প্রমাণ",
        verses: [
            {
                id: 1,
                arabic: "لَمْ يَكُنِ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ وَٱلْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ ٱلْبَيِّنَةُ",
                bangla: "আহলে-কিতাব ও মুশরিকদের মধ্যে যারা কাফের ছিল, তারা সত্য দ্বীন থেকে বিচ্ছিন্ন হওয়ার ছিল না, যতক্ষণ না তাদের কাছে সুস্পষ্ট প্রমাণ আসত।",
                english: "Those who disbelieved among the People of the Scripture and the polytheists were not to be parted [from misbelief] until there came to them clear evidence -",
                pronunciation: "লাম ইয়াকুনিল্লাযিনা কাফারু মিন আহলিল কিতাবি ওয়াল মুশরিকিনা মুনফাক্কিনা হাত্তা তা'তিয়াহুমুল বাইয়্যিনাহ"
            },
            {
                id: 2,
                arabic: "رَسُولٌ مِّنَ ٱللَّهِ يَتْلُوا۟ صُحُفًا مُّطَهَّرَةً",
                bangla: "আল্লাহর পক্ষ থেকে একজন রসূল, যিনি পবিত্র পান্ডুলিপি পাঠ করবেন,",
                english: "A Messenger from Allah, reciting purified scriptures",
                pronunciation: "রাসুলুম মিনাল্লাহি ইয়াতলু সুহুফাম মুতাহহারাহ"
            },
            {
                id: 3,
                arabic: "فِيهَا كُتُبٌ قَيِّمَةٌ",
                bangla: "যাতে বক্রতামুক্ত বিধান লিপিবদ্ধ আছে।",
                english: "Within which are correct writings.",
                pronunciation: "ফিহা কুতুবুন কাইয়্যিমাহ"
            },
            {
                id: 4,
                arabic: "وَمَا تَفَرَّقَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَةُ",
                bangla: "আহলে-কিতাবরা তাদের কাছে সুস্পষ্ট প্রমাণ আসার পরেই বিভিন্ন দলে বিভক্ত হয়েছে।",
                english: "And those who were given the Scripture did not split into factions except after clear evidence had come to them.",
                pronunciation: "ওয়ামা তাফাররাকাল্লাযিনা উতুল কিতাবা ইল্লা মিম বা'দি মা জাআতহুমুল বাইয়্যিনাহ"
            },
            {
                id: 5,
                arabic: "وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ وَيُقِيمُوا۟ ٱلصَّلَوٰةَ وَيُؤْتُوا۟ ٱلزَّكَوٰةَ ۚ وَذَٰلِكَ دِينُ ٱلْقَيِّمَةِ",
                bangla: "তাদেরকে এছাড়া কোন নির্দেশ করা হয়নি যে, তারা খাঁটি মনে একনিষ্টভাবে আল্লাহর ইবাদত করবে, নামায কায়েম করবে এবং যাকাত দেবে। এটাই সঠিক ধর্ম।",
                english: "And they were not commanded except to worship Allah, being sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.",
                pronunciation: "ওয়ামা উমিরু ইল্লা লিইয়া'বুদুল্লাহ মুলিছিনা লাহুদ্দীন, হুনাফাআ ওয়া ইউকিমুস সালাতা ওয়া ইউ'তুয যাকাতা; ওয়ায়ালিকা দিনুল কাইয়্যিমাহ"
            },
            {
                id: 6,
                arabic: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ وَٱلْمُشْرِكِينَ فِى نَارِ جَهَنَّمَ خَٰلِدِينَ فِيهَآ ۚ أُو۟لَٰٓئِكَ هُمْ شَرُّ ٱلْبَرِيَّةِ",
                bangla: "আহলে-কিতাব ও মুশরিকদের মধ্যে যারা কাফের, তারা জাহান্নামের আগুনে চিরকাল থাকবে। তারাই সৃষ্টির অধম।",
                english: "Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the fire of Hell, abiding eternally therein. Those are the worst of creatures.",
                pronunciation: "ইন্নাল্লাযিনা কাফারু মিন আহলিল কিতাবি ওয়াল মুশরিকিনা ফি নারি জাহান্নামা খালিদিনা ফিহা, উলাইকা হুম শাররুল বারিয়্যাহ"
            },
            {
                id: 7,
                arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ أُو۟لَٰٓئِكَ هُمْ خَيْرُ ٱلْبَرِيَّةِ",
                bangla: "যারা ঈমান এনেছে ও সৎকর্ম করেছে, তারাই সৃষ্টির সেরা।",
                english: "Indeed, they who have believed and done righteous deeds - those are the best of creatures.",
                pronunciation: "ইন্নাল্লাযিনা আমানু ওয়া আমিলুস সালিহাতি উলাইকা হুম খাইরুল বারিয়্যাহ"
            },
            {
                id: 8,
                arabic: "جَزَآؤُهُمْ عِندَ رَبِّهِمْ جَنَّٰتُ عَدْنٍ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدًا ۖ رَّضِىَ ٱللَّهُ عَنْهُمْ وَرَضُوا۟ عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِىَ رَبَّهُۥ",
                bangla: "তাদের পালনকর্তার কাছে রয়েছে তাদের প্রতিদান চিরকাল বসবাসের জান্নাত, যার তলদেশে নির্ঝরিণী প্রবাহিত। তারা সেখানে চিরকাল থাকবে। আল্লাহ তাদের প্রতি সন্তুষ্ট এবং তারাও আল্লাহর প্রতি সন্তুষ্ট। এটা তার জন্যে, যে তার পালনকর্তাকে ভয় করে।",
                english: "Their reward with Allah will be gardens of perpetual residence beneath which rivers flow, wherein they will abide forever, Allah being pleased with them and they with Him. That is for whoever has feared his Lord.",
                pronunciation: "জাঝাউহুম ইন্দা রাব্বিহিম জান্নাতু আদনিন তাজরি মিন তাহতিহাল আনহারু খালিদিনা ফিহা আবাদা; রাদিয়াল্লাহু আনহুম ওয়ারাদু আনহ; যালিকা লিমান খাশিয়া রাব্বাহ"
            }
        ]
    },
    {
        id: 99,
        name: "আয-যিলযাল",
        nameEn: "Az-Zalzalah",
        meaning: "ভূমিকম্প",
        verses: [
            {
                id: 1,
                arabic: "إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا",
                bangla: "যখন পৃথিবী তার কম্পনে প্রকম্পিত হবে,",
                english: "When the earth is shaken with its [final] earthquake",
                pronunciation: "ইজা যুলযিলাতিল আরদু যিলযালাহা"
            },
            {
                id: 2,
                arabic: "وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا",
                bangla: "যখন সে তার বোঝা বের করে দেবে।",
                english: "And the earth discharges its burdens",
                pronunciation: "ওয়া আখরাজাতিল আরদু আসকালাহা"
            },
            {
                id: 3,
                arabic: "وَقَالَ ٱلْإِنسَٰنُ مَا لَهَا",
                bangla: "মানুষ বলবে, এর কি হলো ?",
                english: "And man says, What is [wrong] with it? -",
                pronunciation: "ওয়া কালান ইনসানু মা লাহা"
            },
            {
                id: 4,
                arabic: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا",
                bangla: "সেদিন সে তার বৃত্তান্ত বর্ণনা করবে,",
                english: "That Day, it will report its news",
                pronunciation: "ইয়াওমাইজিন তুহাদ্দিসু আখবারাহা"
            },
            {
                id: 5,
                arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا",
                bangla: "কারণ, আপনার পালনকর্তা তাকে আদেশ করবেন।",
                english: "Because your Lord has inspired it.",
                pronunciation: "বিআন্না রাব্বাকা আওহা লাহা"
            },
            {
                id: 6,
                arabic: "يَوْمَئِذٍ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًا لِّيُرَوْا۟ أَعْمَٰلَهُمْ",
                bangla: "সেদিন মানুষ বিভিন্ন দলে প্রকাশ পাবে, যাতে তাদেরকে তাদের কৃতকর্ম দেখানো যায়।",
                english: "That Day, the people will depart separated [into categories] to be shown their deeds.",
                pronunciation: "ইয়াওমাইযিন ইয়াসদুরুন্নাসু আশতাতাল লিইউরাও আ'মালাহুম"
            },
            {
                id: 7,
                arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ",
                bangla: "অতঃপর কেউ অণু পরিমাণ সৎকর্ম করলে তা দেখতে পাবে",
                english: "So whoever does an atom's weight of good will see it,",
                pronunciation: "ফামাইঁ ইয়া'মাল মিসকালা যাররাতিন খাইরাই ঈয়ারাহ"
            },
            {
                id: 8,
                arabic: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُۥ",
                bangla: "এবং কেউ অণু পরিমাণ অসৎকর্ম করলে তাও দেখতে পাবে।",
                english: "And whoever does an atom's weight of evil will see it.",
                pronunciation: "ওয়ামাইঁ ইয়া'মাল মিসকালা যাররাতিন শাররাইঁ ইয়ারাহ"
            }
        ]
    },
    {
        id: 100,
        name: "আল-আদিয়াত",
        nameEn: "Al-Adiyat",
        meaning: "অভিযানকারী অশ্ব",
        verses: [
            {
                id: 1,
                arabic: "وَٱلْعَٰدِيَٰتِ ضَبْحًا",
                bangla: "শপথ উর্ধ্বশ্বাসে ধাবমান অশ্বরাজির,",
                english: "By the racers, panting,",
                pronunciation: "ওয়াল আদিয়াতি দাবহা"
            },
            {
                id: 2,
                arabic: "فَٱلْمُورِيَٰتِ قَدْحًا",
                bangla: "অতঃপর যারা ক্ষুরাঘাতে অগ্নিবিচ্ছুরিত করে,",
                english: "And the producers of sparks [when] striking",
                pronunciation: "ফাল মুরিয়াতি কাদহা"
            },
            {
                id: 3,
                arabic: "فَٱلْمُغِيرَٰتِ صُبْحًا",
                bangla: "অতঃপর যারা প্রভাতে আক্রমণ করে,",
                english: "And the chargers at dawn,",
                pronunciation: "ফাল মুগিরাতি সুবহা"
            },
            {
                id: 4,
                arabic: "fَأَثَرْنَ بِهِۦ نَقْعًا",
                bangla: "ও তথায় ধূলি উড়ায়,",
                english: "Stirring up thereby [clouds of] dust,",
                pronunciation: "ফা আসারনা বিহি নাকআ"
            },
            {
                id: 5,
                arabic: "فَوَسَطْنَ بِهِۦ جَمْعًا",
                bangla: "অতঃপর সেখানে শত্রুদলের অভ্যন্তরে ঢুকে পড়ে।",
                english: "Arriving thereby in the center collectively,",
                pronunciation: "ফাওয়াসাতনা বিহি জামআ"
            },
            {
                id: 6,
                arabic: "إِنَّ ٱلْإِنسَٰنَ لِرَبِّهِۦ لَكَنُودٌ",
                bangla: "নিশ্চয় মানুষ তার পালনকর্তার প্রতি অকৃতজ্ঞ।",
                english: "Indeed mankind, to his Lord, is ungrateful.",
                pronunciation: "ইন্নাল ইনসানা লিরাব্বিহি লাকানুদ"
            },
            {
                id: 7,
                arabic: "وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ",
                bangla: "এবং সে অবশ্যই এ বিষয়ে সাক্ষী।",
                english: "And indeed, he is to that a witness.",
                pronunciation: "ওয়া ইন্নাহু আলা যালিকা লাশাহীদ"
            },
            {
                id: 8,
                arabic: "وَإِنَّهُۥ لِحُبِّ ٱلْخَيْرِ لَشَدِيدٌ",
                bangla: "সে অবশ্যই ধন-সম্পদের আসক্তিতে প্রবল।",
                english: "And indeed, he is intense in love of wealth.",
                pronunciation: "ওয়া ইন্নাহু লিহুব্বিল খাইরি লাসাদীদ"
            },
            {
                id: 9,
                arabic: "۞ أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِى ٱلْقُبُورِ",
                bangla: "সে কি জানে না, যখন কবরের বস্তুনিচয় উত্থিত হবে,",
                english: "But does he not know that when the contents of the graves are scattered",
                pronunciation: "আফালা ইয়া'লামু ইজা বু'সিরা মা ফিল কুবুর"
            },
            {
                id: 10,
                arabic: "وَحُصِّلَ مَا فِى ٱلصُّدُورِ",
                bangla: "এবং অন্তরের বিষয়াদি প্রকাশিত হবে?",
                english: "And that within the breasts is obtained,",
                pronunciation: "ওয়া হুসসিলা মা ফিস সুদুর"
            },
            {
                id: 11,
                arabic: "إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌۢ",
                bangla: "সেদিন তাদের পালনকর্তা তাদের সম্পর্কে সম্যক জ্ঞাত থাকবেন।",
                english: "Indeed, their Lord with them, that Day, is [fully] Acquainted.",
                pronunciation: "ইন্না রাব্বাহুম বিহিম ইয়াওমাইযিল লাখাবীর"
            }
        ]
    },
    {
        id: 101,
        name: "আল-কারিয়াহ",
        nameEn: "Al-Qari'ah",
        meaning: "মহাপ্রলয়",
        verses: [
            {
                id: 1,
                arabic: "ٱلْقَارِعَةُ",
                bangla: "মহাপ্রলয়,",
                english: "The Striking Calamity -",
                pronunciation: "আল কারিয়াহ"
            },
            {
                id: 2,
                arabic: "مَا ٱلْقَارِعَةُ",
                bangla: "মহাপ্রলয় কি?",
                english: "What is the Striking Calamity?",
                pronunciation: "মাল কারিয়াহ"
            },
            {
                id: 3,
                arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْقَارِعَةُ",
                bangla: "মহাপ্রলয় সম্পর্কে আপনি কি জানেন?",
                english: "And what can make you know what is the Striking Calamity?",
                pronunciation: "ওয়া মা আদরাকা মাল কারিয়াহ"
            },
            {
                id: 4,
                arabic: "يَوْمَ يَكُونُ ٱلنَّاسُ كَٱلْفَرَاشِ ٱلْمَبْثُوثِ",
                bangla: "যেদিন মানুষ হবে বিক্ষিপ্ত পতংগের মত",
                english: "It is the Day when people will be like moths, dispersed,",
                pronunciation: "ইয়াওমা ইয়াকুনুন নাসু কাল ফারাশিল মাবসুস"
            },
            {
                id: 5,
                arabic: "وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ",
                bangla: "এবং পর্বতমালা হবে ধুনিত রঙিন পশমের মত।",
                english: "And the mountains will be like wool, fluffed up.",
                pronunciation: "ওয়া তাকুনুল জিবালু কাল ইহনিল মানফুশ"
            },
            {
                id: 6,
                arabic: "فَأَمَّا مَن ثَقُلَتْ مَوَٰزِينُهُۥ",
                bangla: "অতঃপর যার পাল্লা ভারী হবে,",
                english: "Then as for one whose scales are heavy [with good deeds],",
                pronunciation: "ফাআম্মা মান সাকুলাত মাওয়াযিনুহু"
            },
            {
                id: 7,
                arabic: "فَهُوَ فِى عِيشَةٍ رَّاضِيَةٍ",
                bangla: "সে সুখী জীবন যাপন করবে।",
                english: "He will be in a pleasant life.",
                pronunciation: "ফাহুওয়া ফি ঈশাতি রা-দিয়া"
            },
            {
                id: 8,
                arabic: "وَأَمَّا مَنْ خَفَّتْ مَوَٰزِينُهُۥ",
                bangla: "আর যার পাল্লা হালকা হবে,",
                english: "But as for one whose scales are light,",
                pronunciation: "ওয়া আম্মা মান খাফফাত মাওয়াযিনুহু"
            },
            {
                id: 9,
                arabic: "فَأُمُّهُۥ هَاوِيَةٌ",
                bangla: "তার ঠিকানা হবে 'হাবিয়া'।",
                english: "His refuge will be an abyss.",
                pronunciation: "ফা উম্মুহু হাবিয়াহ"
            },
            {
                id: 10,
                arabic: "وَمَآ أَدْرَىٰكَ مَا هِيَهْ",
                bangla: "আপনি কি জানেন তা কি?",
                english: "And what can make you know what that is?",
                pronunciation: "ওয়ামা আদরাকা মাহিয়াহ"
            },
            {
                id: 11,
                arabic: "نَارٌ حَامِيَةٌۢ",
                bangla: "তা প্রজ্জ্বলিত অগ্নি।",
                english: "It is a Fire, intensely hot.",
                pronunciation: "নারুন হামিয়াহ"
            }
        ]
    },
    {
        id: 102,
        name: "আত-তাকাসুর",
        nameEn: "At-Takathur",
        meaning: "প্রাচুর্যের প্রতিযোগিতা",
        verses: [
            {
                id: 1,
                arabic: "أَلْهَىٰكُمُ ٱلتَّكَاثُرُ",
                bangla: "প্রাচুর্যের লালসা তোমাদেরকে গাফেল রাখে,",
                english: "Competition in [worldly] increase diverts you",
                pronunciation: "আলহাকুমুত তাকাসুর"
            },
            {
                id: 2,
                arabic: "حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ",
                bangla: "এমনকি, তোমরা কবরস্থানে পৌঁছে যাও।",
                english: "Until you visit the graveyards.",
                pronunciation: "হাত্তা যুরতুমুল মাকাবির"
            },
            {
                id: 3,
                arabic: "كَلَّا سَوْفَ تَعْلَمُونَ",
                bangla: "এটা কখনও উচিত নয়। তোমরা শীঘ্রই জানতে পারবে।",
                english: "No! You are going to know.",
                pronunciation: "কাল্লা সাওফা তা'লামুন"
            },
            {
                id: 4,
                arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
                bangla: "আবার বলি, এটা কখনও উচিত নয়। তোমরা শীঘ্রই জানতে পারবে।",
                english: "Then no! You are going to know.",
                pronunciation: "সুম্মা কাল্লা সাওফা তা'লামুন"
            },
            {
                id: 5,
                arabic: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ",
                bangla: "না, যদি তোমরা নিশ্চিত জানতে (তবে এমন করতে না)।",
                english: "No! If you only knew with knowledge of certainty...",
                pronunciation: "কাল্লা লাউ তা'লামুনা ইলমাল ইয়াকীন"
            },
            {
                id: 6,
                arabic: "لَتَرَوُنَّ ٱلْجَحِيمَ",
                bangla: "তোমরা অবশ্যই জাহান্নাম দেখবে,",
                english: "You will surely see the Hellfire.",
                pronunciation: "লাতারাউন্নাল জাহীম"
            },
            {
                id: 7,
                arabic: "ثُمَّ لَتَرَوُنَّهَا عَيْنَ ٱلْيَقِينِ",
                bangla: "অতঃপর তোমরা তা চাক্ষুষ প্রত্যয় বা নিশ্চিতরূপে দেখবে।",
                english: "Then you will surely see it with the eye of certainty.",
                pronunciation: "সুম্মা লাতারাউন্নাহা আইনাল ইয়াকীন"
            },
            {
                id: 8,
                arabic: "ثُمَّ لَتُسْـَٔلُنَّ يَوْمَئِذٍ عَنِ ٱلنَّعِيمِ",
                bangla: "অতঃপর অবশ্যই সেদিন তোমরা নেয়ামত সম্পর্কে জিজ্ঞাসিত হবে।",
                english: "Then you will surely be asked that Day about pleasure.",
                pronunciation: "সুম্মা লাতুসআলুন্না ইয়াওমাইযিন আনিন নাঈম"
            }
        ]
    },
    {
        id: 103,
        name: "আল-আসর",
        nameEn: "Al-Asr",
        meaning: "সময়",
        verses: [
            {
                id: 1,
                arabic: "وَٱلْعَصْرِ",
                bangla: "কালের শপথ,",
                english: "By time,",
                pronunciation: "ওয়াল আসর"
            },
            {
                id: 2,
                arabic: "إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ",
                bangla: "মানুষ অবশ্যই ক্ষতিগ্রস্ত;",
                english: "Indeed, mankind is in loss,",
                pronunciation: "ইন্নাল ইনসানা লাফি খুসর"
            },
            {
                id: 3,
                arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ",
                bangla: "কিন্তু তারা নয়, যারা বিশ্বাস স্থাপন করে ও সৎকর্ম করে এবং পরস্পরকে তাকীদ করে সত্যের এবং তাকীদ করে সবরের।",
                english: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
                pronunciation: "ইল্লাল্লাযিনা আমানু ওয়া আমিলুস সালিহাতি ওয়া তাওয়াসাও বিল হাক্কি ওয়া তাওয়াসাও বিস সাবর"
            }
        ]
    },
    {
        id: 104,
        name: "আল-হুমাযাহ",
        nameEn: "Al-Humazah",
        meaning: "নিন্দুক",
        verses: [
            {
                id: 1,
                arabic: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ",
                bangla: "প্রত্যেক পশ্চাতে ও সম্মুখে পরনিন্দাকারীর দূর্ভোগ,",
                english: "Woe to every scorner and mocker",
                pronunciation: "ওয়াইলুল লিকুল্লি হুমাযাতিল লুমাযা"
            },
            {
                id: 2,
                arabic: "ٱلَّذِى جَمَعَ مَالًا وَعَدَّدَهُۥ",
                bangla: "যে অর্থ সঞ্চিত করে ও গণনা করে।",
                english: "Who collects wealth and [continuously] counts it.",
                pronunciation: "আল্লাযি জামাআ মালাউ ওয়া আদ্দাদাহ"
            },
            {
                id: 3,
                arabic: "يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ",
                bangla: "সে মনে করে যে, তার অর্থ তাকে চিরকাল রাখবে।",
                english: "He thinks that his wealth will make him immortal.",
                pronunciation: "ইয়াহসাব আন্না মালাহু আখলাদাহ"
            },
            {
                id: 4,
                arabic: "كَلَّا ۖ لَيُنبَذَنَّ فِى ٱلْحُطَمَةِ",
                bangla: "কখনও না, সে অবশ্যই নিক্ষিপ্ত হবে হুতামায়।",
                english: "No! He will surely be thrown into the Crusher.",
                pronunciation: "কাল্লা লাইয়ুন বাযান্না ফিল হুতামাহ"
            },
            {
                id: 5,
                arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ",
                bangla: "আপনি কি জানেন হুতামা কি?",
                english: "And what can make you know what is the Crusher?",
                pronunciation: "ওয়ামা আদরাকা মাল হুতামাহ"
            },
            {
                id: 6,
                arabic: "نَارُ ٱللَّهِ ٱلْمُوقَدَةُ",
                bangla: "তা আল্লাহর প্রজ্জ্বলিত আগুন,",
                english: "It is the fire of Allah, [eternally] fueled,",
                pronunciation: "নারুল্লাহিল মুকাদাহ"
            },
            {
                id: 7,
                arabic: "ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ",
                bangla: "যা হৃদয় পর্যন্ত পৌঁছবে।",
                english: "Which mounts directed at the hearts.",
                pronunciation: "আল্লাতি তাত্তালিউ আলাল আফইদাহ"
            },
            {
                id: 8,
                arabic: "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ",
                bangla: "নিশ্চয় তা তাদেরকে পরিবেষ্টন করে রাখবে,",
                english: "Indeed, Hellfire will be closed down upon them",
                pronunciation: "ইন্নাহা আলাইহিম মু'সাদাহ"
            },
            {
                id: 9,
                arabic: "فِى عَمَدٍ مُّمَدَّدَةٍۭ",
                bangla: "লস্বা লম্বা স্তম্ভসমূহে।",
                english: "In extended columns.",
                pronunciation: "ফি আমাদিম মুমাদ্দাদাহ"
            }
        ]
    },
    {
        id: 105,
        name: "আল-ফীল",
        nameEn: "Al-Fil",
        meaning: "হাতি",
        verses: [
            {
                id: 1,
                arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ",
                bangla: "আপনি কি দেখেননি আপনার পালনকর্তা হস্তীবাহিনীর সাথে কিরূপ ব্যবহার করেছেন?",
                english: "Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?",
                pronunciation: "আলাম তারা কাইফা ফায়ালা রাব্বুকা বি আসহাবিল ফিল"
            },
            {
                id: 2,
                arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ",
                bangla: "তিনি কি তাদের চক্রান্ত নস্যাৎ করে দেননি?",
                english: "Did He not make their plan into misguidance?",
                pronunciation: "আলাম ইয়াজআল কাইদাহুম ফি তাদলিল"
            },
            {
                id: 3,
                arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
                bangla: "তিনি তাদের উপর ঝাঁকে ঝাঁকে পাখি প্রেরণ করেছেন,",
                english: "And He sent against them birds in flocks,",
                pronunciation: "ওয়া আরসালা আলাইহিম তাইরান আবাবিল"
            },
            {
                id: 4,
                arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
                bangla: "যারা তাদের উপর পাথরের কংকর নিক্ষেপ করছিল।",
                english: "Striking them with stones of hard clay,",
                pronunciation: "তারমিহিম বিহিজারাতিন মিন সিজ্জিল"
            },
            {
                id: 5,
                arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍۢ",
                bangla: "অতঃপর তিনি তাদেরকে ভক্ষিত তৃণসদৃশ করে দিলেন।",
                english: "And He made them like eaten straw.",
                pronunciation: "ফাজাআলাহুম কাআসিফিম মা'কুল"
            }
        ]
    },
    {
        id: 106,
        name: "কুরাইশ",
        nameEn: "Quraysh",
        meaning: "কুরাইশ বংশ",
        verses: [
            {
                id: 1,
                arabic: "لِإِيلَٰفِ قُرَيْشٍ",
                bangla: "কুরাইশদের আসক্তির কারণে,",
                english: "For the accustomed security of the Quraysh -",
                pronunciation: "লিইলাফি কুরাইশ"
            },
            {
                id: 2,
                arabic: "إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
                bangla: "শীত ও গ্রীষ্মকালীন সফরের আসক্তির কারণে--",
                english: "Their accustomed security [in] the caravan of winter and summer -",
                pronunciation: "ইলাফিহিম রিহলাতাশ শিতা-ই ওয়াস সাইফ"
            },
            {
                id: 3,
                arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ",
                bangla: "তাদের উচিত এই ঘরের পালনকর্তার ইবাদত করা,",
                english: "Let them worship the Lord of this House,",
                pronunciation: "ফালইয়া'বুদু রাব্বা হাজাল বাইত"
            },
            {
                id: 4,
                arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ",
                bangla: "যিনি তাদেরকে ক্ষুধায় আহার দিয়েছেন এবং এবং ভয়ভীতি থেকে তাদেরকে নিরাপদ করেছেন।",
                english: "Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.",
                pronunciation: "আল্লাজি আতআলাহুম মিন জুউইওঁ ওয়া আমানাহুম মিন খাওফ"
            }
        ]
    },
    {
        id: 107,
        name: "আল-মাউন",
        nameEn: "Al-Ma'un",
        meaning: "ছোটখাট সাহায্য",
        verses: [
            {
                id: 1,
                arabic: "أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ",
                bangla: "আপনি কি দেখেছেন তাকে, যে বিচারদিবসকে মিথ্যা বলে?",
                english: "Have you seen the one who denies the Recompense?",
                pronunciation: "আরাইতাল্লাজি ইউকাজজিবু বিদ্দীন"
            },
            {
                id: 2,
                arabic: "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ",
                bangla: "সে সেই ব্যক্তি, যে এতিমকে গলা ধাক্কা দেয়,",
                english: "For that is the one who drives away the orphan",
                pronunciation: "ফাজালিকাল্লাজি ইয়াদু'উল ইয়াতিম"
            },
            {
                id: 3,
                arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
                bangla: "এবং মিসকিনকে অন্ন দিতে উৎসাহিত করে না।",
                english: "And does not encourage the feeding of the poor.",
                pronunciation: "ওয়ালা ইয়াহুদ্দু আলা তয়ামিল মিসকিন"
            },
            {
                id: 4,
                arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
                bangla: "অতএব ধ্বংস সেই নামাযীদের জন্য,",
                english: "So woe to those who pray",
                pronunciation: "ফাওয়াইলুল লিল মুসাল্লিন"
            },
            {
                id: 5,
                arabic: "ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
                bangla: "যারা তাদের নামায সম্বন্ধে বে-খবর;",
                english: "[But] who are heedless of their prayer -",
                pronunciation: "আল্লাজিনা হুম আন সালাতিহিম সাহুন"
            },
            {
                id: 6,
                arabic: "ٱلَّذِينَ هُمْ يُرَآءُونَ",
                bangla: "যারা লোক দেখানো কাজ করে,",
                english: "Those who make show [of their deeds]",
                pronunciation: "আল্লাজিনা হুম ইউরা-উন"
            },
            {
                id: 7,
                arabic: "وَيَمْنَعُونَ ٱلْمَاعُونَ",
                bangla: "এবং নিত্য ব্যবহার্য্য বস্তু অন্যকে দেয় না।",
                english: "And withhold [simple] assistance.",
                pronunciation: "ওয়া ইয়ামনাউনাল মাউন"
            }
        ]
    },
    {
        id: 109,
        name: "আল-কাফিরুন",
        nameEn: "Al-Kafirun",
        meaning: "অবিশ্বাসীগণ",
        verses: [
            {
                id: 1,
                arabic: "قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ",
                bangla: "বলুন, হে কাফেরকুল,",
                english: "Say, O disbelievers,",
                pronunciation: "কুল ইয়া আইয়ুহাল কাফিরুন"
            },
            {
                id: 2,
                arabic: "لَآ أَعْبُدُ مَا تَعْبُدُونَ",
                bangla: "আমি ওটার ইবাদত করি না, যার ইবাদত তোমরা কর,",
                english: "I do not worship what you worship.",
                pronunciation: "লা আ'বুদু মা তা'বুদুন"
            },
            {
                id: 3,
                arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
                bangla: "এবং তোমরাও তার ইবাদতকারী নও, যার ইবাদত আমি করি",
                english: "Nor are you worshippers of what I worship.",
                pronunciation: "ওয়া লা আনতুম আবিদুনা মা আ'বুদ"
            },
            {
                id: 4,
                arabic: "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ",
                bangla: "এবং আমি ইবাদতকারী নই তার, যার ইবাদত তোমরা করে আসছ।",
                english: "Nor will I be a worshipper of what you worship.",
                pronunciation: "ওয়া লা আনা আবিদুম মা আবাদতুম"
            },
            {
                id: 5,
                arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
                bangla: "এবং তোমরাও তার ইবাদতকারী নও, যার ইবাদত আমি করি।",
                english: "Nor will you be worshippers of what I worship.",
                pronunciation: "ওয়া লা আনতুম আবিদুনা মা আ'বুদ"
            },
            {
                id: 6,
                arabic: "لَكُمْ دِينُكُمْ وَلِىَ دِينِ",
                bangla: "তোমাদের কর্ম ও কর্মফল তোমাদের জন্যে এবং আমার কর্ম ও কর্মফল আমার জন্যে।",
                english: "For you is your religion, and for me is my religion.",
                pronunciation: "লাকুম দিনুকুম ওয়ালি ইয়াদিন"
            }
        ]
    },
    {
        id: 110,
        name: "আন-নাসর",
        nameEn: "An-Nasr",
        meaning: "সাহায্য",
        verses: [
            {
                id: 1,
                arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ",
                bangla: "যখন আসবে আল্লাহর সাহায্য ও বিজয়,",
                english: "When the victory of Allah has come and the conquest,",
                pronunciation: "ইজা জা-আ নাসরুল্লাহি ওয়াল ফাতহ"
            },
            {
                id: 2,
                arabic: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا",
                bangla: "এবং আপনি মানুষকে দলে দলে আল্লাহর দ্বীনে প্রবেশ করতে দেখবেন,",
                english: "And you see the people entering into the religion of Allah in multitudes,",
                pronunciation: "ওয়া রাআইতান নাসা ইয়াদখুলুনা ফি দিনিল্লাহি আফওয়াজা"
            },
            {
                id: 3,
                arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۢا",
                bangla: "তখন আপনি আপনার পালনকর্তার প্রশংসাসহ পবিত্রতা বর্ণনা করুন এবং তাঁর কাছে ক্ষমা প্রার্থনা করুন। নিশ্চয় তিনি তওবা কবুলকারী।",
                english: "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.",
                pronunciation: "ফাসাব্বিহ বিহামদি রাব্বিকা ওয়াসতাগফিরহ, ইন্নাহু কানা তাওয়াবা"
            }
        ]
    },
    {
        id: 111,
        name: "আল-মাসাদ",
        nameEn: "Al-Masad",
        meaning: "খেজুরের আঁশের রশি",
        verses: [
            {
                id: 1,
                arabic: "تَبَّتْ يَدَآ أَبِى لَهَبٍ وَتَبَّ",
                bangla: "আবু লাহাবের হস্তদ্বয় ধ্বংস হোক এবং সে নিজেও ধ্বংস হোক।",
                english: "May the hands of Abu Lahab be ruined, and ruined is he.",
                pronunciation: "তাব্বাত ইয়াদা আবি লাহেবিউ ওয়াতাব"
            },
            {
                id: 2,
                arabic: "مَآ أَغْنَىٰ عَنْهُ مَالُهُۥ وَمَا كَسَبَ",
                bangla: "তার ধন-সম্পদ ও যা সে উপার্জন করেছে, তা তার কাজে আসেনি।",
                english: "His wealth will not avail him or that which he gained.",
                pronunciation: "মা আগনা আনহু মালুহু ওয়ামা কাসাব"
            },
            {
                id: 3,
                arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
                bangla: "সত্বরই সে শিখাবিশিষ্ট অগ্নিতে প্রবেশ করবে,",
                english: "He will [enter to] burn in a Fire of [blazing] flame",
                pronunciation: "সাইয়াসলা নারান জাতা লাহাব"
            },
            {
                id: 4,
                arabic: "وَٱمْرَأَتُهُۥ حَمَّالَةَ ٱلْحَطَبِ",
                bangla: "এবং তার স্ত্রীও, যে ইন্ধন বহন করে,",
                english: "And his wife [as well] - the carrier of firewood.",
                pronunciation: "ওয়ামরায়াতুহু হাম্মালাতাল হাতাব"
            },
            {
                id: 5,
                arabic: "فِى جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
                bangla: "তার গলদেশে খর্জুরের রশি নিয়ে।",
                english: "Around her neck is a rope of [twisted] fiber.",
                pronunciation: "ফি জিদিহা হাবলুম মিম মাসাদ"
            }
        ]
    },
    {
        id: 112,
        name: "আল-ইখলাস",
        nameEn: "Al-Ikhlas",
        meaning: "একত্ববাদ",
        verses: [
            {
                id: 1,
                arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
                bangla: "বলুন, তিনি আল্লাহ, এক।",
                english: "Say, He is Allah, [who is] One.",
                pronunciation: "কুল হুওয়াল্লাহু আহাদ"
            },
            {
                id: 2,
                arabic: "ٱللَّهُ ٱلصَّمَدُ",
                bangla: "আল্লাহ অমুখাপেক্ষী।",
                english: "Allah, the Eternal Refuge.",
                pronunciation: "আল্লাহুস সামাদ"
            },
            {
                id: 3,
                arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
                bangla: "তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি।",
                english: "He neither begets nor is born,",
                pronunciation: "লাম ইয়ালিদ ওয়া লাম ইউলাদ"
            },
            {
                id: 4,
                arabic: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
                bangla: "এবং তার সমতুল্য কেউ নেই।",
                english: "Nor is there to Him any equivalent.",
                pronunciation: "ওয়া লাম ইয়াকুল্লাহু কুফুওয়ান আহাদ"
            }
        ]
    },
    {
        id: 113,
        name: "আল-ফালাক",
        nameEn: "Al-Falaq",
        meaning: "ঊষা",
        verses: [
            {
                id: 1,
                arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
                bangla: "বলুন, আমি আশ্রয় গ্রহণ করছি প্রভাতের পালনকর্তার,",
                english: "Say, I seek refuge in the Lord of daybreak",
                pronunciation: "কুল আউযু বিরাব্বিল ফালাক"
            },
            {
                id: 2,
                arabic: "مِن شَرِّ مَا خَلَقَ",
                bangla: "তিনি যা সৃষ্টি করেছেন, তার অনিষ্ট থেকে,",
                english: "From the evil of that which He created",
                pronunciation: "মিন শাররি মা খালাক"
            },
            {
                id: 3,
                arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
                bangla: "অন্ধকার রাত্রির অনিষ্ট থেকে, যখন তা সমাগত হয়,",
                english: "And from the evil of darkness when it settles",
                pronunciation: "ওয়া মিন শাররি গাসিকিন ইজা ওয়াকাব"
            },
            {
                id: 4,
                arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ",
                bangla: "গ্রন্থিতে ফুঁৎকার দিয়ে জাদুকারিনীদের অনিষ্ট থেকে,",
                english: "And from the evil of the blowers in knots",
                pronunciation: "ওয়া মিন শাররিন নাফফাসাতি ফিল উকাদ"
            },
            {
                id: 5,
                arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                bangla: "এবং হিংসুকের অনিষ্ট থেকে, যখন সে হিংসা করে।",
                english: "And from the evil of an envier when he envies.",
                pronunciation: "ওয়া মিন শাররি হাসিদিন ইজা হাসাদ"
            }
        ]
    },
    {
        id: 114,
        name: "আন্-নাস",
        nameEn: "An-Nas",
        meaning: "মানুষ",
        verses: [
            {
                id: 1,
                arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
                bangla: "বলুন, আমি আশ্রয় গ্রহণ করছি মানুষের পালনকর্তার,",
                english: "Say, I seek refuge in the Lord of mankind,",
                pronunciation: "কুল আউযু বিরাব্বিন নাস"
            },
            {
                id: 2,
                arabic: "مَلِكِ ٱلنَّاسِ",
                bangla: "মানুষের অধিপতির,",
                english: "The Sovereign of mankind.",
                pronunciation: "মালিকিন নাস"
            },
            {
                id: 3,
                arabic: "إِلَٰهِ ٱلنَّاسِ",
                bangla: "মানুষের মা'বুদের,",
                english: "The God of mankind,",
                pronunciation: "ইলাহিন নাস"
            },
            {
                id: 4,
                arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
                bangla: "তার অনিষ্ট থেকে, যে কুমন্ত্রণা দেয় ও আত্মগোপন করে,",
                english: "From the evil of the retreating whisperer -",
                pronunciation: "মিন শাররিল ওয়াসওয়াসিল খান্নাস"
            },
            {
                id: 5,
                arabic: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
                bangla: "যে মানুষের অন্তরে কুমন্ত্রণা দেয়,",
                english: "Who whispers [evil] into the breasts of mankind -",
                pronunciation: "আল্লাজি ইউওয়াসউইসু ফি সুদুরিন নাস"
            },
            {
                id: 6,
                arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
                bangla: "জ্বিন ও মানুষ থেকে।",
                english: "From among the jinn and mankind.",
                pronunciation: "মিনাল জিন্নাতি ওয়ান নাস"
            }
        ]
    }
];
