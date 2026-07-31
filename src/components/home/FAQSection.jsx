import React from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircleQuestion } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "Fluento Speak কি ব্যবহার করার জন্য সম্পূর্ণ ফ্রি?",
      answer: "হ্যাঁ, একদম ফ্রি! Fluento Speak-এর সমস্ত লার্নিং মডিউল, ভোকাবুলারি লিস্ট, গ্রামার লেসন এবং AI চ্যাট ফিচারটি আপনি কোনো টাকা ছাড়াই বিনামূল্যে ব্যবহার করতে পারবেন।"
    },
    {
      question: "এখানে AI-এর সাথে কীভাবে প্র্যাকটিস করা যাবে?",
      answer: "আমাদের প্ল্যাটফর্মে আপনি Fluento AI-এর সাথে সরাসরি মেসেজে টেক্সট চ্যাট করতে পারবেন। আপনি বাক্য লিখলে AI আপনার ব্যাকরণগত ভুল বা বাক্য গঠনের ভুল সঙ্গে সঙ্গে শুধরে দেবে। (উল্লেখ্য: বর্তমানে স্পিকিং ফিচার চালু নেই!)"
    },
    {
      question: "আমি ইংরেজিতে একদম বিগিনার, আমি কি শুরু করতে পারব?",
      answer: "অবশ্যই! আমাদের মডিউলগুলো এমনভাবে তৈরি করা হয়েছে যেন যেকোনো বিগিনার খুব সহজে শূন্য থেকেই ইংরেজি শেখা শুরু করতে পারেন।"
    },
    {
      question: "প্রতিদিন কতটুকু সময় দেওয়া উচিত?",
      answer: "দ্রুত ভালো ফলাফলের জন্য আমরা প্রতিদিন অন্তত ৪৫ মিনিট থেকে ১ ঘণ্টা সময় দেওয়ার পরামর্শ দিই। প্রতিদিন Vocabulary, Speaking English এবং Grammar সেকশন থেকে অবশ্যই ১টি করে লেসন শেষ করে AI চ্যাটবটে প্র্যাকটিস করলে ৩০ দিনেই আপনার মধ্যে স্পষ্ট পরিবর্তন দেখতে পাবেন।"
    },
    {
      question: "আমি কি মোবাইল দিয়ে এটি ব্যবহার করতে পারব?",
      answer: "হ্যাঁ, Fluento Speak সম্পূর্ণ রেসপন্সিভ। আপনি অ্যান্ড্রয়েড, আইফোন, ট্যাবলেট বা কম্পিউটার—যেকোনো ডিভাইসের ব্রাউজার থেকে খুব সহজেই এটি ব্যবহার করতে পারবেন।"
    },
    {
      question: "ফ্রিল্যান্সিং ইংলিশ সেকশনে কী কী থাকবে?",
      answer: "ফ্রিল্যান্সিং সেকশনে বায়ারের সাথে চ্যাট করার কৌশল, বায়ারের প্রশ্নের রেডিমেড উত্তর এবং ক্লায়েন্ট হ্যান্ডলিংয়ের জন্য প্রয়োজনীয় ইংরেজি শেখানো হবে।"
    }
  ];

  // Schema.org Structured Data for Google SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section 
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-24 bg-surface dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden font-body"
    >
      {/* Google Structured Data / SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Decorator */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-linear-to-r from-brand-primary/5 via-brand-secondary/10 to-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <HelpCircle className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>সাধারণ জিজ্ঞাসাসমূহ</span>
          </div>

          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-dark dark:text-white tracking-tight leading-tight"
          >
            আপনার মনে থাকা <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-purple-500">
              সব প্রশ্নের পরিষ্কার উত্তর
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-slate-300 font-normal leading-relaxed font-body">
            Fluento Speak নিয়ে নতুন লার্নারদের মনে সচরাচর আসা কিছু গুরুত্বপূর্ণ প্রশ্নের উত্তর নিচে দেওয়া হলো।
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group rounded-2xl bg-surface dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all duration-300 shadow-xs hover:border-brand-primary/40 open:border-brand-primary/50 open:shadow-md"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none font-heading font-bold text-base sm:text-lg text-brand-dark dark:text-white group-open:text-brand-primary transition-colors">
                <span className="flex items-center gap-3 pr-4">
                  <MessageCircleQuestion className="w-5 h-5 text-brand-primary shrink-0 opacity-80" aria-hidden="true" />
                  <span>{faq.question}</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-badge dark:bg-slate-800 flex items-center justify-center shrink-0 text-brand-primary transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </div>
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-brand-muted dark:text-slate-300 font-normal leading-relaxed border-t border-slate-100 dark:border-slate-800/60 font-body">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-brand-badge/60 via-purple-50/40 to-transparent dark:from-slate-900 dark:to-slate-900 border border-brand-primary/20 text-center">
          <p className="text-sm sm:text-base text-brand-dark dark:text-slate-200 font-medium font-body flex flex-col sm:flex-row items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-primary shrink-0" aria-hidden="true" />
            <span>অন্য কোনো প্রশ্ন আছে যা এখানে নেই?</span>
            <a 
              href="mailto:support@fluentospeak.com" 
              className="text-brand-primary font-bold underline hover:text-brand-secondary transition-colors"
            >
              আমাদের সাপোর্ট টিমে যোগাযোগ করুন
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}