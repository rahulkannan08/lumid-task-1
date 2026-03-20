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
    avatar: '/images/imeABNOsOCSUk6n4b2WTuE3zp50_scale-down-to=512.jpg',
    projectImage: '/images/gTo1ikAe697E1wYiqy5siZAfKuc_scale-down-to=512.png',
  },
  {
    quote: 'We came in with a Pinterest board full of ideas and left with the home of our dreams! The team made everything so easy, listening to every little detail and turning our scattered thoughts into something magical.',
    author: 'Orion Caldwell',
    title: 'Home Owner',
    avatar: '/images/fMSbO8GVSE2ZJSUpat0M0YqEZXE_scale-down-to=512.jpg',
    projectImage: '/images/e4FkX441TphIPEMOONeuvWMIvu0_scale-down-to=512.png',
  },
  {
    quote: 'We came in with a Pinterest board full of ideas and left with the home of our dreams! The team made everything so easy, listening to every little detail and turning our scattered thoughts into something magical.',
    author: 'Orion Caldwell',
    title: 'Home Owner',
    avatar: '/images/yraagBdWgmITawheusqEXYqrtg.jpg',
    projectImage: '/images/HuXrg9q3k1DR8Tab5ga2s0U3BvQ_scale-down-to=512.png',
  },
  {
    quote: 'We came in with a Pinterest board full of ideas and left with the home of our dreams! The team made everything so easy, listening to every little detail and turning our scattered thoughts into something magical.',
    author: 'Orion Caldwell',
    title: 'Home Owner',
    avatar: '/images/okjgNX8BS5v7AFv5fFXdy3mDRyM_scale-down-to=512.jpg',
    projectImage: '/images/YSgukW7wzBSCPnPyqKXAz7DaM_scale-down-to=512.png',
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
