'use client';

import { cn } from '@/lib/cn';

interface MarqueeStripProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function MarqueeStrip({
  children,
  className,
  speed = 30,
}: MarqueeStripProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
