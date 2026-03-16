'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  blog: BlogPost;
  className?: string;
}

export function BlogCard({ blog, className }: BlogCardProps) {
  return (
    <motion.div variants={fadeInUp} className={cn('group', className)}>
      <Link
        href={`/blogs/${blog.slug}`}
        className="block p-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
      >
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
          <span>{blog.date}</span>
          <span>·</span>
          <span>{blog.category}</span>
          <span>·</span>
          <span>{blog.author}</span>
        </div>
        <h3 className="text-base font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
          {blog.title}
        </h3>
      </Link>
    </motion.div>
  );
}
