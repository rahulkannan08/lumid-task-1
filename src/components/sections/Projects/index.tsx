'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { stagger, fadeInUp } from '@/lib/animationVariants';
import { projects } from '@/data/projects';
import { SectionLabel, AnimatedHeading, ProjectCard } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types';

export function Projects({ className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn('bg-[#f7f2e9] relative', className)}>
      <div className="w-full" style={{ padding: 'var(--section-py, 100px) var(--container-px, 50px) 60px' }}>
        <div className="mx-auto flex flex-col gap-[91px]" style={{ maxWidth: 'var(--max-width, 1820px)' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionLabel text="Our Best Projects" />
            <AnimatedHeading
              text="From grand skyscrapers to cozy corners—see how we turn visions into spaces that wow!"
              as="h2"
              className="max-w-[800px]"
            />
          </motion.div>

          {/* Project cards with sticky stacking effect */}
          <div className="flex flex-col" style={{ gap: '100px' }}>
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-0 text-[13px] font-medium text-[#141414] bg-transparent border border-[#141414]/20 rounded-[6px] overflow-hidden hover:bg-[#ff833b] hover:text-[#fffbf5] hover:border-[#ff833b] transition-all duration-300"
            >
              <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
                »
              </span>
              <span className="px-4 py-2">View All Projects</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
