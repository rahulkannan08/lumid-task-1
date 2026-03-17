'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { blogs } from '@/data/blogs';
import { SectionLabel, AnimatedHeading, Button, BlogCard } from '@/components/ui';
import { BlogList } from './BlogList';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Blogs({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <section ref={ref} className={cn('py-24 bg-[#FAF8F4]', className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel text="Blogs" />
          <AnimatedHeading
            text="No fluff, no jargon—just simple, practical advice for making your space look and feel amazing."
            as="h2"
            className="max-w-3xl mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featured && <BlogCard blog={featured} className="text-lg" />}
            <BlogList blogs={rest} />
          </div>

          <motion.div variants={fadeInUp} className="mt-10">
            <Button href="/blogs" variant="outline">
              All Blogs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Blogs;
