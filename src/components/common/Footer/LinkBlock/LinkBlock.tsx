import { Link } from 'gatsby';
import React from 'react';

import Arrow from '@/images/arrow.inline.svg';

import { LinkBlockProps } from './LinkBlockProps';

export const LinkBlock = ({
  pathname,
  linkText,
  bgColor,
  fontColor,
  description,
}: LinkBlockProps) => {
  const containerClass = `grid grid-flow-row w-full p-9 bg-${bgColor}`;
  const headerClass = `self-start text-${fontColor} font-roboto text-lg font-normal leading-normal`;
  const linkClass = `text-right text-${fontColor} font-roboto text-2xl font-bold leading-normal`;

  return (
    <div className={containerClass}>
      <span className={headerClass}>{description}</span>
      <div className="mt-11 flex items-center justify-end gap-3 text-2xl font-bold">
        <Link to={pathname} className={linkClass}>
          {linkText}
        </Link>
        <Arrow />
      </div>
    </div>
  );
};
