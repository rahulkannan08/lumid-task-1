'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div variants={fadeInUp} className={cn('group', className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden rounded-2xl aspect-4/3"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium">View Project</span>
        </div>
      </Link>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-semibold text-neutral-900">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-500">
          {project.category} · {project.type}
        </p>
        <p className="text-sm text-neutral-400">
          {project.location} · {project.year} · {project.size}
        </p>
      </div>
    </motion.div>
  );
}
