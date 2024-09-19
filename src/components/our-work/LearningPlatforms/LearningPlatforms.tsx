import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  'Sealworks crafts learning platforms for the specific needs of your audience and organization. Our process begins with a deep understanding of your educational goals and user requirements, ensuring that every feature and functionality aligns with your vision. We design intuitive interfaces that make learning accessible and enjoyable, incorporating interactive elements to enhance user engagement. We build with scalability and flexibility in mind, allowing for seamless updates and expansions as your needs evolve.';
const description2 =
  'Whether you want to connect to your existing ecosystem, create an island or kick-start a new learning platform, we are here to design and build around your needs. We can connect, share or replace your LMS based on what is best for you, creating a custom workflow that fits your particular set of needs.';

const blockWidth = 712;
const blockHeight = 513;

// images/connect-reading-supporting-details.png
const img1 = {
  top: -29,
  left: 24,
  width: 315,
  height: 217,
  alt: 'Video tutorial on identifying supporting details on Connect Reading platform',
};
// images/metrics-performance-summary.jpg
const img2 = {
  top: 219,
  left: 65,
  width: 274,
  height: 284,
  alt: 'Metrics dashboard summarizing average performance and learning assignments.',
};

// images/my-learning-homepage.jpg
const img3 = {
  top: -59,
  left: 365,
  width: 304,
  height: 297,
  alt: 'MyLearning homepage with learning paths and featured learning modules.',
};

// images/aon-learning-dashboard.jpg
const img4 = {
  top: 271,
  left: 365,
  width: 323,
  height: 221,
  alt: 'Aon learning platform with a search bar and new learning topics.',
};

// showImagesInfo({ blockWidth, blockHeight, images: [img1, img2, img3, img4] });

export const LearningPlatforms = () => {
  return (
    <section className="relative my-5 flex max-w-full gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="yellowSticky">learning </UnderlinedText>
            <UnderlinedText color="yellowSticky">platforms</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10 text-base leading-6">{description}</p>
          <p className="mt-5 text-base leading-6">{description2}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid h-[72.0505617977528vw] w-[64%] gap-4 bg-yellow max-lg:ml-0 max-lg:mt-[11.500974658869396%] max-lg:w-full max-lg:max-w-full lg:h-[513px] lg:w-full lg:flex-[1_0_712px] lg:flex-col">
        <StaticImage
          className="!absolute -top-[5.653021442495127%] left-[3.3707865168539324%] h-[42.30019493177387%] w-[44.241573033707866%] lg:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt={img1.alt}
          src="images/connect-reading-supporting-details.png"
          breakpoints={[img1.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 315px, 100vw"
        />

        <StaticImage
          className="!absolute left-[9.129213483146067%] top-[42.69005847953216%] h-[55.36062378167641%] w-[38.48314606741573%] lg:shadow-lg"
          imgClassName="h-auto max-w-full object-top"
          alt={img2.alt}
          src="images/metrics-performance-summary.png"
          breakpoints={[img2.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 274px, 100vw"
        />

        <StaticImage
          className="!absolute -top-[11.500974658869396%] left-[51.26404494382022%] h-[57.89473684210527%] w-[42.69662921348314%] object-cover lg:shadow-lg"
          imgClassName="h-auto max-w-full object-top"
          alt={img3.alt}
          src="images/my-learning-homepage.png"
          breakpoints={[img3.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 304px, 100vw"
        />

        <StaticImage
          className="!absolute left-[51.26404494382022%] top-[52.826510721247566%] h-[43.07992202729044%] w-[45.36516853932584%] object-cover lg:shadow-lg"
          imgClassName="h-auto max-w-full object-top"
          alt={img4.alt}
          src="images/aon-learning-dashboard.png"
          breakpoints={[img4.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 323px, 100vw"
        />
      </aside>
    </section>
  );
};
