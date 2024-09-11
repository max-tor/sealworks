import { FlowbiteCarouselTheme } from 'flowbite-react';
import type { DeepPartial } from 'flowbite-react/dist/types/types';
import { PageSettings } from 'react-calendly/typings/calendly';

export enum Pages {
  WELCOME = '/',
  PROCESS = '/process/',
  OUR_WORK = '/our-work/',
  CONNECT = '/connect/',
}

export enum CalendlyForms {
  NEW_PROJECT_COLLABORATION = 'https://calendly.com/nickfloro/hello',
  GET_IN_TOUCH = 'https://calendly.com/anatoly-shipitz-speedandfunction/30min',
}

export const calendlyUser = process.env.GATSBY_ACTIVE_ENV
  ? 'anatoly-shipitz-speedandfunction'
  : 'nickfloro';

export const calendlySettings: PageSettings = {
  hideLandingPageDetails: true,
  hideGdprBanner: true,
};

export const carouselTheme = {
  indicators: {
    active: {
      off: 'bg-grayLight backdrop-blur-md',
      on: 'bg-textPrimary',
    },
  },
  item: {
    base: 'absolute block w-full',
    wrapper: {
      off: 'w-full flex-shrink-0 transform cursor-default snap-center',
      on: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    },
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-grayLight group-hover:bg-grayDark group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10', // Specify base class for the controls
    icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
  },
} satisfies DeepPartial<FlowbiteCarouselTheme>;
