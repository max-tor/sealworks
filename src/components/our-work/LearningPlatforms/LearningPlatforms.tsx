import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  'Sealworks crafts learning platforms for the specific needs of your audience and organization. Our process begins with a deep understanding of your educational goals and user requirements, ensuring that every feature and functionality aligns with your vision. We design intuitive interfaces that make learning accessible and enjoyable, incorporating interactive elements to enhance user engagement. We build with scalability and flexibility in mind, allowing for seamless updates and expansions as your needs evolve.';
const description2 =
  'Whether you want to connect to your existing ecosystem, create an island or kick-start a new learning platform, we are here to design and build around your needs. We can connect, share or replace your LMS based on what is best for you, creating a custom workflow that fits your particular set of needs.';

export const LearningPlatforms: React.FC = () => {
  return (
    <section className="relative flex max-w-full gap-5 max-lg:flex-col lg:my-5 lg:mt-16 lg:gap-[20px] lg:pb-16 lg:pt-[17px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="yellowSticky">learning </UnderlinedText>
            <br />
            <UnderlinedText color="yellowSticky">platforms</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">
            {description}
            <br />
            {description2}
          </p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[573px] lg:w-[64%] lg:flex-[1_0_712px] lg:flex-col">
        <StaticImage
          className="lg:h-[797px] lg:w-[562px]"
          imgClassName="h-auto max-w-full lg:object-top"
          alt=""
          src="images/learning-platforms.png"
          breakpoints={[644, 640, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 707px, 100vw"
        />
      </aside>
    </section>
  );
};
