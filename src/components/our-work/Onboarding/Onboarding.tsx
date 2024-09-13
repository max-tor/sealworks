import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We create unique onboarding experiences that are tailored to seamlessly integrate new users into your teams. By understanding your organization's culture and goals, we design onboarding processes that are engaging, informative, and user-friendly. Our team utilizes interactive elements and personalized content to ensure new users feel welcomed and confident in navigating their new environment. We prioritize clear communication and continuous support, making the transition smooth and enjoyable. With Sealworks, onboarding becomes a positive and impactful first step in the user journey, setting the stage for long-term success.";

export const Onboarding: React.FC = () => {
  return (
    <section className="relative my-5 flex max-w-full gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="blueSticky">onboarding</UnderlinedText>
          </h2>
          <p className="mt-10">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:w-[64%] lg:flex-[0_0_613px] lg:flex-col">
        <StaticImage
          className="lg:h-[669px] lg:w-[673px]"
          imgClassName="h-auto max-w-full"
          alt=""
          src="images/onboarding.png"
          breakpoints={[640, 673, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 673px, 100vw"
        />
      </aside>
    </section>
  );
};
