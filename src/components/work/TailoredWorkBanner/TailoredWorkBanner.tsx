import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import UnionImage from '@/images/union.inline.svg';

export const TailoredWorkBanner: React.FC = () => {
  return (
    <section className="relative my-5 flex max-w-full max-lg:flex-col lg:h-[374px] lg:gap-[50px] lg:bg-[#ba0202]">
      <div className="mb-5 flex w-[36%] flex-1 flex-col justify-center bg-[#ba0202] p-5 font-roboto max-lg:ml-0 max-lg:w-full lg:h-[374px] lg:pr-[50px]">
        <div className="leading-[70px] tracking-normal text-white xl:ml-[72px]">
          <div className="text-[40px] font-normal lg:text-[40px]">
            our work is
          </div>
          <div className="max-w-full text-[66px] lg:text-[66px]">
            tailored to you
          </div>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full flex-[0_0_615px] max-lg:w-full max-lg:max-w-full lg:h-[374px] lg:flex-col">
        <UnionImage
          className="hidden h-[404px] w-[692px] lg:absolute lg:-left-[68px] lg:-my-[15px] lg:flex"
          alt="Union"
        />
        <div className="lg:absolute lg:left-[22px] lg:top-[35px] lg:h-[207px] lg:w-[302px]">
          <StaticImage
            className="lg:h-[207px] lg:w-[302px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full rounded-lg "
            alt="Raising Critical Thinkers"
            src="images/raising-critical-thinkers.png"
            breakpoints={[302, 640, 768, 1024]}
            sizes="(min-width: 1024px) 302px, 100vw"
          />
        </div>
        <div className="lg:absolute lg:-top-[64px] lg:left-[334px] lg:h-[217px] lg:w-[262px] lg:overflow-hidden">
          <StaticImage
            className="lg:h-[217px] lg:w-[262px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full rounded-lg"
            alt="E-learning module from the American Red Cross showing steps to protect against bloodborne pathogens, with progress indicators and action buttons"
            src="images/red-cross.png"
            breakpoints={[262, 640, 768, 1024]}
            sizes="(min-width: 1024px) 262px, 100vw"
          />
        </div>

        <div className="lg:absolute lg:left-[229px] lg:top-[191px] lg:h-[183px] lg:w-[285px]">
          <StaticImage
            className="lg:h-[183px] lg:w-[285px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full rounded-lg"
            alt="Ad(Vantage) Point"
            src="images/dialogues.png"
            breakpoints={[285, 640, 768, 1024]}
            sizes="(min-width: 1024px) 285px, 100vw"
          />
        </div>

        <div className="relative lg:absolute lg:bottom-0 lg:left-[486px] lg:top-[154px] lg:h-[203px] lg:w-[95px]">
          <StaticImage
            className="lg:h-[203px] lg:w-[95px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full rounded-lg"
            alt="Nielsen mountain"
            src="images/nielsen-mountain-toggle.png"
            breakpoints={[95, 640, 768, 1024]}
            sizes="(min-width: 1024px) 95px, 100vw"
          />
        </div>

        <div className="hidden lg:absolute lg:bottom-0 lg:left-[460px] lg:block lg:h-[228px] lg:w-[139px]">
          <StaticImage
            className="lg:h-[228px] lg:w-[139px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full rounded-lg"
            alt="Interactive module showing privilege reflection on a mountain graphic, with categories like Family Background, Race, and Education."
            src="images/hand-holding-mobile.png"
            breakpoints={[139, 640, 768, 1024]}
            sizes="(min-width: 1024px) 139px, 100vw"
          />
        </div>
        <div className="relative lg:absolute lg:bottom-[30px] lg:left-[25px] lg:h-[85px] lg:w-[170px]">
          <StaticImage
            className="lg:h-[85px] lg:w-[170px] lg:rounded-lg lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full rounded-lg"
            alt="think-portal"
            src="images/think-portal.png"
            breakpoints={[170, 640, 768, 1024]}
            sizes="(min-width: 1024px) 170px, 100vw"
          />
        </div>
        <div className="relative hidden lg:absolute lg:bottom-0 lg:left-0 lg:block lg:h-[146px] lg:w-[220px]">
          <StaticImage
            className="lg:h-[146px] lg:w-[220px] lg:object-cover lg:shadow-lg"
            alt="think-portal: Hand holding mobile"
            src="images/hand-holding-mobile2.png"
            breakpoints={[220, 640, 768, 1024]}
            sizes="(min-width: 1024px) 220px, 100vw"
          />
        </div>
      </aside>
    </section>
  );
};
