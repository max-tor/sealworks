import { Pages } from '@/configs';

export interface PageMenuItem {
  link: string;
  pathname: Pages;
  title: string;
  ariaLabel?: string;
}
