'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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
        'border-b border-[#e5e0d8] py-6 cursor-pointer transition-all duration-300',
        isOpen && 'border-[#21201b]'
      )}
      onClick={onToggle}
    >
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-semibold text-[#ff833b] min-w-[36px]">
          {item.number}
        </span>
        <div className="flex-1">
          <h3 className={cn(
            'text-[18px] font-medium text-[#21201b] transition-colors tracking-[-0.03em]',
            'hover:text-[#ff833b]'
          )}>
            {item.title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            'shrink-0 transition-colors',
            isOpen ? 'text-[#ff833b]' : 'text-[#888]'
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-[14px] text-[#21201b]/50 mt-3 ml-10 leading-[170%] max-w-lg">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
