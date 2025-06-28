import React, { useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
  }, [delay]);

  const getTransitionClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'down':
          return `${baseClasses} opacity-0 -translate-y-16`;
        case 'left':
          return `${baseClasses} opacity-0 translate-x-16`;
        case 'right':
          return `${baseClasses} opacity-0 -translate-x-16`;
        case 'fade':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-16`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getTransitionClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;