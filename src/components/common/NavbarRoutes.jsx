'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { COURSE_DROPDOWN_LINKS } from '../constants/navigation';

export default function NavbarRoutes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <ul className="flex items-center gap-2">
      <li>
        <Link
          href="/speaking"
          className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-xl transition-all whitespace-nowrap"
        >
          Speaking English
        </Link>
      </li>

      <li>
        <Link
          href="/community"
          className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-xl transition-all whitespace-nowrap"
        >
          Community
        </Link>
      </li>

      <li className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-purple-600 hover:bg-slate-100 rounded-xl transition-all whitespace-nowrap cursor-pointer"
        >
          <span>More Courses</span>
          <ChevronDown className={`size-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-purple-600' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            {COURSE_DROPDOWN_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </li>
    </ul>
  );
}