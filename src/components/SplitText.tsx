
import { useSprings, animated, config as springConfig } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: any;
  animationTo?: any;
  easing?: keyof typeof springConfig;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onWordAnimationComplete?: () => void;
}

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'default',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onWordAnimationComplete,
}: SplitTextProps) => {
  const words = text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: any) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === words.length && onWordAnimationComplete) {
            onWordAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: springConfig[easing as keyof typeof springConfig],
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <animated.span 
          key={wordIndex} 
          style={{
            ...springs[wordIndex],
            display: 'inline-block', 
            whiteSpace: 'nowrap',
            marginRight: '0.3em'
          }}
          className="transform transition-opacity will-change-transform"
        >
          {word}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;
