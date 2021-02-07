import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Name = (props) => {
	return (
		<ol>
		{props.perso.map((item, index) => (
			<li>{item["name"]}: {item["number"]}</li>
		))}
		</ol>
	)
}

const App = (props) => {
	const [ persons, setPersons ] = useState([
		{name: 'Arto Hellas', key:1, number: "666-1234-1234" }
	])
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')

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
	}

	const handleNameChange = (event) => {
		event.preventDefault()
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		event.preventDefault()
		setNewNumber(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					nimi: <input 
						value={newName}
						onChange={handleNameChange}
					/><br/>
					numero: <input	
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
				<Name perso={persons} />
			</div>
		</div>
	)
}

export default App;
