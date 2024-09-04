import React from 'react';

import { ExpertiseCardProps } from './ExpertiseCardProps';

export const ExpertiseCard = ({ children, color }: ExpertiseCardProps) => {
  const colorVariants = {
    yellow: 'after:bg-yellow',
    blue: 'after:bg-blue',
    red: 'after:bg-red',
  };

  return (
    <div
      className={`relative after:absolute after:-left-2 after:top-2 after:-z-[1] after:size-full after:rounded-lg after:content-[''] ${colorVariants[color]}`}
    >
      {children}
    </div>
  );
};
