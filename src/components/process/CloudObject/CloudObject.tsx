import React from 'react';

import App from '@/images/app.inline.svg';
import Cloud from '@/images/cloud.inline.svg';
import Course from '@/images/course.inline.svg';
import Ecosystem from '@/images/ecosystem.inline.svg';
import Integrations from '@/images/integrations.inline.svg';
import Lxp from '@/images/lxp.inline.svg';
import Mobile from '@/images/mobile.inline.svg';
import Platform from '@/images/platform.inline.svg';

export const CloudObject = () => {
  return (
    <div className="relative scale-50 md:scale-100">
      <Cloud className="left-7" />
      <App className="animate__fadeInUp animate__animated animate__slow animate__delay-2s absolute left-[194px] top-[114px]" />
      <Course className="animate__fadeInUp animate__animated animate__slow animate__delay-3s absolute left-[59px] top-[183px]" />
      <Platform className="animate__fadeInUp animate__animated animate__slow animate__delay-3s absolute left-[315px] top-[164px]" />
      <Ecosystem className="animate__fadeInUp animate__animated animate__zoomIn animate__delay-1s absolute left-[156px] top-[238px]" />
      <Mobile className="animate__fadeInUp animate__animated animate__slow animate__delay-4s absolute left-[96px] top-[311px]" />
      <Lxp className="animate__fadeInUp animate__animated animate__slow animate__delay-4s absolute left-[365px] top-[302px]" />
      <Integrations className="animate__fadeInUp animate__animated animate__slow animate__delay-5s absolute left-[159px] top-[365px]" />
    </div>
  );
};
