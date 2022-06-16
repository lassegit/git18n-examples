# Examples of how to use git18n and react-intl

[git18n]() offers 2 different translation management, semi-managed or fully managed. Both approach benefits from maintainblity, speed up and improve translations quality by using [git18n](https://git18n.com/).

## Semi-managed

With this approach developers add the translation IDs manually but still retain the benefits from not having to manage the `locale.json` files themselves (and the ease of importing previous translations and exporting again):

```js
intl.formatMessage({ defaultMessage: 'Create Next App', id: 'frontpage.pageTitle' })

// or

<FormattedMessage defaultMessage="Create Next App" id="frontpage.title" />
```

### 1. [create-react-app created with create react app](https://github.com/lassegit/git18n-examples/tree/master/create-react-app)

### 2. [nextjs-basic created with NextJS](https://github.com/lassegit/git18n-examples/tree/master/nextjs-basic)

## Fully managed

With this approach developers don't add IDs, they are automatically generated based on the hash value of the `defaultMessage`. This requires minimal maintenance and gives maximum developer speed:

```js
// The hash IDs look like: hak27d. Read more: https://formatjs.io/docs/getting-started/message-extraction
intl.formatMessage({ defaultMessage: 'Create Next App' })

// or

<FormattedMessage defaultMessage="Create Next App" />
```

### 3. [NextJS with automatic generated hash IDs](https://github.com/lassegit/git18n-examples/tree/master/next-hash-ids)
