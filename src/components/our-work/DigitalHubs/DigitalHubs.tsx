import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We create digital hubs that foster collaboration and streamline communication within your organization. Our intuitive, user-friendly hubs make it easy for employees to access resources, share information, and connect with colleagues or peers. Designed to integrate your essential tools and resources, these hubs reflect your brand and provide a cohesive user experience. We prioritize customization, tailoring each hub to reflect your company's or user base's culture and become a central, efficient workspace.";

export const DigitalHubs: React.FC = () => {
  return (
    <section className="relative my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="redSticky">digital hubs</UnderlinedText>
            <UnderlinedText color="redSticky">LXP & apps</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:w-[64%] lg:flex-[1_0_712px] lg:flex-col lg:bg-red">
        <StaticImage
          className="lg:h-[594px] lg:w-[724px]"
          imgClassName="h-auto max-w-full object-cover lg:shadow-lg"
          alt=""
          src="images/digital-hubs.png"
          breakpoints={[640, 723, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 724px, 100vw"
        />
      </aside>
    </section>
  );
};
