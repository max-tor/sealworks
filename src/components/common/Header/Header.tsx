import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header my-3 flex content-center items-center justify-between lg:mb-8 lg:mt-[3px]">
      <StaticImage
        className="my-2 w-auto lg:hidden"
        src="../../../images/sealworks_logo_xs.svg"
        alt="Sealworks Interactive Studios"
        placeholder="none"
      />
      <StaticImage
        className="my-2 hidden w-auto lg:flex"
        src="../../../images/sealworks_logo.svg"
        alt="Sealworks Interactive Studios"
        placeholder="none"
      />
      <Navigation />
    </header>
  );
};

export default Header;
