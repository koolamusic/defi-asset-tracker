# DeFi Asset Tracker

A Blockchain DApp to track your tokens, NFTs and assets across the `BSC` `ETH` and `POLYGON` Network. Built with <https://moralis.io>

> Current State: **IMPERFECTION**
> Pull Requests are **HIGHLY WELCOME**

## Deploy your own

Head over to <https://moralis.io> sign up for beta access and add your `server_url` to the `.env`

Deploy this repo using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/koolamusic/defi-asset-tracker&project-name=defi-asset-tracker&repository-name=defi-asset-tracker)

## About Moralis

For more information on Moralis and its features, see [the website](https://moralis.io), [the JavaScript guide](https://docs.moralis.io), [the Cloud Code guide](https://docs.moralis.io/cloudcode) or [Web3 Reference](https://docs.moralis.io/web3).

### Getting Started

The easiest way to integrate the Moralis SDK into your JavaScript project is through the [npm module](https://npmjs.org/moralis).
However, if you want to use a pre-compiled file, you can fetch it from [unpkg](https://unpkg.com). The development version is available at [https://unpkg.com/moralis/dist/moralis.js](https://unpkg.com/moralis/dist/moralis.js), and the minified production version is at [https://unpkg.com/moralis/dist/moralis.min.js](https://unpkg.com/moralis/dist/moralis.min.js).

### Using Moralis on Different Platforms

The JavaScript ecosystem is wide and incorporates a large number of platforms and execution environments. To handle this, the Moralis npm module contains special versions of the SDK tailored to use in Node.js and [React Native](https://facebook.github.io/react-native/) environments. Not all features make sense in all environments, so using the appropriate package will ensure that items like local storage, user sessions, and HTTP requests use appropriate dependencies. For server side rendered applications, you may set the `SERVER_RENDERING` variable to prevent warnings at runtime.

To use the npm modules for a browser based application, include it as you normally would:

```js
const Moralis = require('moralis')
// ES6 Minimized
import Moralis from 'moralis/dist/moralis.min.js'
```

For server-side applications or Node.js command line tools, include `'moralis/node'`:

```js
// In a node.js environment
const Moralis = require('moralis/node')
```

For React Native applications, include `'moralis/react-native.js'`:

```js
// In a React Native application
const Moralis = require('moralis/react-native.js')

// On React Native >= 0.50 and Moralis >= 1.11.0, set the Async
const AsyncStorage = require('react-native').AsyncStorage
Moralis.setAsyncStorage(AsyncStorage)
```

For WeChat miniprogram, include `'moralis/weapp'`:

```js
// In a WeChat miniprogram
const Moralis = require('moralis/weapp')
```

If you want to use a pre-compiled file, you can fetch it from [unpkg](https://unpkg.com). The development version is available at [https://unpkg.com/moralis/dist/moralis.weapp.js](https://unpkg.com/moralis/dist/moralis.weapp.js), and the minified production version is at [https://unpkg.com/moralis/dist/moralis.weapp.min.js](https://unpkg.com/moralis/dist/moralis.weapp.min.js).

## Tasks

- [x] Authenticate user with MetaMask
- [x] Authentication Guard for routes
- [x] Account summary Topbar
- [ ] Token Summary Statistic
- [ ] Tokens List page
- [ ] Tokens Detail page
- [ ] Transaction Log page
- [ ] Profile Page
- [ ] Account Logout Utility
- [ ] NFTs collection page
- [ ] Refresh Assets and Token `onChain` Network change - when user changes their network in **MetaMask**
- [ ] Realtime Transactions Subscriptions - Listen for new transactions performed with the user address on the blockchain in realtime
- [ ] 100% Dark mode compatibility
- [ ] Ability to filter collections by `chain` `BSC | ETH | POLYGON`
- [ ] Transactions search and filter feature
- [ ] Refresh on Wallet Address change in **MetaMask**

_Note to self_: This is possibly the **hackiest**, **shittiest** code I've written in a while.
