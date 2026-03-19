'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function About({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn('bg-[#fffbf5]', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-row gap-10 items-start justify-between"
          >
            {/* Left side — Video + subtext */}
            <motion.div variants={fadeInLeft} className="flex flex-col gap-10 flex-1">
              {/* Video thumbnail with play button */}
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '1.88383' }}>
                <Image
                  src="https://framerusercontent.com/images/NPECM2ziENhHhdNoAT3unXgBhD0.jpg?scale-down-to=1024"
                  alt="Architecture sketch illustration"
                  fill
                  className="object-cover"
                  style={{ mixBlendMode: 'multiply' }}
                />
                {/* Play button overlay */}
                <button
                  type="button" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full border border-[#fffbf5] backdrop-blur-[8px] flex items-center justify-center cursor-pointer z-[1] hover:scale-110 transition-transform"
                >
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="#fffbf5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </div>

              {/* Subtext */}
              <p className="text-[14px] text-[#21201b]/60 leading-[170%] max-w-[400px]">
                Take a glimpse into our world of creativity and innovation.
              </p>
            </motion.div>

            {/* Right side — Story text + CTA */}
            <motion.div variants={fadeInRight} className="flex flex-col gap-10 flex-1 max-w-[500px]">
              <h2 className="text-[28px] lg:text-[36px] font-medium tracking-[-2px] leading-[110%] text-[#21201b]" style={{ textWrap: 'balance' }}>
                Our journey began 15 years ago, with a simple idea: to design spaces that blend beauty and functionality seamlessly.
              </h2>
              <p className="text-[15px] text-[#21201b]/60 leading-[170%]">
                What started as a small team with big dreams has grown into a thriving studio, known for turning ideas into reality.
              </p>
              <div>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-0 text-[13px] font-medium text-[#fffbf5] bg-[#141414] rounded-[6px] overflow-hidden hover:bg-[#ff833b] transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
                    »
                  </span>
                  <span className="px-4 py-2">Know About Us</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
