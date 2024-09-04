import React from 'react';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header my-3 flex content-center items-center justify-between px-4 md:p-0 lg:mb-8 lg:mt-0">
      <HeaderLogo />
      <Navigation />
    </header>
  );
};

export default Header;
