export const defaultLocale = 'en';

const locales = ['en', 'de'];

export const messages = locales.reduce((acc, cur) => {
  try {
    acc[cur] = require(`../.locales/${cur}.json`);
  } catch {}
  return acc;
}, {} as Record<string, Record<string, string>>);
