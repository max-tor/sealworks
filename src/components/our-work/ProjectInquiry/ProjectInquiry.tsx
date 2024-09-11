import React from 'react';

import BrainstormImg from './images/brainstorm.inline.svg';
import MessageImg from './images/message.inline.svg';

export const ProjectInquiry = () => {
  return (
    <section className="flex flex-col rounded-none bg-[#f1f1f1]">
      <div className="w-full px-4 pb-3.5 pt-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-[15%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow flex-col max-md:mt-10">
              <BrainstormImg
                alt="Brainstorming session for creative idea development"
                className="z-10 aspect-square w-[178px] object-contain"
              />
            </div>
          </div>
          <div className="ml-5 flex w-[85%] flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto flex w-full flex-col self-stretch max-md:mt-10 max-md:max-w-full">
              <div className="flex w-full flex-wrap items-start gap-10 max-md:max-w-full">
                <h1 className="w-[528px] shrink grow text-7xl leading-none text-black max-md:max-w-full max-md:text-4xl">
                  what&apos;s your project?
                </h1>
                <div className="mt-2 flex items-start text-center text-lg font-bold text-white">
                  <button className="z-10 mt-7 self-end rounded-[55.602px] bg-blue px-7 py-4 max-md:mr-0 max-md:px-5">
                    get in touch
                  </button>
                  <MessageImg
                    alt="Communication in projects"
                    className="aspect-[1.61] w-[114px] max-w-full shrink-0 self-start object-contain"
                  />
                </div>
              </div>
              <p className="self-start text-2xl leading-none text-black max-md:max-w-full">
                reach out to brainstorm, get inspired, and craft your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
