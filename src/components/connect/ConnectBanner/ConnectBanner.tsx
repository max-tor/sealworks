import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const ConnectBanner: React.FC = () => {
  return (
    <section className="relative mb-5 flex max-w-full gap-5 max-lg:flex-col-reverse lg:gap-[45px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col text-black max-lg:ml-0 max-lg:w-full">
        <h1 className="flex flex-col self-start text-7xl leading-none text-red max-md:text-4xl">
          ready or not, let’s connect.
        </h1>

        <p className="mt-10 text-base leading-6">
          Whether you are ready for us to take your project from concept to
          launch, scale and enhance an existing digital experience, or simply
          brainstorm and workshop together, <strong>let’s connect.</strong>
        </p>
      </div>
      <aside className="animate__animated animate__zoomIn relative mx-auto w-full gap-4 max-lg:w-full max-lg:max-w-full lg:block lg:h-[314px] lg:w-[64%] lg:flex-[1_0_644px] lg:flex-col">
        <div className="lg:absolute lg:left-0 lg:top-0 lg:block lg:h-[314px] lg:w-[644px]">
          <StaticImage
            className="lg:h-[314px] lg:w-[644px]"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Sealworks can create a custom solution for your unique audiences through workshops and brainstorming."
            src="images/we-can-help.png"
            breakpoints={[644, 640, 768, 1024, 1280]}
            sizes="(min-width: 1280px) 644px, 100vw"
            loading="eager"
          />
        </div>
      </aside>
    </section>
  );
};
