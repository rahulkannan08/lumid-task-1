// ── Motion Timing Tokens ─────────────────────────

export const TIMING = {
  micro: 0.15,
  hover: 0.2,
  navState: 0.3,
  contentReveal: 0.55,
  heroEntrance: 0.8,
  sectionReveal: 0.6,
  accordionToggle: 0.35,
} as const;

// ── Easing Curves ────────────────────────────────

export const EASE = {
  entrance: [0.19, 1, 0.22, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
  spring: { type: 'spring', stiffness: 300, damping: 30 } as const,
  springGentle: { type: 'spring', stiffness: 200, damping: 25 } as const,
} as const;

// ── Reduced-motion fallback ──────────────────────

export const REDUCED_MOTION = {
  fadeOnly: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
} as const;
