import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';

const description1 =
  "We specialize in creating custom courses tailored to your audience's unique needs. Whether starting from scratch or using existing content, we listen closely to understand your goals and challenges.";
const description2 =
  'Our team collaborates with you to design engaging, effective learning experiences that resonate with your users, incorporating interactivity that makes educational experiences meaningful. By prioritizing your input and feedback, we ensure the final product aligns perfectly with your vision and delivers maximum impact.';

// const blockWidth = 737;
// const blockHeight = 676;

const img1 = {
  top: 78,
  left: 47,
  width: 472,
  height: 313,
  alt: 'Interactive simulation with 3D house map for free exploration and content engagement.',
};
const img2 = {
  top: 66,
  left: 0,
  width: 130,
  height: 340,
  alt: '3D avatar for interactive character storytelling and immersive experiences.',
};

const img3 = {
  top: 0,
  left: 463,
  width: 242,
  height: 177,
  alt: 'Interactive case scenario with child tantrum to explore and learn how to navigate situations.',
};
const img4 = {
  top: 438,
  left: 98,
  width: 400,
  height: 239,
  alt: 'Activity results and feedback showing your advantage points for self-reflection.',
};
const img5 = {
  top: 413,
  left: 22,
  width: 100,
  height: 206,
  alt: 'Mobile screen with definition, beautiful visuals, and audio pronunciation for enhanced learning.',
};
const img6 = {
  top: 342,
  left: 419,
  width: 325,
  height: 256,
  alt: 'Interactive case study in Spanish to explore options and outcomes.',
};

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
        className="relative flex h-[91.72320217096338vw] lg:h-[676px] lg:w-[737px] lg:flex-[1_0_737px] lg:flex-col"
      >
        <div className="!absolute left-[0.9497964721845319%] top-[4.437869822485207%] h-[94.0828402366864%] w-[95.92944369063771%] bg-blue shadow-lg"></div>
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__zoomIn opacity-100' : ''} !absolute left-[6.377204884667571%] top-[11.538461538461538%] h-[46.30177514792899%] w-[64.04341926729987%] opacity-0 shadow-lg`}
          alt={img1.alt}
          src="images/young-family-scenario.png"
          breakpoints={[472, 656]}
          sizes="(min-width: 1024px) 472px, 656px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute left-0 top-[9.763313609467456%] h-[50.29585798816568%] w-[17.639077340569877%] opacity-0`}
          alt={img2.alt}
          src="images/girl.png"
          breakpoints={[130, 181]}
          sizes="(min-width: 1024px) 130px, 181px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInDown opacity-100' : ''} !absolute left-[62.822252374491185%] top-0 h-[26.183431952662723%] w-[32.83582089552239%] opacity-0 shadow-lg`}
          alt={img3.alt}
          src="images/childcare-scenario-action.png"
          breakpoints={[242, 336]}
          sizes="(min-width: 1024px) 242px, 336px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[13.297150610583447%] top-[64.79289940828401%] h-[35.20710059171598%] w-[54.27408412483039%] opacity-0 shadow-lg`}
          alt={img4.alt}
          src="images/reflecting-on-privilege.png"
          breakpoints={[400, 556]}
          sizes="(min-width: 1024px) 400px, 556px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInLeft opacity-100' : ''} !absolute left-[2.9850746268656714%] top-[61.094674556213015%] h-[30.473372781065088%] w-[13.568521031207597%] opacity-0 shadow-lg`}
          alt={img5.alt}
          src="images/defining-diversity-module.png"
          breakpoints={[100, 139]}
          sizes="(min-width: 1024px) 100px, 139px"
        />
        <StaticImage
          className={`${isVisible ? 'animate__animated animate__fadeInUp opacity-100' : ''} !absolute left-[56.852103120759836%] top-[50.591715976331365%] h-[37.8698224852071%] w-[44.097693351424695%] opacity-0 shadow-lg`}
          alt={img6.alt}
          src="images/credit-uses-example.png"
          breakpoints={[325, 452]}
          sizes="(min-width: 1024px) 325px, 452px"
        />
      </aside>
    </section>
  );
};
