import { Link } from 'gatsby';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="text-right lg:text-center">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        htmlFor="menu-btn"
        className="menu-icon text-0 relative block cursor-pointer select-none px-5 py-7 text-transparent lg:hidden"
      >
        Menu<span className="navicon"></span>
      </label>
      <ul className="main-nav">
        <li className="pb-10 lg:pb-0">
          <Link
            to="/"
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            welcome
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to="/process"
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            the process
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to="/work"
            className="font-roboto text-3xl font-normal text-blue hover:text-black lg:pt-8 lg:text-lg"
            activeClassName="active"
          >
            our work
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to="/connect"
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
