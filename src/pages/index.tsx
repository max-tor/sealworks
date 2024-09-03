import type { PageProps } from 'gatsby';
import React from 'react';

import Love from '@/images/love.inline.svg';
import Cursor from '@/images/cursor.inline.svg';
import Like from '@/images/like.inline.svg';
import Video from '@/video/sealworks-video.mp4';
import Stories from '@/components/common/Stories/Stories';
import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { StaticImage } from 'gatsby-plugin-image';
import { CustomButton } from '@/components/common/CustomButton/CustomButton';
import { TileCard } from '@/components/common/TileCard/TileCard';
import { ExpertiseCard } from '@/components/common/ExpertiseCard/ExpertiseCard';

const IndexPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <div className="bg-yellow flex flex-col md:flex-row md:justify-between items-center md:mb-[10px]">
        <div className="max-w-[420px] mx-4 my-3 md:m-0">
          <h1 className="font-roboto text-black font-normal text-[40px] leading-[60px] md:leading-[53px] md:pl-8"><span className="bg-white">amazing </span><span className="bg-white">experiences</span>, made with love<Love
            className="inline ml-2"
          /></h1>
          
        </div>
        <div className="tags">
          <StaticImage
            className="max-w-[580px] mx-11 mb-3 md:my-3 md:mx-10"
            src="../images/tags.png"
            alt="Tags"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-7 mb-9 lg:mb-[70px]">
        <div className="flex flex-col bg-blue justify-center items-center w-full md:w-1/3 md:max-w-[400px] min-h-[350px] px-10">
          <p className="font-roboto text-white font-normal text-[23px] leading-8 mb-3">we believe in the power of technology to connect, inspire, and make a difference —</p>
          <h1 className="font-roboto text-white font-normal text-[40px] leading-[48px]">and that’s why we do what we do.</h1>
        </div>
        <Stories />
      </div>
      <div className="relative flex flex-col lg:flex-row mb-4 lg:mb-10">
        <video controls className="w-full lg:w-[75%] max-w-[920px] z-10 px-3 md:px-0">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="w-[95%] lg:w-[550px] h-[344px] ml-9 -mt-6 md:-mt-10 bg-red self-end pt-[74px] pr-[22px] pb-[22px] pl-[80px] lg:pl-[275px] lg:absolute md:top-0 md:right-0">
          <span className="inline-block font-roboto text-white font-normal text-[26px] leading-8 mb-2">your award-winning partner for</span>
          <h2 className="font-roboto text-white font-normal text-[40px] leading-[48px] mb-5">custom digital solutions</h2>
          <div className="lg:absolute lg:top-[calc(100%+2.3rem)]">
            <CustomButton linkTo='/work' linkText='view our work' bgColor='blue' blue='' yellow='' />   
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#082365] to-blue">
        <h2 className="font-roboto text-white font-normal text-[35px] lg:text-[40px] leading-[48px] px-4 pr-0 lg:px-7 py-[10px]">the sealworks promise</h2>
      </div>
      <div className="border-t border-white flex flex-col lg:flex-row gap-[1px] mb-4 lg:mb-11">
        <TileCard title={'innovation'} text={'We continuously explore new technologies and methodologies to innovate.'} />
        <TileCard title={'quality'} text={'We adhere to the highest standards, ensuring robust, reliable solutions.'} />
        <TileCard title={'collaboration'} text={'We foster close partnerships with clients for tailored solutions.'} />
        <TileCard title={'scalability'} text={'Our solutions are designed to grow with your business.'} />
        <TileCard title={'user-centric'} text={'We prioritize intuitive, engaging, and accessible user experiences.'} />
        <TileCard title={'impact'} text={'Our solutions create positive, lasting effects on users and communities.'} />
      </div>
      <div className="bg-yellow max-w-[916px] p-5 text-center lg:text-left lg:pt-7 lg:pr-8 lg:pb-5 lg:pl-9 text-black">
        <h2 className="font-roboto font-normal text-[35px] lg:text-[40px] leading-[48px]">decades at the forefront of</h2>
        <h1 className="font-roboto font-normal text-[50px] leading-[62px] lg:text-[66px] lg:leading-[72px]">crafting innovative solutions</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="relative mt-8 lg:mt-0 lg:absolute bg-blue font-roboto text-[15px] leading-[23px] text-white p-8 before:absolute before:-top-[55px] before:left-[27px] before:content-[''] before:border-r-[44px] before:border-r-transparent before:border-b-[76px] before:border-b-blue lg:pt-[52px] lg:max-w-[356px] lg:top-2/4 lg:-translate-y-1/2 lg:z-10">
          <strong className="text-lg mb-3 inline-block">Since 1992, we've had the privilege of partnering with diverse clients.</strong>
          <p className="mb-3">Our extensive history means we have encountered and overcome a wide range of obstacles, honing our skills and refining our processes. </p>
          <p className="mb-3">We always deliver robust, reliable solutions that exceed client expectations: custom applications, learning platforms, courses, ecosystems that reach millions of users, and more.</p>
        </div>
        <div className="w-full self-end max-w-[894px] lg:mr-[5.7%] relative after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:-top-[15px] lg:after:w-[894px] lg:after:h-[616px] after:bg-red lg:after:left-[60px] lg:after:-top-[20px] after:z-[2] after:rounded-4xl">
          <StaticImage
            className="relative z-[5]"
            src="../images/ipad.png"
            alt="iPad"
          />
        </div>
      </div>
      <div className="relative p-4 lg:pt-[40px] lg:pr-[95px] lg:pb-[110px] lg:pl-[125px] leading-[65px]">
        <Cursor className="lg:absolute left-0 top-0" />
        <span className="relative font-roboto font-normal text-[22px] lg:text-[30px] leading-7 p-[3px] before:content-[''] before:absolute before:w-full before:h-[22px] before:bottom-0 before:-z-[1] before:bg-yellowSticky">each year,</span> 
        <span className="relative font-annie text-red text-[50px] lg:text-[83px] font-normal leading-[40px] p-[3px] mx-[5px] before:content-[''] before:absolute before:w-full before:h-[34px] before:-bottom-4 before:-z-[1] before:bg-redSticky inline-block">3.5+&nbsp;million </span> 
        <span className="font-roboto font-normal text-[22px] lg:text-[30px] leading-7"><strong className="text-red"> users</strong> engage with our solutions,</span><br/>
        <span className="font-roboto font-normal text-[22px] lg:text-[30px] leading-7 lg:ml-[148px]">interacting with our experiences </span><span className="relative font-annie text-blue text-[50px] lg:text-[83px] font-normal leading-[40px] p-[3px] mx-[5px] before:content-[''] before:absolute before:w-full before:h-[34px] before:-bottom-4 before:-z-[1] before:bg-blueSticky inline-block">millions</span> 
        <span className="font-roboto font-normal text-[22px] lg:text-[30px] leading-7"><strong className="text-blue"> of times. </strong></span>
        <span className="font-roboto font-normal text-[22px] lg:text-[30px] leading-7">celebrating over </span><span className="relative font-annie text-black text-[50px] lg:text-[83px] font-normal leading-[40px] p-[3px] mx-[5px] before:content-[''] before:absolute before:w-full before:h-[34px] before:-bottom-4 before:-z-[1] before:bg-yellowSticky inline-block">3&nbsp;decades</span> 
        <span className="font-roboto font-normal text-[22px] lg:text-[30px] leading-7"><strong> of designing & developing</strong> solutions.</span>
        <Like className="ml-auto lg:absolute lg:right-[45px] lg:top-[60px]" />
      </div>
      <h1 className="font-roboto text-5xl lg:text-[66px] mb-4 lg:mb-9">excellence bolstered by expertise</h1>
      <div className="flex gap-12">
        <div className="grid grid-cols-[repeat(3,1fr)] gap-5 lg:w-2/3">
          <ExpertiseCard image={'expertise1.jpg'} color={'yellow'} />
          <ExpertiseCard image={'expertise2.jpg'} color={'blue'} />
          <ExpertiseCard image={'expertise3.jpg'} color={'yellow'} />
          <ExpertiseCard image={'expertise4.jpg'} color={'blue'} />
          <ExpertiseCard image={'expertise5.jpg'} color={'red'} />
          <ExpertiseCard image={'expertise6.jpg'} color={'blue'} />
          <ExpertiseCard image={'expertise7.jpg'} color={'red'} />
          <ExpertiseCard image={'expertise8.jpg'} color={'yellow'} />
          <ExpertiseCard image={'expertise9.jpg'} color={'red'} />
        </div>
        <div className="font-roboto font-normal text-lg lg:w-1/3">
          <p className="mb-6">Our pursuit of excellence is supported by a wealth of experience and driven by a relentless commitment to quality and innovation. </p>
          <p className="mb-7">Sealworks stays ahead of industry trends, continuously learning and evolving to integrate the latest technologies and best practices. We never settle for anything less than the best to ensure that every project is a smashing success.</p>
          <h2 className="text-red text-3xl text-[26px] font-bold mb-[30px]">Get started creating your award-winning experience.</h2>
          <CustomButton linkTo={'/work'} linkText={'let’s play'} bgColor={'yellow'} textColor={'black'} blue={''} yellow={''} />
        </div>
      </div>
    </PageLayout>
  );
};

export default IndexPage;
