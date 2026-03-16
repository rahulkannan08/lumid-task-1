'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navItems } from '@/data/nav';
import { isNavDropdown } from '@/types';
import { Button } from '@/components/ui';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
        >
          <nav className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) =>
              isNavDropdown(item) ? (
                <div key={item.label} className="space-y-2">
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.label}
                  </p>
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="block pl-4 py-1 text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block text-sm font-medium text-neutral-700 hover:text-neutral-900"
                >
                  {item.label}
                </Link>
              )
            )}
            <Button href="/contact-us" className="w-full mt-4">
              Get in Touch
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
