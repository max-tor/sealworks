import type { PageProps } from 'gatsby';

export interface FooterProps {
  location: PageProps['location'];
  footer?: 'lite' | 'full';
}
