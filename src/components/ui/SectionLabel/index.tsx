'use client';

import { cn } from '@/lib/cn';

interface SectionLabelProps {
  text: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export function SectionLabel({ text, className, variant = 'light' }: SectionLabelProps) {
  const isDark = variant === 'dark';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs italic tracking-wide mb-4',
        isDark ? 'text-white/60' : 'text-[#888]',
        className
      )}
    >
      <span
        className={cn(
          'inline-block w-5 h-px',
          isDark ? 'bg-white/40' : 'bg-[#aaa]'
        )}
      />
      {text}
    </span>
  );
}
