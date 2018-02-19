# Pinyin API

[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-api.svg)](https://travis-ci.org/pepebecker/pinyin-api)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/pinyin-api/badge.svg)](https://coveralls.io/github/pepebecker/pinyin-api)
[![Greenkeeper badge](https://badges.greenkeeper.io/pepebecker/pinyin-api.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-api.svg)](https://david-dm.org/pepebecker/pinyin-api)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-api.svg)](https://david-dm.org/pepebecker/pinyin-api#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/pinyin-api.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install pepebecker/pinyin-api
```

## Usage

```js
const api = require('pinyin-api')

api.convert('我的猫喜欢喝牛奶')
.then(console.log)
// {
//   text: 'wǒ de māo xǐhuan hē niúnǎi',
//   data: [
//     'wǒ ',
//     [ 'de', 'dī', 'dí', 'dì' ],
//     ' māo xǐhuan ',
//     [ 'hē', 'hè' ],
//     ' niúnǎi'
//   ]
// }

api.convert('wo3 de mao1 xi3huan he1 niu2nai3')
.then(console.log)
// {
//   text: 'wǒ de māo xǐhuan hē niúnǎi',
//   data: 'wǒ de māo xǐhuan hē niúnǎi'
// }

api.convert('wǒ de māo xǐhuan hē niúnǎi')
.then(console.log)
// {
//   text: 'wo3 de5 mao1 xi3huan5 he1 niu2nai3',
//   data: 'wo3 de5 mao1 xi3huan5 he1 niu2nai3'
// }

api.split('wodemaoxihuanheniunai')
.then(console.log)
// {
//   text: 'wo de mao xi huan he niu nai',
//   data: [ 'wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai' ]
// }
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-api/issues).
