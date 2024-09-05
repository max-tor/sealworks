import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We create digital hubs that foster collaboration and streamline communication within your organization. Our intuitive, user-friendly hubs make it easy for employees to access resources, share information, and connect with colleagues or peers. Designed to integrate your essential tools and resources, these hubs reflect your brand and provide a cohesive user experience. We prioritize customization, tailoring each hub to reflect your company's or user base's culture and become a central, efficient workspace.";

export const DigitalHubs: React.FC = () => {
  return (
    <section className="md:my-5">
      <div className="relative flex flex-row-reverse gap-5 max-md:flex-col md:gap-[116px] md:pb-[60px] md:pt-[17px]">
        <div className="ml-5 flex w-[36%] flex-col max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-black max-md:mt-10">
            <h2 className="w-[400px] text-7xl leading-[70px] max-md:text-4xl max-md:leading-10">
              <UnderlinedText color="redSticky">digital hubs</UnderlinedText>{' '}
              <UnderlinedText color="redSticky">LXP & apps</UnderlinedText>
            </h2>
            <p className="mt-10 text-base leading-6">{description}</p>
          </div>
        </div>
        <aside className="max-md:gr relative mx-auto grid w-full gap-4 max-md:ml-0 max-md:mt-10 max-md:w-full max-md:max-w-full md:h-[510px] md:w-[64%] md:flex-col md:bg-red">
          <div className="md:absolute md:left-[20px] md:top-[-17px] md:h-[189px] md:w-[317px]">
            <StaticImage
              className="md:h-[189px] md:w-[317px] md:object-cover md:shadow-lg"
              imgClassName="h-auto max-w-full md:object-top"
              alt="Career simulation interface showing a student character exploring becoming a geneticist, with starting salary information."
              src="images/career-simulation-geneticist.png"
              breakpoints={[317, 768]}
              sizes="(min-width: 768px) 317px, 100vw"
            />
          </div>
          <div className="hidden md:absolute md:left-[-25px] md:top-[-26px] md:block md:h-[208px] md:w-[79px]">
            <StaticImage
              className="md:h-[208px] md:w-[79px]"
              imgClassName="h-auto max-w-full md:object-top"
              alt=""
              src="images/girl.png"
              breakpoints={[79, 768]}
              sizes="(min-width: 768px) 103px, 100vw"
            />
          </div>
          <div className="md:absolute md:left-[20px] md:top-[190px] md:h-[378px] md:w-[317px]">
            <StaticImage
              className="md:h-[378px] md:w-[317px] md:object-cover md:shadow-lg"
              imgClassName="h-auto max-w-full md:object-top"
              alt="ThinkLaw page showing trending lessons like space tourism, Halloween task cards, and what's new in critical thinking"
              src="images/thinklaw-trending-page.png"
              breakpoints={[317, 768]}
              sizes="(min-width: 768px) 317px, 100vw"
            />
          </div>
          <div className="md:absolute md:left-[358px] md:top-[-15px] md:h-[280px] md:w-[317px]">
            <StaticImage
              className="md:h-[280px] md:w-[317px] md:object-cover md:shadow-lg"
              imgClassName="h-auto max-w-full md:object-top"
              alt="Pack Tracks form for tracking cigarette usage, with inputs for time, place, activity, and mood."
              src="images/pack-tracks-form.png"
              breakpoints={[317, 768]}
              sizes="(min-width: 768px) 317px, 100vw"
            />
          </div>
          <div className="md:absolute md:left-[358px] md:top-[286px] md:h-[253px] md:w-[317px]">
            <StaticImage
              className="md:h-[253px] md:w-[317px] md:object-cover md:shadow-lg"
              imgClassName="h-auto max-w-full md:object-top"
              alt="Learning Hub dashboard showing a user's progress, featured learning modules, and recommended learning paths."
              src="images/learning-hub-dashboard.png"
              breakpoints={[317, 768]}
              sizes="(min-width: 768px) 317px, 100vw"
              layout="fullWidth"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};
