'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useAccordion } from '@/hooks/useAccordion';
import { stagger } from '@/lib/animationVariants';
import { differences } from '@/data/differences';
import { SectionLabel, AnimatedHeading } from '@/components/ui';
import { DiffItem } from './DiffItem';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Differentiators({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { isOpen, toggle } = useAccordion(0);

  return (
    <section ref={ref} className={cn('py-24 bg-[#FAF8F4]', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel text="Our Differences" />
          <AnimatedHeading
            text="what makes us different (and totally awesome)"
            as="h2"
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-0">
              {differences.map((diff, i) => (
                <DiffItem
                  key={diff.number}
                  item={diff}
                  isOpen={isOpen(i)}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
            <div className="hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Differentiators;
