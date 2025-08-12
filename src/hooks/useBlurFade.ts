
import { useEffect, useRef } from 'react';

export interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number; filter: string };
    visible: { y: number; opacity: number; filter: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const defaultVariants = {
  hidden: { y: 6, opacity: 0, filter: 'blur(6px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
};

export const useBlurFade = ({
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
}: Partial<BlurFadeProps> = {}) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.transform = 'translateY(0)';
          element.style.opacity = '1';
          element.style.filter = 'blur(0px)';
        }
      },
      {
        threshold: 0.1,
        rootMargin: inViewMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [inViewMargin]);

  return { ref, delay, duration, yOffset, blur };
};
