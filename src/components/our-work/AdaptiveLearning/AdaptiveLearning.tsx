import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We harness the power of adaptive learning to create personalized educational experiences. Our adaptive learning platforms dynamically adjust content and assessments based on each learner's progress and needs, ensuring a tailored and effective learning journey. By leveraging data and analytics, we identify learning patterns and gaps, providing targeted interventions to enhance understanding and retention. This approach not only maximizes engagement but also significantly improves learning outcomes. With Sealworks' adaptive learning solutions, education becomes a customized, responsive experience that meets each learner where they are and helps them achieve their full potential.";

export const AdaptiveLearning: React.FC = () => (
  <section className="relative flex max-w-full gap-5 max-lg:flex-col lg:my-5 lg:mt-16 lg:gap-[20px] lg:pb-16 lg:pt-[17px] xl:gap-[174px]">
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
    <aside className="relative mx-auto grid w-full flex-[0_0_561px] gap-4 bg-red max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[430px] lg:w-[64%] lg:flex-col">
      <div className="lg:absolute lg:-left-[129px] lg:-top-[78px] lg:h-[222px] lg:w-[405px]">
        <StaticImage
          className="lg:h-[222px] lg:w-[405px] lg:object-cover lg:shadow-lg"
          imgClassName="h-auto max-w-full lg:object-top"
          alt="Money Matters Dashboard showing Jayden's financial literacy progress and upcoming events."
          src="images/money-matters-dashboard.png"
          breakpoints={[405, 640, 768, 1024]}
          sizes="(min-width: 1024px) 405px, 100vw"
        />
      </div>

      <div className="lg:absolute lg:-left-[96px] lg:top-[153px] lg:h-[226px] lg:w-[301px]">
        <StaticImage
          className="lg:h-[226px] lg:w-[301px] lg:object-cover lg:shadow-lg"
          imgClassName="h-auto max-w-full lg:object-top"
          alt="Timeline of jazz history, genres, and styles from early New Orleans to contemporary jazz."
          src="images/jazz-history-timeline.png"
          breakpoints={[301, 640, 768, 1024]}
          sizes="(min-width: 1024px) 301px, 100vw"
        />
      </div>

      <div className="lg:absolute lg:-top-[64px] lg:left-[285px] lg:h-[188px] lg:w-[343px]">
        <StaticImage
          className="lg:h-[188px] lg:w-[343px] lg:object-cover lg:shadow-lg"
          imgClassName="h-auto max-w-full lg:object-top"
          alt="Super Saver Contest for financial literacy with badges and progress display for Norah."
          src="images/money-matters-saver-contest.png"
          breakpoints={[343, 640, 768, 1024]}
          sizes="(min-width: 1024px) 343px, 100vw"
        />
      </div>

      <div className="lg:absolute lg:left-[123px] lg:top-[172px] lg:h-[187px] lg:w-[253px]">
        <StaticImage
          className="lg:h-[187px] lg:w-[253px] lg:object-cover lg:shadow-lg"
          imgClassName="h-auto max-w-full lg:object-top"
          alt="Illustration of New Orleans style jazz instruments with educational information on early jazz."
          src="images/jazz-instruments-new-orleans.png"
          breakpoints={[253, 640, 768, 1024]}
          sizes="(min-width: 1024px) 253px, 100vw"
        />
      </div>

      <div className="lg:absolute lg:left-[358px] lg:top-[113px] lg:h-[305px] lg:w-[235px]">
        <StaticImage
          className="lg:h-[305px] lg:w-[235px] lg:object-cover" // no lg:shadow-lg
          imgClassName="h-auto max-w-full lg:object-top"
          alt="Belvedere Engagement Suite showing various vodka products and educational content."
          src="images/belvedere-engagement-suite.png"
          breakpoints={[235, 640, 768, 1024]}
          sizes="(min-width: 1024px) 235px, 100vw"
        />
      </div>

      <div className="hidden lg:absolute lg:left-[294px] lg:top-[205px] lg:block lg:h-[226px] lg:w-[170px]">
        <StaticImage
          className="lg:h-[226px] lg:w-[170px]"
          imgClassName="h-auto max-w-full lg:object-top"
          alt="A hand holding a tablet device"
          src="images/phone.png"
          breakpoints={[170]}
        />
      </div>

      <div className="lg:absolute lg:left-[317px] lg:top-[210px] lg:h-[196px] lg:w-[89px]">
        <StaticImage
          className="rounded-lg lg:h-[196px] lg:w-[89px] lg:object-cover"
          imgClassName="h-auto max-w-full lg:object-top"
          alt="Belvedere Vodka bottle tour with product details on a mobile interface."
          src="images/engage-mh-sealworks.png"
          breakpoints={[89, 640, 768, 1024]}
          sizes="(min-width: 1024px) 89px, 100vw"
        />
      </div>
    </aside>
  </section>
);
