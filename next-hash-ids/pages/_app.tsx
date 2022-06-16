import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { defaultLocale, messages } from '../lib/i18n';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter();

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
