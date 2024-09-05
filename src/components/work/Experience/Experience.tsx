import React from 'react';

import ArrowImage from './images/arrow.inline.svg';
import AstronautImage from './images/astronaut.inline.svg';
import StarsImage from './images/stars.inline.svg';

export const Experience = () => {
  return (
    <section className="relative my-5 flex flex-col overflow-x-clip bg-blue p-3 pl-3.5 max-md:pr-5 md:mb-10 md:h-[224px]">
      <AstronautImage
        alt="astronaut icon"
        className="md:absolute md:left-3 md:top-3 md:flex md:h-[202px] md:w-[206px]"
      />
      <StarsImage
        src="images/stars.svg"
        alt="Starts icon"
        className="hidden md:absolute md:left-[643px] md:top-[21px] md:flex md:h-[38px] md:w-[97px]"
      />

      <ArrowImage
        alt="Arrow icon"
        className="hidden md:absolute md:left-[720px] md:top-[40px] md:flex md:h-[26px] md:w-[32px]"
      />

      <h3 className="whitespace-nowrap font-annie text-[40px] font-normal leading-none text-yellow md:absolute md:left-[774px] md:top-[26px]">
        that can grow and scale
      </h3>

      <div className="font-roboto text-[40px] font-normal leading-snug text-white max-md:max-w-full md:absolute md:left-[139px] md:top-[52px] md:w-[763px]">
        let`s create amazing experiences for your unique audience and
        organization.
      </div>

      <div className="bg-blueDusky px-8 py-2 text-4xl text-white max-md:max-w-full max-md:px-5 md:absolute md:left-[234px] md:top-[190px] md:w-[956px]">
        a peek at the<span className="font-bold"> magic </span>we can help you
        create...
      </div>
    </section>
  );
};
