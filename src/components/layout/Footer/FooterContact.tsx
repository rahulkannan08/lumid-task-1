'use client';

import Link from 'next/link';
import { CONTACT, SOCIAL_LINKS } from '@/lib/constants';

export function FooterContact() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Phone
          </h4>
          {CONTACT.phone.map((num) => (
            <Link
              key={num}
              href={`tel:${num.replace(/[^0-9]/g, '')}`}
              className="block text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {num}
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Email
          </h4>
          <Link
            href={`mailto:${CONTACT.email}`}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            {CONTACT.email}
          </Link>
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Address
          </h4>
          <Link
            href={CONTACT.mapUrl}
            target="_blank"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            {CONTACT.address}
          </Link>
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Opening Hours
          </h4>
          <p className="text-sm text-neutral-400">{CONTACT.hours}</p>
          <p className="text-sm text-neutral-400">{CONTACT.closedDay}</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 pt-4">
        {SOCIAL_LINKS.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
          >
            {social.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
