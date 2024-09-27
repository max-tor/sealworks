import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';
import { ReactComponent as Cloud } from '@/images/cloud.inline.svg';

export const CloudObject = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'opacity-1 relative' : 'opacity-0'} scale-[60%] md:scale-100`}
    >
      <Cloud className="left-7" />
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__slow animate__delay-2s' : ''} absolute left-[194px] top-[114px]`}
      >
        <StaticImage
          className="w-[76px]"
          src="../../../images/app.png"
          alt="User-friendly app designed to enhance engagement and streamline functionality."
        />
      </div>
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__slow animate__delay-3s' : ''} absolute left-[59px] top-[183px]`}
      >
        <StaticImage
          className="w-[150px]"
          src="../../../images/courses.png"
          alt="Engaging interactive courses designed for effective learning and knowledge retention."
        />
      </div>
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__slow animate__delay-3s' : ''} absolute left-[315px] top-[164px]`}
      >
        <StaticImage
          className="w-[189px]"
          src="../../../images/platform.png"
          alt="Scalable platform designed for seamless digital experiences and enhanced functionality."
        />
      </div>
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__zoomIn animate__delay-1s' : ''} absolute left-[156px] top-[238px]`}
      >
        <StaticImage
          className="w-[253px]"
          src="../../../images/ecosystem.png"
          alt="Comprehensive digital ecosystem integrating tools and platforms for seamless user interaction."
        />
      </div>
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__slow animate__delay-4s' : ''} absolute left-[96px] top-[311px]`}
      >
        <StaticImage
          className="w-[113px]"
          src="../../../images/mobile.png"
          alt="Responsive mobile solutions for optimal user experience on any device."
        />
      </div>
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__slow animate__delay-4s' : ''} absolute left-[365px] top-[302px]`}
      >
        <StaticImage
          className="w-[90px]"
          src="../../../images/lxp.png"
          alt="Intuitive Learning Experience Platform with personalized learning paths and interactive content."
        />
      </div>
      <div
        className={`${isVisible ? 'animate__fadeInUp animate__animated animate__slow animate__delay-5s' : ''} absolute left-[159px] top-[365px]`}
      >
        <StaticImage
          className="w-[266px]"
          src="../../../images/integrations.png"
          alt="Seamless integrations to enhance functionality and streamline workflows."
        />
      </div>
    </div>
  );
};
