import React from 'react';

import { Pages } from '@/configs';

import { BottomInformation } from './BottomInformation/LinkBlock';
import { LinkBlock } from './LinkBlock/LinkBlock';
import { FooterProps } from './PageLayoutProps';
import { PageMenuItem } from './PageMenuItem';

const pages: PageMenuItem[] = [
  {
    pathname: Pages.WELCOME,
    title:
      'connect with our vision, expertise, and the story of why we do what we do.',
    link: 'welcome',
    ariaLabel: 'welcome Page',
  },
  {
    pathname: Pages.PROCESS,
    title:
      'learn how we can partner together to craft personalized, award-winning solutions.',
    link: 'the process',
    ariaLabel: 'The Process Page',
  },
  {
    pathname: Pages.OUR_WORK,
    title:
      'connect with our vision, expertise, and the story of why we do what we do.',
    link: 'work',
    ariaLabel: 'Our Work Page',
  },
  {
    pathname: Pages.CONNECT,
    title:
      'get in touch about thoughts, projects, and ideas or schedule a brainstorm.',
    link: 'connect',
    ariaLabel: 'Contact Us Page',
  },
];

const bgColors = ['red', 'yellow', 'blue'];
const colors = ['white', 'black', 'white'];

export const Footer = ({ location, footer = 'full' }: FooterProps) => {
  const { pathname } = location;
  const card = pages.filter((page) => page.pathname !== pathname).slice(0, 3);

  const renderCard = (page: PageMenuItem, index: number) => (
    <LinkBlock
      key={page.link}
      pathname={page.pathname}
      linkText={page.link}
      bgColor={bgColors[index]}
      fontColor={colors[index]}
      description={page.title}
    />
  );

  return (
    <footer className="relative" role="contentinfo">
      {footer === 'full' && (
        <div className="my-6 grid gap-x-4 gap-y-8 md:my-6 md:grid-cols-3">
          {card.map(renderCard)}
        </div>
      )}

      <BottomInformation />
    </footer>
  );
};
