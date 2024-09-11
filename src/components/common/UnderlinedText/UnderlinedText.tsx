import clsx from 'clsx';
import * as React from 'react';

import { UnderlinedTextProps } from '@/components/common/UnderlinedText/UnderlinedTextProps';

const BASE_CLASS =
  "relative whitespace-nowrap inline-block before:-ml-[3px] before:w-underlined-text before:block before:absolute before:bottom-[-10%] before:h-[60%] before:w-full before:content-[''] before:-z-[1]";

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
