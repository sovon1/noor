import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="text-8xl mb-6 animate-crescent">🕌</div>
                <h1 className="text-6xl font-bold text-emerald-400 mb-4" style={{ fontFamily: "Inter" }}>৪০৪</h1>
                <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "Noto Sans Bengali" }}>
                    পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
                </h2>
                <p className="text-gray-400 text-sm mb-8" style={{ fontFamily: "Noto Sans Bengali" }}>
                    আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি সরানো হয়েছে বা বিদ্যমান নেই।
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-emerald-600/30 text-emerald-300 text-sm font-medium border border-emerald-500/30 hover:bg-emerald-600/40 transition-all"
                        style={{ fontFamily: "Noto Sans Bengali" }}
                    >
                        🏠 হোম পেইজে ফিরুন
                    </Link>
                    <Link
                        href="/prayer-times"
                        className="px-6 py-3 rounded-xl glass-card text-gray-300 text-sm font-medium hover:bg-emerald-900/20 transition-all"
                        style={{ fontFamily: "Noto Sans Bengali" }}
                    >
                        🕌 নামাজের সময়
                    </Link>
                </div>
            </div>
        </div>
    );
}
