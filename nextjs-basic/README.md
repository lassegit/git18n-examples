# NextJS with git18n and react-intl

## Installation

Install the dependencies:

```shell
yarn add react-intl
```

And:

```shell
yarn add -D git18n
```

Add translation script to `package.json`:

```json
"scripts": {
  "translate": "git18n --files '(pages|components)/**/*.{js,jsx,ts,tsx}'"
}
```

Running `yarn translate` will fetch translations from server and put in `.locales` and add strings for translations.

## Setup

Get access token (`GIT18N_SECRET_PROJECT_KEY`) on [git18n](https://git18n.com/) and add it to `.env` or as environmental variable.

Create `lib/i18n.ts` for configuring `react-intl` and importing translations from [git18n](https://git18n.com/):

```ts
export const defaultLocale = 'en';

const locales = ['en', 'de'];

export const messages = locales.reduce((acc, cur) => {
  try {
    acc[cur] = require(`../.locales/${cur}.json`);
  } catch {}
  return acc;
}, {} as Record<string, Record<string, string>>);
```

Add `react-intl` to `pages/_app`:

```ts
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
```
