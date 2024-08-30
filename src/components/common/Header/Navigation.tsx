import { Link } from 'gatsby';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="text-right lg:text-center">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        htmlFor="menu-btn"
        className="menu-icon cursor-pointer block relative select-none px-5 py-7 lg:hidden text-transparent text-0"
      >
        Menu<span className="navicon"></span>
      </label>
      <ul className="main-nav">
        <li className="pb-10 lg:pb-0">
          <Link
            to="/"
            className="text-blue lg:pt-8 text-3xl lg:text-lg font-normal font-roboto hover:text-black"
            activeClassName="active"
          >
            welcome
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to="/process"
            className="text-blue lg:pt-8 text-3xl lg:text-lg font-normal font-roboto hover:text-black"
            activeClassName="active"
          >
            the process
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to="/work"
            className="text-blue lg:pt-8 text-3xl lg:text-lg font-normal font-roboto hover:text-black"
            activeClassName="active"
          >
            our work
          </Link>
        </li>
        <li className="pb-10 lg:pb-0">
          <Link
            to="/connect"
            className="text-blue lg:pt-8 text-3xl lg:text-lg font-normal font-roboto hover:text-black"
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
