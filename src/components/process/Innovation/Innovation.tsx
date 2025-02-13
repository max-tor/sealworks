import React from 'react';

import { ReactComponent as IconCloud } from '@/images/innovation-cloud.inline.svg';
import { ReactComponent as IconCode } from '@/images/innovation-code.inline.svg';
import { ReactComponent as IconCut } from '@/images/innovation-cut.inline.svg';
import { ReactComponent as IconDatabase } from '@/images/innovation-database.inline.svg';
import { ReactComponent as IconPerformance } from '@/images/innovation-performance.inline.svg';
import { ReactComponent as IconView } from '@/images/innovation-view.inline.svg';

export const Innovation = () => {
  return (
    <section className="relative mb-10 flex flex-col justify-between md:mb-[88px] lg:flex-row">
      <h2 className="left-0 top-10 hidden text-left font-roboto text-[100px] font-normal opacity-0 md:absolute md:block md:text-[190px] md:leading-[168px] md:opacity-10 lg:w-[516px] lg:text-right lg:opacity-100">
        inno vation
      </h2>
      <div className="ml-auto bg-gray px-6 pb-5 md:px-20 md:pb-[35px] lg:w-[76%]">
        <div className="box-content py-20 lg:max-w-[515px] lg:pb-[140px] lg:pl-[270px] lg:pt-[170px]">
          <div className="relative">
            <span className="absolute -top-[65px] left-[14px] bg-yellow px-4 py-2 font-roboto text-[18px] font-normal leading-6 text-black before:absolute before:-bottom-[25px] before:left-[83px] before:size-0 before:rotate-0 before:border-b-0 before:border-l-0 before:border-r-[10px] before:border-t-[25px] before:border-solid before:border-transparent before:border-t-yellow before:content-['']">
              your audience + unique needs
            </span>
            <span className="absolute -bottom-[73px] left-0 bg-blue px-4 py-2 font-roboto text-[18px] font-normal leading-6 text-white before:absolute before:-top-[25px] before:left-[12px] before:size-0 before:rotate-0 before:border-b-[25px] before:border-l-[10px] before:border-r-0 before:border-t-0 before:border-solid before:border-transparent before:border-b-blue before:content-['']">
              design
            </span>
            <span className="absolute -bottom-[73px] left-[118px] bg-red px-4 py-2 font-roboto text-[18px] font-normal leading-6 text-white before:absolute before:-top-[25px] before:left-px before:size-0 before:-rotate-45 before:border-b-[35px] before:border-l-[15px] before:border-r-0 before:border-t-0 before:border-solid before:border-transparent before:border-b-red before:content-['']">
              technology
            </span>
            <h3 className="font-roboto text-[40px] leading-[48px] text-blue">
              innovation is our foundational principle.
            </h3>
          </div>
        </div>

        <p className="mb-3 font-roboto text-base font-normal">
          Innovation at Sealworks is about continuously pushing boundaries to
          achieve excellence and provide unparalleled value. It allows us to
          create cutting-edge solutions that meet the ever-evolving needs of our
          partners. We are constantly exploring new technologies and
          methodologies, ensuring our products are not only relevant today but
          also future-proof.{' '}
        </p>
        <p className="mb-7 font-roboto text-base font-normal">
          We think creatively and solve problems in unique ways, turning
          challenges into opportunities for growth and improvement. Innovation
          keeps us ahead of industry trends, allowing us to offer the latest
          advancements and best practices to our clients so we can deliver
          high-quality digital experiences that stand out.
        </p>
        <div className="mt-[20px] grid grid-cols-2 items-start md:mt-[33px] md:grid-cols-3">
          <div className="m-auto mb-9 flex max-w-[142px] flex-col items-center gap-4 md:max-w-[168px] md:gap-1">
            <div className="size-[52px] bg-white p-2">
              <IconCut />
            </div>
            <span className="text-center font-roboto text-[22px] font-normal md:text-[26px]">
              flexible architecture
            </span>
          </div>
          <div className="m-auto mb-9 flex max-w-[142px] flex-col items-center gap-4 md:max-w-[168px] md:gap-1">
            <div className="size-[52px] bg-white p-2">
              <IconCloud />
            </div>
            <span className="text-center font-roboto text-[22px] font-normal md:text-[26px]">
              optimized cloud services
            </span>
          </div>
          <div className="m-auto mb-9 flex max-w-[142px] flex-col items-center gap-4 md:max-w-[168px] md:gap-1">
            <div className="size-[52px] bg-white p-2">
              <IconView />
            </div>
            <span className="text-center font-roboto text-[22px] font-normal md:text-[26px]">
              modular components
            </span>
          </div>
          <div className="m-auto mb-9 flex max-w-[142px] flex-col items-center gap-4 md:max-w-[168px] md:gap-1">
            <div className="size-[52px] bg-white p-2">
              <IconPerformance />
            </div>
            <span className="text-center font-roboto text-[22px] font-normal md:text-[26px]">
              rigorous testing
            </span>
          </div>
          <div className="m-auto mb-9 flex max-w-[142px] flex-col items-center gap-4 md:max-w-[168px] md:gap-1">
            <div className="size-[52px] bg-white p-2">
              <IconCode />
            </div>
            <span className="text-center font-roboto text-[22px] font-normal md:text-[26px]">
              future focused
            </span>
          </div>
          <div className="m-auto mb-9 flex max-w-[142px] flex-col items-center gap-4 md:max-w-[168px] md:gap-1">
            <div className="size-[52px] bg-white p-2">
              <IconDatabase />
            </div>
            <span className="text-center font-roboto text-[22px] font-normal md:text-[26px]">
              scalable models
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
