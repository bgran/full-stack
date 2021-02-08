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
				No country selected.		
			</div>
		)
	}
}

const Button = (props) => {
	const cid = props.cid
	//console.log("cid: ", cid)
	//console.log("props: ", props)
	return (
		<button onClick={() => props.submit_clb(props)}>show</button>
	)
}

const Countries = (props) => {
	const cs = props.searchText
	const co = props.countries
	const c_lst = props.c_lst
	const counter = props.counter
	const _int_len = co.length

	const target_name = props.submit_foo
	if (target_name != undefined && target_name.length > 0)  {
		const lc_target_name = target_name.toLowerCase()
		var found = -1
		for (var i=0; i<co.length; i++) {
			const lc_name = co[i]["name"].toLowerCase()

			if (lc_target_name == lc_name) {
				return(
					<div>
						<Country data={[co[i]]} />
					</div>
				)
			}
		}
		return (
			<div>
				No such country like {lc_target_name}
			</div>
		)
	}

	let hack_lst = co

	let myarr = []
	let harr = []
	if (cs === "") myarr = co
	else {
		var cntr = 0
		co.map((item, index) => {
			const lc_itemname=item["name"].toLowerCase()
			const lc_cs = cs.toLowerCase()
			if (lc_itemname.includes(lc_cs)) {
				myarr.push(item)
				return
			}
			cntr ++
		})
	}

	if (myarr.length > 10) { return (<div>Too many countries match search (countries)</div>) }

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
						<li>{item["name"]} {}
						<Button datap={item} co={co} counter={item["counter"]} cname={item["name"]} cid={index} submit_clb={props.submit_callback} /></li>
					))}
				</ol>
				<Country data={myarr} />
			</div>
		)
	}
}

const App = (props) => {
	let c_lst = []

	const [ countries, setCountries ] = useState([])
	const [ searchText, setSearchText ] = useState("")
	const [ submitId, setSubmit ] = useState("")

	useEffect(() => {
		console.log("in useEffect")
		const eventHandler = response => {
			console.log("promise fulfilled")
			setCountries(response.data)
			console.log("response.data: " + response.data)
			c_lst = response.data
		}
		const promise = axios.get("https://restcountries.eu/rest/v2/?all")
		promise.then(eventHandler)
	}, [])



	const handleSearchName = (props) => {
		console.log("handleSearchName ->")
		const needle = props.target.value
		console.log("handleSearchName: "+ props.target.value)
		if (needle == "") return
		setSearchText(needle)
		setSubmit(props.cname)
	}

	const handleSubmit = (props) => {
		setSubmit(props.cname)
	}

	return (
		<div>
			find countries <input
				onChange={handleSearchName}
			/ >
			<Countries submit_foo={submitId} submit_controller={setSubmit} co={countries} c_lst={c_lst} searchText={searchText} countries={countries} submit_callback={handleSubmit} />
		</div>
	)
}

export default App;
