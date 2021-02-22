const listHelper = require('../utils/list_helper')
test ('dummy returns one', () => {
	const blogs = []
	const results = listHelper.dummy(blogs)
	expect(results).toBe(1)
})

'use strict';
const fs = require('fs')
const foo = require("../utils/list_helper").totalLikes

describe("total likes", () => {

	const blogs = require("../blogs.json")
/*
	//const blogs = []
	let rawdata = fs.readFileSync('blogs.json', 'utf8')
	console.log("rawdata: ", rawdata)
	let foo = JSON.parse("{1:2, 3:4}")
	console.log("säätö", foo)
	let blogs = JSON.parse(rawdata)
	console.log("GGUOOOGUG: ", blogs)

	//const tbl = require("../blogs.json")
*/
	console.log("TOTAL LIKES", blogs.length)

	test('test likes of all blogs', () => {
		const result = foo(blogs)
		let rv = 0
		console.log("result", result)
		console.log("length", blogs.length)
		for(let i = 0; i< blogs.length; i++) {
			rv += blogs[i].likes
		}
		expect(result).toBe(rv)
	})
})
