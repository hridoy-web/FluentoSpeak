'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';

export default function MobileMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none cursor-pointer"
      >
        {isOpen ? <X className="size-6 text-rose-500" /> : <Menu className="size-6 text-slate-800" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 w-full h-[calc(100vh-64px)] bg-white/95 backdrop-blur-xl border-t border-slate-200 p-6 flex flex-col justify-between z-50 overflow-y-auto">
          
          {/* Nav Links */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
              Navigation
            </p>

            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3.5 px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-purple-600 rounded-2xl transition-all group"
                    >
                      <div className="p-2 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile btn */}
          {!user ? (
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3 pb-8 mt-auto">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all"
              >
                Sign In
              </Link>
              
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 rounded-2xl shadow-lg shadow-purple-500/25 transition-all"
              >
                <span>Get Started Free</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <div className="pt-6 border-t border-slate-200 pb-8 mt-auto">
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 text-sm font-bold text-white bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-md"
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}