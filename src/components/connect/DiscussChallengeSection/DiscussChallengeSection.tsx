import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const DiscussChallengeSection: React.FC = () => {
  return (
    <section className="relative z-20 bg-yellow pb-2.5 pl-1 pr-20 pt-4 max-md:max-w-full max-md:pr-5">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col max-md:ml-0 max-md:w-full lg:w-[46%]">
          <StaticImage
            className="lg:h-[334px] lg:w-[470px] lg:object-cover"
            imgClassName="h-auto max-w-full object-top"
            alt="Mockup of a feedback page with handwritten elements on the left and digital interface on the right."
            src="images/feedback-page-mockup.png"
            breakpoints={[470, 640, 768, 1024, 1280]}
            sizes="(min-width: 1280px) 470px, 100vw"
          />
        </div>
        <div className="ml-5 flex flex-col max-md:ml-0 max-md:w-full lg:w-[54%]">
          <div className="m-5 flex w-full flex-col items-start max-md:mt-10 max-md:max-w-full">
            <h2 className="self-stretch text-4xl leading-10 text-black max-md:max-w-full">
              let’s discuss your challenge and create a solution today.
            </h2>
            <div className="text-blue-900 mx-5 mt-3.5 flex w-[394px] max-w-full justify-between gap-5 text-lg leading-8 max-md:ml-2.5">
              <div className="w-60 font-['Roboto'] text-lg font-normal leading-loose text-[#002d9a]">
                30-min <br />
                define define your needs
              </div>
              <div className="w-60 font-['Roboto'] text-lg font-normal leading-loose text-[#002d9a]">
                discuss ideas
                <br />
                define define next steps
              </div>
            </div>
            <button className="mt-3.5 rounded-[32.586px] bg-blue px-9 py-4 text-center text-2xl font-bold text-white max-md:px-5">
              book a project jam session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
