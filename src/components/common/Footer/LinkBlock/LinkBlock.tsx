import { Link } from 'gatsby';
import React from 'react';

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
        <svg
          width="24"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m14.33 19.714 9.61-9.66-9.61-9.66a1 1 0 1 0-1.39 1.41l7.19 7.25H1a1 1 0 1 0 0 2h19.13l-7.19 7.25a1 1 0 1 0 1.42 1.41h-.03Z"
            fill={fontColor}
          />
        </svg>
      </div>
    </div>
  );
};
