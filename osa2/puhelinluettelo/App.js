import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Name = (props) => {
	const cs = props.currsearch.toLowerCase()
	let myarr = []

	if (cs === "") myarr = props.perso
	else {
		props.perso.map((item, index) => {
			let iname = item["name"].toLowerCase();
			if (iname.includes(cs)) {
				myarr.push({name: item["name"], number: item["number"]})
				console.log("item name: ", iname)
			} else {
				console.log("item name: ", item["name"])
				console.log("cs: " , cs)
			}
		})
	}

	return (
		<ul>
		{myarr.map((item, index) => (
			<li>{item["name"]}: {item["number"]}</li>
		))}
		</ul>
	)
}

const App = (props) => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	])
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ searchName, setSearchName ] = useState('')

	const addName = (event) => {
		event.preventDefault()

		const needle = newName

		for (const nam in persons) {
			const real_name = persons[nam]["name"]
			console.log("in search func", real_name, needle)
			if (real_name == needle) {
				alert(needle + " on jo luettelossa")
				return
			}
		}


		const nameObj = {
			name: newName,
			number: newNumber
		}
		setPersons(persons.concat(nameObj))
		setNewName('')
		setNewNumber('')

		//console.log("NAPPI PAINETTU", event.target)
	}

	const handleNameChange = (event) => {
		event.preventDefault()
		//console.log("handleNameChange")
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		event.preventDefault()
		//console.log("handlenNumberChange")
		setNewNumber(event.target.value)
	}

	const handleSearchName = (props) => {
		//console.log("handleSearchName ->")
		const needle = props.target.value
		setSearchName(needle)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					filter shown with <input 
						value={searchName}
						onChange={handleSearchName}
					/>
				</div>
			</form>
			<h3>add a new</h3>
			<form onSubmit={addName}>
				<div>
					name: <input 
						value={newName}
						onChange={handleNameChange}
					/>
					<br/>
					number: <input	
						value={newNumber}
						onChange={handleNumberChange}
					/>
				</div>
				<div>
					<button type="submit">add</button>

				</div>
			</form>
			<h2>Numbers</h2>
			<div>
				<Name perso={persons} currsearch={searchName} />
			</div>
		</div>
	)
}

export default App;
