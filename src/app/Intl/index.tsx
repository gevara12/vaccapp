import { ReactNode, useEffect, useState } from 'react';
import { IntlProvider as Provider } from 'react-intl';
import { NativeModules } from 'react-native';

import { DEFAULT_LOCALE, getMessages } from 'src/app/Intl/service';

export const IntlProvider = (props: TpIntlProviderProps) => {
  const { children } = props;
  const [messages, setMessages] = useState({});

  const localeDevice = NativeModules.I18nManager.localeIdentifier;
  const locale = localeDevice?.slice(0, 2);
  const currentLocale = locale || DEFAULT_LOCALE;

  useEffect(() => {
    setMessages(getMessages(currentLocale));
  }, [currentLocale]);

  return (
    <Provider
      locale={locale}
      defaultLocale="en"
      messages={messages}
      onError={() => console.info('Translations is not full')}>
      {children}
    </Provider>
  );
};
type TpIntlProviderProps = {
  children: ReactNode;
};
