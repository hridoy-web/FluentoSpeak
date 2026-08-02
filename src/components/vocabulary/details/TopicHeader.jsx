import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, BookOpenCheck } from 'lucide-react';

export default function TopicHeader({ partSlug, topicTitle, headline, learningGuide }) {
  return (
    <header className="space-y-6">
      {/* Breadcrumbs for SEO & Accessibility */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-brand-muted">
        <Link href="/vocabulary" className="hover:text-brand-primary transition-colors">Vocabulary</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href={`/vocabulary/${partSlug}`} className="hover:text-brand-primary transition-colors capitalize">
          {partSlug.replace('-', ' ')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-brand-dark font-bold truncate max-w-50 sm:max-w-none">{topicTitle}</span>
      </nav>

      {/* Main Title Card */}
      <div className="relative overflow-hidden rounded-3xl bg-surface border border-slate-200/80 p-6 sm:p-10 shadow-xs space-y-4">
        {/* Accent Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-badge text-brand-primary text-xs font-black tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Masterclass</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black font-heading text-brand-dark leading-tight tracking-tight">
          {headline}
        </h1>

        <div className="flex gap-3 items-start pt-2 border-t border-slate-100">
          <BookOpenCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-brand-muted font-medium leading-relaxed">
            {learningGuide}
          </p>
        </div>
      </div>
    </header>
  );
}