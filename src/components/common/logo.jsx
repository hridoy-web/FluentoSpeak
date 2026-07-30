import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';

export default function Logo({ className = '', variant = 'auto' }) {
  
  const getFluentoColor = () => {
    if (variant === 'dark') return 'text-white';
    if (variant === 'light') return 'text-brand-dark';
    return 'text-brand-dark dark:text-white'; // auto
  };

  const getSubtitleColor = () => {
    if (variant === 'dark') return 'text-slate-400 group-hover:text-brand-secondary';
    if (variant === 'light') return 'text-brand-muted group-hover:text-brand-primary';
    return 'text-brand-muted dark:text-slate-400 group-hover:text-brand-primary dark:group-hover:text-brand-secondary';
  };

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
          {/* 'Fluento' Text (Dynamic Color based on theme) */}
          <span className={`font-heading font-extrabold text-xl tracking-tight transition-colors ${getFluentoColor()}`}>
            Fluento
          </span>

          {/* 'Speak' Text (Gradient Color) */}
          <span className="font-heading font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary">
            Speak
          </span>
        </div>
        
        {/* Subtitle */}
        <span className={`text-[10px] font-semibold tracking-widest uppercase transition-colors mt-0.5 ${getSubtitleColor()}`}>
          Next-Gen AI Learning
        </span>
      </div>
    </Link>
  );
}