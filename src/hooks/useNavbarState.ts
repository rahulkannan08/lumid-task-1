'use client';

import { useMemo } from 'react';
import { useScrollY } from './useScrollY';

export function useNavbarState(threshold = 50) {
  const scrollY = useScrollY();

  const state = useMemo(
    () => ({
      isScrolled: scrollY > threshold,
      isVisible: true,
    }),
    [scrollY, threshold]
  );

  return state;
}
