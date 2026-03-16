'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui';
import type { Service } from '@/types';

interface ServiceItemProps {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}

export function ServiceItem({ service, isOpen, onToggle }: ServiceItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-neutral-200 py-6 group"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
          {service.title}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="h-5 w-5 text-neutral-500" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              <p className="text-sm text-neutral-600 max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feat) => (
                  <span
                    key={feat}
                    className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full"
                  >
                    {feat}
                  </span>
                ))}
              </div>
              <Button href={`/services/${service.slug}`} variant="outline">
                View Service
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
