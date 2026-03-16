'use client';

import { cn } from '@/lib/cn';

interface StepButtonProps {
  step: number;
  isActive: boolean;
  onClick: () => void;
}

export function StepButton({ step, isActive, onClick }: StepButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-5 py-2 rounded-full text-sm font-medium transition-all duration-250',
        isActive
          ? 'bg-neutral-900 text-white'
          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
      )}
    >
      Step {step}
    </button>
  );
}
