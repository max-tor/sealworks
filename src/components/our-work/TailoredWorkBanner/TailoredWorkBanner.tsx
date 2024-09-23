import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

// const blockWidth = 662;
// const blockHeight = 374;

const img1 = {
  top: 35,
  left: 69,
  width: 302,
  height: 207,
  alt: 'Raising Critical Thinkers.',
};

const img2 = {
  top: 0,
  left: 381,
  width: 262,
  height: 130,
  alt: 'E-learning module from the American Red Cross showing steps to protect against bloodborne pathogens, with progress indicators and action buttons.',
};
const img3 = {
  top: 194,
  left: 276,
  width: 285,
  height: 183,
  alt: 'Ad(Vantage) Point',
};
const img4 = {
  top: 146,
  left: 507,
  width: 139,
  height: 228,
  alt: 'Interactive module showing privilege reflection on a mountain graphic, with categories like Family Background, Race, and Education.',
};

const img5 = {
  top: 228,
  left: 47,
  width: 220,
  height: 146,
  alt: 'thinkPortal',
};

export const TailoredWorkBanner = () => {
  return (
    <section className="relative mb-5 flex max-w-full overflow-hidden max-lg:flex-col lg:h-[374px] lg:gap-[50px] lg:bg-[#ba0202]">
      <div className="flex w-[36%] flex-1 flex-col justify-center p-5 font-roboto max-lg:ml-0 max-lg:w-full lg:mb-5 lg:h-[374px] lg:bg-[#ba0202] lg:pr-[50px]">
        <div className="leading-[70px] tracking-normal lg:text-white xl:ml-[72px]">
          <div className="text-[40px] font-normal lg:text-[40px]">
            our work is
          </div>
          <div className="max-w-full text-[66px] lg:text-[66px]">
            tailored to you
          </div>
        </div>
      </div>
      <aside className="relative grid h-[56.49546827794561vw] bg-[#ba0202] lg:h-[374px] lg:w-[662px] lg:flex-[0_0_662px] lg:flex-col">
        <StaticImage
          alt=""
          src="images/back.png"
          breakpoints={[662, 1024]}
          sizes="(min-width: 1024px) 662px, 1024px"
          quality={100}
          role="presentation"
          loading="eager"
        />
        <StaticImage
          className="!absolute left-[10.42296072507553%] top-[9.358288770053475%] h-[55.3475935828877%] w-[45.61933534743202%] shadow-lg"
          alt={img1.alt}
          src="images/raising-critical-thinkers.png"
          breakpoints={[302, 467]}
          sizes="(min-width: 1024px) 302px, 467px"
          loading="eager"
        />
        <StaticImage
          className="!absolute left-[57.55287009063444%] top-0 h-[34.75935828877005%] w-[39.577039274924466%] shadow-lg"
          alt={img2.alt}
          src="images/red-cross.png"
          breakpoints={[262, 405]}
          sizes="(min-width: 1024px) 262px, 405px"
          loading="eager"
        />

        <StaticImage
          className="!absolute left-[41.69184290030212%] top-[51.87165775401069%] h-[48.93048128342246%] w-[43.051359516616316%] shadow-lg"
          alt={img3.alt}
          src="images/dialogues.png"
          breakpoints={[285, 441]}
          sizes="(min-width: 1024px) 285px, 441px"
          loading="eager"
        />

        <StaticImage
          className="!absolute left-[76.58610271903324%] top-[39.037433155080215%] h-[60.962566844919785%] w-[20.996978851963746%] shadow-lg"
          alt={img4.alt}
          src="images/nielsen-mountain-toggle.png"
          breakpoints={[139, 215]}
          sizes="(min-width: 1024px) 139px, 215px"
          loading="eager"
        />

        <StaticImage
          className="!absolute left-[7.099697885196375%] top-[60.962566844919785%] h-[39.037433155080215%] w-[33.23262839879154%] shadow-lg"
          alt={img5.alt}
          src="images/think-portal.png"
          breakpoints={[220, 340]}
          sizes="(min-width: 1024px) 220px, 340px"
          loading="eager"
        />
      </aside>
    </section>
  );
};
