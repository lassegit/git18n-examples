import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import { defaultLocale, messages, locales } from './i18n';

const userLocale = 'de'; //navigator.language.split('-')[0]; // only match 2 chararcter language codes
const locale = locales.includes(userLocale) ? userLocale : defaultLocale; // defaultLocale as fallback

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
