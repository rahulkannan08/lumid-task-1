'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp, scaleIn } from '@/lib/animationVariants';
import { galleryImages, galleryStats } from '@/data/gallery';
import { SectionLabel, AnimatedHeading, Button } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Gallery({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn('py-24 bg-[#FAF8F4]', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="flex items-start justify-between mb-4">
            <motion.div variants={fadeInUp}>
              <span className="text-4xl font-semibold text-[#111]">
                {galleryStats.count}
              </span>
              <p className="text-sm text-[#888]">{galleryStats.label}</p>
            </motion.div>
            <SectionLabel text="Gallery" />
          </div>

          <AnimatedHeading
            text="Don't just take our word for it—see how we turn ideas into stunning spaces."
            as="h2"
            className="max-w-3xl mb-12"
          />

          {/* Bento grid: large image left spanning 2 rows, 2 small images right */}
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
                  'relative rounded-2xl overflow-hidden group',
                  i === 0 && 'md:row-span-2'
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                {/* Badge overlay on first image */}
                {i === 0 && (
                  <span className="absolute bottom-3.5 left-3.5 bg-black/65 text-white rounded-full px-3.5 py-1 text-xs font-medium backdrop-blur-sm">
                    Villa
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <Button href="/albums">Browse Gallery</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
