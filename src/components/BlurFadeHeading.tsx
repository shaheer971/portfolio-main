import React from 'react';
import { motion } from 'framer-motion';

interface BlurFadeHeadingProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const BlurFadeHeading: React.FC<BlurFadeHeadingProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  as = "h2"
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const Component = as;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Component className={className}>
        {children}
      </Component>
    </motion.div>
  );
};
