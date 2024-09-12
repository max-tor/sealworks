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
      <aside className="relative mx-auto grid w-[64%] flex-[1_0_712px] gap-4 bg-yellow max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[573px] lg:w-full lg:flex-col">
        <div className="absolute -top-[29px] right-0 h-[217px] w-[315px] lg:left-[24px] lg:right-auto">
          <StaticImage
            className="lg:h-[217px] lg:w-[315px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Video tutorial on identifying supporting details on Connect Reading platform."
            src="images/connect-reading-supporting-details.jpg"
            breakpoints={[315, 640, 768, 1024]}
            sizes="(min-width: 1024px) 315px, 100vw"
          />
        </div>

        <div className="absolute right-0 top-[219px] w-3/5 lg:left-[65px] lg:right-auto lg:h-[284px] lg:w-[274px]">
          <StaticImage
            className="lg:h-[284px] lg:w-[274px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Metrics dashboard summarizing average performance and learning assignments."
            src="images/metrics-performance-summary.jpg"
            breakpoints={[284, 640, 768, 1024]}
            sizes="(min-width: 1024px) 284px, 100vw"
          />
        </div>

        <div className="absolute left-0 top-0 w-[200px] lg:-top-[59px] lg:left-[365px] lg:h-[297px] lg:w-[304px]">
          <StaticImage
            className="lg:h-[297px] lg:w-[304px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="MyLearning homepage with learning paths and featured learning modules."
            src="images/my-learning-homepage.jpg"
            breakpoints={[304, 640, 768, 1024]}
            sizes="(min-width: 1024px) 304px, 100vw"
          />
        </div>

        <div className="absolute top-[320px] w-[200px] lg:left-[365px] lg:top-[271px] lg:h-[221px] lg:w-[323px]">
          <StaticImage
            className="lg:h-[221px] lg:w-[323px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Aon learning platform with a search bar and new learning topics."
            src="images/aon-learning-dashboard.jpg"
            breakpoints={[323, 640, 768, 1024]}
            sizes="(min-width: 1024px) 323px, 100vw"
          />
        </div>
      </aside>
    </section>
  );
};
