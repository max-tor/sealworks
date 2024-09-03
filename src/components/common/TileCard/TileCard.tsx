import React from 'react';

import { TileCardProps } from './TileCardProps';

export const TileCard = ({
  title,
  text,
}: TileCardProps) => {

  return (
    <div className="min-h-[382px] lg:min-h-[200px] lg:h-[200px] bg-blue text-center pt-[135px] lg:pt-[50px] pb-9 hover:bg-white group cursor-default">
      <h3 className="font-roboto font-bold text-[26px] leading-normal text-white px-4 group-hover:text-black">{title}</h3>
      <p className="mt-[6px] px-[10px] font-roboto text-white font-normal text-base leading-5 text-center group-hover:text-black">{text}</p>
    </div>
  );
};
