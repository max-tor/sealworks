import type { PageProps } from 'gatsby';
import * as React from 'react';

export interface PageLayoutProps {
  children: React.ReactNode;
  location: PageProps['location'];
  footer?: 'lite' | 'full';
}
