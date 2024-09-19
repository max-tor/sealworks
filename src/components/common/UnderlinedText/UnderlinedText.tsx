import clsx from 'clsx';
import * as React from 'react';

import { UnderlinedTextProps } from '@/components/common/UnderlinedText/UnderlinedTextProps';

const BASE_CLASS =
  "relative z-0 inline-block max-w-full before:absolute before:bottom-[-10%] before:-z-[1] before:-ml-[3px] before:block before:h-3/5 before:w-full before:w-underlined-text before:content-['']";

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
    accent: 'before:bg-accent',
  };
  const spanClass = clsx(BASE_CLASS, { [`${colorVariants[color]}`]: !!color });

  return <span className={spanClass}>{children}</span>;
};
