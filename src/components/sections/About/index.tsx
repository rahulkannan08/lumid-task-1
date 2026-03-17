'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animationVariants';
import { Button } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function About({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn('py-24 bg-[#FAF8F4]', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/bPmhZf6Cfqh0tq7ok2WiGtZUc.png?scale-down-to=1024"
                alt="Architecture sketch illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p variants={fadeInUp} className="text-sm text-[#888]">
              Take a glimpse into our world of creativity and innovation.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-[#444] leading-relaxed">
              Our journey began 15 years ago, with a simple idea: to design spaces that blend
              beauty and functionality seamlessly. What started as a small team with big
              dreams has grown into a thriving studio, known for turning ideas into reality.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button href="/about">Know About Us</Button>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative aspect-video rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://framerusercontent.com/images/zNwUrKf5wBzZ5mlqn3ZSHYTgQk.png?scale-down-to=1024"
                alt="A man with model buildings"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
