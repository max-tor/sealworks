import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We specialize in creating custom courses tailored to your audience's unique needs. Whether starting from scratch or using existing content, we listen closely to understand your goals and challenges. Our team collaborates with you to design engaging, effective learning experiences that resonate with your users, incorporating interactivity that makes educational experiences meaningful. By prioritizing your input and feedback, we ensure the final product aligns perfectly with your vision and delivers maximum impact.";

export const CustomCourses: React.FC = () => {
  return (
    <section className="my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-14 lg:gap-[40px] xl:gap-[116px]">
      <div className="flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-6xl leading-[70px] max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="blueSticky">custom</UnderlinedText>
            <br />
            <UnderlinedText color="blueSticky">courses</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">{description}</p>
        </div>
      </div>
      <aside className="lmy-5 relative mx-auto grid w-full gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:my-14 lg:flex-[1_0_712px] lg:flex-col">
        <StaticImage
          className="lg:h-[676px] lg:w-[744px]"
          imgClassName="h-auto max-w-full"
          alt=""
          src="images/custom-courses.png"
          breakpoints={[640, 744, 768, 1024, 1280]}
          sizes="(min-width: 1280px) 744px, 100vw"
        />
      </aside>
    </section>
  );
};
