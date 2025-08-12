import React from 'react';
import { motion } from 'framer-motion';

// Simple blur fade animation variants
export const blurFadeVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 20,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Component wrapper for blur fade animation on headings
interface BlurFadeHeadingProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const BlurFadeHeading: React.FC<BlurFadeHeadingProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  as = "h2"
}) => {
  const MotionComponent = motion[as as keyof typeof motion] as any;

  return (
    <MotionComponent
      className={className}
      variants={blurFadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
    >
      {children}
    </MotionComponent>
  );
};
