# Pinyin API

[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-api.svg)](https://travis-ci.org/pepebecker/pinyin-api)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/pinyin-api/badge.svg)](https://coveralls.io/github/pepebecker/pinyin-api)
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

api.convert('wǒ de māo xǐhuān hē niúnǎi', {keepSpaces: true})
.then(console.log) // wo3 de mao1 xi3huan1 he1 niu2nai3
.catch(console.error)

api.split('wodemaoxihuanheniunai')
.then(console.log) // ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
.catch(console.error)
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-api/issues).