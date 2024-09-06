import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We create digital hubs that foster collaboration and streamline communication within your organization. Our intuitive, user-friendly hubs make it easy for employees to access resources, share information, and connect with colleagues or peers. Designed to integrate your essential tools and resources, these hubs reflect your brand and provide a cohesive user experience. We prioritize customization, tailoring each hub to reflect your company's or user base's culture and become a central, efficient workspace.";

export const DigitalHubs: React.FC = () => {
  return (
    <section className="relative flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-5 lg:gap-[20px] lg:pb-[60px] lg:pt-[17px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="redSticky">digital hubs</UnderlinedText>
            <br />
            <UnderlinedText color="redSticky">LXP & apps</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full flex-[1_0_712px] gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[510px] lg:w-[64%] lg:flex-col lg:bg-red">
        <div className="lg:absolute lg:left-[20px] lg:top-[-17px] lg:h-[189px] lg:w-[317px]">
          <StaticImage
            className="lg:h-[189px] lg:w-[317px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Career simulation interface showing a student character exploring becoming a geneticist, with starting salary information."
            src="images/career-simulation-geneticist.png"
            breakpoints={[317, 640, 768, 1024]}
            sizes="(min-width: 1024px) 317px, 100vw"
          />
        </div>
        <div className="hidden lg:absolute lg:left-[-25px] lg:top-[-26px] lg:block lg:h-[208px] lg:w-[79px]">
          <StaticImage
            className="lg:h-[208px] lg:w-[79px]"
            imgClassName="h-auto max-w-full lg:object-top"
            alt=""
            src="images/girl.png"
            breakpoints={[79, 640, 768, 1024]}
            sizes="(min-width: 1024px) 103px, 100vw"
          />
        </div>
        <div className="lg:absolute lg:left-[20px] lg:top-[190px] lg:h-[378px] lg:w-[317px]">
          <StaticImage
            className="lg:h-[378px] lg:w-[317px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="ThinkLaw page showing trending lessons like space tourism, Halloween task cards, and what's new in critical thinking"
            src="images/thinklaw-trending-page.png"
            breakpoints={[317, 640, 768, 1024]}
            sizes="(min-width: 1024px) 317px, 100vw"
          />
        </div>
        <div className="lg:absolute lg:left-[358px] lg:top-[-15px] lg:h-[280px] lg:w-[317px]">
          <StaticImage
            className="lg:h-[280px] lg:w-[317px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Pack Tracks form for tracking cigarette usage, with inputs for time, place, activity, and mood."
            src="images/pack-tracks-form.png"
            breakpoints={[317, 640, 768, 1024]}
            sizes="(min-width: 1024px) 317px, 100vw"
          />
        </div>
        <div className="lg:absolute lg:left-[358px] lg:top-[286px] lg:h-[253px] lg:w-[317px]">
          <StaticImage
            className="lg:h-[253px] lg:w-[317px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Learning Hub dashboard showing a user's progress, featured learning modules, and recommended learning paths."
            src="images/learning-hub-dashboard.png"
            breakpoints={[317, 640, 768, 1024]}
            sizes="(min-width: 1024px) 317px, 100vw"
            layout="fullWidth"
          />
        </div>
      </aside>
    </section>
  );
};
