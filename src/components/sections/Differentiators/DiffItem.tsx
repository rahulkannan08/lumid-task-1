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
        isOpen && 'border-[#111]'
      )}
      onClick={onToggle}
    >
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-semibold text-[#F26227] min-w-[36px]">
          {item.number}
        </span>
        <div className="flex-1">
          <h3 className={cn(
            'text-lg font-medium text-[#111] transition-colors',
            'hover:text-[#F26227]'
          )}>
            {item.title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            'shrink-0 transition-colors',
            isOpen ? 'text-[#F26227]' : 'text-[#888]'
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
            <p className="text-sm text-[#666] mt-3 ml-10 leading-relaxed max-w-lg">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
