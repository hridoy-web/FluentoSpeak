import React from 'react';
import { Star, Quote, CheckCircle, Users, Award, Sparkles, MessageCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "তানজিল আহমেদ",
      role: "ফাইভার ফ্রিল্যান্সার (Web Developer)",
      avatarText: "TA",
      rating: 5,
      review: "ফাইভারের বায়ারদের ক্লায়েন্ট মেসেজের রিপ্লাই দেওয়া নিয়ে খুব চিন্তায় থাকতাম। Fluento-র 'Freelancing English' মডিউলের রেডিমেড চ্যাট গাইডগুলো ব্যবহার করার পর এখন অনেক আত্মবিশ্বাসের সাথে বায়ার হ্যান্ডেল করতে পারছি।",
      tag: "Freelancing Module"
    },
    {
      id: 2,
      name: "ফারজানা আক্তার",
      role: "বিশ্ববিদ্যালয় শিক্ষার্থী",
      avatarText: "FA",
      rating: 5,
      review: "ইংরেজি গ্রামারের কঠিন কঠিন রুলস মুখস্থ করতে ভালো লাগতো না। এখানকার 'Easy Applied Grammar' পড়ে বুঝেছি যে কথা বলার জন্য গ্রামার কত সহজে শেখা যায়। AI চ্যাট ফিচারটি প্র্যাকটিসের জন্য জাস্ট অসাধারণ!",
      tag: "Applied Grammar"
    },
    {
      id: 3,
      name: "রাকিবুল ইসলাম",
      role: "জব সিঙ্কার",
      avatarText: "RI",
      rating: 5,
      review: "ভোকাবুলারি মনে রাখা আমার জন্য সবসময় কঠিন ছিল। কিন্তু প্রতিদিন ১০-১৫ মিনিট 'Smart Vocabulary' সেকশন থেকে শব্দার্থ শেখার পর সেন্টেন্স মেকিং অনেক সহজ হয়ে গেছে। সম্পূর্ণ ফ্রি হওয়ায় সত্যি দারুণ একটা প্ল্যাটফর্ম!",
      tag: "Smart Vocabulary"
    }
  ];

  // Schema.org JSON-LD for SEO Google Review Snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((rev, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": rev.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": rev.rating,
          "bestRating": "5"
        },
        "reviewBody": rev.review
      }
    }))
  };

  return (
    <section 
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-16 sm:py-24 bg-surface dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden font-body"
    >
      {/* Google SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Background Decorator Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-linear-to-r from-brand-primary/5 via-brand-secondary/10 to-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Quote className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>স্টুডেন্টদের অভিজ্ঞতা</span>
          </div>

          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-dark dark:text-white tracking-tight leading-tight"
          >
            আমাদের লার্নাররা <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-purple-500">
              কীভাবে উপকৃত হচ্ছেন?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-slate-300 font-normal leading-relaxed font-body">
            শিক্ষার্থী ও ফ্রিল্যান্সাররা কীভাবে প্র্যাকটিক্যালি ইংরেজি শিখে তাদের ক্যারিয়ারে পরিবর্তন আনছেন, তা জেনে নিন।
          </p>
        </div>

        {/* Social Proof Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-black font-heading text-brand-primary dark:text-purple-400">
              <Users className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>১০,০০০+</span>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted dark:text-slate-400 font-medium mt-1">সক্রিয় লার্নার</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-black font-heading text-emerald-600 dark:text-emerald-400">
              <Award className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>১০০%</span>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted dark:text-slate-400 font-medium mt-1">ফ্রি লার্নিং অ্যাকসেস</p>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-black font-heading text-amber-500">
              <MessageCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>৪.৯/৫</span>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted dark:text-slate-400 font-medium mt-1">ইউজার স্যাটিসফ্যাকশন</p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-surface dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    {item.tag}
                  </span>
                  
                  {/* Rating Stars with Accessibility */}
                  <div className="flex items-center gap-1" aria-label={`রেটিং ${item.rating} আউট অব ৫`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                {/* Review Message */}
                <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed font-body mb-6">
                  {item.review}
                </blockquote>
              </div>

              {/* Reviewer Bio */}
              <figcaption className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                {/* Avatar Placeholder / Avatar Initials */}
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-brand-primary to-purple-600 text-white font-bold font-heading text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {item.avatarText}
                </div>

                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold font-heading text-sm text-brand-dark dark:text-white truncate">
                      {item.name}
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" title="Verified Learner" aria-label="ভেরিফাইড লার্নার" />
                  </div>
                  <p className="text-xs text-brand-muted dark:text-slate-400 font-body truncate">
                    {item.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-muted dark:text-slate-400 font-body">
            <Sparkles className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>আজই শুরু করুন এবং আপনার ইংরেজি শেখার যাত্রা সহজ করুন।</span>
          </p>
        </div>

      </div>
    </section>
  );
}