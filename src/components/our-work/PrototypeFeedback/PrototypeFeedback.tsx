import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  'We use prototyping and feedback loops to ensure our solutions are finely tuned to meet your needs. We start by creating detailed prototypes that allow us to visualize and test key features early in the development process. By gathering feedback from stakeholders and users, we identify areas for improvement and make necessary adjustments before final implementation. This iterative approach allows us to refine our designs and functionalities, ensuring the end product is both effective and user-friendly. Our commitment to continuous feedback and iteration results in high-quality solutions that exceed expectations and deliver outstanding user experiences.';

export const PrototypeFeedback: React.FC = () => {
  return (
    <section className="relative my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="yellowSticky">prototype +</UnderlinedText>
            <UnderlinedText color="yellowSticky">feedback</UnderlinedText>
            <UnderlinedText color="yellowSticky">loops</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:w-[64%] lg:flex-[1_0_712px] lg:flex-col">
        <StaticImage
          className="lg:h-[546px] lg:w-[716px]"
          imgClassName="object-fill"
          alt=""
          src="images/prototype_feedback_loops.png"
          breakpoints={[640, 716, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 716px, 100vw"
        />
      </aside>
    </section>
  );
};
