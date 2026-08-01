import React from 'react';
import RegisterForm from '@/components/ui/RegisterForm';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, UserPlus } from 'lucide-react';

export const metadata = {
  title: 'ফ্রি অ্যাকাউন্ট তৈরি করুন | Fluento Speak',
  description: 'Fluento Speak-এ সম্পূর্ণ বিনামূল্যে অ্যাকাউন্ট তৈরি করুন এবং AI-এর সাথে প্র্যাকটিস শুরু করুন।',
};

export default function RegisterPage() {
const highlights = [
  "৫০+ রিয়েল-লাইফ স্পোকেন সিচুয়েশন",
  <><span className="font-sans">১</span>,০০০+ প্র্যাকটিক্যাল ভার্ব ও ভোকাবুলারি</>,
  "স্মার্ট AI অ্যাসিস্ট্যান্টের সাথে প্র্যাকটিস",
  <><span className="font-sans">১</span>০০% সম্পূর্ণ ফ্রি ও নো-হিডেন চার্জ</>
];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-body">
      {/* Background Decorator Blurs */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>

      {/* Main Container  */}
      <div className="max-w-5xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Student Value Banner */}
        <div className="lg:col-span-5 bg-linear-to-br from-brand-primary/10 via-purple-500/10 to-slate-900/5 dark:from-slate-950 dark:to-slate-900 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              <span>নেক্সট-জেন AI লার্নিং</span>
            </div>

            {/* Updated High-Converting Heading */}
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-snug">
              স্মার্ট উপায়ে ইংরেজি শিখুন, ক্যারিয়ারে এগিয়ে থাকুন!
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body">
              কঠিন নিয়ম মুখস্থ না করে প্রতিদিন সহজ উপায়ে চর্চা করুন আমাদের স্মার্ট মডিউলগুলোর সাথে।
            </p>

            {/* Bullet Highlights */}
            <ul className="mt-8 space-y-3.5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Trust Badge - Numbers Fixed to Bangla Numerals for font safety */}
          <div className="mt-10 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-sm shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">১০,০০০+ লার্নার</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">নিয়মিত প্র্যাকটিস করছেন</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
             <UserPlus size={30} /> অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              আপনার সঠিক তথ্য দিয়ে সম্পূর্ণ বিনামূল্যে রেজিস্ট্রেশন সম্পন্ন করুন।
            </p>
          </div>

          {/* Form Component */}
          <RegisterForm />

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
              <span>আপনার তথ্য ১০০% সুরক্ষিত ও গোপন রাখা হবে</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}