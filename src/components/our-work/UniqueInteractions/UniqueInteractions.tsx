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
      <aside className="relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:w-[64%] lg:flex-[1_0_712px] lg:flex-col">
        <StaticImage
          className="lg:h-[628px] lg:w-[702px]"
          imgClassName="object-fill"
          alt=""
          src="images/unique_interactions.png"
          breakpoints={[640, 702, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 702px, 100vw"
        />
      </aside>
    </section>
  );
};
