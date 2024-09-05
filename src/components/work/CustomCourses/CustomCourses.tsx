import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We specialize in creating custom courses tailored to your audience's unique needs. Whether starting from scratch or using existing content, we listen closely to understand your goals and challenges. Our team collaborates with you to design engaging, effective learning experiences that resonate with your users, incorporating interactivity that makes educational experiences meaningful. By prioritizing your input and feedback, we ensure the final product aligns perfectly with your vision and delivers maximum impact.";

export const CustomCourses: React.FC = () => {
  return (
    <section className="my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:gap-[40px] xl:gap-[116px]">
      <div className="flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <h2 className="text-6xl leading-[70px] max-lg:text-4xl max-lg:leading-10">
            <UnderlinedText color="blueSticky">custom</UnderlinedText>{' '}
            <UnderlinedText color="blueSticky">courses</UnderlinedText>
          </h2>
          <p className="mt-10 text-base leading-6">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto grid w-full flex-[1_0_712px] gap-4 max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:mb-[10px] lg:mt-[30px] lg:h-[636px] lg:w-[64%] lg:flex-col lg:bg-blue">
        <div className="lg:absolute lg:left-[40px] lg:top-[48px] lg:h-[312px] lg:w-[472px]">
          <StaticImage
            className="lg:h-[312px] lg:w-[472px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Interactive training module featuring a floor plan and a family scenario for childcare, showing rooms with Click n' Learn and scenario activities."
            src="images/young-family-scenario.png"
            breakpoints={[472, 1024]}
            sizes="(min-width: 1024px) 472px, 100vw"
          />
        </div>
        <div className="hidden lg:absolute lg:left-[8px] lg:top-[36px] lg:block lg:h-[340px] lg:w-[103px]">
          <StaticImage
            className="lg:h-[340px] lg:w-[103px] lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt=""
            src="images/girl.png"
            breakpoints={[103, 1024]}
            sizes="(min-width: 1024px) 103px, 100vw"
          />
        </div>
        <div className="lg:absolute lg:left-[456px] lg:top-[-30px] lg:h-[177px] lg:w-[242px]">
          <StaticImage
            className="lg:h-[177px] lg:w-[242px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Childcare training module featuring a child with a list of actions to handle a temper tantrum."
            src="images/childcare-scenario-action.png"
            breakpoints={[242, 1024]}
            sizes="(min-width: 1024px) 242px, 100vw"
          />
        </div>
        <div className="lg:absolute lg:left-[91px] lg:top-[408px] lg:h-[238px] lg:w-[400px]">
          <StaticImage
            className="lg:h-[238px] lg:w-[400px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Module on reflecting on privilege, showing questions about family background and a mountain graphic illustrating privilege levels."
            src="images/reflecting-on-privilege.png"
          />
        </div>
        <div className="lg:absolute lg:left-[15px] lg:top-[383px] lg:h-[206px] lg:w-[100px]">
          <StaticImage
            className="lg:h-[206px] lg:w-[100px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Diversity training module defining diversity with various interactive elements and definitions."
            src="images/defining-diversity-module.png"
          />
        </div>
        <div className="lg:absolute lg:left-[412px] lg:top-[312px] lg:h-[256px] lg:w-[325px]">
          <StaticImage
            className="lg:h-[256px] lg:w-[325px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Interactive module showing common uses of credit with options to select different real-life scenarios."
            src="images/credit-uses-example.png"
          />
        </div>
      </aside>
    </section>
  );
};
