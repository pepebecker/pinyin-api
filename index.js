'use strict'

const {fetch, Request, Response, Headers} = require('fetch-ponyfill')()
const queryString = require('query-string')

const baseURL = 'http://pinyin-rest.pepebecker.com/'

const convert = (text, params = {}) => new Promise((yay, nay) => {
	const query = queryString.stringify(params)
	fetch(baseURL + 'pinyin/' + encodeURI(text) + '?' + query)
	.then((response) => response.text())
	.then(yay)
	.catch(nay)
})

const split = (text, params = {}) => new Promise((yay, nay) => {
	params.split = true
	const query = queryString.stringify(params)
	fetch(baseURL + 'pinyin/' + encodeURI(text) + '?' + query)
	.then((response) => response.json())
	.then(yay)
	.catch(nay)
})

module.exports = {convert, split}
