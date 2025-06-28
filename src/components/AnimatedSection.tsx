import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'slideUp',
  delay = 0,
  duration = 800,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const durationClass = `duration-${duration}`;
    const baseClasses = `transition-all ${durationClass} ease-out`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-20`;
        case 'slideDown':
          return `${baseClasses} opacity-0 -translate-y-20`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-20`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-20`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-75`;
        case 'rotateIn':
          return `${baseClasses} opacity-0 rotate-12 scale-75`;
        default:
          return `${baseClasses} opacity-0 translate-y-20`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;