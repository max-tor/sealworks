import React from 'react';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header fixed left-0 top-0 z-30 flex w-full max-w-[1262px] content-center items-center justify-between bg-white pl-4 md:left-auto md:pl-0 md:pr-8 md:pt-2">
      <HeaderLogo />
      <Navigation />
    </header>
  );
};

export default Header;
