import { ReactNode, useRef, ElementType } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  as?: ElementType;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const AnimatedSection = ({
  children,
  id,
  as: Component = 'section',
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
}: AnimatedSectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <Component
      ref={ref as any}
      id={id}
      className={`invisible-initial ${isIntersecting ? 'animate-slide-up' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection; 