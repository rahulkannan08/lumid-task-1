'use client';

import { motion } from 'framer-motion';
import { stagger } from '@/lib/animationVariants';
import { BlogCard } from '@/components/ui';
import type { BlogPost } from '@/types';

interface BlogListProps {
  blogs: BlogPost[];
}

export function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
        Latest Blogs
      </h3>
      <motion.div variants={stagger} className="space-y-1">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </motion.div>
    </div>
  );
}
