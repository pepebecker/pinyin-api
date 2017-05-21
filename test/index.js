'use strict'

const api = require('../index')

describe('Convert', () => {
	it('should convert characters to Pinyin', () => {
		return api.convert('我的猫喜欢喝牛奶').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
})

describe('Split', () => {
	it('should split the text into the correct words', () => {
		return api.split('wodemaoxihuanheniunai').then((data) => {
			const list = ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
			data.should.deepEqual(list)
		})
	})
})
