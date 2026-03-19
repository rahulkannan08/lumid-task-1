'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
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
        'py-5 cursor-pointer transition-all duration-300',
        'border-b border-dotted border-[#d5d0c8]'
      )}
      onClick={onToggle}
    >
      <div className="flex items-center gap-5">
        <span className="text-[14px] font-medium text-[#21201b] min-w-[36px] tracking-wide">
          {item.number}
        </span>
        <div className="flex-1">
          <h3 className={cn(
            'text-[17px] font-medium text-[#21201b] transition-colors tracking-[-0.02em]',
            'hover:text-[#21201b]/70'
          )}>
            {item.title}
          </h3>
        </div>
        <span
          className={cn(
            'shrink-0 transition-colors text-[#888]'
          )}
        >
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
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
            <p className="text-[14px] text-[#21201b]/50 mt-4 ml-[56px] leading-[170%] max-w-lg">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
