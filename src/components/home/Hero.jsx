import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  PlayCircle, 
  Star, 
  MessageSquare, 
  Zap,
  CalendarDays,
  BotMessageSquare
} from 'lucide-react';

export default function Hero() {
  return (
    <section 
      aria-label="Hero Section"
      className="relative overflow-hidden bg-background pt-10 pb-20 lg:pb-28 border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-125 h-125 bg-linear-to-r from-brand-primary/15 to-brand-secondary/20 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <CalendarDays className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
              <span>30-Day Spoken English Challenge</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-brand-dark dark:text-white tracking-tight leading-[1.12] mb-6">
              গ্রামারের ভয় কাটিয়ে <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-purple-400">
                ৩০ দিনে Fluency নিয়ে
              </span> ইংরেজিতে কথা বলুন!
            </h1>

            <p className="text-base sm:text-lg text-brand-muted dark:text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              গ্রামারের জটিল নিয়ম ছাড়াই আমাদের ৩০ দিনের গাইডেড মডিউল এবং Fluento AI-এর সাথে প্র্যাকটিস করে ইংরেজি বলার জড়তা দূর করুন সহজে।
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/roadmap"
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-brand-primary to-brand-secondary hover:opacity-95 text-white font-bold text-base rounded-2xl shadow-lg shadow-brand-primary/25 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>৩০ দিনের চ্যালেঞ্জ শুরু করুন</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-7 py-4 bg-surface dark:bg-slate-800 text-brand-dark dark:text-slate-100 font-semibold text-base rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <PlayCircle className="w-5 h-5 text-brand-primary shrink-0" aria-hidden="true" />
                <span>কীভাবে কাজ করে</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-brand-muted dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shrink-0">A</div>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shrink-0">R</div>
                  <div className="w-8 h-8 rounded-full bg-brand-primary border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
                </div>
                <span className="font-semibold text-brand-dark dark:text-slate-200">৫,০০০+ লার্নার্স অনুশীলনে আছেন</span>
              </div>

              <div className="flex items-center gap-1.5" aria-label="Rating 4.9 out of 5 stars">
                <div className="flex text-amber-400" aria-hidden="true">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="font-semibold text-brand-dark dark:text-slate-200">৪.৯/৫ রেটিং</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            
            <div className="relative w-full max-w-md bg-surface dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-brand-primary/10">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-primary">Day 04: Interview Practice</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-badge rounded-lg text-[11px] font-semibold text-brand-primary">
                  <Zap className="w-3 h-3" aria-hidden="true" />
                  <span>Fluento AI</span>
                </div>
              </div>

              <div className="py-5 space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-linear-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white shrink-0 shadow-sm font-bold text-xs select-none">
                    <BotMessageSquare size={18}/>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800/80 p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm text-brand-dark dark:text-slate-200 leading-relaxed max-w-[85%]">
                    How long have you been looking for a job?
                  </div>
                </div>

                <div className="flex items-start justify-end gap-3 pt-1">
                  <div className="bg-linear-to-r from-brand-primary to-brand-secondary text-white p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed max-w-[85%] shadow-sm">
                    I am searching a job for last two months.
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <div className="w-9 h-9 rounded-2xl bg-linear-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white shrink-0 shadow-sm font-bold text-xs select-none">
                    <BotMessageSquare size={18}/>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800/80 p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm text-brand-dark dark:text-slate-200 leading-relaxed max-w-[85%] space-y-1.5">
                    <p>Great try! 👍</p>
                    <p>তবে <i>searching <b>for</b> a job</i> বললে বাক্যটি আরও সঠিক হবে। Keep it up!</p>
                  </div>
                </div>

              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-brand-muted">
                <span className="flex items-center gap-2 truncate">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-primary shrink-0" aria-hidden="true" />
                  <span className="truncate">Type your practice response...</span>
                </span>
                <span className="bg-brand-primary text-white text-[10px] px-2.5 py-1 rounded-lg font-bold shrink-0 ml-2">Send</span>
              </div>

            </div>

            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-surface dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-xl items-center gap-3 animate-bounce [animation-duration:3s]">
              <div className="p-2 rounded-xl bg-brand-badge text-brand-primary shrink-0">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-brand-dark dark:text-white">Daily Guided Practice</p>
                <p className="text-[10px] text-brand-muted">প্রতিদিনের সুনির্দিষ্ট টাস্ক</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}