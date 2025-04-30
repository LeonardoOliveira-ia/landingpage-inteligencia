import { useCallback } from 'react';

interface UseElevatorScrollProps {
  offset?: number;
  duration?: number;
}

export function useElevatorScroll({ 
  offset = 100, 
  duration = 1000 
}: UseElevatorScrollProps = {}) {
  
  const scrollToSection = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    
    let startTime: number | null = null;
    
    // Função de ease-in-out com efeito de elevador
    const easeInOutElevator = (t: number): number => {
      // Adiciona um pequeno efeito de "bounce" no final
      if (t > 0.85) {
        return 1 + Math.sin((t - 0.85) * 15) * 0.03;
      }
      // Ease-in-out padrão
      return t < 0.5 
        ? 2 * t * t 
        : -1 + (4 - 2 * t) * t;
    };
    
    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutElevator(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, [offset, duration]);
  
  return scrollToSection;
} 