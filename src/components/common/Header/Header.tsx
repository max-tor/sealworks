import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header flex content-center items-center justify-between my-3 lg:mb-8 lg:mt-[3px]">
      <StaticImage
        className="w-auto my-2 lg:hidden"
        src="../../../images/sealworks_logo_xs.svg"
        alt="Sealworks Interactive Studios"
        placeholder="none"
      />
      <StaticImage
        className="w-auto my-2 hidden lg:flex"
        src="../../../images/sealworks_logo.svg"
        alt="Sealworks Interactive Studios"
        placeholder="none"
      />
      <Navigation />
    </header>
  );
};

export default Header;
