export const LANG_TO_LOCALE = {
  en: 'en_US',
  ru: 'ru_RU',
} as const;

export const DEFAULT_LOCALE = 'en';

const translations = {
  en: require('./locales/en_US.json'),
  ru: require('./locales/ru_RU.json'),
};

export const getMessages = (locale: string): Promise<any> => {
  const messages = translations[locale] ?? translations[DEFAULT_LOCALE]; //fallback
  return messages;
};
