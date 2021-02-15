const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

console.log(process.argv.length)
if (process.argv.length <= 3) {
	console.log("Usagee: node lisaa_puhelin.js password name number")

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


if (false) {
	
} else {
	const PhoneSchema = new mongoose.Schema({
		name: String,
		number: String,
		date: Date,
		id: Number,
		newera: Boolean
	})

	const Phone = mongoose.model('Phone', PhoneSchema)

	if (process.argv.length <= 3) {
		console.log("HUOH")
		Phone.find({}).then(phones => {
			//console.log("phones", phones)
			for (const phone of phones) {
				console.log(phone.name + " " + phone.number)
			}
			mongoose.connection.close()
		})
	} else {

		const phone = new Phone({
			name: name,
			number: vnumber,
			date: new Date(),
			id: random_val(),
			newera: true
		})

		phone.save().then(response => {
			console.log("added " + name + " "+vnumber+" to phonebook")
			mongoose.connection.close()
		})
	}
}

