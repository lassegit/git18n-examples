export const defaultLocale = 'en';

export const locales = ['en', 'de'];

export const messages = locales.reduce((acc, cur) => {
  try {
    acc[cur] = require(`../.locales/${cur}.json`);
  } catch {}
  return acc;
}, {} as Record<string, Record<string, string>>);

// Note: For Javascript just remove "as Record<string, Record<string, string>>" above
