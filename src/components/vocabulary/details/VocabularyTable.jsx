import React from 'react';

export default function VocabularyTable({ vocabularies }) {
  return (
    <section className="bg-surface rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden p-6 sm:p-8 space-y-6">
      
      {/* Section Title */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-badge flex items-center justify-center text-brand-primary font-black">
            📖
          </div>
          <h2 className="text-xl font-black font-heading text-brand-dark">
            ভোকাবুলারি মাস্টারনোট ({vocabularies.length} টি)
          </h2>
        </div>
        <span className="hidden sm:inline-block text-xs font-bold text-brand-muted bg-slate-100 px-3 py-1 rounded-full">
          বাংলা অর্থ ও উদাহরণসহ
        </span>
      </div>

      {/* (Wide Screen Optimized) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-xs font-black text-brand-muted uppercase tracking-wider px-4">
              <th className="pb-2 pl-4">English Word</th>
              <th className="pb-2">বাংলা অর্থ</th>
              <th className="pb-2 pr-4">Example Sentence</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {vocabularies.map((item) => (
              <tr 
                key={item.id} 
                className="bg-slate-50/70 hover:bg-brand-badge/40 transition-colors rounded-2xl group"
              >
                <td className="py-4 pl-4 rounded-l-2xl font-black text-brand-dark text-base">
                  <span className="flex items-center gap-2">
                    {item.word}
                  </span>
                </td>
                <td className="py-4 font-bold text-brand-primary text-base">
                  {item.meaning}
                </td>
                <td className="py-4 pr-4 rounded-r-2xl text-slate-600 font-body">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-2xs group-hover:border-brand-secondary/30 transition-colors">
                    {item.example}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout for Best Mobile Readability */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {vocabularies.map((item) => (
          <div 
            key={item.id} 
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-black text-brand-dark">{item.word}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-badge text-brand-primary text-xs font-extrabold">
                {item.meaning}
              </span>
            </div>
            <p className="text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-100 font-medium">
              <span className="font-bold text-brand-primary">Example:</span> {item.example}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}