'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navItems } from '@/data/nav';
import { isNavDropdown } from '@/types';
import { useNavbarState } from '@/hooks/useNavbarState';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { isScrolled } = useNavbarState();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#fffbf5]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      )}
      style={{ height: 'var(--navbar-height, 64px)' }}
    >
      <nav className="mx-auto flex items-center justify-between h-full" style={{ padding: '0 var(--container-px, 50px)', maxWidth: 'calc(var(--max-width, 1820px) + var(--container-px, 50px) * 2)' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#141414] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 22h20L12 2z" fill="#fffbf5" />
              <path d="M12 8L6 22h12L12 8z" fill="#141414" />
              <path d="M12 14L9 22h6L12 14z" fill="#fffbf5" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="text-[16px] font-bold tracking-[0.06em] text-[#141414] block uppercase">
              ARCHITECT
            </span>
            <span className="text-[7px] font-medium tracking-[0.12em] text-[#141414]/60 block uppercase mt-[1px]">
              Architecture Firm
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            isNavDropdown(item) ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-[14px] font-medium text-[#141414]/70 hover:text-[#141414] transition-colors duration-200"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {dropdownOpen === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-[rgba(0,0,0,0.08)] p-2"
                    >
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#f7f2e9] transition-colors"
                        >
                          <div>
                            <p className="text-sm font-medium text-[#141414]">
                              {sub.label}
                            </p>
                            {sub.description && (
                              <p className="text-xs text-[#888] mt-0.5">
                                {sub.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="h-4 w-4 text-[#ff833b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-[#141414]/70 hover:text-[#141414] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-0 text-[13px] font-medium text-[#fffbf5] bg-[#141414] rounded-[6px] overflow-hidden hover:bg-[#ff833b] transition-colors duration-300"
          >
            <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
              »
            </span>
            <span className="px-4 py-2">Get Template</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
