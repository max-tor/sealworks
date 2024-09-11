import React from 'react';

import { ReactComponent as ArrowImage } from './images/arrow.inline.svg';
import { ReactComponent as AstronautImage } from './images/astronaut.inline.svg';
import { ReactComponent as StarsImage } from './images/stars.inline.svg';

export const Experience = () => {
  return (
    <section className="relative my-5 flex max-w-full flex-col bg-blue p-3 pl-3.5 max-xl:pr-5 xl:mb-10 xl:h-[224px]">
      <AstronautImage
        alt="astronaut icon"
        className="xl:absolute xl:left-3 xl:top-3 xl:flex xl:h-[202px] xl:w-[206px]"
      />
      <StarsImage
        src="images/stars.svg"
        alt="Starts icon"
        className="hidden select-none xl:absolute xl:left-[643px] xl:top-[21px] xl:flex xl:h-[38px] xl:w-[97px]"
      />

      <ArrowImage
        alt="Arrow icon"
        className="hidden select-none xl:absolute xl:left-[720px] xl:top-[40px] xl:flex xl:h-[26px] xl:w-[32px]"
      />

      <h3 className="whitespace-nowrap font-annie text-[40px] font-normal leading-none text-yellow xl:absolute xl:left-[774px] xl:top-[26px]">
        that can grow and scale
      </h3>

      <div className="font-roboto text-[40px] font-normal leading-snug text-white max-xl:max-w-full xl:absolute xl:left-[139px] xl:top-[52px] xl:w-[763px]">
        let`s create amazing experiences for your unique audience and
        organization.
      </div>

      <div className="mr-5 bg-blueDusky px-8 py-2 text-4xl text-white max-xl:max-w-full max-xl:px-5 xl:absolute xl:left-[234px] xl:top-[190px] xl:w-[956px]">
        a peek at the<span className="font-bold"> magic </span>we can help you
        create...
      </div>
    </section>
  );
};
