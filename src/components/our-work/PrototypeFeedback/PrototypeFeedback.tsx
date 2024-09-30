import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';

const description =
  'We use prototyping and feedback loops to ensure our solutions are finely tuned to meet your needs. We start by creating detailed prototypes that allow us to visualize and test key features early in the development process. By gathering feedback from stakeholders and users, we identify areas for improvement and make necessary adjustments before final implementation. This iterative approach allows us to refine our designs and functionalities, ensuring the end product is both effective and user-friendly. Our commitment to continuous feedback and iteration results in high-quality solutions that exceed expectations and deliver outstanding user experiences.';

// const blockWidth = 719;
// const blockHeight = 548;

const img0 = {
  top: 12,
  left: 26,
  width: 370,
  height: 219,
  alt: 'Collaborative activity to find patterns in feedback and determine user-focused solutions.',
};

const img1 = {
  top: 256,
  left: 400,
  width: 299,
  height: 281,
  alt: 'Dot activity to gather feedback, prioritize, and create a best-in-class custom application.',
};
const img2 = {
  top: 12,
  left: 2,
  width: 119,
  height: 241,
  alt: 'Sketch wireframe of an interactive app for user learning.',
};

const img3 = {
  top: 378,
  left: 82,
  width: 304,
  height: 170,
  alt: 'Collaborative platform with sticky notes to capture ideas, analyze patterns, and plan next steps.',
};

const img4 = {
  top: 209,
  left: 53,
  width: 357,
  height: 266,
  alt: 'Interactive platform helping students develop critical thinking skills through critical thinking, analysis and writing.',
};
const img5 = {
  top: 2,
  left: 357,
  width: 352,
  height: 259,
  alt: 'User feedback and analysis screen after interactive gaming simulation with quick actions and skill tips.',
};

export const PrototypeFeedback: React.FC = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

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
      <aside
        ref={ref}
        className="relative mx-auto grid h-[76.21696801112657vw] w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[548px] lg:w-[719px] lg:flex-[1_0_712px] lg:flex-col"
      >
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute left-[3.616133518776078%] top-[2.18978102189781%] h-[39.96350364963504%] w-[51.46036161335188%] opacity-0 shadow-lg`}
          alt={img0.alt}
          src="images/learning-platform-feedback.png"
          breakpoints={[370, 537]}
          sizes="(min-width: 1024px) 370px, 537px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[55.63282336578581%] top-[46.715328467153284%] h-[51.277372262773724%] w-[41.58553546592489%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img1.alt}
          src="images/dot-activity-feedback-analysis.png"
          breakpoints={[299, 426]}
          sizes="(min-width: 1024px) 299px, 426px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute left-[0.27816411682892905%] top-[2.18978102189781%] h-[43.97810218978102%] w-[16.550764951321277%] opacity-0`}
          alt={img2.alt}
          src="images/sketch-wireframe-ux.png"
          breakpoints={[119, 169]}
          sizes="(min-width: 1024px) 119px, 169px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[11.404728789986091%] top-[68.97810218978103%] h-[31.02189781021898%] w-[42.698191933240615%] opacity-0 shadow-lg`}
          alt={img3.alt}
          src="images/sticky-brainstorming.png"
          breakpoints={[304, 433]}
          sizes="(min-width: 1024px) 304px, 433px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[7.37134909596662%] top-[38.13868613138686%] h-[48.54014598540146%] w-[49.65229485396384%] opacity-0`}
          alt={img4.alt}
          src="images/dbq-concept-reality-platform.png"
          breakpoints={[357, 508]}
          sizes="(min-width: 1024px) 357px, 508px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[49.65229485396384%] top-[0.36496350364963503%] h-[47.262773722627735%] w-[48.95688456189152%] opacity-0`}
          alt={img5.alt}
          src="images/sketch-feedback-analysis-simulation-results.png"
          breakpoints={[352, 501]}
          sizes="(min-width: 1024px) 352px, 501px"
        />
      </aside>
    </section>
  );
};
