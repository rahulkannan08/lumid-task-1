'use client';

import { cn } from '@/lib/cn';

interface CategoryChipProps {
  label: string;
  className?: string;
}

export function CategoryChip({ label, className }: CategoryChipProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600',
        className
      )}
    >
      {label}
    </span>
  );
}
