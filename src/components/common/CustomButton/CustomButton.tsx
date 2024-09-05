import { Link } from 'gatsby';
import React from 'react';

import { CustomButtonProps } from './CustomButtonProps';

export const CustomButton = ({
  linkTo,
  linkText,
  bgColor,
  textColor = 'white',
}: CustomButtonProps) => {
  const colorVariants = {
    blue: 'bg-blue hover:bg-blueDark',
    yellow: 'bg-yellow hover:bg-yellowLight',
  };
  const buttonClass = `inline-block ${colorVariants[bgColor]} font-roboto text-${textColor} font-bold text-2xl text-center pt-[10px] pb-[12px] px-[24px] rounded-[32px]`;

  return (
    <Link to={linkTo} className={buttonClass}>
      {linkText}
    </Link>
  );
};
