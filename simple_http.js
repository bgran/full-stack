//const http = require('http')
const express = require('express')
const app = express()

let data = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "1337-666"
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "2323-032423"
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "555-1337"
	},
	{
		id: 4,
		name: "Mary Poppendick",
		number: "133713371337"
	}
]

//const app = http.createServer((request, response) => {
//        response.writeHead(200, { 'Content-Type': 'text/plain' } )
//        response.end('Hello World!')
//})

app.get('/', (req, res) => {
	res.send("<h1>Hello World!</h1>")
})

app.get ('/api/persons', (req, res) => {
	res.json(data)
})


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)


