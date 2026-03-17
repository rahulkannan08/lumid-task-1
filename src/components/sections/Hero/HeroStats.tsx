'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stats } from '@/data/stats';

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="mt-16 relative grid grid-cols-2 md:grid-cols-4 border-t border-white/10"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.55,
            ease: 'easeOut',
            delay: i * 0.08,
          }}
          className="bg-[rgba(20,20,20,0.55)] backdrop-blur-[14px] p-8 border-r border-white/[0.07] last:border-r-0"
        >
          <span className="text-[56px] font-semibold text-white leading-none tracking-tight">
            {stat.value}
          </span>
          <div className="h-px bg-white/[0.12] my-4" />
          <span className="text-sm text-white/65">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
