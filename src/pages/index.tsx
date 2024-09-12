import type { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { CustomButton } from '@/components/common/CustomButton/CustomButton';
import { ExpertiseCard } from '@/components/common/ExpertiseCard/ExpertiseCard';
import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { SEO } from '@/components/common/SEO';
import Stories from '@/components/common/Stories/Stories';
import { TileCard } from '@/components/common/TileCard/TileCard';
import { Pages } from '@/configs';
import { ReactComponent as Rectangle } from '@/images/arrow-rectangle.inline.svg';
import { ReactComponent as Cursor } from '@/images/cursor.inline.svg';
import { ReactComponent as Like } from '@/images/like.inline.svg';
import { ReactComponent as Love } from '@/images/love.inline.svg';
import Poster from '@/images/video-poster.jpg';
import Video from '@/video/sealworks-video.mp4';

export const Head = () => (
  <SEO
    title="Connect"
    description="Connect with Sealworks Interactive Studios to take your project from concept to launch. From brainstorming workshops to project jam sessions, we help you scale and enhance your digital experience through expert design and development. Book a session today to discuss your needs."
    keywords="Sealworks, connect, digital experience, brainstorming workshops, project jam sessions, design and development, digital solutions, interactive studios, scale digital projects, workshops, project consultation, digital innovation, Sealworks Interactive Studios"
  />
);

const IndexPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <div className="-mx-4 flex flex-col items-center bg-yellow md:mx-0 lg:mb-[10px] lg:flex-row lg:justify-between">
        <div className="mx-4 my-3 max-w-[420px] lg:m-0">
          <h1 className="font-roboto text-[40px] font-normal leading-[60px] text-black lg:pl-8 lg:leading-[53px]">
            <span className="bg-white">amazing </span>
            <span className="bg-white">experiences</span>, made with love
            <Love className="ml-2 inline" />
          </h1>
        </div>
        <div className="tags">
          <StaticImage
            className="animate__animated animate__zoomIn mx-11 mb-3 max-w-[580px] lg:mx-10 lg:my-3"
            src="../images/tags.png"
            alt="Tags"
          />
        </div>
      </div>
      <div className="-mx-4 mb-9 flex flex-col items-stretch gap-5 md:mx-0 lg:mb-[70px] lg:flex-row lg:justify-between lg:gap-7">
        <div className="flex min-h-[350px] w-full flex-col items-center justify-center bg-blue px-10 lg:w-1/3 lg:max-w-[400px]">
          <p className="mb-3 font-roboto text-[23px] font-normal leading-8 text-white">
            we believe in the power of technology to connect, inspire, and make
            a difference —
          </p>
          <h2 className="font-roboto text-[40px] font-normal leading-[48px] text-white">
            and that’s why we do what we do.
          </h2>
        </div>
        <Stories />
      </div>
      <div className="relative mb-4 flex flex-col lg:mb-10 lg:flex-row">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          poster={Poster}
          controls
          className="z-10 w-full max-w-[920px] px-3 lg:w-3/4 lg:px-0"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div className="-mt-6 ml-9 w-[95%] self-end bg-red pb-[22px] pl-[80px] pr-[22px] pt-[74px] md:h-[344px] lg:absolute lg:right-0 lg:top-0 lg:-mt-10 lg:w-[550px] lg:pl-[275px]">
          <span className="mb-2 inline-block font-roboto text-[26px] font-normal leading-8 text-white">
            your award-winning partner for
          </span>
          <h2 className="mb-5 font-roboto text-[40px] font-normal leading-[48px] text-white">
            custom digital solutions
          </h2>
          <div className="lg:absolute lg:top-[calc(100%+2.3rem)]">
            <CustomButton
              linkTo={Pages.OUR_WORK}
              linkText="view our work"
              bgColor="blue"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#082365] to-blue">
        <h2 className="px-4 py-[10px] pr-0 font-roboto text-[35px] font-normal leading-[48px] text-white lg:px-7 lg:text-[40px]">
          the sealworks promise
        </h2>
      </div>
      <div className="mb-4 flex flex-col gap-px border-t border-white lg:mb-11 lg:flex-row">
        <TileCard
          title={'innovation'}
          text={
            'We continuously explore new technologies and methodologies to innovate.'
          }
        />
        <TileCard
          title={'quality'}
          text={
            'We adhere to the highest standards, ensuring robust, reliable solutions.'
          }
        />
        <TileCard
          title={'collaboration'}
          text={
            'We foster close partnerships with clients for tailored solutions.'
          }
        />
        <TileCard
          title={'scalability'}
          text={'Our solutions are designed to grow with your business.'}
        />
        <TileCard
          title={'user-centric'}
          text={
            'We prioritize intuitive, engaging, and accessible user experiences.'
          }
        />
        <TileCard
          title={'impact'}
          text={
            'Our solutions create positive, lasting effects on users and communities.'
          }
        />
      </div>
      <div className="max-w-[916px] bg-yellow p-5 text-center text-black lg:pb-5 lg:pl-9 lg:pr-8 lg:pt-7 lg:text-left">
        <h2 className="font-roboto text-[35px] font-normal leading-[48px] lg:text-[40px]">
          decades at the forefront of
        </h2>
        <h2 className="font-roboto text-[50px] font-normal leading-[62px] lg:text-[66px] lg:leading-[72px]">
          crafting innovative solutions
        </h2>
      </div>
      <div className="relative flex flex-col-reverse lg:flex-col">
        <div className="relative mt-8 bg-blue p-8 font-roboto text-[15px] leading-[23px] text-white before:absolute before:-top-[55px] before:left-[27px] before:border-b-[76px] before:border-r-[44px] before:border-b-blue before:border-r-transparent before:content-[''] lg:absolute lg:top-2/4 lg:z-10 lg:mt-0 lg:max-w-[356px] lg:-translate-y-1/2 lg:pt-[52px]">
          <strong className="mb-3 inline-block text-lg">
            Since 1992, we&apos;ve had the privilege of partnering with diverse
            clients.
          </strong>
          <p className="mb-3">
            Our extensive history means we have encountered and overcome a wide
            range of obstacles, honing our skills and refining our processes.{' '}
          </p>
          <p className="mb-3">
            We always deliver robust, reliable solutions that exceed client
            expectations: custom applications, learning platforms, courses,
            ecosystems that reach millions of users, and more.
          </p>
        </div>
        <div className="relative w-full max-w-[894px] self-end after:absolute after:-top-[15px] after:left-0 after:z-[2] after:size-full after:h-[84%] after:w-full after:rounded-4xl after:bg-red after:content-[''] lg:mr-[5.7%] lg:w-[64%] lg:after:-top-[20px] lg:after:left-[60px] lg:after:w-[98%] xl:w-full xl:after:h-[616px] xl:after:w-[894px]">
          <StaticImage
            className="relative z-[5]"
            src="../images/ipad.png"
            alt="iPad"
          />
        </div>
      </div>
      <div className="relative p-4 leading-[65px] lg:pb-[110px] lg:pl-[125px] lg:pr-[95px] lg:pt-[40px]">
        <Cursor className="left-0 top-0 lg:absolute" />
        <span className="relative p-[3px] font-roboto text-[22px] font-normal leading-7 before:absolute before:bottom-0 before:-z-[1] before:h-[22px] before:w-full before:bg-yellowSticky before:content-[''] lg:text-[30px]">
          each year,
        </span>
        <span className="relative mx-[5px] inline-block p-[3px] font-annie text-[50px] font-normal leading-[40px] text-red before:absolute before:-bottom-4 before:-z-[1] before:h-[34px] before:w-full before:bg-redSticky before:content-[''] lg:text-[83px]">
          3.5+&nbsp;million{' '}
        </span>
        <span className="font-roboto text-[22px] font-normal leading-7 lg:text-[30px]">
          <strong className="text-red"> users</strong> engage with our
          solutions,
        </span>
        <br />
        <span className="font-roboto text-[22px] font-normal leading-7 lg:ml-[148px] lg:text-[30px]">
          interacting with our experiences{' '}
        </span>
        <span className="relative mx-[5px] inline-block p-[3px] font-annie text-[50px] font-normal leading-[40px] text-blue before:absolute before:-bottom-4 before:-z-[1] before:h-[34px] before:w-full before:bg-blueSticky before:content-[''] lg:text-[83px]">
          millions
        </span>
        <span className="font-roboto text-[22px] font-normal leading-7 lg:text-[30px]">
          <strong className="text-blue"> of times. </strong>
        </span>
        <span className="font-roboto text-[22px] font-normal leading-7 lg:text-[30px]">
          celebrating over{' '}
        </span>
        <span className="relative mx-[5px] inline-block p-[3px] font-annie text-[50px] font-normal leading-[40px] text-black before:absolute before:-bottom-4 before:-z-[1] before:h-[34px] before:w-full before:bg-yellowSticky before:content-[''] lg:text-[83px]">
          3&nbsp;decades
        </span>
        <span className="font-roboto text-[22px] font-normal leading-7 lg:text-[30px]">
          <strong> of designing & developing</strong> solutions.
        </span>
        <Like className="ml-auto lg:absolute lg:right-[45px] lg:top-[60px]" />
      </div>
      <h3 className="mb-4 font-roboto text-4xl lg:mb-9 lg:text-[66px]">
        excellence bolstered by expertise
      </h3>
      <div className="mb-20 flex flex-col gap-5 md:mb-[60px] md:gap-8 lg:mb-[92px] lg:flex-row lg:gap-12">
        <div className="grid grid-cols-[repeat(3,1fr)] gap-5 lg:w-2/3">
          <ExpertiseCard color={'yellow'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise1.jpg"
              alt="Pick a story"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'blue'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise2.jpg"
              alt="Taking action to protect yourself"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'yellow'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise3.jpg"
              alt="Calculating for Medications and Infusions"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'blue'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise4.jpg"
              alt="Learning Assignment Name"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'red'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise5.jpg"
              alt="Credit Card Interest"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'blue'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise6.jpg"
              alt="Dialogues"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'red'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise7.jpg"
              alt="Lifeguard"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'yellow'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise8.jpg"
              alt="Apply how to establish Credit"
            />
          </ExpertiseCard>
          <ExpertiseCard color={'red'}>
            <StaticImage
              className="relative z-[1]"
              src="../images/expertise9.jpg"
              alt="Welcome to Leader Connect"
            />
          </ExpertiseCard>
        </div>
        <div className="font-roboto text-lg font-normal lg:w-1/3">
          <p className="mb-6">
            Our pursuit of excellence is supported by a wealth of experience and
            driven by a relentless commitment to quality and innovation.{' '}
          </p>
          <p className="mb-7">
            Sealworks stays ahead of industry trends, continuously learning and
            evolving to integrate the latest technologies and best practices. We
            never settle for anything less than the best to ensure that every
            project is a smashing success.
          </p>
          <h3 className="mb-[30px] text-[26px] font-bold leading-9 text-red">
            Get started creating your award-winning experience.
          </h3>
          <CustomButton
            linkTo={Pages.OUR_WORK}
            linkText={'let’s play'}
            bgColor={'yellow'}
            textColor={'black'}
          />
        </div>
      </div>
      <div className="relative mb-8 bg-blue px-4 pb-5 text-white md:mb-20 md:ml-20 md:py-8 md:pl-[200px] md:pr-5 lg:pr-[120px]">
        <div className="relative z-[1] md:absolute md:-left-[113px] md:-top-[30px] lg:-top-[73px]">
          <StaticImage
            className="-mt-20 md:mt-0"
            src="../images/award.png"
            alt="Award"
          />
        </div>
        <h2 className="mb-4 max-w-[800px] font-roboto text-[26px] font-bold leading-9">
          In 2016, Sealworks founder Nick Floro was awarded the Guild Master
          Award.{' '}
        </h2>
        <p className="font-roboto text-[15px] font-normal leading-[22px]">
          This award is given out by{' '}
          <span className="text-yellow">The Learning Guild</span> — one of the
          largest communities of learning professionals in the world. The
          purpose of the Guild Master Award is to recognize those members who
          have consistently contributed to the community in terms of both
          quantity and quality of content — and thus helped make the community a
          vibrant center for learning while pushing the industry forward.
        </p>
        <div className="absolute top-0 hidden h-full md:right-0 lg:-right-[60px] lg:block">
          <Rectangle />
        </div>
      </div>
      <h2 className="mb-1 font-roboto text-3xl font-normal leading-[53px] md:text-[40px]">
        some of the amazing teams
      </h2>
      <h2 className="mb-6 font-roboto text-5xl font-normal leading-[53px] md:text-[60px]">
        we’ve been lucky to partner with:
      </h2>
      <div className="w-full lg:mb-16">
        <StaticImage
          className="max-w-fit"
          src="../images/partners.jpg"
          alt="Partners"
        />
      </div>
    </PageLayout>
  );
};

export default IndexPage;
