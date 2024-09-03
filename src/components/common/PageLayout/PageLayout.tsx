import * as React from 'react';

import { Footer } from '@/components/common/Footer';
import Header from '@/components/common/Header/Header';

import { PageLayoutProps } from './PageLayoutProps';

export const PageLayout = ({ children, location }: PageLayoutProps) => (
  <div className="min-h-full">
    <div className="mx-auto max-w-7xl md:px-6">
      <Header />
      <main>{children}</main>
      <Footer location={location} />
    </div>
  </div>
);
