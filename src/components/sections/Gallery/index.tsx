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
    <section ref={ref} className={cn('py-24 bg-neutral-50', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="flex items-start justify-between mb-4">
            <motion.div variants={fadeInUp}>
              <span className="text-4xl font-bold text-neutral-900">
                {galleryStats.count}
              </span>
              <p className="text-sm text-neutral-500">{galleryStats.label}</p>
            </motion.div>
            <SectionLabel text="GALLERY" />
          </div>

          <AnimatedHeading
            text="Don't just take our word for it—see how we turn ideas into stunning spaces."
            as="h2"
            className="max-w-3xl mb-12"
          />

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {galleryImages.map((img) => (
              <motion.div
                key={img.alt}
                variants={scaleIn}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
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
