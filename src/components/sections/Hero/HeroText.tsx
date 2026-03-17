'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/lib/animationVariants';
import { Button } from '@/components/ui';

export function HeroText() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <motion.h1
          variants={fadeInUp}
          className="text-[clamp(40px,6vw,72px)] font-medium leading-[1.1] text-[#111]"
        >
          Architecture that connects people and places
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-base text-[#444] max-w-lg leading-relaxed"
        >
          We design more than buildings—we create spaces that foster connection,
          creativity, and community
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button href="/contact-us">
            Get Template
            <span className="ml-1">→</span>
          </Button>
        </motion.div>
      </div>

      <motion.div variants={scaleIn} className="relative">
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/1bcyDuRfQDTRBuPmXk32I5cKWc0.webp?scale-down-to=1024"
            alt="Hero Image — A Beautiful Villa"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Cloud ambient element */}
        <div className="absolute -top-10 -right-10 w-48 h-48 opacity-30 animate-float">
          <Image
            src="https://framerusercontent.com/images/cjHuaZ2g1MnKCgmnEq0IpxBIU7Q.png"
            alt="Cloud"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
