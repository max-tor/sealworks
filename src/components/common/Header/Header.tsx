import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex content-center items-center justify-between mb-8 mt-3">
      <StaticImage
        className="w-auto my-2"
        src="../../../images/sealworks_logo.svg"
        alt="Sealworks Interactive Studios"
      />
      <nav>
        <ul className="main-nav list-none flex gap-12">
          <li>
            <Link
              to="/"
              className="text-blue text-lg font-normal font-roboto hover:text-black hover:font-bold"
            >
              welcome
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className="text-blue text-lg font-normal font-roboto hover:text-black hover:font-bold"
            >
              the process
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className="text-blue text-lg font-normal font-roboto hover:text-black hover:font-bold"
            >
              our work
            </Link>
          </li>
          <li>
            <Link
              to="/connect"
              className="text-blue text-lg font-normal font-roboto hover:text-black hover:font-bold"
            >
              connect
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
