'use client';

import React from 'react';
import RoadmapPath from './RoadmapPath';
import TopicCard from './TopicCard';
import { Rocket, Compass, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopicList({ topics, partSlug }) {
  return (
    <section className="relative max-w-4xl mx-auto px-4 py-12 overflow-hidden">
      
      {/* Top Starter Badge */}
      <div className="relative z-20 flex justify-center mb-8">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-black text-xs shadow-lg shadow-purple-200 border border-purple-300/40"
        >
          <Compass className="w-4 h-4 text-yellow-300 animate-spin-slow" />
          <span>আপনি যদি কিছু না জানেন, এইখান থেকে শুরু করুন 👇</span>
        </motion.div>
      </div>

      {/* Dynamic Smooth S-Curved Snake Path */}
      <RoadmapPath totalItems={topics.length} />

      {/* Cards Render */}
      <div className="relative z-10 flex flex-col items-center">
        {topics.map((topic, index) => (
          <TopicCard
            key={topic._id || index}
            topic={topic}
            index={index}
            partSlug={partSlug}
          />
        ))}
      </div>

      {/* Bottom Ending Notice Box */}
      <div className="relative z-20 mt-16 max-w-md mx-auto text-center">
        <div className="p-6 rounded-3xl bg-linear-to-b from-purple-50/80 to-indigo-50/80 border border-purple-200/80 shadow-sm backdrop-blur-xs space-y-3">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-white border border-purple-200 shadow-xs flex items-center justify-center text-purple-600">
            <Rocket className="w-6 h-6" />
          </div>
          <h4 className="text-base font-black text-slate-800 font-heading">
            এখানেই শেষ নয়!
          </h4>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            যা শিখেছেন নিয়মিত প্র্যাকটিস করতে থাকুন। খুব শীঘ্রই আপনার জন্য আরও অ্যাডভান্সড লেসন ও এক্সসারসাইজ নিয়ে আসাবো! 🔥
          </p>
          <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] font-bold text-purple-700">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>নতুন মডিউল প্রতিনিয়ত আপডেট করা হচ্ছে</span>
          </div>
        </div>
      </div>

    </section>
  );
}