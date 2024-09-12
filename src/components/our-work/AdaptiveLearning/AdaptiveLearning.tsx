import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We harness the power of adaptive learning to create personalized educational experiences. Our adaptive learning platforms dynamically adjust content and assessments based on each learner's progress and needs, ensuring a tailored and effective learning journey. By leveraging data and analytics, we identify learning patterns and gaps, providing targeted interventions to enhance understanding and retention. This approach not only maximizes engagement but also significantly improves learning outcomes. With Sealworks' adaptive learning solutions, education becomes a customized, responsive experience that meets each learner where they are and helps them achieve their full potential.";

export const AdaptiveLearning: React.FC = () => (
  <section className="relative my-5 flex max-w-full gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[174px]">
    <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
      <div className="text-black max-lg:mt-10">
        <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
          <UnderlinedText color="redSticky">adaptive</UnderlinedText>
          <br />
          <UnderlinedText color="redSticky">learning</UnderlinedText>
        </h2>
        <p className="mt-10 text-base leading-6">{description}</p>
      </div>
    </div>
    <aside className="relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[430px] lg:w-[64%] lg:flex-[0_0_561px] lg:flex-col">
      <StaticImage
        className="lg:h-[509px] lg:w-[757px]"
        imgClassName="h-auto max-w-full"
        alt=""
        src="images/adaptive_learning.png"
        breakpoints={[640, 757, 768, 1024, 1280]}
        sizes="(min-width: 1280px) 757px, 100vw"
      />
    </aside>
  </section>
);
