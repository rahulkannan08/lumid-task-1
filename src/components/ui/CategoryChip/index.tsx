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
        'inline-block px-3 py-1 text-[11px] font-medium rounded bg-[#FFF0E8] text-[#C44209]',
        className
      )}
    >
      {label}
    </span>
  );
}
