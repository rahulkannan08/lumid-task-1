'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger } from '@/lib/animationVariants';
import { useAccordion } from '@/hooks/useAccordion';
import { services } from '@/data/services';
import { SectionLabel, AnimatedHeading } from '@/components/ui';
import { ServiceItem } from './ServiceItem';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Services({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { isOpen, toggle } = useAccordion(0);

  return (
    <section ref={ref} className={cn('bg-[#211f1a] relative', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-[60px]"
          >
            {/* Sticky section header — sticks at top:64px (below navbar) on desktop */}
            <div className="lg:sticky lg:top-[64px] lg:z-[1] bg-[#211f1a]">
              <SectionLabel text="Our Services" variant="dark" />
              <AnimatedHeading
                text="Buildings aren't just brick and mortar—they're where life happens, and we make sure they're unforgettable."
                as="h2"
                className="max-w-[800px] !text-[#fffbf5]"
              />
            </div>

            {/* Accordion service items */}
            <div className="flex flex-col">
              {services.map((service, i) => (
                <ServiceItem
                  key={service.slug}
                  service={service}
                  isOpen={isOpen(i)}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>

            {/* Explore All Services button */}
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-0 text-[13px] font-medium text-[#fffbf5] bg-transparent border border-[#fffbf5]/20 rounded-[6px] overflow-hidden hover:bg-[#ff833b] hover:border-[#ff833b] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
                  »
                </span>
                <span className="px-4 py-2">Explore All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
