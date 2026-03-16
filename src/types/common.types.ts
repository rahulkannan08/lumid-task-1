export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface SectionProps {
  className?: string;
}

export interface AnimatedSectionProps extends SectionProps {
  delay?: number;
}
