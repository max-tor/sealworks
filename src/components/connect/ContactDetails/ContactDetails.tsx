import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

export const ContactDetails = () => {
  const siteMetadata = useSiteMetadata();
  const { title, address, contactPhone, email } = siteMetadata;

  return (
    <section className="my-5 flex w-full items-center font-roboto max-lg:flex-col">
      <h2 className="py-5 text-[40px] leading-normal text-blue max-md:text-4xl max-md:leading-[49px] xl:text-[66px]">
        <span className="text-red">it&apos;s time</span> to take your digital
        experiences to the next level.
      </h2>
      <div className="flex items-center max-md:w-full max-md:flex-col lg:flex-[0_0_640px]">
        <StaticImage
          className="flex-[0_0_232px] lg:h-[294px] lg:w-[232px]"
          imgClassName="h-auto max-w-full"
          src="images/address.png"
          alt=""
          width={232}
          height={294}
        />

        <div className="my-[32px] flex w-full flex-col bg-grayLight p-[24px] text-black md:-ml-[32px] md:flex-col md:pl-[100px] md:pr-[26px]">
          <h2 className="self-start text-[26px] font-bold">
            let&apos;s connect
          </h2>
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
      {/*<>
        <div className="w-96 h-56 relative">
          <div className="w-96 h-56 left-0 top-0 absolute bg-neutral-200" />
          <div className="left-[131px] top-[68px] absolute"><span
            style="text-[#002d9a] text-lg font-bold font-['Roboto']">800-460-6494</span><span
            style="text-black text-lg font-bold font-['Roboto']"> </span><span
            style="text-black text-lg font-normal font-['Roboto']"> |   </span><span
            style="text-[#002d9a] text-lg font-normal font-['Roboto']">i</span><span
            style="text-[#002d9a] text-lg font-bold font-['Roboto']">nfo@sealworks.com<br /><br /></span><span
            style="text-black text-lg font-bold font-['Roboto']">Sealworks Interactive Studios<br /></span><span
            style="text-black text-lg font-normal font-['Roboto']">31 w ashland st<br />doylestown, pa 18901</span>
          </div>
        </div>
      </>*/}
    </section>
  );
};

/**/
