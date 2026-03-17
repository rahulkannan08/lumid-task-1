'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { MapPin, Calendar, Ruler } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'group grid grid-cols-1 md:grid-cols-[38%_62%] rounded-2xl overflow-hidden sticky',
        className
      )}
      style={{
        top: `${80 + index * 4}px`,
        zIndex: 10 + index,
      }}
    >
      {/* Left: Dark info panel */}
      <div className="bg-[#252520] p-8 md:p-9 flex flex-col justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-medium text-white">
            {project.title}
          </h3>
          <p className="text-[13px] text-white/50">
            {project.category} — {project.type}
          </p>
        </div>
        <div className="space-y-0">
          <div className="flex items-center gap-3 py-3 border-b border-white/[0.07] text-[13px] text-white/65">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}
          </div>
          <div className="flex items-center gap-3 py-3 border-b border-white/[0.07] text-[13px] text-white/65">
            <Calendar className="h-3.5 w-3.5" />
            {project.year}
          </div>
          <div className="flex items-center gap-3 py-3 text-[13px] text-white/65">
            <Ruler className="h-3.5 w-3.5" />
            {project.size}
          </div>
        </div>
      </div>

      {/* Right: Image with hover View button */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative overflow-hidden aspect-[4/3] md:aspect-auto"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Orange "View ↗" button — centered, appears on hover */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.8] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-250 bg-[#F26227] text-white rounded-[10px] px-6 py-3 text-sm font-medium inline-flex items-center gap-2 pointer-events-none">
          View <span className="text-base">↗</span>
        </span>
      </Link>
    </motion.div>
  );
}
