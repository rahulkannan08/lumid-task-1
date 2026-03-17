'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-accent' | 'text-arrow';
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
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-250 rounded-full text-sm cursor-pointer whitespace-nowrap';

  const variants = {
    primary:
      'bg-[#111] text-white px-7 py-3 hover:bg-[#F26227] border border-transparent',
    secondary:
      'bg-[#FAF8F4] text-[#111] px-7 py-3 hover:bg-[#F26227] hover:text-white border border-transparent',
    outline:
      'border-[1.5px] border-[#111] text-[#111] px-7 py-3 hover:bg-[#111] hover:text-white bg-transparent',
    'outline-accent':
      'border-[1.5px] border-[#F26227] text-[#F26227] px-7 py-3 hover:bg-[#F26227] hover:text-white bg-transparent',
    'text-arrow':
      'text-[#F26227] underline px-0 py-0 hover:tracking-wide bg-transparent border-none',
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
