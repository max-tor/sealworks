import { Carousel } from 'flowbite-react';
import { BreakpointsObject, useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { carouselTheme } from '@/configs';

interface ResponsiveCarouselProps {
  children: React.ReactNode;
  breakpoints: BreakpointsObject;
}

const ResponsiveCarousel = ({
  children,
  breakpoints,
}: ResponsiveCarouselProps) => {
  if (breakpoints.xl || breakpoints.xl === undefined) {
    return children;
  }

  return (
    <Carousel
      theme={carouselTheme}
      slide={false}
      indicators={false}
      className="h-[300px] md:h-[400px] lg:h-[500px]"
    >
      {children}
    </Carousel>
  );
};

export const CapabilitiesPresentation = () => {
  const breakpoints = useBreakpoint();

  return (
    <section className="relative my-5 h-[300px] md:h-[400px] lg:h-[500px] xl:h-[496px] 2xl:h-96">
      <ResponsiveCarousel breakpoints={breakpoints}>
        <StaticImage
          className="xl:shadow-gray10 h-full select-none object-cover xl:!absolute xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Case study on how Ellen's credit score affects her ability to buy a house."
          src="images/ellen-credit-score-strategy.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[295px] xl:top-0 xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto xl:max-w-full object-top"
          alt="Case study on how Ellen's credit score affects her ability to buy a house."
          src="images/diversity-inclusion-definition.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[582px] xl:top-0 xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Lifeguarding module pre-assessment results screen."
          src="images/lifeguarding-pre-assessment-results.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[871px] xl:top-0 xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Money Matters program facilitator dashboard with plans and activities."
          src="images/money-matters-facilitator-dashboard.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[86px] xl:top-[255px] xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Moderna onboarding page with resources for new and existing employees"
          src="images/moderna-new-employee-onboarding.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[370px] xl:top-[255px] xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="DEEP learning platform overview with modules on leadership and growth"
          src="images/deep-learning-platform.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[658px] xl:top-[255px] xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Everboarding platform for Daiichi Sankyo’s Global R&D with learning journeys and spotlight sections."
          src="images/everboarding-global-rd.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className="xl:shadow-gray10 h-full select-none xl:!absolute xl:left-[944px] xl:top-[255px] xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Everboarding platform for Daiichi Sankyo’s Global R&D with learning journeys and spotlight sections."
          src="images/ielsen-diversity-inclusion-course.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />
      </ResponsiveCarousel>
    </section>
  );
};
