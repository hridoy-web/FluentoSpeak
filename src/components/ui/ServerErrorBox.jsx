'use client';

import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';

export default function ServerErrorBox({ onRetry }) {
  return (
    <div className="max-w-md mx-auto my-12 p-8 text-center bg-surface rounded-3xl border border-slate-200 shadow-xl space-y-4">
      <div className="w-16 h-16 mx-auto rounded-full bg-red-50 text-red-500 flex items-center justify-center">
        <WifiOff className="w-8 h-8" />
      </div>
      
      <div className="space-y-1.5">
        <h3 className="text-lg font-black font-heading text-brand-dark">
          সার্ভার কানেকশন সাময়িকভাবে বিচ্ছিন্ন!
        </h3>
        <p className="text-xs text-brand-muted font-body leading-relaxed">
          আপনার ইন্টারনেট বা আমাদের নেটওয়ার্কে সামান্য সমস্যা হয়েছে। পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।
        </p>
      </div>

      <button
        onClick={onRetry || (() => window.location.reload())}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-purple-900 transition-colors shadow-md active:scale-95 cursor-pointer"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>পুনরায় চেষ্টা করুন</span>
      </button>
    </div>
  );
}