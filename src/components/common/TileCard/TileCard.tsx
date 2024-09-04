import React from 'react';

import { TileCardProps } from './TileCardProps';

export const TileCard = ({ title, text }: TileCardProps) => {
  return (
    <div className="group min-h-[382px] cursor-default bg-blue pb-9 pt-[90px] text-center hover:bg-white md:pt-[135px] lg:h-[200px] lg:min-h-[200px] lg:pt-[50px]">
      <h3 className="px-4 font-roboto text-5xl font-bold leading-normal text-white group-hover:text-black md:text-[26px]">
        {title}
      </h3>
      <p className="mt-[6px] px-[10px] text-center font-roboto text-[26px] font-normal text-white group-hover:text-black md:text-base">
        {text}
      </p>
    </div>
  );
};
