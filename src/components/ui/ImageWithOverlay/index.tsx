'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
}

export function ImageWithOverlay({
  src,
  alt,
  className,
  overlayClassName,
}: ImageWithOverlayProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      {overlayClassName && (
        <div className={cn('absolute inset-0', overlayClassName)} />
      )}
    </div>
  );
}
