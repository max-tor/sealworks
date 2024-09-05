import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import UnionImage from '@/images/union.inline.svg';

export const TailoredWorkBanner: React.FC = () => {
  return (
    <section className="relative my-5 grid gap-4 bg-[#ba0202] px-4 text-[0] md:h-[374px] md:w-[1234px]">
      <div className="text-[66px] font-normal leading-[70px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:absolute md:left-[67px] md:top-[178px] md:w-[482px]">
        tailored to you
      </div>
      <div className="whitespace-nowrap text-[40px] font-normal leading-[70px] tracking-normal text-white [font-family:'Roboto',Helvetica] md:absolute md:left-[72px] md:top-[118px] md:w-[428px]">
        our work is
      </div>
      <UnionImage
        className="hidden h-[404px] w-[692px] md:absolute md:-right-[10px] md:-my-[15px] md:flex"
        alt="Union"
      />
      <div className="md:absolute md:left-[637px] md:top-[50px] md:h-[207px] md:w-[302px]">
        <StaticImage
          className="md:h-[207px] md:w-[302px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full rounded-lg "
          alt="Raising Critical Thinkers"
          src="images/raising-critical-thinkers.png"
          breakpoints={[302, 768]}
          sizes="(min-width: 768px) 302px, 100vw"
        />
      </div>
      <div className="md:absolute md:-top-[64px] md:left-[945px] md:h-[217px] md:w-[262px] md:overflow-hidden">
        <StaticImage
          className="md:h-[217px] md:w-[262px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="E-learning module from the American Red Cross showing steps to protect against bloodborne pathogens, with progress indicators and action buttons"
          src="images/red-cross.png"
          breakpoints={[262, 768]}
          sizes="(min-width: 768px) 262px, 100vw"
        />
      </div>

      <div className="md:absolute md:left-[844px] md:top-[206px] md:h-[183px] md:w-[285px]">
        <StaticImage
          className="md:h-[183px] md:w-[285px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="Ad(Vantage) Point"
          src="images/dialogues.png"
          breakpoints={[285, 768]}
          sizes="(min-width: 768px) 285px, 100vw"
        />
      </div>

      <div className="relative md:absolute md:bottom-0 md:left-[1100px] md:top-[154px] md:h-[203px] md:w-[95px]">
        <StaticImage
          className="md:h-[203px] md:w-[95px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="Nielsen mountain"
          src="images/nielsen-mountain-toggle.png"
          breakpoints={[95, 768]}
          sizes="(min-width: 768px) 95px, 100vw"
        />
      </div>

      <div className="hidden md:absolute md:bottom-0 md:left-[1075px] md:block md:h-[228px] md:w-[139px]">
        <StaticImage
          className="md:h-[228px] md:w-[139px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="Interactive module showing privilege reflection on a mountain graphic, with categories like Family Background, Race, and Education."
          src="images/hand-holding-mobile.png"
          breakpoints={[139, 768]}
          sizes="(min-width: 768px) 139px, 100vw"
        />
      </div>
      <div className="relative md:absolute md:bottom-[30px] md:left-[647px] md:h-[85px] md:w-[170px]">
        <StaticImage
          className="md:h-[85px] md:w-[170px] md:rounded-lg md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full rounded-lg"
          alt="think-portal"
          src="images/think-portal.png"
          breakpoints={[170, 768]}
          sizes="(min-width: 768px) 170px, 100vw"
        />
      </div>
      <div className="relative hidden md:absolute md:bottom-0 md:left-[620px] md:block md:h-[146px] md:w-[220px]">
        <StaticImage
          className="md:h-[146px] md:w-[220px] md:object-cover md:shadow-lg"
          alt="think-portal: Hand holding mobile"
          src="images/hand-holding-mobile2.png"
          breakpoints={[220, 768]}
          sizes="(min-width: 768px) 220px, 100vw"
        />
      </div>
    </section>
  );
};
