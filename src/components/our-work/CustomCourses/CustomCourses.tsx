import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';

const description1 =
  "We specialize in creating custom courses tailored to your audience's unique needs. Whether starting from scratch or using existing content, we listen closely to understand your goals and challenges.";
const description2 =
  'Our team collaborates with you to design engaging, effective learning experiences that resonate with your users, incorporating interactivity that makes educational experiences meaningful. By prioritizing your input and feedback, we ensure the final product aligns perfectly with your vision and delivers maximum impact.';

// const blockWidth = 707;
// const blockHeight = 636;

// images/young-family-scenario
const img1 = {
  top: 40,
  left: 48,
  width: 472,
  height: 312,
  alt: "Interactive training module featuring a floor plan and a family scenario for childcare, showing rooms with Click n'Learn and scenario activities.",
};
// images/girl.png
const img2 = {
  top: 36,
  left: -7,
  width: 130,
  height: 340,
  alt: '',
};

// images/childcare-scenario-action.png
const img3 = {
  top: -30,
  left: 456,
  width: 242,
  height: 177,
  alt: 'Childcare training module featuring a child with a list of actions to handle a temper tantrum.',
};

// images/reflecting-on-privilege
const img4 = {
  top: 408,
  left: 91,
  width: 400,
  height: 238,
  alt: 'Module on reflecting on privilege, showing questions about family background and a mountain graphic illustrating privilege levels.',
};
// defining-diversity-module
const img5 = {
  top: 383,
  left: 15,
  width: 100,
  height: 206,
  alt: 'Diversity training module defining diversity with various interactive elements and definitions.',
};

// credit-uses-example
const img6 = {
  top: 312,
  left: 412,
  width: 325,
  height: 256,
  alt: 'Interactive module showing common uses of credit with options to select different real-life scenarios.',
};

// showImagesInfo({
//   blockWidth,
//   blockHeight,
//   images: [img1, img2, img3, img4, img5, img6],
// });

export const CustomCourses = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

  return (
    <section className="my-5 flex max-w-full flex-row-reverse gap-5 max-lg:flex-col lg:my-14 lg:gap-[40px] xl:gap-[116px]">
      <div className="flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="blueSticky">custom</UnderlinedText>
            <UnderlinedText color="blueSticky">courses</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10">{description1}</p>
          <p className="mt-5">{description2}</p>
        </div>
      </div>
      <aside
        ref={ref}
        className="lmy-5 relative mx-auto mr-[4.243281471004243%] mt-[5.597014925373134%] grid h-[89.95756718528996vw] w-full gap-4 bg-blue max-lg:ml-0 max-lg:mt-10 max-lg:w-full max-lg:max-w-full lg:my-14 lg:h-[636px] lg:w-[707px] lg:flex-[1_0_707px] lg:flex-col"
      >
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[6.789250353606789%] top-[7.462686567164178%] h-[58.2089552238806%] w-[66.76096181046675%] object-cover opacity-0`}
          imgClassName="h-auto max-w-full"
          alt={img1.alt}
          src="images/young-family-scenario.png"
          breakpoints={[img1.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 472px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInDown opacity-100' : ''} !absolute -left-[0.9900990099009901%] top-[6.7164179104477615%] h-[63.43283582089553%] w-[18.387553041018386%] select-none object-cover opacity-0`}
          imgClassName="h-auto max-w-full"
          alt={img1.alt}
          src="images/girl.png"
          breakpoints={[img2.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 130px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInRight opacity-100' : ''} !absolute -top-[5.597014925373134%] left-[64.49787835926449%] h-[33.02238805970149%] w-[34.22913719943423%] object-cover opacity-0`}
          imgClassName="h-auto max-w-full"
          alt={img3.alt}
          src="images/childcare-scenario-action.png"
          breakpoints={[img3.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 242px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInUp opacity-100' : ''} !absolute left-[12.871287128712872%] top-[64.15094339622641%] h-[37.42138364779874%] w-[56.57708628005658%] object-cover opacity-0`}
          imgClassName="h-auto max-w-full"
          alt={img4.alt}
          src="images/reflecting-on-privilege.png"
          breakpoints={[img4.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 400px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInLeft opacity-100' : ''} !absolute left-[2.1216407355021216%] top-[60.22012578616353%] h-[32.38993710691824%] w-[14.144271570014144%] object-cover opacity-0`}
          imgClassName="h-auto max-w-full"
          alt={img5.alt}
          src="images/defining-diversity-module.png"
          breakpoints={[img5.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 100px, 100vw"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__slideInRight opacity-100' : ''} !absolute left-[58.27439886845828%] top-[49.056603773584904%] h-[40.25157232704403%] w-[45.96888260254597%] object-cover opacity-0`}
          imgClassName="h-auto max-w-full"
          alt={img6.alt}
          src="images/credit-uses-example.png"
          breakpoints={[img5.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 325px, 100vw"
        />
        {/*
        <div className="absolute right-0 top-[312px] w-[200px] lg:left-[412px] lg:right-auto lg:h-[256px] lg:w-[325px]">
          <StaticImage
            className="lg:h-[256px] lg:w-[325px] lg:object-cover lg:shadow-lg"
            imgClassName="h-auto max-w-full lg:object-top"
            alt="Interactive module showing common uses of credit with options to select different real-life scenarios."
            src="images/credit-uses-example.jpg"
            breakpoints={[325, 640, 768, 1024]}
            sizes="(min-width: 1024px) 325px, 100vw"
          />
        </div>*/}
      </aside>
    </section>
  );
};
