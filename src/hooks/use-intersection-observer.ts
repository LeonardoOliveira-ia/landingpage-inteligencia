import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Verifica se o elemento ainda não foi acionado ou se deve acionar sempre
        if (!hasTriggered || !triggerOnce) {
          setIsIntersecting(entry.isIntersecting);
          
          // Se o elemento entrar na viewport e triggerOnce estiver ativo, marca como já acionado
          if (entry.isIntersecting && triggerOnce) {
            setHasTriggered(true);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasTriggered, triggerOnce]);

  return { ref, isIntersecting };
} 