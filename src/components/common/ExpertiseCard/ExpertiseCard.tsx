import React from 'react';

import { ExpertiseCardProps } from './ExpertiseCardProps';
import { StaticImage } from 'gatsby-plugin-image';

export const ExpertiseCard = ({
  image,
  color,
}: ExpertiseCardProps) => {
  const colorVariants = {
    yellow: 'after:bg-yellow',
    blue: 'after:bg-blue',
    red: 'after:bg-red',
  }
  return (
    <div className={`relative after:content-[''] after:absolute after:w-full after:h-full after:-left-2 after:top-2 after:-z-[1] after:rounded-lg ${colorVariants[color]}`}>
      <StaticImage
        className="relative w-full"
        // src={`../../../images/${image}`}
        src={`../../../images/expertise1.jpg`}
        alt="Expertise"
      />
    </div>
  );
};
