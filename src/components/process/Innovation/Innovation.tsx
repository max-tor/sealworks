import React from 'react';

export const Innovation = () => {
  return (
    <section className="relative mb-10 flex flex-col justify-between md:mb-[88px] lg:flex-row">
      <h2 className="left-0 top-10 text-right font-roboto text-[100px] font-normal md:absolute md:text-[190px] md:leading-[168px] lg:w-[516px]">
        inno vation
      </h2>
      <div className="ml-auto bg-gray px-20 pb-[70px] lg:w-[76%]">
        <h3 className="box-content font-roboto text-[40px] leading-[48px] text-blue lg:max-w-[515px] lg:pb-[140px] lg:pl-[270px] lg:pt-[170px]">
          innovation is our foundational principle.
        </h3>
        <p className="mb-3 font-roboto text-base font-normal">
          Innovation at Sealworks is about continuously pushing boundaries to
          achieve excellence and provide unparalleled value. It allows us to
          create cutting-edge solutions that meet the ever-evolving needs of our
          partners. We are constantly exploring new technologies and
          methodologies, ensuring our products are not only relevant today but
          also future-proof.{' '}
        </p>
        <p className="mb-7 font-roboto text-base font-normal">
          We think creatively and solve problems in unique ways, turning
          challenges into opportunities for growth and improvement. Innovation
          keeps us ahead of industry trends, allowing us to offer the latest
          advancements and best practices to our clients so we can deliver
          high-quality digital experiences that stand out.
        </p>
      </div>
    </section>
  );
};
