import clsx from 'clsx';
import * as React from 'react';

import { UnderlinedTextProps } from '@/components/common/UnderlinedText/UnderlinedTextProps';

const BASE_CLASS =
  "relative whitespace-nowrap inline-block lg:before:-ml-[3px] lg:before:w-underlined-text lg:before:block lg:before:absolute  lg:before:bottom-[-10%] lg:before:h-[60%] lg:before:w-full lg:before:content-[''] lg:before:-z-[1]";

export const UnderlinedText = ({
  children,
  color = 'blueSticky',
}: UnderlinedTextProps) => {
  const spanClass = clsx(BASE_CLASS, { [`before:bg-${color}`]: !!color });

  return <span className={spanClass}>{children}</span>;
};
