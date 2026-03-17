'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navItems } from '@/data/nav';
import { isNavDropdown } from '@/types';
import { useNavbarState } from '@/hooks/useNavbarState';
import { Button } from '@/components/ui';
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
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 max-w-screen-xl">
        <Link href="/" className="text-xl font-bold text-[#111]">
          Architectured
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
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
                  className="flex items-center gap-1 text-sm font-medium text-[#333] hover:text-[#F26227] transition-colors duration-200"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {dropdownOpen === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-[rgba(0,0,0,0.08)] p-2"
                    >
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#FAF8F4] transition-colors"
                        >
                          <div>
                            <p className="text-sm font-medium text-[#111]">
                              {sub.label}
                            </p>
                            {sub.description && (
                              <p className="text-xs text-[#888] mt-0.5">
                                {sub.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="h-4 w-4 text-[#F26227] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                  className="text-sm font-medium text-[#333] hover:text-[#F26227] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact-us" variant="primary">
            Get Template
            <span className="ml-1">→</span>
          </Button>
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
