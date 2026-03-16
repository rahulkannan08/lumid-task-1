'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useAccordion } from '@/hooks/useAccordion';
import { stagger } from '@/lib/animationVariants';
import { faqs } from '@/data/faqs';
import { SectionLabel, AnimatedHeading, FAQItem } from '@/components/ui';
import { ContactForm } from './ContactForm';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function FAQ({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { isOpen, toggle } = useAccordion();

  return (
    <section ref={ref} className={cn('py-24 bg-white', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel text="FAQS" />
          <AnimatedHeading
            text="We've answered the big questions, but if you still have something on your mind, we're here to help."
            as="h2"
            className="max-w-3xl mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FAQ list */}
            <div>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={isOpen(i)}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
