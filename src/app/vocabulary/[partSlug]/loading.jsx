import React from 'react';

export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8 animate-pulse">
      <div className="h-8 bg-slate-200 rounded-full w-48 mx-auto" />
      <div className="h-12 bg-slate-200 rounded-2xl w-3/4 mx-auto" />
      <div className="space-y-6 pt-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-40 bg-slate-200 rounded-3xl w-full" />
        ))}
      </div>
    </div>
  );
}