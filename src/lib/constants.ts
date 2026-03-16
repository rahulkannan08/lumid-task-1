// ── Site-wide constants ──────────────────────────

export const SITE_NAME = 'Architectured';
export const SITE_DESCRIPTION =
  'Architecture Firm — We design more than buildings, we create spaces that foster connection, creativity, and community.';

export const SITE_URL = 'https://task-p4-li.vercel.app';

export const CONTACT = {
  phone: ['(217) 555-0134', '(217) 444-0134'],
  email: 'architect@email.com',
  address: '123 Main Street, Suite 200, Austin, TX 78701',
  mapUrl: 'https://www.google.com/maps',
  hours: 'Mon to Sat: 9.00am - 8.30pm',
  closedDay: 'Sun: Closed',
} as const;

export const SOCIAL_LINKS = [
  { label: 'Linkedin', href: 'https://linkedin.com/' },
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'Twitter/X', href: 'https://x.com/' },
  { label: 'Youtube', href: 'https://youtube.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'Pinterest', href: 'https://pinterest.com/' },
] as const;

export const MAX_CONTENT_WIDTH = 'max-w-screen-xl';
