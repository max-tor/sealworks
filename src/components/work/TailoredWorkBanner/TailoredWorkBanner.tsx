import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import UnionImage from '@/images/union.inline.svg';

export const TailoredWorkBanner: React.FC = () => {
  return (
    <section className="relative grid gap-4 overflow-hidden bg-[#ba0202] px-4 text-[0] md:h-[374px] md:w-[1234px]">
      <div className="text-[66px] font-normal leading-[70px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:absolute md:left-[67px] md:top-[178px] md:w-[482px]">
        tailored to you
      </div>
      <div className="whitespace-nowrap text-[40px] font-normal leading-[70px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:absolute md:left-[72px] md:top-[118px] md:w-[428px]">
        our work is
      </div>
      <UnionImage
        className="hidden h-[404px] w-[692px] md:absolute md:right-[-10px] md:top-0 md:my-[-15px] md:flex"
        alt="Union"
      />
      <StaticImage
        className="h-auto md:absolute md:left-[637px] md:top-[50px] md:h-[207px] md:w-[302px]"
        imgClassName="h-auto max-w-full rounded-lg"
        alt="Raising Critical Thinkers"
        src="images/raising-critical-thinkers.png"
      />
      <div className="flex md:absolute md:left-[945px] md:top-[15px] md:h-[130px] md:w-[262px] md:overflow-hidden">
        <StaticImage
          className="md:mt-[-57px]"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="E-learning module from the American Red Cross showing steps to protect against bloodborne pathogens, with progress indicators and action buttons"
          src="images/red-cross.png"
        />
      </div>

      <StaticImage
        className="md:absolute md:left-[844px] md:top-[206px] md:flex md:h-[183px] md:w-[285px]"
        imgClassName="h-auto max-w-full rounded-lg"
        alt="Ad(Vantage) Point"
        src="images/dialogues.png"
      />
      <div className="relative md:absolute md:bottom-0 md:left-[1075px] md:h-[228px] md:w-[139px] md:rotate-[-180.00deg]">
        <StaticImage
          className="md:absolute md:left-[17px] md:top-[17px] md:h-[203px] md:w-24 md:rotate-[180.00deg] md:object-cover"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="Nielsen mountain"
          src="images/nielsen-mountain-toggle.png"
        />
        <StaticImage
          className="hidden rotate-[180.00deg] md:absolute md:left-0 md:top-0 md:flex md:h-[228px] md:w-[139px]"
          alt="Interactive module showing privilege reflection on a mountain graphic, with categories like Family Background, Race, and Education."
          src="images/hand-holding-mobile.png"
        />
      </div>
      <div className="relative md:absolute md:bottom-[-15px] md:left-[615px] md:h-[146px] md:w-[220px]">
        <StaticImage
          className="md:md:absolute md:left-8 md:top-[27px] md:h-[82px] md:w-[170px] md:rounded-lg md:object-cover"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="think-portal"
          src="images/think-portal.png"
        />
        <StaticImage
          className="hidden md:absolute md:left-[6px] md:top-[-4px] md:flex md:h-[146px] md:w-[220px]"
          alt="think-portal: Hand holding mobile"
          src="images/hand-holding-mobile2.png"
        />
      </div>
    </section>
  );
};
