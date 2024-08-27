import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-[84px] relative">
      <div className="w-[1280px] h-[84px] left-0 top-0 absolute bg-white" />
      <div className="w-[462px] h-[31px] left-[804px] top-[27px] absolute">
        <Link
          to="/"
          className="left-0 top-[5px] absolute text-[#002d9a] text-lg font-normal font-['Helvetica']"
        >
          welcome
        </Link>
        <Link
          to="/process"
          className="left-[123px] top-[5px] absolute text-[#002d9a] text-lg font-normal font-['Helvetica']"
        >
          the process
        </Link>
        <Link
          to="/work"
          className="left-[258px] top-[5px] absolute text-center text-[#002d9a] text-lg font-normal font-['Helvetica']"
        >
          our work
        </Link>
        <Link
          to="/connect"
          className="h-[31px] px-2.5 py-[5px] left-[372px] top-0 absolute bg-white rounded-[57px] justify-start items-start gap-2.5 inline-flex"
        >
          <div className="text-center text-black text-lg font-bold font-['Helvetica']">
            connect
          </div>
        </Link>
      </div>
      <StaticImage
        className="w-[351px] h-[71px] left-[20px] top-[13px] absolute"
        src="../../../images/logo.png"
        alt="Sealworks Interactive Studios"
      />
      <div className="w-[84px] h-[9px] left-[1179px] top-0 absolute bg-[#cc0000]" />
    </header>
  );
};

export default Header;
