//const http = require('http')
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

var json_parser = bodyparser.json()
var tmp = bodyparser.urlencoded({extended: false })

//var logger = morgan('tiny')
//morgan.token('json', function (req, res) { return req.headers["body"] })
morgan.token('json', function (req, res) { return JSON.stringify(req.body) })
morgan.token('host', function(req, res) { return req.hostname })
morgan.token('clienthost', function(req, res) { return res.hostname })
var logger = morgan(':method :url :status :remote-addr :host :res[content-length] - :response-time ms :json')
app.use(logger)

//const pass_phrase = "DFeorwefkSDFwfklsfowerERpvFgDGDFG"
const pass_phrase = ""
const url = "mongodb+srv://bgran1337:'"+ pass_phrase +"'@fullstackdev.vuyki.mongodb.net/FullStackDev"
const PhoneSchema = new mongoose.Schema({
	name: String,
	number: String,
	date: Date,
	id: Number,
	newera: Boolean
})
const Phone = mongoose.model('Phone', PhoneSchema)

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

try {
	mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
} catch (error) {
	console.log("mongoose.connect failed", error)
}

//const app = http.createServer((request, response) => {
//        response.writeHead(200, { 'Content-Type': 'text/plain' } )
//        response.end('Hello World!')
//})

app.get('/phones/all', (req, res) => {

	console.log("PHONES/ALL")
	//const pass_phrase = "DFeorwefkSDFwfklsfowerERpvFgDGDFG"
	//const url = "mongodb+srv://bgran1337:"+ pass_phrase +"@fullstackdev.vuyki.mongodb.net/FullStackDev"
	////mongoose.createConnection(url)
	//try {
	//	mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
	//} catch (error) { 
	//	console.log("mongoose.connect failed", error)
	//}
/*
        const PhoneSchema = new mongoose.Schema({
                name: String,
                number: String,
                date: Date,
                id: Number,
                newera: Boolean
        })

	const Phone = mongoose.model('Phone', PhoneSchema)
*/
        console.log("Phone", Phone)
        var rv = []
	fookala: () => {
		return Phone.find({}).exec()
		.then((phones) => {
			console.log("phones", phones)
			return phones
		}).catch((err) => {
			return "Error happened"
		})
	}
        /*Phone.find({}).then(phones => {
		console.log("HUOKEAAAA")
                for(const phone of phones) {
                        rv.push(phone)
                }
                mongoose.connection.close()
        })*/
	console.log("ENDING PHONES_ALL")
        return (rv)
})

app.get('/', (req, res) => {
	res.send("<h1>Hello World!</h1>")
})

app.get ('/api/persons', (req, res) => {
	res.json(data)
})

app.get('/info', (req, res) => {
	_res = "Phonebook has info for "
	_res += data.length
	_res += " people<br><br>"
	var d = Date()
	_res += d
	res.send(_res)
})

app.get('/api/persons/:id', (req, res) => {
	const id = req.params.id
	var d = data[id]
	if (d === undefined) {
		res.writeHead(404, {'Content-Type': 'text/plain'})
		res.end("404 Not Found")
	} else {
		res.send(d)
	}
})

app.delete('/api/persons/delete/:id', (req, res) => {
	const id = req.params.id
	delete data[id]
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end("200 Done");
})

function random_val (max) {
	if (max === undefined) {
		max = Math.random() * Number.MAX_SAFE_INTEGER
	}
	return Math.floor(Math.random() * max)
}

app.post('/api/persons/add', tmp, (req, res) => {
	const name = req.body.name
	const numb = req.body.number


	if (req.body.name === undefined) {
		res.writeHead(500, {"Content-Type": "text/plain"})
		res.end(JSON.stringify({error: 'name must be defined'}))
		return;
	}
	if (req.body.number === undefined) {
		res.writeHead(500, {"Content-Type": "text/plain"})
		res.end(JSON.stringify({error: 'number must be defined'}))
		return;
	}

	for (var i=0; i < data.length; i++) {
		if (data[i]["name"] == name) {
			res.writeHead(500, {"Content-Type": "text/plain"})
			res.end(JSON.stringify({error: "name must be unique"}))
			return;
		}
	}

	const id = random_val()
	var newdata = {
		'id': id,
		'name': name,
		'number': numb
	}
	data.push(newdata)
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end("200 Done")

})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)


