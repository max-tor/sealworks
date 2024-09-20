import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';

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
  alt: 'Classroom annotation tool with color-coded annotations on historical documents',
};

const img2 = {
  top: 207,
  left: 17,
  width: 277,
  height: 200,
  alt: 'Budgeting page displaying income, expenses, and additional financial resources.',
};
const img3 = {
  top: 431,
  left: 16,
  width: 279,
  height: 193,
  alt: 'Nielsen training on classifying dimensions with a self-check feedback form.',
};

const img4 = {
  top: 9,
  left: 340,
  width: 345,
  height: 371,
  alt: 'Quick check for using a windlass rod tourniquet during first aid training.',
};

const img5 = {
  top: 357,
  left: 324,
  width: 365,
  height: 272,
  alt: 'DBQ Online tool showing annotations on a historical document.',
};

const img6 = {
  top: 86,
  left: 209,
  width: 257,
  height: 212,
  alt: 'Quick check for using a windlass rod tourniquet during first aid training.',
};

export const UniqueInteractions = () => {
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
      <aside className="relative grid h-[89.45868945868945vw] lg:h-[628px] lg:w-[702px] lg:flex-[1_0_702px] lg:flex-col">
        <div className="!absolute left-0 top-[8.121019108280255%] h-[72.92993630573248%] w-full bg-blue shadow-lg"></div>
        <StaticImage
          className="!absolute left-[2.4216524216524213%] top-0 h-[29.14012738853503%] w-[37.464387464387464%] shadow-lg"
          imgClassName="object-fill"
          alt={img1.alt}
          src="images/classroom-annotation-tool.png"
          breakpoints={[263, 640, 768, 1024]}
          sizes="(min-width: 1024px) 263px, 100vw"
        />

        <StaticImage
          className="!absolute left-[2.4216524216524213%] top-[32.961783439490446%] h-[31.84713375796178%] w-[39.45868945868946%] shadow-lg"
          imgClassName="object-fill"
          alt={img2.alt}
          src="images/budgeting-affordability-page.png"
          breakpoints={[277, 640, 768, 1024]}
          sizes="(min-width: 1024px) 277px, 100vw"
        />

        <StaticImage
          className="!absolute left-[2.2792022792022792%] top-[68.63057324840764%] h-[30.73248407643312%] w-[39.743589743589745%] shadow-lg"
          imgClassName="object-fill"
          alt={img3.alt}
          src="images/diversity-training.png"
          breakpoints={[279, 640, 768, 1024]}
          sizes="(min-width: 1024px) 279px, 100vw"
        />

        <StaticImage
          className="!absolute left-[48.433048433048434%] top-[1.4331210191082804%] h-[59.076433121019114%] w-[49.14529914529914%] shadow-lg"
          imgClassName="object-fill"
          alt={img4.alt}
          src="images/tourniquet-training.png"
          breakpoints={[345, 640, 768, 1024]}
          sizes="(min-width: 1024px) 345px, 100vw"
        />

        <StaticImage
          className="!absolute left-[46.15384615384615%] top-[56.847133757961785%] h-[43.31210191082803%] w-[51.99430199430199%]"
          imgClassName="object-fill"
          alt={img5.alt}
          src="images/annotation-screen-dbq.png"
          breakpoints={[365, 640, 768, 1024]}
          sizes="(min-width: 1024px) 365px, 100vw"
        />

        <StaticImage
          className="!absolute left-[29.772079772079774%] top-[13.694267515923567%] h-[33.75796178343949%] w-[36.60968660968661%] shadow-lg"
          imgClassName="object-fill"
          alt={img6.alt}
          src="images/authors-page.png"
          breakpoints={[257, 640, 768, 1024]}
          sizes="(min-width: 1024px) 257px, 100vw"
        />
      </aside>
    </section>
  );
};
