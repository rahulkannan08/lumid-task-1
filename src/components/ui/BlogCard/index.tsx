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
        className="block p-4 rounded-2xl border border-[#e5e0d8] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-center gap-2 text-xs text-[#888] mb-2 uppercase">
          <span>{blog.date}</span>
          <span className="inline-block px-2 py-0.5 bg-[#FFF0E8] text-[#C44209] rounded text-[11px] font-medium normal-case">
            {blog.category}
          </span>
          <span>{blog.author}</span>
        </div>
        <h3 className="text-[15px] font-medium text-[#111] group-hover:text-[#F26227] transition-colors">
          {blog.title}
        </h3>
      </Link>
    </motion.div>
  );
}
