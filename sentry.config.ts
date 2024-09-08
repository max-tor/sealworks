import * as Sentry from '@sentry/gatsby';

console.log('Sentry.init');

Sentry.init({
  dsn: 'https://a5f2d1f880f43191a0f7045fcdfb0a3b@o1363374.ingest.us.sentry.io/4507916934184960',
  integrations: [
    Sentry.feedbackIntegration({
      enableScreenshot: true,
    }),
  ],
  // Tracing
  tracesSampleRate: 0,
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
