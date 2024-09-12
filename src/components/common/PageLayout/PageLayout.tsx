import * as React from 'react';

import { Footer } from '@/components/common/Footer';
import Header from '@/components/common/Header/Header';
import { useCalendlyWidget } from '@/hooks/useCalendlyWidget';

import { PageLayoutProps } from './PageLayoutProps';

export const PageLayout = ({ children, location }: PageLayoutProps) => {
  const CalendlyWidget = useCalendlyWidget({ label: 'Book a session' });

  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-[1262px] px-4 pt-[67px] md:pt-[85px] lg:pt-[115px]">
        <Header />
        <main role="main">{children}</main>
        <Footer location={location} />
        {CalendlyWidget}
      </div>
    </div>
  );
};
