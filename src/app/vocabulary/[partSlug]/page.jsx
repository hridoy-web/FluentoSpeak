// src/app/vocabulary/[partSlug]/page.jsx

import React from 'react';

import TopicList from '@/components/vocabulary/roadmap/TopicList';
import { notFound } from 'next/navigation';
import { getRoadmapBySlug } from '@/lib/apiActions/vocabulary';
import { Compass, Target } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { partSlug } = await params;
  const roadmap = await getRoadmapBySlug(partSlug);

  if (!roadmap) {
    return { title: 'Roadmap Not Found - FluentoSpeak' };
  }

  return {
    title: `${roadmap.title} | FluentoSpeak Roadmap`,
    description: roadmap.subtitle || roadmap.whyStepByStep?.slice(0, 160),
  };
}

export default async function DynamicRoadmapPage({ params }) {
  const { partSlug } = await params;
  const roadmapData = await getRoadmapBySlug(partSlug);

  if (!roadmapData) {
    return notFound();
  }

  return (
    <main className="min-h-screen py-10 space-y-10 bg-background text-brand-dark">
      <header className="max-w-4xl mx-auto text-center px-4 space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-badge border border-brand-secondary/30 text-brand-primary text-xs font-black tracking-wide">
          <Compass className="w-4 h-4" />
          <span>{roadmapData.partBadge || "স্টেপ-বাই-স্টেপ লার্নিং গাইড"}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-heading text-brand-dark leading-tight tracking-tight">
          {roadmapData.title}
        </h1>

        <p className="text-sm sm:text-lg font-bold text-brand-primary max-w-2xl mx-auto">
          {roadmapData.subtitle}
        </p>

        <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-slate-200/90 shadow-xs max-w-3xl mx-auto text-left space-y-3">
          <div className="flex items-center gap-2 text-brand-dark font-black text-sm font-heading">
            <Target className="w-5 h-5 text-brand-primary shrink-0" />
            <span>কেন এই ধাপে শিখবেন এবং কীভাবে কাজ করবে?</span>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-body">
            {roadmapData.whyStepByStep}
          </p>
        </div>
      </header>

      {/* Snake Roadmap Section */}
      <TopicList topics={roadmapData.topics || []} partSlug={partSlug} />
    </main>
  );
}