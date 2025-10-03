import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
  threshold?: number;
  triggerOnce?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  animation = 'fade-up',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce,
  });

  const animationClasses = {
    'fade-up': isIntersecting
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8',
    'fade-in': isIntersecting ? 'opacity-100' : 'opacity-0',
    'scale': isIntersecting
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-95',
    'slide-left': isIntersecting
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-8',
    'slide-right': isIntersecting
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${animationClasses[animation]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
