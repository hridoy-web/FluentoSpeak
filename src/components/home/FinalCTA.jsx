import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCTA() {
  const benefits = [
    "সম্পূর্ণ বিনামূল্যে অ্যাকাউন্ট খুলুন",
    "Fluento AI-এর সাথে চ্যাট প্র্যাকটিস করুন",
    "সবগুলো মডিউলে ইনস্ট্যান্ট ফ্রি অ্যাকসেস"
  ];

  return (
    <section 
      id="get-started-cta"
      aria-labelledby="cta-heading"
      className="relative py-16 sm:py-24 bg-surface dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden font-body"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main CTA Card Box */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          
          {/* Background Gradient Blurs */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-linear-to-r from-brand-primary/30 via-purple-600/20 to-brand-secondary/30 blur-3xl pointer-events-none opacity-60"
          ></div>
          
          {/* Background Decorative Rings */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/5 pointer-events-none"
          ></div>
          <div 
            aria-hidden="true" 
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/5 pointer-events-none"
          ></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs sm:text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>আজই আপনার ইংরেজি শেখার যাত্রা শুরু করুন</span>
            </div>

            {/* Headline */}
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight"
            >
              আজই প্র্যাকটিস শুরু করুন, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-purple-200 to-pink-300">
                ইংরেজি বলায় আনুন আত্মবিশ্বাস!
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-body max-w-2xl mx-auto">
              কোনো প্রকার সাবস্ক্রিপশন ফি ছাড়াই ফ্রি অ্যাকাউন্ট তৈরি করে এখনই AI চ্যাটবট ও প্র্যাকটিক্যাল লার্নিং মডিউলগুলো ব্যবহার করা শুরু করুন।
            </p>

            {/* Bullet Highlights */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-brand-primary to-purple-600 hover:from-purple-600 hover:to-brand-primary text-white font-heading font-bold text-base shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>ফ্রি অ্যাকাউন্ট তৈরি করুন</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/speaking-english"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-base border border-white/15 transition-colors duration-300"
              >
                <span>লেসনসমূহ দেখুন</span>
              </Link>
            </div>

            {/* Trust Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>কোনো হিডেন চার্জ নেই</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}