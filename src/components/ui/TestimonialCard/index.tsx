'use client';

import { cn } from '@/lib/cn';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  title,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <p className="text-lg md:text-xl italic leading-relaxed text-[#444]">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-[#111]">
          {author}
        </p>
        <p className="text-sm text-[#888]">{title}</p>
      </div>
    </div>
  );
}
