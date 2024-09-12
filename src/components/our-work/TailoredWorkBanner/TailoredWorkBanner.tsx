import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { ReactComponent as UnionImage } from '@/images/union.inline.svg';

export const TailoredWorkBanner: React.FC = () => {
  return (
    <section className="relative my-5 flex max-w-full overflow-hidden max-lg:flex-col lg:h-[374px] lg:gap-[50px] lg:bg-[#ba0202]">
      <div className="flex w-[36%] flex-1 flex-col justify-center p-5 font-roboto max-lg:ml-0 max-lg:w-full lg:mb-5 lg:h-[374px] lg:bg-[#ba0202] lg:pr-[50px]">
        <div className="leading-[70px] tracking-normal lg:text-white xl:ml-[72px]">
          <div className="text-[40px] font-normal lg:text-[40px]">
            our work is
          </div>
          <div className="max-w-full text-[66px] lg:text-[66px]">
            tailored to you
          </div>
        </div>
      </div>
      <aside className="animate__animated animate__zoomIn relative mx-auto grid w-full max-lg:w-full max-lg:max-w-full lg:flex-[0_0_615px] lg:flex-col lg:bg-[#ba0202]">
        <UnionImage className="absolute -left-[68px] -my-[15px] hidden w-[692px] select-none lg:flex lg:h-[404px]" />
        <StaticImage
          className="lg:h-[374px] lg:w-[616px]"
          imgClassName="h-auto max-w-full object-cover lg:shadow-lg"
          alt=""
          src="images/our_work.png"
          breakpoints={[640, 616, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 616px, 100vw"
        />
      </aside>
    </section>
  );
};
