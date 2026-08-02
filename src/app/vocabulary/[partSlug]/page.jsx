import React from 'react';
import { ShieldCheck, Compass, Target } from 'lucide-react';
import { grammarVocabularyMock } from '@/config/grammarVocabularyMock';
import ServerErrorBox from '@/components/ui/ServerErrorBox';
import TopicList from '@/components/vocabulary/roadmap/TopicList';

// Safe Fetch Function 
async function getRoadmapData(slug) {
  try {
    if (process.env.NEXT_PUBLIC_API_URL) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vocabulary/${slug}`, {
        next: { revalidate: 3600 }
      });
      if (res.ok) return await res.json();
    }
    // Fallback 
    return slug === 'grammar-vocabulary' ? grammarVocabularyMock : null;
  } catch (error) {
    console.error("Connection Error:", error);
    return slug === 'grammar-vocabulary' ? grammarVocabularyMock : null;
  }
}

export async function generateMetadata({ params }) {
  const { partSlug } = await params;
  const roadmap = await getRoadmapData(partSlug);

  if (!roadmap) {
    return { title: 'Roadmap Not Found - FluentoSpeak' };
  }

  return {
    title: `${roadmap.title} | Spoken English Vocabulary Roadmap`,
    description: roadmap.subtitle || roadmap.description,
  };
}

export default async function GrammarVocabularyPage({ params }) {
  const { partSlug } = await params;
  const roadmapData = await getRoadmapData(partSlug);

  // Connection/Data failure state
  if (!roadmapData) {
    return <ServerErrorBox />;
  }

  return (
    <main className="min-h-screen py-10 space-y-10 bg-background text-brand-dark">
      
      {/*  Hero Section */}
      <header className="max-w-4xl mx-auto text-center px-4 space-y-5">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-badge border border-brand-secondary/30 text-brand-primary text-xs font-black tracking-wide">
          <Compass className="w-4 h-4" />
          <span>স্টেপ-বাই-স্টেপ লার্নিং গাইড</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black font-heading text-brand-dark leading-tight tracking-tight">
          {roadmapData.title}
        </h1>

        <p className="text-sm sm:text-lg font-bold text-brand-primary max-w-2xl mx-auto">
          {roadmapData.subtitle}
        </p>

        {/*  Explanation Box */}
        <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-slate-200/90 shadow-xs max-w-3xl mx-auto text-left space-y-3">
          <div className="flex items-center gap-2 text-brand-dark font-black text-sm font-heading">
            <Target className="w-5 h-5 text-brand-primary shrink-0" />
            <span>কেন এই ৩টি ধাপে শেখা জরুরি এবং কীভাবে কাজ করবে?</span>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-body">
            {roadmapData.whyStepByStep}
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700 border-t border-slate-100">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <ShieldCheck className="w-4 h-4" />
              ১০০% প্র্যাকটিক্যাল সেন্টেন্স মেকিং
            </span>
            <span className="flex items-center gap-1.5 text-brand-primary">
              ⚡ দ্রুত আত্মবিশ্বাস অর্জন
            </span>
          </div>
        </div>

      </header>

      {/* Snake Roadmap Section */}
      <TopicList topics={roadmapData.topics || []} partSlug={partSlug} />

    </main>
  );
}