'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useAccordion } from '@/hooks/useAccordion';
import { stagger, fadeInUp } from '@/lib/animationVariants';
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
    <section ref={ref} className={cn('relative w-full', className)}>
      {/* Full-width background image — sticky on scroll */}
      <div className="relative w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left: Sticky background image */}
        <div className="relative w-full lg:w-[55%] lg:sticky lg:top-0 lg:h-screen overflow-hidden">
          <Image
            src="/images/zNwUrKf5wBzZ5mlqn3ZSHYTgQk_scale-down-to=1024.png"
            alt="Architect working on model"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: White card panel overlapping the image */}
        <div className="relative lg:w-[50%] lg:-ml-[5%] z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-[#fffbf5] rounded-tl-[20px] rounded-bl-[20px] lg:rounded-tl-[20px] lg:rounded-bl-[20px] p-8 lg:p-12 xl:p-16 min-h-full"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <SectionLabel text="Our Differences" />
              <AnimatedHeading
                text="what makes us different (and totally awesome)"
                as="h2"
                className="max-w-[500px]"
              />
            </motion.div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
