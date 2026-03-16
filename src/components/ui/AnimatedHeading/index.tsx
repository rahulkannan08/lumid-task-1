'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function AnimatedHeading({
  text,
  as: Tag = 'h2',
  className,
}: AnimatedHeadingProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Tag
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900',
          className
        )}
      >
        {text}
      </Tag>
    </motion.div>
  );
}
