'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useStepNav } from '@/hooks/useStepNav';
import { stagger } from '@/lib/animationVariants';
import { steps } from '@/data/steps';
import { SectionLabel, AnimatedHeading, StepButton } from '@/components/ui';
import { StepPanel } from './StepPanel';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function HowItWorks({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { activeStep, goToStep } = useStepNav(steps.length);

  return (
    <section ref={ref} className={cn('py-24 bg-[#FAF8F4]', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel text="How We Work" />
          <AnimatedHeading
            text="Let's turn your big ideas into a masterpiece with a clear and fun process"
            as="h2"
            className="max-w-2xl mb-12"
          />

          {/* Step buttons */}
          <div className="flex flex-wrap gap-3 mb-10 sticky top-20 z-10 bg-[#FAF8F4] py-4">
            {steps.map((step, i) => (
              <StepButton
                key={step.step}
                step={step.step}
                isActive={activeStep === i}
                onClick={() => goToStep(i)}
              />
            ))}
          </div>

          <StepPanel step={steps[activeStep]} />
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
