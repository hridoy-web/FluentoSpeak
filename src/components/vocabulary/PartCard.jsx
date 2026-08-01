'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';

export default function PartCard({ data }) {
  return (
    <article className="bg-surface rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl hover:border-brand-primary/50 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Card Top Banner / Image */}
        <div className="relative w-full h-44 sm:h-48 bg-slate-100 overflow-hidden">
          {data.thumbnail ? (
            <Image
              src={data.thumbnail}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-purple-50 via-slate-100 to-brand-badge/40 flex flex-col items-center justify-center gap-2 p-4 text-center">
              <span className="text-brand-primary font-heading font-black text-lg tracking-wider opacity-80">
                {data.partBadge}
              </span>
              <span className="text-[11px] font-semibold text-brand-muted">
                [ ভিজ্যুয়াল আর্টওয়ার্ক ছবি ]
              </span>
            </div>
          )}

          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-surface/95 shadow-xs ${data.badgeBg}`}>
              {data.partBadge}
            </span>
          </div>
        </div>

        {/* Card Content Section */}
        <div className="p-5 sm:p-6 space-y-4">
          
          <h2 className="text-xl font-black font-heading text-brand-dark leading-snug group-hover:text-brand-primary transition-colors">
            {data.title}
          </h2>

          <div className="p-3.5 rounded-2xl bg-brand-badge/30 border border-brand-secondary/20 space-y-1">
            <p className="text-[11px] font-extrabold text-brand-primary flex items-center gap-1.5 uppercase tracking-wide">
              <Lightbulb className="w-3.5 h-3.5 shrink-0" />
              {data.whyNeedTitle}
            </p>
            <p className="text-xs text-brand-muted leading-relaxed font-body">
              {data.whyNeedDesc}
            </p>
          </div>

          {/*  Topics List */}
          <div className="space-y-3 pt-1">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-muted">
              🎯 প্রধান টপিকসমূহ:
            </p>
            <ul className="space-y-2.5">
              {data.importantTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    {/* Top Line */}
                    <p className="text-xs font-bold text-brand-dark leading-snug">
                      {topic.title}
                    </p>
                    {/* Bottom Line: Bangla */}
                    <p className="text-[11px] font-medium text-slate-500 leading-tight">
                       ( {topic.purpose} )
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Card Footer Action */}
      <div className="p-5 sm:p-6 pt-0 space-y-3">
        <div className="flex items-center justify-between text-xs text-brand-muted font-semibold px-1">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-brand-primary" />
            মোট {data.totalTopics} টি সাব-ক্যাটাগরি
          </span>
        </div>

        <Link
          href={`/vocabulary/${data.slug}`}
          className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-heading font-bold text-xs sm:text-sm shadow-md active:scale-[0.98] transition-all duration-200 ${data.buttonBg}`}
        >
          <span>{data.buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </article>
  );
}