'use client';

import Link from 'next/link';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/albums' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Careers', href: '/about#career' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact-us' },
];

export function FooterNav() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium uppercase tracking-wider text-white/50">
        Pages
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/50 hover:text-[#F26227] transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
