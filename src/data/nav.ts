import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    items: [
      {
        label: 'Architectural Design',
        href: '/services/architectural-design',
        description: 'From big-picture layouts to the tiniest details',
      },
      {
        label: 'Interior Design & Planning',
        href: '/services/interior-design-planning',
        description: 'Create inviting, beautiful interiors',
      },
      {
        label: 'Consulting Services',
        href: '/services/consulting-services',
        description: 'Expert advice for your project',
      },
      {
        label: 'Project Management',
        href: '/services/project-management',
        description: 'Keeping your project on track',
      },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/albums' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact-us' },
];
