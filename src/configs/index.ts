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
