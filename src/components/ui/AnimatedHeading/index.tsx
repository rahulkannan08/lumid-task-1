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
          'font-medium leading-[1.2] text-[#111]',
          Tag === 'h1'
            ? 'text-[clamp(40px,6vw,72px)] leading-[1.1]'
            : 'text-[clamp(28px,4vw,44px)]',
          className
        )}
      >
        {text}
      </Tag>
    </motion.div>
  );
}
