'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

const testimonialData = [
  {
    quote: 'We came in with a Pinterest board full of ideas and left with the home of our dreams! The team made everything so easy, listening to every little detail and turning our scattered thoughts into something magical.',
    author: 'Orion Caldwell',
    title: 'Home Owner',
    avatar: 'https://framerusercontent.com/images/bPmhZf6Cfqh0tq7ok2WiGtZUc.png?scale-down-to=64',
    projectImage: 'https://framerusercontent.com/images/1bcyDuRfQDTRBuPmXk32I5cKWc0.webp?scale-down-to=1024',
  },
  {
    quote: 'Working with this team transformed our office space into something truly inspiring. Every corner reflects our brand identity perfectly.',
    author: 'Elena Vasquez',
    title: 'CEO, TechVibe',
    avatar: 'https://framerusercontent.com/images/zNwUrKf5wBzZ5mlqn3ZSHYTgQk.png?scale-down-to=64',
    projectImage: 'https://framerusercontent.com/images/NPECM2ziENhHhdNoAT3unXgBhD0.jpg?scale-down-to=1024',
  },
  {
    quote: 'The attention to detail was remarkable. They thought of things we never would have considered and the final result exceeded our wildest expectations.',
    author: 'Marcus Chen',
    title: 'Property Developer',
    avatar: 'https://framerusercontent.com/images/hTlOWGa5zyQTaf2BY6I2VyHfntk.png?scale-down-to=64',
    projectImage: 'https://framerusercontent.com/images/T2Y0onUmpS5OqiyQ5nQDnrQnAkE.png?scale-down-to=1024',
  },
];

export function Testimonials({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [active, setActive] = useState(0);
  const current = testimonialData[active];

  return (
    <section ref={ref} className={cn('bg-[#211f1a] overflow-hidden', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto flex flex-col items-center gap-16" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full flex flex-col items-center"
          >
            {/* Project image */}
            <motion.div variants={fadeInUp} className="relative w-full overflow-hidden rounded-lg" style={{ maxWidth: '1200px', aspectRatio: '1.88' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ mixBlendMode: 'multiply' }}
                >
                  <Image
                    src={current.projectImage}
                    alt="Project showcase"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center mt-16 max-w-[800px]"
              >
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-normal text-[#fffbf5] leading-[110%] tracking-[-2px]" style={{ textWrap: 'balance', fontFamily: "'Geist', 'Inter', sans-serif" }}>
                  {`"${current.quote}"`}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8 text-center"
              >
                <p className="text-[14px] font-medium text-[#fffbf5]">{current.author}</p>
                <p className="text-[12px] text-[#fffbf5]/50">{current.title}</p>
              </motion.div>
            </AnimatePresence>

            {/* Avatar buttons */}
            <div className="flex items-center gap-3 mt-10">
              {testimonialData.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'w-[48px] h-[48px] rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer',
                    active === i ? 'border-[#ff833b] scale-110' : 'border-transparent opacity-50 hover:opacity-80'
                  )}
                >
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
