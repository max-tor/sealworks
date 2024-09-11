import React, { useState } from 'react';

import { ReactComponent as Regenerate } from '@/images/magic.inline.svg';

const textOptions = [
  [
    'love what we do',
    'bring magic to millions of users',
    'support you from concept to launch',
  ],
  [
    'web-based things',
    'user experiences',
    'scalable and responsive environments',
  ],
  ['look beautiful', 'feel intuitive', 'resonate and inspire'],
  [
    'transform ideas into dynamic digital experiences',
    'tackle complex problems with simple solutions',
    'connect and make a difference',
  ],
  ['innovation', 'collaboration', 'creativity'],
  [
    'something amazing for your audience',
    'digital experiences that will captivate',
    'the best, most functional solution you can imagine',
  ],
];

const Stories: React.FC = () => {
  const [currentTextIndices, setCurrentTextIndices] = useState(
    new Array(textOptions.length).fill(0)
  );

  const handleRegenerateClick = () => {
    setCurrentTextIndices((prevIndices) =>
      prevIndices.map((index, i) => (index + 1) % textOptions[i].length)
    );
  };

  const handleTextClick = (index: number) => {
    setCurrentTextIndices((prevIndices) => {
      const newIndices = [...prevIndices];

      newIndices[index] = (newIndices[index] + 1) % textOptions[index].length;

      return newIndices;
    });
  };

  const renderText = (index: number) => (
    <span
      onClick={() => handleTextClick(index)}
      onKeyDown={() => handleTextClick(index)}
      className="cursor-pointer select-none text-red underline underline-offset-[6px] hover:text-redDark"
      role="button"
      tabIndex={0}
    >
      {textOptions[index][currentTextIndices[index]]}
    </span>
  );

  return (
    <div className="mx-3 h-full bg-grayDark p-4 md:mx-0 md:min-h-[350px] md:p-6 md:pt-5 lg:w-2/3">
      <div className="m-auto mb-[14px] flex flex-col justify-center gap-2 text-center md:flex-row md:gap-0">
        <span className="px-5 font-roboto text-base font-normal leading-8 text-black">
          Our story is what you make it to be.
        </span>
        <button
          className="flex items-center justify-center gap-1 rounded-[60px] border-2 border-white bg-white px-[10px] text-blue hover:border-blueDark hover:text-blueDark"
          onClick={handleRegenerateClick}
        >
          <Regenerate />
          <span className="font-roboto text-base font-bold leading-10 md:leading-8">
            Regenerate Story
          </span>
        </button>
      </div>
      <p className="stories-content font-roboto text-2xl font-light leading-[50px] text-black">
        At Sealworks, we {renderText(0)}. Our passion lies in crafting unique{' '}
        {renderText(1)} that {renderText(2)}. We’re in it for the long haul with
        you to {renderText(3)}. Our team’s shared enthusiasm for {renderText(4)}{' '}
        makes every project an exciting adventure. Let’s build {renderText(5)}.
      </p>
    </div>
  );
};

export default Stories;
