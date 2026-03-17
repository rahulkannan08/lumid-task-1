'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StepPanelProps {
  step: {
    step: number;
    title: string;
    description: string;
    image: string;
  };
}

export function StepPanel({ step }: StepPanelProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.step}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <p className="text-sm text-[#666] leading-relaxed">
            {step.description}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-[#888] uppercase">
              STEP
            </span>
            <span className="text-4xl font-semibold text-[#111]">
              {String(step.step).padStart(2, '0')}
            </span>
          </div>
          <h3 className="text-2xl font-medium text-[#111]">
            {step.title}
          </h3>
        </div>
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
