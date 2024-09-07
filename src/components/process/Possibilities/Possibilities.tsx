import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';

import { useOnscrollAnimation } from '@/hooks/useOnscrollAnimation';

export const Possibilities = () => {
  const [isVisible, observe] = useOnscrollAnimation();
  const ref = useRef(null);

  useEffect(() => {
    observe(ref.current);
  }, [observe]);

  return (
    <section
      ref={ref}
      className={`${isVisible ? 'opacity-1 relative' : 'opacity-0'} h-[595px]`}
    >
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__fadeInLeft' : ''} absolute left-0 top-[30px]`}
      >
        <StaticImage
          className="max-w-[200px] md:max-w-[250px] lg:max-w-[400px]"
          src="../../../images/possibilities1.png"
          alt="Reality Store"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__fadeInDown' : ''} absolute left-1/2 top-0 md:left-[160px] lg:left-[314px]`}
      >
        <StaticImage
          className="max-w-[278px]"
          src="../../../images/possibilities2.png"
          alt="phone hand"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__zoomIn' : ''} absolute left-[560px] top-[94px] hidden lg:block`}
      >
        <StaticImage
          className="max-w-[330px]"
          src="../../../images/possibilities3.png"
          alt="Leader connect"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__fadeInDown' : ''} absolute right-[10px] top-0 hidden md:block`}
      >
        <StaticImage
          className="max-w-[362px]"
          src="../../../images/possibilities4.png"
          alt="website"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__fadeInLeft' : ''} absolute left-0 top-[200px] md:top-[376px]`}
      >
        <StaticImage
          className="max-w-[150px] md:max-w-[255px]"
          src="../../../images/possibilities5.png"
          alt="phone"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__zoomIn' : ''} absolute left-[30%] top-[220px] md:left-[190px] md:top-[270px]`}
      >
        <StaticImage
          className="max-w-[380px]"
          src="../../../images/possibilities6.png"
          alt="Learning"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__fadeInUp' : ''} absolute bottom-0 left-[502px] hidden lg:block`}
      >
        <StaticImage
          className="max-w-[170px]"
          src="../../../images/possibilities7.png"
          alt="web phone screen"
        />
      </div>
      <div
        className={`${isVisible ? 'animate__delay-1s animate__animated animate__fadeInUp' : ''} absolute bottom-0 right-0`}
      >
        <StaticImage
          className="md:max-w-[350px] lg:max-w-[560px]"
          src="../../../images/possibilities8.png"
          alt="tablet screen"
        />
      </div>
    </section>
  );
};
