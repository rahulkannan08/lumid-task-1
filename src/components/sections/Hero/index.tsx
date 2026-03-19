'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { stats } from '@/data/stats';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';
import CountUp from 'react-countup';

function StatCard({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-between py-4 px-3 min-w-0">
      <div className="flex items-center gap-1">
        <span className="text-[28px] sm:text-[36px] lg:text-[48px] font-normal text-[#fffbf5] tracking-[-2px] leading-[110%]" style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}>
          <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce />
          {suffix}
        </span>
      </div>
      <div className="w-full h-px bg-[#fffbf5]/20 my-3" />
      <p className="text-[11px] sm:text-[12px] text-[#fffbf5]/60 uppercase tracking-[0.06em] text-center leading-[140%]">
        {label}
      </p>
    </div>
  );
}

export function Hero({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn('relative w-full overflow-hidden', className)}>
      {/* Background image wrapper — full width, tall container */}
      <div className="relative w-full flex flex-col items-center" style={{ paddingTop: '170px' }}>
        {/* Sky background image (filtered) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/HlfKuKdWtdGiVMcHhQJCIKMD0Dg.jpg"
            alt="Sky background"
            fill
            className="object-cover"
            style={{ filter: 'brightness(1.1) grayscale(0.7)', mixBlendMode: 'multiply' }}
            priority
          />
        </div>

        {/* Dark bottom half */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#211f1a] z-0" />

        {/* Heading & Sub */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 flex flex-col items-center gap-7 w-full px-5 lg:px-[50px]"
          style={{ maxWidth: '1900px' }}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-[40px] sm:text-[60px] lg:text-[85px] font-medium leading-[110%] sm:leading-[90%] tracking-[-2px] sm:tracking-[-0.07em] text-[#21201b] text-center max-w-[1000px]"
            style={{ textWrap: 'balance' }}
          >
            We design more than buildings—we create space
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 max-w-[400px]">
            <p className="text-[15px] sm:text-[17px] text-[#21201b]/80 text-center leading-[140%] tracking-[-0.01em]">
              That Foster Connection, Creativity, And Community.
            </p>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-0 text-[13px] font-medium text-[#fffbf5] bg-[#141414] rounded-[6px] overflow-hidden hover:bg-[#ff833b] transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
                »
              </span>
              <span className="px-4 py-2">Get Template</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Large villa image */}
        <div className="relative z-[1] w-full pointer-events-none mt-10" style={{ aspectRatio: '1.4652', maxWidth: '100%' }}>
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[278px] z-[2]" style={{ background: 'linear-gradient(180deg, transparent 0%, #211f1a 77.3%)' }} />
          {/* Villa image */}
          <div className="absolute inset-0 z-[1] overflow-visible">
            <Image
              src="https://framerusercontent.com/images/UUv7l47ZNLkfVJlShDHKiSF0LY.png"
              alt="Luxury villa exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats bar — overlaid at bottom of hero */}
        <div className="relative z-[2] w-full flex justify-center" style={{ padding: '0 var(--container-px, 50px)', marginTop: '-80px' }}>
          <div className="flex w-full items-center gap-2.5" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={typeof stat.value === 'string' ? parseInt(stat.value) : stat.value}
                suffix={stat.suffix || (typeof stat.value === 'string' && stat.value.includes('+') ? '+' : '')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
