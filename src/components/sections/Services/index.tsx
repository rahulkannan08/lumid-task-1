'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useAccordion } from '@/hooks/useAccordion';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { services } from '@/data/services';
import { SectionLabel, AnimatedHeading, Button } from '@/components/ui';
import { ServiceItem } from './ServiceItem';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Services({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { isOpen, toggle } = useAccordion(0);

  return (
    <section ref={ref} className={cn('py-24 bg-[#1a1a1a] text-white', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Dark badge label */}
          <div className="inline-flex items-center gap-2 bg-[#2a2a2a] border border-white/10 rounded-lg px-3.5 py-1.5 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
              ✏️ OUR SERVICES
            </span>
          </div>
          <AnimatedHeading
            text="Explore our services and see how we bring creativity and expertise to every project"
            as="h2"
            className="max-w-2xl mb-12 text-white!"
          />
          <motion.div variants={stagger}>
            {services.map((service, i) => (
              <ServiceItem
                key={service.slug}
                service={service}
                isOpen={isOpen(i)}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button href="/services" variant="outline-accent">
              Explore All Services →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
