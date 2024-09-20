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
  alt: 'A half-drawn and half-digital interface showing feedback and progress analysis on a learning platform.',
};

const img1 = {
  top: 256,
  left: 393,
  width: 299,
  height: 281,
  alt: 'Tablet view showing feedback and analysis on learning progress, including a welcome video and integration video with responses.',
};
const img2 = {
  top: 12,
  left: 2,
  width: 119,
  height: 241,
  alt: 'Digital sticky notes brainstorming session displaying various topics like search, personalization, and content management',
};

const img3 = {
  top: 378,
  left: 82,
  width: 307,
  height: 170,
  alt: 'Voting session for ideas with color-coded sticky notes across categories like search, content, personalization, and managing content.',
};

const img4 = {
  top: 209,
  left: 53,
  width: 357,
  height: 266,
  alt: "Consensus session showing top-voted sticky notes for defining 'MyModerna,' with keywords like 'easy to search' and 'collaboration'.",
};
const img5 = {
  top: 2,
  left: 357,
  width: 352,
  height: 259,
  alt: 'Interactive annotation tool on a tablet, with options for color coding and extra notes, illustrating an educational exercise.',
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
          imgClassName="object-fill"
          alt={img0.alt}
          src="images/learning-platform-feedback.png"
          breakpoints={[219, 640, 768, 1024]}
          sizes="(min-width: 1024px) 219px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[54.65924895688457%] top-[46.715328467153284%] h-[51.277372262773724%] w-[41.58553546592489%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img1.alt}
          src="images/feedback-analysis.png"
          breakpoints={[299, 640, 768, 1024]}
          sizes="(min-width: 1024px) 299px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute left-[0.27816411682892905%] top-[2.18978102189781%] h-[43.97810218978102%] w-[16.550764951321277%] opacity-0`}
          imgClassName="object-fill"
          alt={img2.alt}
          src="images/sticky-notes-ideas.png"
          breakpoints={[119, 640, 768, 1024]}
          sizes="(min-width: 1024px) 119px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[11.404728789986091%] top-[68.97810218978103%] h-[31.02189781021898%] w-[42.698191933240615%] opacity-0 shadow-lg`}
          imgClassName="object-fill"
          alt={img3.alt}
          src="images/voting-ideas-session.png"
          breakpoints={[170, 640, 768, 1024]}
          sizes="(min-width: 1024px) 170px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[7.37134909596662%] top-[38.13868613138686%] h-[48.54014598540146%] w-[49.65229485396384%] opacity-0`}
          imgClassName="object-fill"
          alt={img4.alt}
          src="images/consensus-definition-session.png"
          breakpoints={[357, 640, 768, 1024]}
          sizes="(min-width: 1024px) 357px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[49.65229485396384%] top-[0.36496350364963503%] h-[47.262773722627735%] w-[48.95688456189152%] opacity-0`}
          imgClassName="object-fill"
          alt={img5.alt}
          src="images/interactive-annotation.png"
          breakpoints={[352, 640, 768, 1024]}
          sizes="(min-width: 1024px) 352px, 100vw"
        />
      </aside>
    </section>
  );
};
