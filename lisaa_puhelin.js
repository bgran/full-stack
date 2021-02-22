const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

if (process.argv.length < 5) {
	console.log("Usagee: node lisaa_puhelin.js password name number")
	exit(1)
}

const password = process.argv[2]

const name = process.argv[3]
const vnumber = process.argv[4]


function random_val (max) {
        if (max === undefined) {
                max = Math.random() * Number.MAX_SAFE_INTEGER
        }
        return Math.floor(Math.random() * max)
}


const url = "mongodb+srv://bgran1337:"+ password +"@fullstackdev.vuyki.mongodb.net/FullStackDev"
console.log("url", url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const PhoneSchema = new mongoose.Schema({
	name: String,
	number: String,
	date: Date,
	id: Number,
	newera: Boolean
})

const Phone = mongoose.model('Phone', PhoneSchema)

const phone = new Phone({
	name: name,
	number: vnumber,
	date: new Date(),
	id: random_val(),
	newera: true
})

phone.save().then(response => {
	console.log("phone saved!")
	mongoose.connection.close()
})

