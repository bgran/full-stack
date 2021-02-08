import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm'
import Name from './Name'
import Filter from "./Filter"
import { create, update, Removeid, Foo } from './Database'
import { removeid } from './Database'
//import './Database'
import axios from 'axios'
import { variaablei } from './Kala'

const App = (props) => {
	//console.log("PROPSIT: ", props)

	let huoh = []
	//const state_init = JSON.parse(props.persons_data)
	const [ persons, setPersons ] = useState([
		//{name: 'Arto Hellas', key:1, number: "666-1234-1234" }
	])

	const [ loading, setLoading ] = useState(true)

	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ searchName, setSearchName ] = useState('')


	let stop = false
	const [isStarted, setIsStarted] = useState(0);

	useEffect(() => {
		console.log("in useEffect")
		const eventHandler = response => {
			console.log("promise fulfilled")
			setPersons(response.data)
		}
		const promise = axios.get("http://localhost:3001/persons")
		promise.then(eventHandler)
		console.log("promise fulfilled")
	}, [])


	const foo_create = newObj => {
		const baseUrl="http://localhost:3001/persons"
		const req = axios.post(baseUrl, newObj)
		return req.then(response => response.data)
	}
	function foo_removeid2 (myid) {
		const baseUrl="http://localhost:3001/persons"
		const req = axios.delete(`${baseUrl}/${myid}`)
		return req.then (response => response.data)
	}



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

		let maxid = 0
		for (var i=0; i<persons.length; i++) {
			var item = persons[i]
			if (item["id"] > maxid)
				maxid = item["id"]
		}
		maxid ++
		//alert("maxid: " + maxid)

		const nameObj = {
			name: newName,
			number: newNumber,
			key: persons.length,
			id: maxid
		}
		setPersons(persons.concat(nameObj))
		setNewName('')
		setNewNumber('')

		foo_create(nameObj)
		/*
		const query = "http://localhost:3001/persons

		console.log("HUOH")

		const eHandler = response => {
			console.log("promise fulfilled")
			setLoading (false)
		}
		const promise = axios.post(query, nameObj)
		promise.then(eHandler)
		*/

		console.log("NAPPI PAINETTU", event.target)
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

	//const delName = (props) => {
	const delName = (myid,myname) => {
		let r = window.confirm("Delete " + myname)
		if (r) {
			//alert("r tosi")
			const baseUrl = "http://localhost:3001/persons"
			const req = axios.delete(`${baseUrl}/${myid}`)
			req.then( response => response.data)
			let newpersons = []
			for (var i=0; i<persons.length; i++) {
				if (persons[i]["id"] == myid) {
				} else {
					newpersons.push(persons[i])
				}

			}
			setPersons(newpersons)
		}
	}

	console.log("persons: lopussa  ", persons)

	return (
		<div>
			<h2>Puhelinluettelo</h2>
			<form>
				<div>
					<Filter persons={persons} searchName={searchName} searchFunc={handleSearchName} />
				</div>
			</form>
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
			<h2>Numerot</h2>
			<div>
				<Name perso={persons} submit_clb={delName} currsearch={searchName} searchFunc={handleSearchName} />
			</div>
		</div>
	)
}

export default App;
