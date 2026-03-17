'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
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
      className="border-b border-white/[0.08] py-6 group"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-8 flex-1">
          <h3 className="text-lg font-medium text-white min-w-[200px] group-hover:text-[#F26227] transition-colors">
            {service.title}
          </h3>
          {/* Tag pills — visible when collapsed */}
          {!isOpen && (
            <div className="hidden md:flex flex-wrap gap-2 flex-1">
              {service.features.slice(0, 4).map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1 text-xs bg-white/[0.08] text-white/70 rounded-full"
                >
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-white shrink-0">
          <span className="hidden sm:inline text-white/60">
            {isOpen ? 'Hide Details' : 'Show Details'}
          </span>
          <span
            className={cn(
              'w-7 h-7 rounded-md border flex items-center justify-center transition-all duration-250',
              isOpen
                ? 'border-[#F26227] text-[#F26227]'
                : 'border-white/30 text-white'
            )}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </div>
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
            <div className="pt-6 grid grid-cols-1 md:grid-cols-[200px_1fr_280px] gap-8 items-start">
              <div />
              <div className="space-y-4">
                <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 text-xs bg-white/[0.08] text-white/70 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-[13px] text-[#F26227] hover:underline"
                >
                  <span>»</span> View Service
                </a>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative aspect-4/3 rounded-xl overflow-hidden"
              >
                <Image
                  src={`https://framerusercontent.com/images/1bcyDuRfQDTRBuPmXk32I5cKWc0.webp?scale-down-to=512`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
