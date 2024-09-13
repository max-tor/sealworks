import 'react-multi-carousel/lib/styles.css';

import clsx from 'clsx';
import { BreakpointsObject, useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Carousel from 'react-multi-carousel';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface ResponsiveCarouselProps {
  children: React.ReactNode;
  breakpoints: BreakpointsObject;
}

const ResponsiveCarousel = ({
  children,
  breakpoints,
}: ResponsiveCarouselProps) => {
  if (breakpoints.xl) {
    return children;
  }

  return <Carousel responsive={responsive}>{children}</Carousel>;
};

const wrapperClasses =
  'lxl:shadow-gray10 block size-full object-cover xl:!absolute xl:h-[231px] xl:w-[256px] xl:border xl:border-gainsboro xl:object-cover';

export const CapabilitiesPresentation = () => {
  const breakpoints = useBreakpoint();

  if (Object.keys(breakpoints).length === 0) {
    return null;
  }

  return (
    <section className="relative z-10 my-5 lg:h-[496] lg:overflow-hidden xl:mb-0 xl:pb-5">
      <ResponsiveCarousel breakpoints={breakpoints}>
        <StaticImage
          className={clsx(wrapperClasses, '')}
          imgClassName="h-auto max-w-full object-top"
          alt="Case study on how Ellen's credit score affects her ability to buy a house."
          src="images/ellen-credit-score-strategy.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[295px] xl:top-0')}
          imgClassName="h-auto xl:max-w-full object-top"
          alt="Diversity and Inclusion course slide explaining the definition of diversity."
          src="images/diversity-inclusion-definition.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[582px] xl:top-0')}
          imgClassName="h-auto max-w-full object-top"
          alt="Lifeguarding module pre-assessment results screen."
          src="images/lifeguarding-pre-assessment-results.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[871px] xl:top-0')}
          imgClassName="h-auto max-w-full object-top"
          alt="Money Matters program facilitator dashboard with plans and activities."
          src="images/money-matters-facilitator-dashboard.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[86px] xl:top-[255px]')}
          imgClassName="h-auto max-w-full object-top"
          alt="Moderna onboarding page with resources for new and existing employees"
          src="images/moderna-new-employee-onboarding.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[370px] xl:top-[255px]')}
          imgClassName="h-auto max-w-full object-top"
          alt="DEEP learning platform overview with modules on leadership and growth"
          src="images/deep-learning-platform.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[658px] xl:top-[255px]')}
          imgClassName="h-auto max-w-full object-top"
          alt="Everboarding platform for Daiichi Sankyo’s Global R&D with learning journeys and spotlight sections."
          src="images/everboarding-global-rd.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />

        <StaticImage
          className={clsx(wrapperClasses, 'xl:left-[944px] xl:top-[255px]')}
          imgClassName="h-auto max-w-full object-top"
          alt="Nielsen Diversity and Inclusion foundational learning course introduction."
          src="images/ielsen-diversity-inclusion-course.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 256px, 100vw"
        />
      </ResponsiveCarousel>
    </section>
  );
};
