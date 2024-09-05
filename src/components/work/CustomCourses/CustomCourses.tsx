import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We specialize in creating custom courses tailored to your audience's unique needs. Whether starting from scratch or using existing content, we listen closely to understand your goals and challenges. Our team collaborates with you to design engaging, effective learning experiences that resonate with your users, incorporating interactivity that makes educational experiences meaningful. By prioritizing your input and feedback, we ensure the final product aligns perfectly with your vision and delivers maximum impact.";

export const CustomCourses: React.FC = () => {
  return (
    <section className="flex flex-row-reverse gap-5 max-md:flex-col md:gap-[116px]">
      <div className="ml-5 flex w-[36%] flex-col max-md:ml-0 max-md:w-full">
        <section className="flex flex-col text-black max-md:mt-10">
          <h2 className="w-[400px] text-7xl leading-[70px] max-md:text-4xl max-md:leading-10">
            <UnderlinedText color="blueSticky">custom</UnderlinedText>{' '}
            <UnderlinedText color="blueSticky">courses</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">{description}</p>
        </section>
      </div>
      <aside className="max-md:gr relative mx-auto grid w-full gap-4 max-md:ml-0 max-md:mt-10 max-md:w-full max-md:max-w-full md:mb-[10px] md:mt-[30px] md:h-[636px] md:w-[64%] md:flex-col md:bg-blue">
        <StaticImage
          className="md:absolute md:left-[40px] md:top-[48px] md:h-[312px] md:w-[472px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt="Interactive training module featuring a floor plan and a family scenario for childcare, showing rooms with Click n' Learn and scenario activities."
          src="images/young-family-scenario.png"
          breakpoints={[472, 768]}
          sizes="(min-width: 768px) 472px, 100vw"
        />
        <StaticImage
          className="hidden md:absolute md:left-[8px] md:top-[36px] md:block md:h-[340px] md:w-[103px] md:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt=""
          src="images/girl.png"
          breakpoints={[103, 768]}
          sizes="(min-width: 768px) 103px, 100vw"
        />
        <StaticImage
          className="md:absolute md:left-[456px] md:top-[-30px] md:h-[177px] md:w-[242px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt="Childcare training module featuring a child with a list of actions to handle a temper tantrum."
          src="images/childcare-scenario-action.png"
          breakpoints={[242, 768]}
          sizes="(min-width: 768px) 242px, 100vw"
        />
        <StaticImage
          className="md:absolute md:left-[91px] md:top-[408px] md:h-[238px] md:w-[400px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt="Module on reflecting on privilege, showing questions about family background and a mountain graphic illustrating privilege levels."
          src="images/reflecting-on-privilege.png"
        />
        <StaticImage
          className="md:absolute md:left-[15px] md:top-[383px] md:h-[206px] md:w-[100px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt="Diversity training module defining diversity with various interactive elements and definitions."
          src="images/defining-diversity-module.png"
        />
        <StaticImage
          className="md:absolute md:left-[412px] md:top-[312px] md:h-[256px] md:w-[325px] md:object-cover md:shadow-lg"
          imgClassName="h-auto max-w-full"
          alt="Interactive module showing common uses of credit with options to select different real-life scenarios."
          src="images/credit-uses-example.png"
        />
      </aside>
    </section>
  );
};
