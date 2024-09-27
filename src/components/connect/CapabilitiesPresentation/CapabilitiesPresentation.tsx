import 'react-multi-carousel/lib/styles.css';

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
  if (breakpoints.md) {
    return children;
  }

  return (
    <Carousel responsive={responsive} infinite={true}>
      {children}
    </Carousel>
  );
};

export const CapabilitiesPresentation = () => {
  const breakpoints = useBreakpoint();

  if (Object.keys(breakpoints).length === 0) {
    return null;
  }

  return (
    <section className="relative z-10 my-5 md:-left-[15%] md:mb-0 md:h-[496px] md:scale-[55%] md:pb-5 min-[880px]:-left-[10%] min-[880px]:scale-[70%] lg:-left-[5%] xl:left-0 xl:scale-100 xl:overflow-hidden">
      <ResponsiveCarousel breakpoints={breakpoints}>
        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Case study on how Ellen's credit score affects her ability to buy a house."
          src="images/ellen-credit-score-strategy.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:left-[295px] md:top-0 md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto md:max-w-full object-top"
          alt="Diversity and Inclusion course slide explaining the definition of diversity."
          src="images/diversity-inclusion-definition.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:left-[582px] md:top-0 md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Lifeguarding module pre-assessment results screen."
          src="images/lifeguarding-pre-assessment-results.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp xl:shadow-gray10 block size-full object-cover md:!absolute md:left-[871px] md:top-0 md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Money Matters program facilitator dashboard with plans and activities."
          src="images/money-matters-facilitator-dashboard.png"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:left-[86px] md:top-[255px] md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Moderna onboarding page with resources for new and existing employees"
          src="images/moderna-new-employee-onboarding.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:left-[370px] md:top-[255px] md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="DEEP learning platform overview with modules on leadership and growth"
          src="images/deep-learning-platform.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:left-[658px] md:top-[255px] md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Everboarding platform for Daiichi Sankyo’s Global R&D with learning journeys and spotlight sections."
          src="images/everboarding-global-rd.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />

        <StaticImage
          className="animate__animated animate__slideInUp lxl:shadow-gray10 block size-full object-cover md:!absolute md:left-[944px] md:top-[255px] md:h-[231px] md:w-[256px] md:border md:border-gainsboro md:object-cover"
          imgClassName="h-auto max-w-full object-top"
          alt="Nielsen Diversity and Inclusion foundational learning course introduction."
          src="images/ielsen-diversity-inclusion-course.jpg"
          breakpoints={[256, 640, 768, 1024, 1280]}
          sizes="(min-width: 1024px) 256px, 100vw"
          loading="eager"
        />
      </ResponsiveCarousel>
    </section>
  );
};
