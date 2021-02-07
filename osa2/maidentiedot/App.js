import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


const Country = (props) => {
	const o = props.data
	if (o.length == 1) {
		const d = o[0]
		return (
			<div>
			 	<h2>{d["name"]}</h2>
				capital {d["capital"]}<br/>
				population {d["population"]}
				<ol>
				<h3>Lanuages</h3>
				{d["languages"].map((item, index) => (
					<li>{item["name"]}</li>
				))}
				</ol>
				<img src={d["flag"]} width="200" />
			</div>
				
		)
	} else {
		return (
			<div>
				Too many countries match
			</div>
		)
	}
}

const Countries = (props) => {
	const cs = props.searchText
	const co = props.countries

	let myarr = []
	if (cs === "") myarr = co
	else {
		co.map((item, index) => {
			const lc_itemname=item["name"].toLowerCase()
			const lc_cs = cs.toLowerCase()
			if (lc_itemname.includes(lc_cs)) {
				myarr.push(item)
				console.log("myarr:", myarr)
			}
		})
	}

	if (myarr.length > 10) { return (<div>Too many countries match</div>) }

	if (myarr.length == 1) {
		return(
			<div>
				<Country data={myarr} />	
			</div>
		)
	} else {
		return(
			<div>
				<ol>
					{myarr.map((item, index) => (
						<li>{item["name"]}</li>
					))}
				</ol>
				<Country data={myarr} />
			</div>
		)
	}
}

const App = (props) => {
	//console.log("PROPSIT: ", props)

	const [ countries, setCountries ] = useState([])
	const [ searchText, setSearchText ] = useState("")

	useEffect(() => {
		console.log("in useEffect")
		const eventHandler = response => {
			console.log("promise fulfilled")
			setCountries(response.data)
			console.log("Countries: ", countries)
		}
		const promise = axios.get("https://restcountries.eu/rest/v2/?all")
		promise.then(eventHandler)
	}, [])



	const handleSearchName = (props) => {
		console.log("handleSearchName ->")
		const needle = props.target.value
		if (needle == "") return
		setSearchText(needle)
	}

	console.log("countries: lopussa  ", countries)

	return (
		<div>
			find countries <input
				onChange={handleSearchName}
			/ >
			<button type="submit">Search</button>
			<Countries searchText={searchText} countries={countries} />
		</div>
	)
}

export default App;
