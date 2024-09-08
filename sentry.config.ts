import * as Sentry from '@sentry/gatsby';

console.log('Sentry.init');

Sentry.init({
  dsn: 'https://a5f2d1f880f43191a0f7045fcdfb0a3b@o1363374.ingest.us.sentry.io/4507916934184960',
  integrations: [
    Sentry.feedbackIntegration({
      enableScreenshot: true,
    }),
  ],
});
