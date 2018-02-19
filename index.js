'use strict'

const { fetch } = require('fetch-ponyfill')()
const queryString = require('query-string')

let host = 'https://pinyin-rest.pepebecker.com/pinyin/'

const convert = async (text, options = {}) => {
	host = options.host || host
	const url = host + encodeURI(text) + '?' + queryString.stringify(options)
	const response = await fetch(url)
	return await response.json()
}

const split = async (text, options = {}) => {
	host = options.host || host
	options.split = true
	const url = host + encodeURI(text) + '?' + queryString.stringify(options)
	const response = await fetch(url)
	return await response.json()
}

module.exports = { convert, split }

convert('wǒ de māo xǐhuan hē niúnǎi')
.then(console.log)
