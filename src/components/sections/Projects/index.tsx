'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { projects } from '@/data/projects';
import { SectionLabel, AnimatedHeading, Button } from '@/components/ui';
import { ProjectGrid } from './ProjectGrid';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Projects({ className }: SectionProps) {
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
          <SectionLabel text="OUR BEST PROJECTS" />
          <AnimatedHeading
            text="What we've been up to—check out our latest projects"
            as="h2"
            className="max-w-2xl mb-12"
          />
          <ProjectGrid projects={projects} />
          <motion.div variants={fadeInUp} className="mt-10">
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
