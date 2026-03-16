'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full';

  const variants = {
    primary: 'bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-800',
    secondary: 'bg-white text-neutral-900 px-6 py-3 hover:bg-neutral-100',
    outline:
      'border border-neutral-300 text-neutral-900 px-6 py-3 hover:border-neutral-900',
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
