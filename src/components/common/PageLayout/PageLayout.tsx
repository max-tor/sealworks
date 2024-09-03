import * as React from 'react';

import { Footer } from '@/components/common/Footer';
import Header from '@/components/common/Header/Header';

import { PageLayoutProps } from './PageLayoutProps';

export const PageLayout = ({ children, location }: PageLayoutProps) => (
  <div className="min-h-full">
    <div className="mx:min-w-7xl mx:px-6 mx-auto max-w-7xl px-4 md:min-w-[80rem]">
      <Header />
      <main>{children}</main>
      <Footer location={location} />
    </div>
  </div>
);
