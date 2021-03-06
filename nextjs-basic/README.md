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

Get the access token (`GIT18N_SECRET_PROJECT_KEY`) on [git18n](https://git18n.com/) and add it to `.env` or as environmental variable (for production build environments).

Add translation script to `package.json`:

```json
"scripts": {
  "translate": "git18n --files '(pages|components)/**/*.{js,jsx,ts,tsx}'"
}
```

Running `yarn translate` will fetch translations from server and put in `.locales` and add strings for translations.

## Setup

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

## Additional

Add `yarn translate` to build command:

```json
"scripts": {
  "build": "yarn translate && next build",
}
```

Depending on your ESLint setup, either add `.locales` to the root `.gitignore` or create the `.locales` folder in the root and add `.gitignore` inside that keeps an empty folder:

```
*
*/
!.gitignore
```

If wanting to remove `git18n`, just uninstall the NPM package and import the translation files manually from `.locales` folder.

This is everything required to be able to easily managed translations on [git18n](https://git18n.com/):

![Screenshot from git18n app](screenshot.png)
