'use client';

import { useState, useCallback } from 'react';

export function useStepNav(totalSteps: number, initialStep = 0) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setActiveStep(step);
      }
    },
    [totalSteps]
  );

  const next = useCallback(() => {
    setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }, [totalSteps]);

  const prev = useCallback(() => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  }, []);

  return { activeStep, goToStep, next, prev };
}
