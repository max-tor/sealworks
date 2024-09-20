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
  alt: 'Career simulation interface showing a student character exploring becoming a geneticist, with starting salary information.',
};
const img2 = {
  top: -25,
  left: -26,
  width: 79,
  height: 208,
  alt: '',
};

const img3 = {
  top: 190,
  left: 20,
  width: 317,
  height: 378,
  alt: "ThinkLaw page showing trending lessons like space tourism, Halloween task cards, and what's new in critical thinking.",
};

const img4 = {
  top: -15,
  left: 358,
  width: 317,
  height: 280,
  alt: 'Pack Tracks form for tracking cigarette usage, with inputs for time, place, activity, and mood.',
};
const img5 = {
  top: 286,
  left: 358,
  width: 317,
  height: 253,
  alt: "Learning Hub dashboard showing a user's progress, featured learning modules, and recommended learning paths.",
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
          className={`${isVisible ? 'animate__animated animate__slideInDown opacity-100' : ''} !absolute -top-[3.3333333333333335%] left-[2.857142857142857%] h-[37.05882352941177%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img1.alt}
          src="images/career-simulation-geneticist.png"
          breakpoints={[317, 640, 768, 1024]}
          sizes="(min-width: 1024px) 317px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInLeft opacity-100' : ''} !absolute -left-[3.7142857142857144%] -top-[4.901960784313726%] h-[40.78431372549019%] w-[11.285714285714285%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img2.alt}
          src="images/girl.png"
          breakpoints={[79, 640, 768, 1024]}
          sizes="(min-width: 1024px) 79px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInUp opacity-100' : ''} !absolute left-[2.857142857142857%] top-[37.254901960784316%] h-[74.11764705882354%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img3.alt}
          src="images/thinklaw-trending-page.png"
          breakpoints={[317, 640, 768, 1024]}
          sizes="(min-width: 1024px) 317px, 100vw"
        />

        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInDown opacity-100' : ''} !absolute -top-[2.941176470588235%] left-[51.142857142857146%] h-[54.90196078431373%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img4.alt}
          src="images/pack-tracks-form.png"
          breakpoints={[317, 640, 768, 1024]}
          sizes="(min-width: 1024px) 317px, 100vw"
        />

        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInUp opacity-100' : ''} !absolute left-[51.142857142857146%] top-[56.07843137254902%] h-[49.6078431372549%] w-[45.285714285714285%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img5.alt}
          src="images/learning-hub-dashboard.png"
          breakpoints={[317, 640, 768, 1024]}
          sizes="(min-width: 1024px) 317px, 100vw"
        />
      </aside>
    </section>
  );
};
