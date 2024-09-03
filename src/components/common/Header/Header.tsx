import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Navigation from './Navigation';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className="header my-3 px-4 md:p-0 flex content-center items-center justify-between lg:mb-8 lg:mt-0">
      <HeaderLogo />
      <Navigation />
    </header>
  );
};

export default Header;
