import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';

const description =
  "We create unique onboarding experiences that are tailored to seamlessly integrate new users into your teams. By understanding your organization's culture and goals, we design onboarding processes that are engaging, informative, and user-friendly. Our team utilizes interactive elements and personalized content to ensure new users feel welcomed and confident in navigating their new environment. We prioritize clear communication and continuous support, making the transition smooth and enjoyable. With Sealworks, onboarding becomes a positive and impactful first step in the user journey, setting the stage for long-term success.";

// const blockWidth = 673;
// const blockHeight = 668;

const img1 = {
  top: 0,
  left: 242,
  width: 431,
  height: 235,
  alt: 'Engaging learning menu with creative choices for exploration.',
};
const img2 = {
  top: 418,
  left: 418,
  width: 255,
  height: 182,
  alt: 'New element pages for easier content discovery and learning.',
};
const img3 = {
  top: 381,
  left: 79,
  width: 304,
  height: 287,
  alt: 'Multilingual dashboard connecting users for focused learning across languages.',
};

const img4 = {
  top: 234,
  left: 390,
  width: 283,
  height: 167,
  alt: 'Multilingual dashboard connecting users for focused learning across languages.',
};

const img5 = {
  top: 128,
  left: 0,
  width: 335,
  height: 240,
  alt: 'User dashboard to track progress and quickly resume learning.',
};

export const Onboarding = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

  return (
    <section className="relative my-5 flex max-w-full gap-5 max-lg:flex-col lg:my-14 lg:mt-[75px] lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="blueSticky">onboarding</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10">{description}</p>
        </div>
      </div>
      <aside
        ref={ref}
        className="relative grid h-[99.25705794947994vw] lg:h-[668px] lg:w-[673px] lg:flex-[0_0_613px] lg:flex-col"
      >
        <div className="!absolute left-[5.794947994056463%] top-[12.724550898203594%] h-[79.94011976047905%] w-[91.08469539375929%] bg-blue shadow-lg"></div>
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute left-[35.95839524517088%] top-0 h-[35.17964071856288%] w-[64.04160475482912%] opacity-0`}
          alt={img1.alt}
          src="images/diversity_training_dialogues_modules.png"
          breakpoints={[431, 656]}
          sizes="(min-width: 1024px) 431px, 656px"
        />
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[62.10995542347697%] top-[62.5748502994012%] h-[27.245508982035926%] w-[37.89004457652303%] opacity-0 shadow-lg`}
          alt={img2.alt}
          src="images/mod_onboarding_resources.png"
          breakpoints={[255, 388]}
          sizes="(min-width: 1024px) 255px, 388px"
        />

        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[11.738484398216938%] top-[57.035928143712574%] h-[42.964071856287426%] w-[45.17087667161962%] opacity-0 shadow-lg`}
          alt={img3.alt}
          src="images/everboarding_dashboard_blossoms.png"
          breakpoints={[304, 463]}
          sizes="(min-width: 1024px) 304px, 463px"
        />

        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[57.94947994056464%] top-[35.029940119760475%] h-1/4 w-[42.050520059435364%] opacity-0 shadow-lg`}
          alt={img4.alt}
          src="images/deep_principles_learning.png"
          breakpoints={[283, 431]}
          sizes="(min-width: 1024px) 283px, 431px"
        />

        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute left-0 top-[19.16167664670659%] h-[35.92814371257485%] w-[49.77711738484398%] opacity-0 shadow-lg`}
          alt={img5.alt}
          src="images/lifeguarding_course_modules.png"
          breakpoints={[335, 510]}
          sizes="(min-width: 1024px) 335px, 510px"
        />
      </aside>
    </section>
  );
};
