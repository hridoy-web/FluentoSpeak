import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';

export default function Logo({ className = '' }) {
  return (
    <Link
      href="/"
      aria-label="Fluento Speak - Homepage"
      className={`group inline-flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl transition-all ${className}`}
    >
      {/* Bot Icon with Electric Violet Gradient */}
      <div className="relative flex items-center justify-center size-10 rounded-2xl bg-linear-to-r from-brand-primary to-brand-secondary text-white shadow-md shadow-brand-primary/25 group-hover:shadow-lg group-hover:shadow-brand-secondary/30 group-hover:scale-105 transition-all duration-300">
        <BotMessageSquare className="size-5 transition-transform duration-300 group-hover:scale-110" />

        {/* Soft Light Badge Indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
          <span className="animate-ping absolute inline-flex size-full rounded-full bg-brand-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full size-2.5 bg-brand-badge"></span>
        </span>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className="font-heading font-extrabold text-xl tracking-tight text-brand-dark">
            Fluento
          </span>
          <span className="font-heading font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary">
            Speak
          </span>
        </div>
        
        <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-muted mt-0.5 group-hover:text-brand-primary transition-colors">
          Next-Gen AI Learning
        </span>
      </div>
    </Link>
  );
}