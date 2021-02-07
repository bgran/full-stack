import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import  UserForm from './UserForm'
import Name from './Name'
import Filter from "./Filter"

const App = (props) => {
	//console.log("PROPSIT: ", props)
	const [ persons, setPersons ] = useState([
		{name: 'Arto Hellas', key:1, number: "666-1234-1234" }
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
		console.log("handlenNumberChange")
		setNewNumber(event.target.value)
	}

	const handleSearchName = (props) => {
		console.log("handleSearchName ->")
		const needle = props.target.value
		setSearchName(needle)
	}

	return (
		<div>
			<h2>Puhelinluettelo</h2>
			<p>
			<form>
				<div>
					<Filter persons={persons} searchName={searchName} searchFunc={handleSearchName} />
				</div>
			</form>
			</p>
			<p>
				<div>
					<UserForm persons={persons} form1={handleNameChange}
						form2={handleNumberChange}
						set_num={setNewNumber}
						set_name={setNewName}
						val_name={newName}
						val_num={newNumber}
						name_callback={addName}
					/>
				</div>
			</p>
			<h2>Numbers</h2>
			<div>
				<Name perso={persons} currsearch={searchName} searchFunc={handleSearchName} />
			</div>
		</div>
	)
}

export default App;
