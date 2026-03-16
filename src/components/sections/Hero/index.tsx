'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
import { HeroText } from './HeroText';
import { HeroStats } from './HeroStats';
import type { SectionProps } from '@/types';

export function Hero({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className={cn(
        'relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden',
        className
      )}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 max-w-screen-xl"
      >
        <HeroText />
      </motion.div>

      <HeroStats />
    </section>
  );
}

export default Hero;
