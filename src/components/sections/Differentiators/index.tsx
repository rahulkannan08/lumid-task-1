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
    <section ref={ref} className={cn('bg-[#fffbf5]', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16"
          >
            {/* Right side — Image gallery (sticky on desktop) */}
            <motion.div variants={fadeInUp} className="flex-1 order-2 lg:order-2">
              <div className="lg:sticky lg:top-[100px]">
                <div className="flex flex-col gap-5">
                  {/* Top row: 2 images */}
                  <div className="flex gap-5">
                    <div className="relative flex-[1.2] rounded-lg overflow-hidden" style={{ aspectRatio: '1.25' }}>
                      <Image
                        src="https://framerusercontent.com/images/NPECM2ziENhHhdNoAT3unXgBhD0.jpg?scale-down-to=512"
                        alt="Modern architecture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 rounded-lg overflow-hidden" style={{ aspectRatio: '1.25' }}>
                      <Image
                        src="https://framerusercontent.com/images/hTlOWGa5zyQTaf2BY6I2VyHfntk.png?scale-down-to=512"
                        alt="Interior design"
                        fill
                        className="object-cover"
                      />
                      {/* Floating badge */}
                      <div className="absolute bottom-2.5 left-2.5 bg-[#fffbf5] rounded-lg px-4 py-3 shadow-lg backdrop-blur-[5px] z-[1]">
                        <p className="text-[13px] font-medium text-[#141414]">800+ Projects</p>
                        <p className="text-[11px] text-[#141414]/60">World Wide</p>
                      </div>
                    </div>
                  </div>
                  {/* Bottom row: 2 images */}
                  <div className="flex gap-5" style={{ paddingRight: '120px' }}>
                    <div className="relative flex-[1.2] rounded-lg overflow-hidden" style={{ aspectRatio: '1.25' }}>
                      <Image
                        src="https://framerusercontent.com/images/T2Y0onUmpS5OqiyQ5nQDnrQnAkE.png?scale-down-to=512"
                        alt="Building exterior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 rounded-lg overflow-hidden" style={{ aspectRatio: '1.25' }}>
                      <Image
                        src="https://framerusercontent.com/images/kHdNIpsTdurehv9wVtAF250fwE.webp?scale-down-to=512"
                        alt="Design process"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left side — Section header + Accordion */}
            <div className="flex flex-col gap-8 flex-1 order-1 lg:order-1">
              <SectionLabel text="Our Differences" />
              <AnimatedHeading
                text="what makes us different (and totally awesome)"
                as="h2"
                className="max-w-[500px]"
              />
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
