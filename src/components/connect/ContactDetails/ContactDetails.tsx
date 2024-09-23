import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

export const ContactDetails = () => {
  const siteMetadata = useSiteMetadata();
  const { title, address, contactPhone, email } = siteMetadata;

  return (
    <section className="my-5 flex w-full items-center font-roboto max-lg:flex-col">
      <h2 className="py-5 text-[40px] text-blue max-md:text-4xl max-md:leading-[49px] lg:leading-[70px] xl:text-[66px]">
        <span className="text-red">it’s time</span> to take your digital
        experiences to the next level.
      </h2>
      <div className="flex items-center max-md:w-full max-md:flex-col lg:flex-[0_0_640px]">
        <StaticImage
          className="lg:h-[294px] lg:w-[232px] lg:flex-[0_0_232px]"
          imgClassName="h-auto max-w-full"
          src="images/address.png"
          alt=""
          width={232}
          height={294}
          breakpoints={[232]}
          sizes="(min-width: 1280px) 232px, 100vw"
          role="presentation"
        />

        <div className="my-[32px] flex w-full flex-col bg-grayLight p-[24px] text-black md:-ml-[32px] md:flex-col md:pl-[100px] md:pr-[26px]">
          <h2 className="self-start text-[26px] font-bold">let’s connect</h2>
          <div className="mt-3.5 self-start text-[18px] lg:self-end">
            <a
              key="phone"
              href={`tel:${contactPhone}`}
              className="font-bold text-blue"
            >
              {contactPhone}
            </a>
            {' | '}
            <a
              key="email"
              href={`mailto:${email}`}
              className="font-bold text-blue"
            >
              {email}
            </a>
            <br />
            <br />
            <strong>{title}</strong>
            <br />
            {address}
          </div>
        </div>
      </div>
    </section>
  );
};
