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
    <section ref={ref} className={cn('py-24 bg-white', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel text="OUR SERVICES" />
          <AnimatedHeading
            text="Explore our services and see how we bring creativity and expertise to every project"
            as="h2"
            className="max-w-2xl mb-12"
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
            <Button href="/services" variant="outline">
              Explore All Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
