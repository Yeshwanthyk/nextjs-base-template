module.exports = {
  env: {
    DB_ENDPOINT: process.env.DB_ENDPOINT,
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
  target: 'serverless',
};
