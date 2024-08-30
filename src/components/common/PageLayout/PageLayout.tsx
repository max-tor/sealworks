import * as React from 'react';

import { Footer } from '../Footer';
import Header from '../Header/Header';
import { PageLayoutProps } from './PageLayoutProps';

export const PageLayout = ({ children, location }: PageLayoutProps) => (
  <div className="min-h-full">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Header />
      <main>{children}</main>
      <Footer location={location} />
    </div>
  </div>
);
