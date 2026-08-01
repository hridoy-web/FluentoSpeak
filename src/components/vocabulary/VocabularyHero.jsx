'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Flame } from 'lucide-react';

export default function VocabularyHero() {
  return (
    <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
      
      {/* Dynamic Hook Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-badge border border-brand-secondary/30 text-brand-primary text-xs sm:text-sm font-extrabold tracking-wide shadow-xs">
        <Flame className="w-4 h-4 text-brand-primary fill-brand-primary shrink-0" />
        <span>শব্দ জানা সত্ত্বেও বাক্য তৈরি করতে আটকে যাচ্ছেন?</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-black font-heading text-brand-dark leading-tight tracking-tight">
        Vocabulary Roadmap <br />
        <span className="bg-linear-to-r from-brand-primary via-brand-secondary to-indigo-600 bg-clip-text text-transparent text-2xl sm:text-4xl">
          ৩টি ধাপে সহজে বাক্য তৈরির কৌশল
        </span>
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-base text-brand-muted font-body leading-relaxed max-w-2xl mx-auto pt-1">
        অগোছালো হাজার হাজার শব্দ পড়ার দরকার নেই। স্পোকেন ইংলিশের জন্য প্রয়োজনীয় শব্দগুলোকে ৩টি পারফেক্ট ধাপে সাজানো হয়েছে, যা আপনাকে নিজে নিজে সঠিক ইংরেজি বাক্য তৈরি করতে সাহায্য করবে।
      </p>

      {/* Indicators */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-700">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
          ১০০% সেন্টেন্স মেকিং ভিত্তিক
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-4.5 h-4.5 text-brand-secondary shrink-0" />
          রিয়েল-লাইফ ইউসেজ ফোকাসড
        </span>
      </div>

    </section>
  );
}