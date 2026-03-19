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
    <section ref={ref} className={cn('bg-[#f7f2e9]', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionLabel text="FAQs" />
            <AnimatedHeading
              text="We've answered the big questions, but if you still have something on your mind, we're here to help."
              as="h2"
              className="max-w-[800px] mb-12"
            />

            {/* Split layout: Form LEFT (sticky) + FAQ RIGHT (scrolls) */}
            <div className="flex flex-col-reverse lg:flex-row gap-10">
              {/* LEFT: Sticky contact form */}
              <div className="flex-1 lg:max-w-[500px]">
                <div className="lg:sticky lg:top-[100px] lg:z-[1]">
                  <ContactForm />
                </div>
              </div>

              {/* RIGHT: FAQ accordion (scrolls) */}
              <div className="flex-1">
                <div className="space-y-2.5">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
