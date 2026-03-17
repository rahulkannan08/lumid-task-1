'use client';

import { motion } from 'framer-motion';
import { stagger } from '@/lib/animationVariants';
import { ProjectCard } from '@/components/ui';
import type { Project } from '@/types';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      variants={stagger}
      className="relative space-y-4"
    >
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </motion.div>
  );
}
