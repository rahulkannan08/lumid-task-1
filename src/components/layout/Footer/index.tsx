'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { CONTACT } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Newsletter } from './Newsletter';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Albums', href: '/albums' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Career', href: '/about#career' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact-us' },
];

const socialLinks = [
  { name: 'Linkedin', href: 'https://linkedin.com/', icon: 'in' },
  { name: 'Facebook', href: 'https://facebook.com/', icon: 'f' },
  { name: 'Twitter/X', href: 'https://x.com/', icon: 'X' },
  { name: 'Youtube', href: 'https://youtube.com/', icon: '▶' },
  { name: 'Instagram', href: 'https://instagram.com/', icon: '◯' },
  { name: 'Pinterest', href: 'https://pinterest.com/', icon: 'P' },
];

export function Footer() {
  return (
    <footer className="bg-[#211f1a] text-white">
      {/* Main Footer Content - Two Column Layout */}
      <div className="w-full" style={{ padding: '100px var(--container-px, 50px) 60px' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Description & Contact */}
            <div className="space-y-12">
              {/* Description */}
              <p className="text-[18px] leading-[1.6] text-[#fffbf5]/80 max-w-[500px]" style={{ fontStyle: 'italic' }}>
                The #1 architecture firm in Texas turning dreams into beautiful, functional spaces. from cozy homes to innovative designs, we bring your vision to life—one detail at a time. let&apos;s create something amazing together!
              </p>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Phone */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-white/40">
                    <Phone className="w-4 h-4" />
                    <span>PHONE</span>
                  </div>
                  <div className="space-y-1">
                    {CONTACT.phone.map((num) => (
                      <Link
                        key={num}
                        href={`tel:${num.replace(/[^0-9]/g, '')}`}
                        className="block text-[15px] text-white/80 hover:text-[#F26227] transition-colors"
                      >
                        {num}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-white/40">
                    <Mail className="w-4 h-4" />
                    <span>EMAIL</span>
                  </div>
                  <Link
                    href={`mailto:${CONTACT.email}`}
                    className="block text-[15px] text-white/80 hover:text-[#F26227] transition-colors"
                  >
                    {CONTACT.email}
                  </Link>
                </div>

                {/* Address */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-white/40">
                    <MapPin className="w-4 h-4" />
                    <span>ADDRESS</span>
                  </div>
                  <Link
                    href={CONTACT.mapUrl}
                    target="_blank"
                    className="block text-[15px] text-white/80 hover:text-[#F26227] transition-colors"
                  >
                    {CONTACT.address}
                  </Link>
                </div>

                {/* Opening Hours */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-white/40">
                    <Clock className="w-4 h-4" />
                    <span>OPENING HOURS</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[15px] text-white/80">{CONTACT.hours}</p>
                    <p className="text-[15px] text-white/80">{CONTACT.closedDay}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="flex flex-col items-start lg:items-end">
              <nav className="space-y-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-8 py-3 border-b border-white/10 hover:border-white/30 transition-colors min-w-[280px]"
                  >
                    <span className="text-[18px] font-medium text-white/90 group-hover:text-[#F26227] transition-colors">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#F26227] transition-colors" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full" style={{ padding: '40px var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <div className="max-w-[500px]">
            <h3 className="text-[16px] font-medium text-white mb-4">Subscribe to the newsletter</h3>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="jane@framer.com"
                className="flex-1 px-5 py-3 text-[14px] bg-white/[0.06] border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:border-[#F26227] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 text-[14px] font-medium bg-[#F26227] text-white rounded-full hover:bg-[#d9551f] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="w-full" style={{ padding: '0 var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {socialLinks.map((social, index) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center justify-between py-5 px-0 text-[15px] font-medium text-white/90 hover:text-[#F26227] transition-colors border-b border-white/10',
                  index % 3 !== 2 && 'lg:border-r lg:pr-8',
                  index % 3 !== 0 && 'lg:pl-8'
                )}
              >
                <span>{social.name}</span>
                <span className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm text-[12px] text-white/40">
                  {social.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Large Architect Text */}
      <div className="w-full overflow-hidden" style={{ padding: '40px var(--container-px, 50px) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <h2 
            className="text-[clamp(100px,18vw,320px)] font-medium text-[#fffbf5]/[0.08] leading-[0.85] tracking-[-0.02em] select-none"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Architect
          </h2>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-white/10" style={{ padding: '24px var(--container-px, 50px)' }}>
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <div className="flex items-center gap-8 text-[13px] text-white/50">
            <Link href="/privacy-policy" className="hover:text-[#F26227] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F26227] transition-colors">
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-8 text-[13px] text-white/50">
            <span>©Template by RealMehedi</span>
            <Link 
              href="https://framer.link/XzKISjl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#F26227] transition-colors"
            >
              Built in Framer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
