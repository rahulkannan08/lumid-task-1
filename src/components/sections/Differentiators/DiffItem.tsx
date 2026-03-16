'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';

interface DiffItemProps {
  item: {
    number: string;
    title: string;
    description: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

export function DiffItem({ item, isOpen, onToggle }: DiffItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'border-b border-neutral-200 py-6 cursor-pointer transition-all duration-300',
        isOpen && 'border-neutral-900'
      )}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        <span className="text-sm font-mono text-neutral-400 mt-1">
          {item.number}
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-neutral-900">
            {item.title}
          </h3>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden text-sm text-neutral-600 mt-3 leading-relaxed"
              >
                {item.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
