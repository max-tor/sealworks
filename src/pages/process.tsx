import type { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { SEO } from '@/components/common/SEO';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { CloudObject } from '@/components/process/CloudObject/CloudObject';
import { Innovation } from '@/components/process/Innovation/Innovation';
import { Possibilities } from '@/components/process/Possibilities/Possibilities';
import { ProcessHead } from '@/components/process/ProcessHead/ProcessHead';
import { ReactComponent as ArrowFirst } from '@/images/vector-red-arrow-down.inline.svg';
import { ReactComponent as ArrowSimple } from '@/images/vector-red-arrow-simple.inline.svg';

export const Head = () => (
  <SEO
    title="the process"
    description="Discover Sealworks' strategic and collaborative process that combines creative innovation with technical expertise. Learn how we transform your ideas into interactive digital experiences, from brainstorming and concept development to final launch and ongoing support."
    keywords="Sealworks process, digital experience creation, interactive solutions, creative innovation, technical expertise, project brainstorming, concept development, design and development, digital project process, collaborative process, digital solutions, project launch, ongoing support"
  />
);

const ProcessPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <ProcessHead />
      <div className="relative -mx-4 mb-[160px] flex flex-col items-center gap-10 bg-grayLight md:mx-0 lg:flex-row">
        <div className="max-w-[250px] md:max-w-[280px] lg:w-4/5 lg:max-w-[410px]">
          <StaticImage src="../images/notebook.png" alt="Notebook" />
        </div>

        <div className="px-4 md:mr-4 lg:mr-[50px] lg:px-0">
          <h2 className="mb-[26px] font-roboto text-4xl font-normal text-red md:text-[66px] md:leading-[78px] lg:mt-[47px]">
            we start every project with a blank slate.
          </h2>
          <p className="mb-5 font-roboto text-base font-normal text-black">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Our process begins with a deep dive into understanding your users'
            needs, motivations, and pain points through empathetic research and
            immersive workshops.
          </p>
          <p className="mb-5 font-roboto text-base font-normal text-black md:mb-16 lg:mb-14">
            We embrace an iterative approach, prototyping and testing ideas
            rapidly to refine and perfect our concepts. Our cutting-edge
            technology and innovative design combine to create bespoke digital
            experiences that resonate with your users and exceeds your
            expectations.
          </p>
          <div className="-mb-[75px] bg-red pb-7 pl-8 pr-5 pt-6 md:absolute md:-bottom-[62px] md:mb-0 md:mr-[20px] lg:-bottom-[50px] lg:mr-[50px]">
            <p className="font-roboto text-[18px] font-bold leading-6 text-white">
              Your project is not just another generic solution, but a
              personalized masterpiece that stands out and makes a lasting
              impact.
            </p>
          </div>
          <ArrowFirst className="absolute -bottom-[135px] right-[22px] md:-bottom-[175px] md:left-[94px] md:right-0 lg:-bottom-[168px] lg:left-[158px]" />
        </div>
      </div>
      <h2 className="font-roboto text-4xl font-normal md:text-[66px] md:leading-[78px]">
        we develop amazing experiences that <strong>evolve and scale</strong>{' '}
        with you.
      </h2>
      <div className="flex flex-col-reverse items-center overflow-hidden md:flex-row md:gap-[10px] xl:gap-[52px]">
        <div className="md:mt-[83px] md:w-[35%] xl:w-1/2">
          <h3 className="mb-4 font-roboto text-[40px] font-normal leading-[48px] text-blue md:mb-[40px]">
            our journey began with a vision to blend{' '}
            <UnderlinedText color="yellowSticky">design</UnderlinedText>,{' '}
            <UnderlinedText color="blueStickyBright">technology</UnderlinedText>
            , and&nbsp;
            <UnderlinedText color="roseSticky">strategy</UnderlinedText> to
            create meaningful digital experiences.
          </h3>
          <p className="font-roboto text-base font-normal text-black">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Over three decades, we've continually evolved, adapting to emerging
            technologies and shifting user needs. Our extensive experience has
            equipped us with deep insights and proven methodologies, allowing us
            to tackle complex challenges with confidence and creativity.{' '}
          </p>
          <ArrowSimple className="mx-auto rotate-[20deg] md:right-[52px] md:top-[17px] md:-mt-[27px] md:rotate-0" />
        </div>
        <div className="-my-14 md:-mt-[30px] md:mb-0 md:w-1/2">
          <CloudObject />
        </div>
      </div>
      <h2 className="mb-[13px] font-roboto text-4xl font-normal text-blue md:text-[66px] md:leading-[78px]">
        we imagine and <strong>test possibilities</strong> for your audience and
        organization.
      </h2>
      <Possibilities />
      <Innovation />
    </PageLayout>
  );
};

export default ProcessPage;
