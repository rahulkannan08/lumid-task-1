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
        'flex flex-col items-center px-5 py-2.5 rounded-[10px] border-[1.5px] transition-all duration-200 cursor-pointer',
        isActive
          ? 'bg-[#111] border-[#111] text-white'
          : 'bg-white border-[#e5e0d8] text-[#111] hover:border-[#F26227]'
      )}
    >
      <span className={cn(
        'text-[11px]',
        isActive ? 'text-[#F26227]' : 'text-[#888]'
      )}>
        Step
      </span>
      <span className={cn(
        'text-xl font-semibold',
        isActive ? 'text-white' : 'text-[#111]'
      )}>
        {step}
      </span>
    </button>
  );
}
