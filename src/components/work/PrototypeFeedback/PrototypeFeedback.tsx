import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  'We use prototyping and feedback loops to ensure our solutions are finely tuned to meet your needs. We start by creating detailed prototypes that allow us to visualize and test key features early in the development process. By gathering feedback from stakeholders and users, we identify areas for improvement and make necessary adjustments before final implementation. This iterative approach allows us to refine our designs and functionalities, ensuring the end product is both effective and user-friendly. Our commitment to continuous feedback and iteration results in high-quality solutions that exceed expectations and deliver outstanding user experiences.';

export const PrototypeFeedback: React.FC = () => {
  return (
    <section className="relative flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-5 lg:gap-[20px] lg:pb-[60px] lg:pt-[17px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="yellowSticky">prototype +</UnderlinedText>
            <br />
            <UnderlinedText color="yellowSticky">feedback</UnderlinedText>
            <br />
            <UnderlinedText color="yellowSticky">loops</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full flex-[1_0_712px] gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[573px] lg:w-[64%] lg:flex-col">
        <div className="lg:absolute lg:left-[106px] lg:top-0 lg:h-[222px] lg:w-[297px]">
          <StaticImage
            className="lg:h-[222px] lg:w-[297px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Tablet view showing feedback and analysis on learning progress, including a welcome video and integration video with responses."
            src="images/feedback-analysis.png"
            breakpoints={[297, 1024]}
            sizes="(min-width: 1024px) 297px, 100vw"
          />
        </div>

        <div className="lg:absolute lg:left-0 lg:top-0 lg:h-[241px] lg:w-[119px]">
          <StaticImage
            className="lg:h-[241px] lg:w-[119px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Digital sticky notes brainstorming session displaying various topics like search, personalization, and content management"
            src="images/sticky-notes-ideas.svg"
            breakpoints={[119, 1024]}
            sizes="(min-width: 1024px) 119px, 100vw"
          />
        </div>

        <div className="lg:absolute lg:left-[122px] lg:top-[414px] lg:h-[266px] lg:w-[149px]">
          <StaticImage
            className="lg:h-[149px] lg:w-[266px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Voting session for ideas with color-coded sticky notes across categories like search, content, personalization, and managing content."
            src="images/voting-ideas-session.png"
            breakpoints={[266, 1024]}
            sizes="(min-width: 1024px) 266px, 100vw"
          />
        </div>

        <div className="lg:absolute lg:left-[391px] lg:top-[244px] lg:h-[281px] lg:w-[299px]">
          <StaticImage
            className="lg:h-[281px] lg:w-[299px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="A half-drawn and half-digital interface showing feedback and progress analysis on a learning platform."
            src="images/learning-platform-feedback.png"
            breakpoints={[299, 1024]}
            sizes="(min-width: 1024px) 299px, 100vw"
          />
        </div>

        <div className="lg:absolute lg:left-[51px] lg:top-[197px] lg:h-[266px] lg:w-[357px]">
          <StaticImage
            className="lg:h-[266px] lg:w-[357px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Consensus session showing top-voted sticky notes for defining 'MyModerna,' with keywords like 'easy to search' and 'collaboration'."
            src="images/consensus-definition-session.png"
            breakpoints={[357, 1024]}
            sizes="(min-width: 1024px) 357px, 100vw"
          />
        </div>

        <div className="lg:absolute lg:-top-[15px] lg:left-[365px] lg:h-[259px] lg:w-[352px]">
          <StaticImage
            className="lg:h-[259px] lg:w-[352px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Interactive annotation tool on a tablet, with options for color coding and extra notes, illustrating an educational exercise"
            src="images/interactive-annotation.png"
            breakpoints={[352, 1024]}
            sizes="(min-width: 1024px) 352px, 100vw"
          />
        </div>
      </aside>
    </section>
  );
};
