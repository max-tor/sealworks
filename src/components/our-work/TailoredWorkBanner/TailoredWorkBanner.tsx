import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const TailoredWorkBanner: React.FC = () => {
  return (
    <section className="relative mb-5 flex max-w-full overflow-hidden max-lg:flex-col lg:h-[374px] lg:gap-[50px] lg:bg-[#ba0202]">
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
      <aside className="right-0 h-full before:absolute before:-left-[45px] before:top-1/2 before:hidden before:size-0 before:-translate-y-2/4 before:rotate-0 before:border-y-[35px] before:border-l-0 before:border-r-[50px] before:border-solid before:border-[transparent_#ba0202] before:drop-shadow-lxl before:content-[''] md:absolute md:w-1/2 md:bg-[#ba0202] md:shadow-[-5px_0px_15px_rgba(0,0,0,0.25)] md:before:block">
        <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-2/4 md:-translate-y-2/4">
          <StaticImage
            className="animate__animated animate__zoomIn lg:h-[374px] lg:w-[615px]"
            src="images/our_work.png"
            alt="Our work"
            breakpoints={[640, 616, 768, 1024, 1280]}
            sizes="(min-width: 1280px) 615px, 100vw"
          />
        </div>
      </aside>
    </section>
  );
};
