import React, { useEffect, useRef, useState } from 'react';

import { ExpertiseCardProps } from './ExpertiseCardProps';

export const ExpertiseCard = ({ children, color }: ExpertiseCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const colorVariants = {
    yellow: 'after:bg-yellow',
    blue: 'after:bg-blue',
    red: 'after:bg-red',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative after:absolute after:-left-2 after:top-2 after:-z-[1] after:size-full after:rounded-lg after:content-[''] ${
        colorVariants[color]
      } ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}
    >
      {children}
    </div>
  );
};
