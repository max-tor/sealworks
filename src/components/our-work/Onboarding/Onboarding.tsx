import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We create unique onboarding experiences that are tailored to seamlessly integrate new users into your teams. By understanding your organization's culture and goals, we design onboarding processes that are engaging, informative, and user-friendly. Our team utilizes interactive elements and personalized content to ensure new users feel welcomed and confident in navigating their new environment. We prioritize clear communication and continuous support, making the transition smooth and enjoyable. With Sealworks, onboarding becomes a positive and impactful first step in the user journey, setting the stage for long-term success.";

export const Onboarding: React.FC = () => {
  return (
    <section className="relative flex max-w-full gap-5 max-lg:flex-col lg:my-5 lg:mt-16 lg:gap-[20px] lg:pb-16 lg:pt-[17px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="blueSticky">onboarding</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full flex-[0_0_613px] gap-4 bg-blue max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[535px] lg:w-[64%] lg:flex-col">
        <div className="absolute -top-[86px] right-0 hidden size-1/2 select-none lg:left-[203px] lg:right-auto lg:block lg:h-[336px] lg:w-[431px]">
          <StaticImage
            className="lg:h-[336px] lg:w-[431px]"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="A hand holding a tablet device"
            src="images/tablet.png"
            breakpoints={[431]}
          />
        </div>

        <div className="absolute -top-[30px] left-0 size-1/2 lg:-top-[60px] lg:left-[275px] lg:h-[190px] lg:w-[255px]">
          <StaticImage
            className="lg:h-[190px] lg:w-[255px] lg:object-cover"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Diversity training modules on dignity, discipline, diligence, and diplomacy."
            src="images/diversity_training_dialogues_modules.jpg"
            breakpoints={[255, 640, 768, 1024]}
            sizes="(min-width: 1024px) 255px, 100vw"
          />
        </div>

        <div className="absolute top-[120px] size-1/2 lg:-left-[39px] lg:top-[43px] lg:h-[240px] lg:w-[335px]">
          <StaticImage
            className="lg:h-[240px] lg:w-[335px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Moderna onboarding resources page for new employees, full-time employees, and managers."
            src="images/moderna_onboarding_resources.jpg"
            breakpoints={[335, 640, 768, 1024]}
            sizes="(min-width: 1024px) 335px, 100vw"
          />
        </div>

        <div className="absolute left-[40px] top-[296px] size-1/2 lg:h-[287px] lg:w-[304px]">
          <StaticImage
            className="lg:h-[287px] lg:w-[304px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Everboarding dashboard showing collected blossoms and available learning journeys."
            src="images/everboarding_dashboard_blossoms.jpg"
            breakpoints={[304, 640, 768, 1024]}
            sizes="(min-width: 1024px) 304px, 100vw"
          />
        </div>

        <div className="absolute right-0 top-0 size-1/2 lg:left-[351px] lg:right-auto lg:top-[149px] lg:h-[167px] lg:w-[283px]">
          <StaticImage
            className="lg:h-[167px] lg:w-[283px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Deep principles learning page with modules on direct, empathetic, earnest, and productive learning paths."
            src="images/deep_principles_learning.jpg"
            breakpoints={[283, 640, 768, 1024]}
            sizes="(min-width: 1024px) 283px, 100vw"
          />
        </div>

        <div className="absolute right-0 top-[333px] size-1/2 lg:left-[379px] lg:right-auto lg:h-[182px] lg:w-[255px]">
          <StaticImage
            className="lg:h-[182px] lg:w-[255px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Lifeguarding course modules with progress tracking and completion details."
            src="images/lifeguarding_course_modules.jpg"
            breakpoints={[255, 640, 768, 1024]}
            sizes="(min-width: 1024px) 255px, 100vw"
          />
        </div>
      </aside>
    </section>
  );
};
