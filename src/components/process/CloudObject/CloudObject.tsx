import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Cloud from '@/images/cloud.inline.svg';

export const CloudObject = () => {
  return (
    <div className="relative scale-[60%] md:scale-100">
      <Cloud className="left-7" />

      <div className="animate__fadeInUp animate__animated animate__slow animate__delay-2s absolute left-[194px] top-[114px]">
        <StaticImage
          className="w-[76px]"
          src="../../../images/app.png"
          alt="APP"
        />
      </div>
      <div className="animate__fadeInUp animate__animated animate__slow animate__delay-3s absolute left-[59px] top-[183px]">
        <StaticImage
          className="w-[150px]"
          src="../../../images/courses.png"
          alt="Courses"
        />
      </div>
      <div className="animate__fadeInUp animate__animated animate__slow animate__delay-3s absolute left-[315px] top-[164px]">
        <StaticImage
          className="w-[189px]"
          src="../../../images/platform.png"
          alt="Platform"
        />
      </div>
      <div className="animate__fadeInUp animate__animated animate__zoomIn animate__delay-1s absolute left-[156px] top-[238px]">
        <StaticImage
          className="w-[253px]"
          src="../../../images/ecosystem.png"
          alt="Ecosystem"
        />
      </div>
      <div className="animate__fadeInUp animate__animated animate__slow animate__delay-4s absolute left-[96px] top-[311px]">
        <StaticImage
          className="w-[113px]"
          src="../../../images/mobile.png"
          alt="Mobile"
        />
      </div>
      <div className="animate__fadeInUp animate__animated animate__slow animate__delay-4s absolute left-[365px] top-[302px]">
        <StaticImage
          className="w-[90px]"
          src="../../../images/lxp.png"
          alt="Lxp"
        />
      </div>
      <div className="animate__fadeInUp animate__animated animate__slow animate__delay-5s absolute left-[159px] top-[365px]">
        <StaticImage
          className="w-[266px]"
          src="../../../images/integrations.png"
          alt="Integrations"
        />
      </div>
    </div>
  );
};
