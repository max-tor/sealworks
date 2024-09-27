import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';

const description1 =
  'We create digital hubs that foster collaboration and streamline communication within your organization. Our intuitive, user-friendly hubs make it easy for employees to access resources, share information, and connect with colleagues or peers.';
const description2 =
  "Designed to integrate your essential tools and resources, these hubs reflect your brand and provide a cohesive user experience. We prioritize customization, tailoring each hub to reflect your company's or user base's culture and become a central, efficient workspace.";

// const blockWidth = 700;
// const blockHeight = 510;

const img1 = {
  top: -17,
  left: 20,
  width: 317,
  height: 189,
  alt: 'Career exploration game helping students discover career options interactively.',
};
const img2 = {
  top: -25,
  left: -26,
  width: 79,
  height: 208,
  alt: 'Custom 2D avatar designed to match your personal style.',
};

const img3 = {
  top: 190,
  left: 20,
  width: 317,
  height: 378,
  alt: 'User dashboard for quick access to new content and updates.',
};

const img4 = {
  top: -15,
  left: 358,
  width: 317,
  height: 280,
  alt: 'Interactive activity to track data, present insights, and break habits for a healthier lifestyle.',
};
const img5 = {
  top: 286,
  left: 358,
  width: 317,
  height: 253,
  alt: 'Learning hub connecting platforms for simplified access and focused user growth.',
};

export const DigitalHubs: React.FC = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

  return (
    <section className="relative my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="redSticky">digital hubs</UnderlinedText>
            <UnderlinedText color="redSticky">LXP & apps</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10">{description1}</p>
          <p className="mt-5">{description2}</p>
        </div>
      </div>
      <aside
        ref={ref}
        className="relative mx-auto mt-[3.3333333333333335%] grid h-[72.85714285714285vw] w-full gap-4 bg-red max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[510px] lg:w-[700px] lg:flex-[1_0_712px] lg:flex-col"
      >
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute -top-[3.3333333333333335%] left-[2.857142857142857%] h-[37.05882352941177%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          alt={img1.alt}
          src="images/career-simulation-geneticist.png"
          breakpoints={[317, 464]}
          sizes="(min-width: 1024px) 317px, 464px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute -left-[3.7142857142857144%] -top-[4.901960784313726%] h-[40.78431372549019%] w-[11.285714285714285%] opacity-0`}
          alt={img2.alt}
          src="images/girl.png"
          breakpoints={[79, 116]}
          sizes="(min-width: 1024px) 79px, 116px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[2.857142857142857%] top-[37.254901960784316%] h-[74.11764705882354%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          alt={img3.alt}
          src="images/thinklaw-trending-page.png"
          breakpoints={[317, 464]}
          sizes="(min-width: 1024px) 317px, 464px"
        />

        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute -top-[2.941176470588235%] left-[51.142857142857146%] h-[54.90196078431373%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          alt={img4.alt}
          src="images/pack-tracks-form.png"
          breakpoints={[317, 464]}
          sizes="(min-width: 1024px) 317px, 464px"
        />

        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[51.142857142857146%] top-[56.07843137254902%] h-[49.6078431372549%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          alt={img5.alt}
          src="images/learning-hub-dashboard.png"
          breakpoints={[317, 464]}
          sizes="(min-width: 1024px) 317px, 464px"
        />
      </aside>
    </section>
  );
};
