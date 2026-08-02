'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Play, } from 'lucide-react';

export default function TopicCard({ topic, index, partSlug }) {
  const isRight = index % 2 === 0;

  const levelMeta = [
    { label: 'Beginner • সবচেয়ে গুরুত্বপূর্ণ', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { label: 'Basic • কথা বলার মূল ভিত্তি', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { label: 'Intermediate • বাক্য গঠনের ট্রিকস', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { label: 'Advanced • ফ্রি-হ্যান্ড স্পিকিং', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  ];

  const currentMeta = levelMeta[index % levelMeta.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="relative flex items-center justify-center w-full my-8 md:my-12 z-10"
    >
      {/* Circle Badge */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-11 h-11 rounded-full bg-white border-[3px] border-purple-600 text-purple-700 font-black text-sm flex items-center justify-center shadow-md ring-4 ring-purple-100">
          {index + 1}
        </div>

        <span className={`hidden md:inline-block absolute top-12 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-bold border shadow-2xs ${currentMeta.color}`}>
          {currentMeta.label}
        </span>
      </div>

      {/* Card Body Container */}
      <div
        className={`w-full md:w-105 pl-16 md:pl-0 ${
          isRight ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
        }`}
      >
        <article className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 overflow-hidden group">
          
          {/* Banner Box */}
          <div className="relative w-full aspect-video bg-slate-50 overflow-hidden max-h-32 border-b border-slate-100">
            {topic.image ? (
              <Image
                src={topic.image}
                alt={topic.title}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-purple-50 via-slate-50 to-indigo-50 flex flex-col items-center justify-center p-3 text-center">
                <Sparkles className="w-4 h-4 text-purple-600 mb-1" />
                <span className="text-[11px] font-black text-purple-700 tracking-wider uppercase">
                  Step 0{index + 1} Module
                </span>
              </div>
            )}

            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/90 text-purple-800 border border-purple-100 shadow-2xs backdrop-blur-xs">
                <BookOpen className="w-3 h-3 text-purple-600" />
                {topic.lessonCount || 0} টি লেসন
              </span>
            </div>
          </div>

          {/* Card Description Content */}
          <div className="p-4 space-y-2">
            <div>
              <h3 className="text-base font-black font-heading text-slate-800 group-hover:text-purple-700 transition-colors">
                {topic.title}
              </h3>
              <p className="text-[11px] font-bold text-purple-600 mt-0.5">
                👉 {topic.purpose}
              </p>
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
              {topic.description}
            </p>

            {topic.highlights && topic.highlights.length > 0 && (
              <div className="pt-2 border-t border-slate-100 space-y-1">
                {topic.highlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/*  Glowing Button */}
          <div className="p-4 pt-0">
            <Link
              href={`/vocabulary/${partSlug}/${topic.slug}`}
              className="relative overflow-hidden w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl font-heading font-black text-xs text-white bg-linear-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-purple-200 active:scale-[0.98] transition-all duration-200 group/btn"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              
              <span className="flex items-center gap-2 z-10">
                <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white translate-x-0.5" />
                </span>
                প্র্যাকটিস শুরু করুন
              </span>

              <ArrowRight className="w-4 h-4 z-10 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

        </article>
      </div>
    </motion.div>
  );
}