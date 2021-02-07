import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Name = (props) => {
	return (
		<ol>
		{props.perso.map((item, index) => (
			<li>{index} :{item["name"]} </li>
		))}
		</ol>
	)
}

const Numbers = (props) => {
	return (
		<ol>
		{props.perso.map((item, index) => (
			<li>{index}: {item["name"]}</li>
		))}
		</ol>
	)
}

const App = (props) => {
	const [ persons, setPersons ] = useState([
		{name: 'Arto Hellas', key:1 }
	])
	const [ newName, setNewName ] = useState('')

	const addName = (event) => {
		event.preventDefault()

		const nameObj = {
			name: newName
		}
		setPersons(persons.concat(nameObj))
		setNewName('')
	}

	const handleNameChange = (event) => {
		event.preventDefault()
		setNewName(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<Name perso={persons} />
			</div>
			<form onSubmit={addName}>
				<div>
					name: <input 
						value={newName}
						onChange={handleNameChange}
					/>
				</div>
				<div>
					<button type="submit">add</button>

				</div>
			</form>
			<h2>Numbers</h2>
			<div>
				<Numbers perso={persons} />
			</div>
		</div>
	)
}

export default App;
