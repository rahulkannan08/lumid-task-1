'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { CONTACT, SITE_NAME } from '@/lib/constants';
import { FooterNav } from './FooterNav';
import { FooterContact } from './FooterContact';
import { Newsletter } from './Newsletter';

export function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container mx-auto px-6 py-16 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="text-xl font-bold">
              {SITE_NAME}
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              The #1 architecture firm in Texas turning dreams into beautiful,
              functional spaces.
            </p>
            <Newsletter />
          </div>

          {/* Nav Links */}
          <FooterNav />

          {/* Contact Info */}
          <FooterContact />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>{SITE_NAME}</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#F26227] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F26227] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
