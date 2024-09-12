import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  'We specialize in *creating unique interactions* that *captivate* and *engage* users. Our designs focus on intuitive, responsive elements that make every interaction seamless and enjoyable. By incorporating innovative technologies and user-centric design principles, we ensure each touchpoint is memorable and impactful. These unique interactions foster deeper connections between users and your digital platform, enhancing overall user satisfaction. With Sealworks, your digital experiences stand out, leaving a lasting impression through creativity and thoughtful design.';

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

export const UniqueInteractions = () => {
  return (
    <section className="relative flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-5 lg:gap-[20px] lg:pb-[60px] lg:pt-[17px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-7xl leading-[70px] max-xl:text-4xl max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="blueSticky">unique</UnderlinedText>
            <br />
            <UnderlinedText color="blueSticky">interactions</UnderlinedText>
          </h2>
          <p className="mt-10 font-roboto text-base font-normal leading-6 text-black">
            {highlight(description)}
          </p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full flex-[1_0_600px] gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:h-[573px] lg:w-[64%] lg:flex-[1_0_712px] lg:flex-col lg:bg-blue">
        <div className="absolute -top-[30px] left-0 h-[183px] w-[263px] lg:-top-[51px] lg:left-[17px]">
          <StaticImage
            className="lg:h-[183px] lg:w-[263px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Classroom annotation tool with color-coded annotations on historical documents"
            src="images/classroom-annotation-tool.jpg"
            breakpoints={[263, 640, 768, 1024]}
            sizes="(min-width: 1024px) 263px, 100vw"
          />
        </div>

        <div className="absolute left-[17px] top-[156px] size-1/2 lg:h-[200px] lg:w-[277px]">
          <StaticImage
            className="lg:h-[200px] lg:w-[277px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Budgeting page displaying income, expenses, and additional financial resources."
            src="images/budgeting-affordability-page.jpg"
            breakpoints={[277, 640, 768, 1024]}
            sizes="(min-width: 1024px) 277px, 100vw"
          />
        </div>

        <div className="absolute left-[16px] top-[380px] size-1/2 lg:h-[193px] lg:w-[279px]">
          <StaticImage
            className="lg:h-[193px] lg:w-[279px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Nielsen training on classifying dimensions with a self-check feedback form."
            src="images/diversity-training.jpg"
            breakpoints={[279, 640, 768, 1024]}
            sizes="(min-width: 1024px) 279px, 100vw"
          />
        </div>

        <div className="absolute -top-[42px] right-0 size-1/2 lg:left-[340px] lg:right-auto lg:h-[371px] lg:w-[345px]">
          <StaticImage
            className="lg:h-[371px] lg:w-[345px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Quick check for using a windlass rod tourniquet during first aid training."
            src="images/tourniquet-training.jpg"
            breakpoints={[345, 640, 768, 1024]}
            sizes="(min-width: 1024px) 345px, 100vw"
          />
        </div>

        <div className="max-lg:hidden lg:absolute lg:left-[324px] lg:top-[306px] lg:h-[271px] lg:w-[364px]">
          <StaticImage
            className="lg:h-[271px] lg:w-[364px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt=""
            src="images/tablet.png"
            breakpoints={[364]}
          />
        </div>

        <div className="absolute right-0 top-[330px] size-1/2 lg:left-[348px] lg:right-auto lg:h-[227px] lg:w-[304px]">
          <StaticImage
            className="lg:h-[227px] lg:w-[304px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="DBQ Online tool showing annotations on a historical document."
            src="images/annotation-screen-dbq.jpg"
            breakpoints={[304, 640, 768, 1024]}
            sizes="(min-width: 1024px) 304px, 100vw"
          />
        </div>

        <div className="absolute right-0 top-[149px] size-1/3 lg:left-[209px] lg:right-auto lg:top-[49px] lg:h-[212px] lg:w-[275px]">
          <StaticImage
            className="lg:h-[212px] lg:w-[275px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Quick check for using a windlass rod tourniquet during first aid training."
            src="images/authors-page.jpg"
            breakpoints={[275, 640, 768, 1024]}
            sizes="(min-width: 1024px) 275px, 100vw"
          />
        </div>
      </aside>
    </section>
  );
};
