'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp, scaleIn } from '@/lib/animationVariants';
import { galleryImages, galleryStats } from '@/data/gallery';
import { SectionLabel, AnimatedHeading } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';
import Link from 'next/link';

export function Gallery({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn('bg-[#f7f2e9]', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-start justify-between mb-4">
              <motion.div variants={fadeInUp}>
                <span className="text-[36px] lg:text-[48px] font-medium text-[#21201b] tracking-[-2px]">
                  {galleryStats.count}
                </span>
                <p className="text-[12px] text-[#888] uppercase tracking-[0.06em]">{galleryStats.label}</p>
              </motion.div>
              <SectionLabel text="Gallery" />
            </div>

            <AnimatedHeading
              text="Don't just take our word for it—see how we turn ideas into stunning spaces. Our gallery is full of inspiration for your next big project!"
              as="h2"
              className="max-w-[800px] mb-12"
            />

            {/* Bento grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-2.5"
              style={{ gridTemplateRows: '240px 240px' }}
            >
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.alt}
                  variants={scaleIn}
                  className={cn(
                    'relative rounded-lg overflow-hidden group',
                    i === 0 && 'md:row-span-2'
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  {i === 0 && (
                    <span className="absolute bottom-3.5 left-3.5 bg-black/65 text-white rounded-full px-3.5 py-1 text-xs font-medium backdrop-blur-sm">
                      Villa
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10">
              <Link
                href="/albums"
                className="group inline-flex items-center gap-0 text-[13px] font-medium text-[#141414] bg-transparent border border-[#141414]/20 rounded-[6px] overflow-hidden hover:bg-[#ff833b] hover:text-[#fffbf5] hover:border-[#ff833b] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
                  »
                </span>
                <span className="px-4 py-2">Browse Gallery</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
