import React, { ElementType } from 'react';

interface HeaderContainerProps {
  children?: React.ReactNode;
  as?: ElementType;
}

export const HeaderContainer = ({
  children,
  as: Component = 'h2',
}: HeaderContainerProps) => (
  <Component className="flex flex-col items-start text-[66px] leading-[70px] max-lg:text-4xl">
    {children}
  </Component>
);
