'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  if (isSubscribed) {
    return (
      <div 
        role="status" 
        className="flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 p-3 rounded-xl animate-in fade-in duration-300"
      >
        <CheckCircle className="size-4 shrink-0 text-emerald-400" />
        <span>Thanks for subscribing! Check your inbox soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2.5 text-sm bg-slate-800/80 border border-slate-700/80 rounded-xl text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
      />
      
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="px-4 py-2.5 bg-linear-to-r from-brand-primary to-brand-secondary hover:opacity-95 text-white rounded-xl font-medium text-sm transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-md shadow-brand-primary/20 active:scale-95"
      >
        <Send className="size-4" />
      </button>
    </form>
  );
}