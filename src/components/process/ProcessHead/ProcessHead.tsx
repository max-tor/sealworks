import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import { ReactComponent as Arrow } from '@/images/arrow-yellow.inline.svg';

export const ProcessHead: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-blue relative -mx-4 flex flex-col items-stretch gap-4 md:mx-0 md:min-h-[374px] md:flex-row">
      <div className="block h-full px-7 pb-6 pt-[35px] text-white md:w-1/2 md:pt-[77px]">
        <span className="font-roboto text-lg font-normal leading-8">
          to deliver exceptional digital experiences,
        </span>
        <h1 className="font-roboto mb-[14px] max-w-[400px] text-[40px] font-normal leading-[48px]">
          we harness the power of{' '}
          <span className="text-yellow">design thinking</span>
        </h1>

        <span
          onClick={toggleAccordion}
          onKeyDown={toggleAccordion}
          role="button"
          tabIndex={0}
          className="font-roboto text-yellow mb-[6px] cursor-pointer select-none text-lg font-bold leading-8"
        >
          {isOpen ? 'close' : 'what’s that?'}{' '}
          <Arrow
            className={isOpen ? 'inline-block rotate-180' : 'inline-block'}
          />
        </span>

        {isOpen && (
          <p className="font-roboto mt-2 max-w-[540px] text-[13px] font-normal leading-[18px]">
            <strong>
              Design thinking is a collaborative, flexible process focused on
              the end user every step of the way.
            </strong>{' '}
            Whether it’s a custom application or specialized learning platform,
            our our user-centered process ensures that every solution is crafted
            to meet your specific needs with a functional, seamless, delightful
            user experience.
          </p>
        )}
      </div>

      <div className="before:drop-shadow-lxl right-0 h-full before:absolute before:-left-[45px] before:top-1/2 before:hidden before:size-0 before:-translate-y-2/4 before:rotate-0 before:border-y-[35px] before:border-l-0 before:border-r-[50px] before:border-solid before:border-[transparent_#0037BB] before:content-[''] md:absolute md:w-1/2 md:bg-[#0037BB] md:shadow-[-5px_0px_15px_rgba(0,0,0,0.25)] md:before:block">
        <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-2/4 md:-translate-y-2/4">
          <StaticImage
            className="animate__animated animate__zoomIn mx-4 mb-6 md:w-[320px] lg:w-[450px] xl:w-[560px]"
            src="../../../images/process-graph.png"
            alt="An iterative product development cycle with stages: empathize, design, develop, test, and launch."
          />
        </div>
      </div>
    </section>
  );
};
