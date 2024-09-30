import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';
import { showImagesInfo } from '@/utils';

const description1 =
  'We specialize in *creating unique interactions* that *captivate* and *engage* users. Our designs focus on intuitive, responsive elements that make every interaction seamless and enjoyable. By incorporating innovative technologies and user-centric design principles, we ensure each touchpoint is memorable and impactful.';
const description2 =
  'These unique interactions foster deeper connections between users and your digital platform, enhancing overall user satisfaction. With Sealworks, your digital experiences stand out, leaving a lasting impression through creativity and thoughtful design.';

function highlight(text: string) {
  const parts = text.split('*');

  return parts.map((part, i) => {
    if (i % 2 === 0) return part;

    return (
      <span key={`highlight-${i}`} className="font-bold text-red">
        {part}
      </span>
    );
  });
}

// const blockWidth = 702;
// const blockHeight = 628;

const img1 = {
  top: 0,
  left: 17,
  width: 263,
  height: 183,
  alt: 'Interactive budgeting activity for determining income and expenses with engaging design focusing on task at hand.',
};

const img2 = {
  top: 207,
  left: 17,
  width: 277,
  height: 200,
  alt: 'Learning activity on budgeting and improving financial skills.',
};
const img3 = {
  top: 431,
  left: 16,
  width: 279,
  height: 193,
  alt: 'Students learning crisis management skills for emergency situations.',
};

const img4 = {
  top: 9,
  left: 340,
  width: 345,
  height: 371,
  alt: 'Mastering critical thinking with interactive tools and resources.',
};

const img5 = {
  top: 357,
  left: 324,
  width: 365,
  height: 272,
  alt: 'Engaging media for reading, thinking, and writing through interactive activities.',
};

const img6 = {
  top: 86,
  left: 209,
  width: 257,
  height: 212,
  alt: 'Engaging design for exploring authors in fiction, poetry, and non-fiction.',
};

export const UniqueInteractions = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

  return (
    <section className="relative my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-14 lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="font-roboto text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="blueSticky">unique</UnderlinedText>
            <UnderlinedText color="blueSticky">interactions</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10 text-base font-normal leading-6">
            {highlight(description1)}
          </p>
          <p className="mt-5 text-base font-normal leading-6">{description2}</p>
        </div>
      </div>
      <aside
        ref={ref}
        className="relative grid h-[89.45868945868945vw] lg:h-[628px] lg:w-[702px] lg:flex-[1_0_702px] lg:flex-col"
      >
        <div className="!absolute left-0 top-[8.121019108280255%] h-[72.92993630573248%] w-full bg-blue shadow-lg"></div>
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute left-[2.4216524216524213%] top-0 h-[29.14012738853503%] w-[37.464387464387464%] opacity-0 shadow-lg`}
          alt={img1.alt}
          src="images/interactive-activity-budgeting.png"
          breakpoints={[263, 384]}
          sizes="(min-width: 1024px) 263px, 384px"
        />
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute left-[2.4216524216524213%] top-[32.961783439490446%] h-[31.84713375796178%] w-[39.45868945868946%] opacity-0 shadow-lg`}
          alt={img2.alt}
          src="images/budgeting-affordability-page.png"
          breakpoints={[277, 404]}
          sizes="(min-width: 1024px) 277px, 404px"
        />
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[2.2792022792022792%] top-[68.63057324840764%] h-[30.73248407643312%] w-[39.743589743589745%] opacity-0 shadow-lg`}
          alt={img3.alt}
          src="images/student-training-crisis-training.png"
          breakpoints={[279, 407]}
          sizes="(min-width: 1024px) 279px, 407px"
        />
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute left-[48.433048433048434%] top-[1.4331210191082804%] h-[59.076433121019114%] w-[49.14529914529914%] opacity-0 shadow-lg`}
          alt={img4.alt}
          src="images/dbq-content-sticky-annotate.png"
          breakpoints={[345, 503]}
          sizes="(min-width: 1024px) 345px, 503px"
        />
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[46.15384615384615%] top-[56.847133757961785%] h-[43.31210191082803%] w-[51.99430199430199%] opacity-0`}
          alt={img5.alt}
          src="images/annotation-screen-dbq.png"
          breakpoints={[365, 532]}
          sizes="(min-width: 1024px) 365px, 532px"
        />
        <StaticImage
          imgClassName="object-fill"
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[29.772079772079774%] top-[13.694267515923567%] h-[33.75796178343949%] w-[36.60968660968661%] opacity-0 shadow-lg`}
          alt={img6.alt}
          src="images/dbq-background-kickoff.png"
          breakpoints={[257, 375]}
          sizes="(min-width: 1024px) 257px, 375px"
        />
      </aside>
    </section>
  );
};
