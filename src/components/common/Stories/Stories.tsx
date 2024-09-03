import Regenerate from '@/images/magic.inline.svg';
import React from 'react';

const Stories: React.FC = () => {
  return (
    <div className="mx-3 md:mx-0 md:w-2/3 h-full md:min-h-[350px] bg-gray p-4 md:p-6 md:pt-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-center m-auto text-center mb-[14px]">
        <span className="font-roboto text-base font-normal leading-8 text-black px-5">Our story is what you make it to be.</span>
        <a className="flex gap-1 items-center justify-center rounded-[60px] bg-white px-[10px]" href="#">
          <Regenerate />
          <span className="text-blue font-roboto text-base font-bold leading-10 md:leading-8">Regenerate Story</span>
        </a>
      </div>
      <p className="stories-content font-roboto font-light text-2xl leading-[50px] text-black">At Sealworks, we <a href="#">love what we do</a>. Our passion lies in crafting unique <a href="#">web-based things</a> that <a href="#">look beautiful</a>.
        We’re in it for the long haul with you to <a href="#">transform ideas into dynamic digital experiences</a>. 
        Our team’s shared enthusiasm for innovation makes every project an exciting adventure.
        Let’s build something amazing for your audience.
      </p>
    </div>
  );
};

export default Stories;
