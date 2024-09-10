import './ConnectBanner.css';

import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const ConnectBanner: React.FC = () => {
  return (
    <section className="relative mb-5 flex max-w-full gap-5 max-lg:flex-col lg:gap-[45px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col text-black max-lg:ml-0 max-lg:w-full">
        <h2 className="flex flex-col self-start text-7xl leading-none text-red max-md:text-4xl">
          ready or not, let&apos;s connect.
        </h2>

        <p className="mt-10 text-base leading-6">
          Whether you are ready for us to take your project from concept to
          launch, scale and enhance an existing digital experience, or simply
          brainstorm and workshop together, <strong>let&apos;s connect.</strong>
        </p>
      </div>
      <aside className="relative mx-auto hidden w-full flex-[1_0_634px] gap-4 max-lg:w-full max-lg:max-w-full lg:block lg:h-[348px] lg:w-[64%] lg:flex-col">
        <div className="-z-10 hidden select-none lg:absolute lg:left-0 lg:top-0 lg:block lg:h-[348px] lg:w-[634px]">
          <StaticImage
            className="lg:h-[348px] lg:w-[634px]"
            imgClassName="h-auto max-w-full lg:object-top"
            alt=""
            src="images/background.png"
            breakpoints={[634]}
          />
        </div>
        <div className="font-bethellen text-3xl font-normal leading-10 lg:absolute lg:left-[400px] lg:top-[20px]">
          jam sessions
        </div>
        <div className="font-kalam text-3xl font-normal leading-10 lg:absolute lg:left-[14px] lg:top-[55px]">
          capabilities presentations
        </div>
        <div className="font-indieflower text-4xl font-normal leading-[72px] lg:absolute lg:left-[184px] lg:top-[103px]">
          workshops
        </div>
        <div className="font-craftygirls text-2xl font-normal leading-10 lg:absolute lg:left-[400px] lg:top-[145px]">
          kickstart a project
        </div>
        <div className="font-bubblerone text-[42px] font-normal leading-[72px] lg:absolute lg:left-[67px] lg:top-[182px]">
          brainstorm & explore
        </div>
        <div className="font-indieflower text-3xl font-normal leading-[72px] text-black lg:absolute lg:left-[190px] lg:top-[256px]">
          design + development
        </div>
      </aside>
    </section>
  );
};
