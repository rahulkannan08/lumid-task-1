'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { steps } from '@/data/steps';
import { SectionLabel, AnimatedHeading } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

function StepButton({ step, isActive, onClick }: { step: number; isActive: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 whitespace-nowrap',
        isActive
          ? 'bg-[#141414] text-[#fffbf5]'
          : 'bg-transparent text-[#21201b]/50 hover:text-[#21201b]'
      )}
    >
      <span className="text-[10px] uppercase tracking-[0.08em]">Step</span>
      <span>{String(step).padStart(2, '0')}</span>
    </button>
  );
}

export function HowItWorks({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-triggered step detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section ref={ref} className={cn('bg-[#fffbf5]', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto flex flex-col lg:flex-row gap-10" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          {/* LEFT: Sticky column — heading + step buttons */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-1 lg:sticky lg:top-[100px] self-start"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <SectionLabel text="How We Work" />
              <AnimatedHeading
                text="Let's turn your big ideas into a masterpiece with a clear and fun process"
                as="h2"
                className="max-w-[500px]"
              />
            </motion.div>

            {/* Step buttons — sticky row */}
            <div className="flex flex-wrap gap-2 mt-8 lg:sticky lg:top-[64px] bg-[#fffbf5] py-4 z-[9]">
              {steps.map((step, i) => (
                <StepButton
                  key={step.step}
                  step={step.step}
                  isActive={activeStep === i}
                  onClick={() => scrollToStep(i)}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Scrolling step panels */}
          <div className="flex-1 flex flex-col gap-[50px] max-w-[550px] lg:max-w-[550px]">
            {steps.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="scroll-mt-[128px]"
              >
                <div className="flex flex-col gap-6">
                  {/* Step image */}
                  <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '1.4' }}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Step info card */}
                  <div className="bg-[#fffbf5] rounded-lg p-6 shadow-[0_1px_25px_rgba(20,20,20,0.08)]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-medium text-[#888] uppercase tracking-[0.08em]">
                        STEP
                      </span>
                      <span className="text-[32px] font-semibold text-[#21201b] tracking-[-1px]">
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-[20px] font-medium text-[#21201b] tracking-[-0.03em] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#21201b]/50 leading-[170%]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
