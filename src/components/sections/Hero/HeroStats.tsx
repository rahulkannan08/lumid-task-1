'use client';

import { stats } from '@/data/stats';
import { MarqueeStrip } from '@/components/ui';

export function HeroStats() {
  return (
    <div className="mt-16 border-t border-neutral-200 py-6">
      <MarqueeStrip speed={25}>
        <div className="flex items-center gap-16 px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 shrink-0">
              <span className="text-3xl font-bold text-neutral-900">
                {stat.value}
              </span>
              <span className="text-sm text-neutral-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </MarqueeStrip>
    </div>
  );
}
