import { Link } from 'gatsby';
import React from 'react';

import { Pages } from '@/configs';

const Navigation: React.FC = () => {
  return (
    <nav className="text-right lg:text-center">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        htmlFor="menu-btn"
        className="menu-icon relative block cursor-pointer select-none px-5 py-7 text-[0] text-transparent lg:hidden"
      >
        Toggle Menu<span className="navicon"></span>
      </label>
      <ul className="main-nav">
        <li className="pb-10 lg:pb-0">
          <Link
            to={Pages.WELCOME}
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            welcome
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to={Pages.PROCESS}
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            the process
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to={Pages.OUR_WORK}
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            our work
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to={Pages.CONNECT}
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            connect
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
