import { Link } from 'gatsby';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative">
      <div className="w-[400px] h-48 left-[835px] top-0 absolute">
        <div className="w-[400px] h-48 left-0 top-0 absolute bg-[#002d9a]" />
        <div className="w-80 left-[34px] top-[35px] absolute text-white text-lg font-normal font-roboto leading-normal">
          check out some projects we’ve built with our partners over the years.
        </div>
        <div className="left-[231px] top-[126px] absolute text-right text-white text-[23px] font-bold font-roboto">
          our work
        </div>
      </div>
      <div className="w-[1229px] h-[264px] left-0 top-0 absolute">
        <div className="w-[815px] h-48 left-[5px] top-0 absolute">
          <div className="w-[400px] h-48 left-[415px] top-0 absolute">
            <div className="w-[400px] h-48 left-0 top-0 absolute bg-[#f7d900]" />
            <div className="w-[351px] left-[34px] top-[35px] absolute text-black text-lg font-normal font-roboto leading-normal">
              learn how we can partner together to craft personalized,
              award-winning solutions.
            </div>
            <Link
              to="/process"
              className="left-[199px] top-[126px] absolute text-right text-black text-[23px] font-bold font-roboto"
            >
              the process
            </Link>
          </div>
          <div className="w-[400px] h-48 left-0 top-0 absolute">
            <div className="w-[400px] h-48 left-0 top-0 absolute bg-[#cc0000]" />
            <div className="w-[336px] left-[34px] top-[35px] absolute text-white text-lg font-normal font-roboto leading-normal">
              connect with our vision, expertise, and the story of why we do
              what we do.
            </div>
            <Link
              to="/"
              className="left-[231px] top-[126px] absolute text-right text-white text-[23px] font-bold font-roboto"
            >
              welcome
            </Link>
          </div>
        </div>

        <div className="w-[1229px] h-[17px] left-0 top-[247px] absolute">
          <div className="left-[918px] top-0 absolute text-[#002d9a] text-sm font-bold font-roboto">
            Client Area · LinkedIn · Blog · X (Twitter)
          </div>
          <div className="w-[759px] left-0 top-0 absolute">
            <span className="text-black text-sm font-normal font-roboto">
              ©2024 Sealworks, Inc · 31 West Ashland Street, Doylestown, PA
              18901
            </span>
            <span> · </span>
            <span className="text-[#002d9a] text-sm font-bold font-roboto">
              (800) 460-6494 · info@sealworks.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
