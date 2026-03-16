'use client';

import { cn } from '@/lib/cn';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4',
        className
      )}
    >
      {text}
    </span>
  );
}
