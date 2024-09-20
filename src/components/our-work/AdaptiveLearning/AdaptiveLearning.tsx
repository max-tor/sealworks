import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We harness the power of adaptive learning to create personalized educational experiences. Our adaptive learning platforms dynamically adjust content and assessments based on each learner's progress and needs, ensuring a tailored and effective learning journey. By leveraging data and analytics, we identify learning patterns and gaps, providing targeted interventions to enhance understanding and retention. This approach not only maximizes engagement but also significantly improves learning outcomes. With Sealworks' adaptive learning solutions, education becomes a customized, responsive experience that meets each learner where they are and helps them achieve their full potential.";

// const blockWidth = 757;
// const blockHeight = 509;

const img1 = {
  top: 0,
  left: 0,
  width: 405,
  height: 222,
  alt: "Money Matters Dashboard showing Jayden's financial literacy progress and upcoming events.",
};

const img2 = {
  top: 231,
  left: 33,
  width: 301,
  height: 226,
  alt: 'Timeline of jazz history, genres, and styles from early New Orleans to contemporary jazz.',
};

const img3 = {
  top: 14,
  left: 414,
  width: 343,
  height: 188,
  alt: 'Super Saver Contest for financial literacy with badges and progress display for Norah.',
};

const img4 = {
  top: 250,
  left: 252,
  width: 253,
  height: 187,
  alt: 'Illustration of New Orleans style jazz instruments with educational information on early jazz.',
};

const img5 = {
  top: 191,
  left: 487,
  width: 235,
  height: 305,
  alt: 'Belvedere Engagement Suite showing various vodka products and educational content.',
};

const img6 = {
  top: 283,
  left: 423,
  width: 170,
  height: 226,
  alt: 'Belvedere Vodka bottle tour with product details on a mobile interface.',
};

export const AdaptiveLearning: React.FC = () => (
  <section className="relative flex max-w-full gap-5 max-lg:flex-col lg:gap-[20px] xl:gap-[174px]">
    <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
      <div className="text-black max-lg:mt-10">
        <HeaderContainer>
          <UnderlinedText color="redSticky">adaptive</UnderlinedText>
          <UnderlinedText color="redSticky">learning</UnderlinedText>
        </HeaderContainer>
        <p className="mt-10">{description}</p>
      </div>
    </div>
    <aside className="relative grid h-[67.23910171730515vw] gap-4 lg:h-[509px] lg:w-[757px] lg:flex-[0_0_757px] lg:flex-col">
      <div className="!absolute left-[17.040951122853368%] top-[15.324165029469548%] h-[80.74656188605108%] w-[74.10832232496698%] bg-red shadow-lg"></div>
      <StaticImage
        className="!absolute left-0 top-0 h-[43.614931237721024%] w-[53.5006605019815%] shadow-lg"
        imgClassName="object-fill"
        alt={img1.alt}
        src="images/money-matters-dashboard.png"
        breakpoints={[405, 640, 768, 1024]}
        sizes="(min-width: 1024px) 405px, 100vw"
      />
      <StaticImage
        className="!absolute left-[4.359313077939234%] top-[45.383104125736736%] h-[44.4007858546169%] w-[39.76221928665786%] shadow-lg"
        imgClassName="object-fill"
        alt={img2.alt}
        src="images/jazz-history-timeline.png"
        breakpoints={[301, 640, 768, 1024]}
        sizes="(min-width: 1024px) 301px, 100vw"
      />
      <StaticImage
        className="!absolute left-[54.689564068692206%] top-[2.75049115913556%] h-[36.93516699410609%] w-[45.310435931307794%] shadow-lg"
        imgClassName="object-fill"
        alt={img3.alt}
        src="images/money-matters-saver-contest.png"
        breakpoints={[343, 640, 768, 1024]}
        sizes="(min-width: 1024px) 343px, 100vw"
      />

      <StaticImage
        className="!absolute left-[33.2892998678996%] top-[49.115913555992144%] h-[36.73870333988212%] w-[33.42140026420079%] shadow-lg"
        imgClassName="object-fill"
        alt={img4.alt}
        src="images/jazz-instruments-new-orleans.png"
        breakpoints={[235, 640, 768, 1024]}
        sizes="(min-width: 1024px) 253px, 100vw"
      />

      <StaticImage
        className="!absolute left-[64.33289299867899%] top-[37.524557956778%] h-[59.921414538310415%] w-[31.04359313077939%]"
        imgClassName="object-fill"
        alt={img5.alt}
        src="images/belvedere-engagement-suite.png"
        breakpoints={[235, 640, 768, 1024]}
        sizes="(min-width: 1024px) 253px, 100vw"
      />

      <StaticImage
        className="!absolute left-[55.878467635402906%] top-[55.5992141453831%] h-[44.4007858546169%] w-[22.457067371202115%] shadow-lg"
        imgClassName="object-fill"
        alt={img6.alt}
        src="images/engage-mh-sealworks.png"
        breakpoints={[170, 640, 768, 1024]}
        sizes="(min-width: 1024px) 170px, 100vw"
      />
    </aside>
  </section>
);
