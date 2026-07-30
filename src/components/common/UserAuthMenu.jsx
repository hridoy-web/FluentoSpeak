'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function UserAuthMenu({ user }) {
  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="px-4 py-2 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors"
        >
          Sign In
        </Link>

        {/* Primary Gradient Button using Electric Violet & Purple */}
        <Link
          href="/register"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-linear-to-r from-brand-primary to-brand-secondary hover:opacity-95 rounded-full shadow-md shadow-brand-primary/25 active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <Link
      href="/dashboard"
      className="px-5 py-2.5 text-sm font-bold text-white bg-linear-to-r from-brand-primary to-brand-secondary rounded-full shadow-md hover:opacity-95 transition-opacity"
    >
      Dashboard
    </Link>
  );
}