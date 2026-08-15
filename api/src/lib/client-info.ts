import 'dotenv/config';

export const clientUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5173'
    : 'https://devfolio-cms.antisolbd.com';
