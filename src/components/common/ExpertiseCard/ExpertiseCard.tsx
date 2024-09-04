import React from 'react';

import { ExpertiseCardProps } from './ExpertiseCardProps';
import { StaticImage } from 'gatsby-plugin-image';

export const ExpertiseCard = ({
  children,
  color,
}: ExpertiseCardProps) => {
  const colorVariants = {
    yellow: 'after:bg-yellow',
    blue: 'after:bg-blue',
    red: 'after:bg-red',
  }

  return (
    <div className={`relative after:content-[''] after:absolute after:w-full after:h-full after:-left-2 after:top-2 after:-z-[1] after:rounded-lg ${colorVariants[color]}`}>
      {children}
    </div>
  );
};
