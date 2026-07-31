import React from 'react';
import { 
  UserCheck, 
  BookOpenCheck, 
  MessageSquareCode, 
  Flame, 
  Clock, 
  Target,
  ArrowRight,
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: UserCheck,
      title: "অ্যাকাউন্ট রেজিস্ট্রেশন ও লক্ষ্য নির্ধারণ",
      description: "Fluento-তে আপনার ফ্রি অ্যাকাউন্টটি তৈরি করে নিন। প্রথম দিন থেকেই আপনার দৈনন্দিন লার্নিং প্রোগ্রেস ও স্ট্রিক (Streak) ট্র্যাকিং শুরু করার এটিই প্রথম ধাপ।",
      badge: "ধাপ ০১",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      target: "সময়: ২ মিনিট"
    },
    {
      id: "02",
      icon: BookOpenCheck,
      title: "ডেইলি ৩-ইন-১ লেসন ও কুইজ সেশন",
      description: "আমাদের মডিউল থেকে প্রতিদিন Vocabulary, Speaking English এবং Grammar-এর ১টি করে লেসন শেষ করুন এবং কুইজে অংশ নিন। ৩টি পার্ট একসাথে চর্চা করলে জড়তা কেটে যাবে।",
      badge: "ধাপ ০২: মূল লার্নিং",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      featured: true,
      target: "সময়: ৩০ - ৪৫ মিনিট"
    },
    {
      id: "03",
      icon: MessageSquareCode,
      title: "Fluento AI চ্যাটবটে রিয়েল প্র্যাকটিস",
      description: "লেসন শেষে যা শিখলেন, তা সরাসরি Fluento AI-এর চ্যাটবক্সে লিখে টেক্সট মেসেজের মাধ্যমে প্র্যাকটিস করুন। AI সাথে সাথেই আপনার ভুল ব্যাকরণ ও বাক্য গঠন শুধরে দেবে।",
      badge: "ধাপ ০৩: চ্যাট প্র্যাকটিস",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      target: "সময়: ১৫ মিনিট"
    }
  ];

  return (
    <section 
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative py-16 sm:py-24 bg-surface dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden font-body"
    >
      {/* Subtle Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-linear-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Flame className="w-4 h-4 text-brand-primary shrink-0 animate-bounce" aria-hidden="true" />
            <span>সফলতার জন্য ডিসিপ্লিন জরুরি</span>
          </div>
          
          <h2 
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-dark dark:text-white tracking-tight leading-tight"
          >
            কীভাবে পরিশ্রম করলে <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-purple-500">
              ৩০ দিনে সত্যি Fluency আসবে?
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-slate-300 font-normal leading-relaxed font-body">
            ইংরেজি শেখায় কোনো অলৌকিক জাদু নেই! সাবলীলভাবে কথা বলতে চাইলে আমাদের সাজানো মডিউল মেনে প্রতিদিন এই ৩টি ধাপে ধারাবাহিক ও ফোকাসড অনুশীলন করতে হবে।
          </p>
        </div>

        {/*  Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-5 rounded-2xl bg-linear-to-r from-brand-badge/80 via-purple-50/60 to-amber-50/60 dark:from-slate-900 dark:via-purple-950/40 dark:to-slate-900 border border-brand-primary/25 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-brand-primary text-white rounded-xl shrink-0 shadow-md shadow-brand-primary/20">
              <Clock className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold font-heading text-brand-dark dark:text-white flex items-center gap-2">
                <span>দৈনিক ৪৫ মিনিট থেকে ১ ঘণ্টার অনুশীলনের মাইন্ডসেট রাখুন</span>
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted dark:text-slate-300 leading-relaxed font-body">
                প্রতিদিন <strong className="text-brand-primary dark:text-purple-400 font-semibold">Vocabulary, Speaking English</strong> এবং <strong className="text-brand-primary dark:text-purple-400 font-semibold">Grammar</strong> সেকশন থেকে অবশ্যই ১টি করে লেসন কমপ্লিট করুন, <span className="underline decoration-brand-secondary/40 decoration-2">কুইজে অংশ নিন</span> এবং AI চ্যাটবটে লিখে অনুশীলনের অভ্যাস বজায় রাখুন।
              </p>
            </div>
          </div>
        </div>

        {/* 3 Steps Cards Grid */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.id} className="h-full">
                <div 
                  className={`relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-surface dark:bg-slate-900 border transition-all duration-300 hover:-translate-y-1.5 ${
                    step.featured 
                      ? 'border-brand-primary/50 shadow-xl shadow-brand-primary/10 dark:border-brand-primary/40 ring-1 ring-brand-primary/20' 
                      : 'border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-100 dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Card Top: Step Badge & Clean Numbering */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold tracking-wide font-body ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-300 dark:text-slate-700 font-heading select-none">
                        #{step.id}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white mb-6 shadow-md shadow-brand-primary/20 shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-dark dark:text-white mb-3 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-brand-muted dark:text-slate-300 leading-relaxed font-normal font-body">
                      {step.description}
                    </p>
                  </div>

                  {/* Card Bottom: Target Time Label */}
                  <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold font-body">
                    <span className="text-brand-muted dark:text-slate-400 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
                      {step.target}
                    </span>
                    <a 
                      href="/register" 
                      className="text-brand-primary flex items-center gap-1 hover:underline transition-all"
                    >
                      <span>শুরু করুন</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}