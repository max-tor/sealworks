import * as React from 'react';

import { Footer } from '../Footer';
import Header from '../Header/Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-full">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);
