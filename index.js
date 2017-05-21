'use strict'

const {fetch, Request, Response, Headers} = require('fetch-ponyfill')()
const queryString = require('query-string')

const baseURL = 'http://pinyin-rest.pepebecker.com/pinyin/'

const convert = (text, options = {}) => new Promise((yay, nay) => {
	const url = baseURL + encodeURI(text) + '?' + queryString.stringify(options)
	fetch(url)
	.then((response) => response.text())
	.then(yay)
	.catch(nay)
})

const split = (text, options = {}) => new Promise((yay, nay) => {
	options.split = true
	const url = baseURL + encodeURI(text) + '?' + queryString.stringify(options)
	fetch(url)
	.then((response) => response.json())
	.then(yay)
	.catch(nay)
})

module.exports = {convert, split}
