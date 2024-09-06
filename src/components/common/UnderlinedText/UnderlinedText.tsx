import clsx from 'clsx';
import * as React from 'react';

import { UnderlinedTextProps } from '@/components/common/UnderlinedText/UnderlinedTextProps';

const BASE_CLASS =
  "relative whitespace-nowrap inline-block md:before:-ml-[3px] md:before:w-underlined-text md:before:block md:before:absolute  md:before:bottom-[-10%] md:before:h-[60%] md:before:w-full md:before:content-[''] md:before:-z-[1]";

export const UnderlinedText = ({
  children,
  color = 'blueSticky',
}: UnderlinedTextProps) => {
  const colorVariants = {
    blueSticky: 'before:bg-blueSticky',
    blueStickyBright: 'before:bg-blueStickyBright',
    roseSticky: 'before:bg-roseSticky',
    redSticky: 'before:bg-redSticky',
    yellowSticky: 'before:bg-yellowSticky',
    yellowStickyLight: 'before:bg-yellowStickyLight',
  };
  const spanClass = clsx(BASE_CLASS, { [`${colorVariants[color]}`]: !!color });

  return <span className={spanClass}>{children}</span>;
};
