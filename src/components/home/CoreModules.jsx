import React from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  BookOpen, 
  BrainCircuit, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function CoreModules() {
  const modules = [
    {
      id: "speaking",
      title: "Speaking English",
      titleBn: "স্পোকেন ইংলিশ",
      description: "দৈনন্দিন জীবনের প্রয়োজনীয় রেডিমেড ইংরেজি বাক্য, বাংলা অর্থ এবং সঠিক উচ্চারণ একসাথে চর্চা করুন।",
      icon: MessageSquare,
      path: "/speaking-english",
      badge: "৫০+ ডেলি সিচুয়েশন",
      accent: {
        bg: "bg-amber-500/10 dark:bg-amber-500/20",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-500/30",
        glow: "hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/40",
        btn: "group-hover:bg-amber-500"
      },
      highlights: ["রেডিমেড ডেইলি সেন্টেন্স", "বাংলা অর্থ ও উদাহরণ"]
    },
    {
      id: "vocabulary",
      title: "Smart Vocabulary",
      titleBn: "স্মার্ট ভোকাবুলারি",
      description: "ইংরেজি সাবলীলভাবে বলার জন্য প্রয়োজনীয় Verb List এবং সহজ বাংলা অর্থসমূহ।",
      icon: BookOpen,
      path: "/vocabulary",
      badge: "১০০০+ গুরুত্বপূর্ণ ভার্ব",
      accent: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-500/30",
        glow: "hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/40",
        btn: "group-hover:bg-emerald-500"
      },
      highlights: ["বাংলা অর্থসহ Verb List", "ইনস্ট্যান্ট মেমোরাইজ কুইজ"]
    },
    {
      id: "grammar",
      title: "Easy Applied Grammar",
      titleBn: "সহজ অ্যাপ্লাইড গ্রামার",
      description: "কঠিন নিয়ম মুখস্থ না করে দৈনন্দিন কথা বলার জন্য যতটুকু ব্যাকরণ প্রয়োজন, ঠিক ততটুকুই শিখুন।",
      icon: BrainCircuit,
      path: "/grammar",
      badge: "জিরো মেমোরাইজেশন",
      accent: {
        bg: "bg-indigo-500/10 dark:bg-indigo-500/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-500/30",
        glow: "hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/40",
        btn: "group-hover:bg-indigo-500"
      },
      highlights: ["কথা বলার সহজ সূত্র", "রিয়েল সেন্টেন্স স্ট্রাকচার"]
    },
    {
      id: "freelancing",
      title: "Freelancing English",
      titleBn: "ফ্রিল্যান্সিং ইংলিশ",
      description: "মার্কেটপ্লেসে বায়ার বা ক্লায়েন্টের সাথে কীভাবে ইংরেজিতে দক্ষভাবে কমিউনিকেশন করবেন।",
      icon: Briefcase,
      path: "/freelancing-english",
      badge: "ক্লায়েন্ট কমিউনিকেশন",
      accent: {
        bg: "bg-rose-500/10 dark:bg-rose-500/20",
        text: "text-rose-600 dark:text-rose-400",
        border: "border-rose-500/30",
        glow: "hover:shadow-lg hover:shadow-rose-500/10 hover:border-rose-500/40",
        btn: "group-hover:bg-rose-500"
      },
      highlights: ["বায়ার হ্যান্ডলিং সেন্টেন্স", "বাংলা অর্থসহ চ্যাট গাইড"]
    }
  ];

  return (
    <section 
      id="core-modules"
      aria-labelledby="core-modules-heading"
      className="relative py-16 sm:py-24 bg-surface dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden font-body"
    >
      {/* Background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-r from-brand-primary/5 via-brand-secondary/10 to-brand-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Zap className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>আমাদের মূল লার্নিং মডিউলসমূহ</span>
          </div>

          <h2 
            id="core-modules-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-dark dark:text-white tracking-tight leading-tight"
          >
            আপনার প্রয়োজন অনুযায়ী <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-purple-500">
              নির্দিষ্ট বিষয়ে দক্ষতা অর্জন করুন
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-slate-300 font-normal leading-relaxed font-body">
            প্র্যাকটিক্যাল ও সহজ উপায়ে ইংরেজি শেখার জন্য আমাদের মডিউলগুলোকে সাজানো হয়েছে। যেকোনো কার্ডে ক্লিক করে সরাসরি শুরু করুন।
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.id}
                href={mod.path}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-surface dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:-translate-y-2 transition-all duration-300 ${mod.accent.glow}`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${mod.accent.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-6 h-6 ${mod.accent.text}`} aria-hidden="true" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${mod.accent.bg} ${mod.accent.text} ${mod.accent.border}`}>
                      {mod.badge}
                    </span>
                  </div>

                  {/* Module Title */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold font-heading text-brand-dark dark:text-white tracking-tight group-hover:text-brand-primary transition-colors flex items-center gap-1.5">
                      <span>{mod.title}</span>
                    </h3>
                    <span className="text-xs font-semibold text-brand-muted dark:text-slate-400 font-body">
                      ({mod.titleBn})
                    </span>
                  </div>

                  {/* Module Description */}
                  <p className="text-xs sm:text-sm text-brand-muted dark:text-slate-300 leading-relaxed font-normal font-body mb-6 min-h-12">
                    {mod.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-6 border-t border-slate-100 dark:border-slate-800/80 pt-4" aria-label="মডিউল ফিচারের তালিকা">
                    {mod.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${mod.accent.text}`} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link Bottom */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-brand-primary dark:text-purple-400 font-body">
                  <span className="group-hover:underline">লেসন প্র্যাকটিস করুন</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white bg-brand-primary ${mod.accent.btn} transition-all duration-300 group-hover:translate-x-1 shadow-xs`}>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-muted dark:text-slate-400 font-body">
            <Sparkles className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>প্রতিদিন নতুন লেসন এবং কন্টেন্ট আপডেট করা হয়।</span>
          </p>
        </div>

      </div>
    </section>
  );
}