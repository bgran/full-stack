//import React from 'react'
//import React, { Component } from 'react';
import React, {useState} from 'react';
import ReactDOM from 'react-dom'

//import logo from './logo.svg';
import './App.css';


const ItemWidget = (props) => {
	return(
		<div>
			{props.name}: {props.val}
		</div>
	)
}

const Stat = (props) => {
	let good = props.data["good"]
	let neutral = props.data["neutral"]
	let bad = props.data["bad"]

	// TOTAL
	let total = good + neutral + bad

	// COUNTER
	let counter = 0
	for(let i=0; i< good ; i++) {
		counter += 1
	}
	for (let i= 0; i<neutral  ; i++) {
		// :D
		counter += 0
	}
	for (let i=0; i< bad; i++) {
		counter -= 1
	}


	// ALL
	let all = good + neutral + bad

	// AVERAGE
	let average = 0
	if (total === 0) {
		average = 0
	} else {
		average = counter / total
	}

	// POSITIVE
	let positive = 0
	if (total === 0) {
		positive = 0
	} else {
		positive = (good / total) * 100
	}

	if (good === 0 && neutral===0 && bad === 0) {
		return (
			<div> No feedback give</div>
		)
	}

	// <h1>statistics</h1>
	return (
		<div>
		<h1>statistics</h1>
		<table>
		<tr>
			<td>Good</td>
			<td>{good}</td>
		</tr>
		<tr>
			<td>Neutral</td>
			<td>{neutral}</td>
		</tr>
		<tr>
			<td>Bad</td>
			<td>{bad}</td>
		</tr>
		<tr>
			<td>All</td>
			<td>{total}</td>
		</tr>
		<tr>
			<td>Average</td>
			<td>{average}</td>
		</tr>
		<tr>
			<td>Positive</td>
			<td>{positive}</td>
		</tr>
		</table>
		</div>
	)
}

const Button = (props) => {
	return (
		<div>
			<button onClick={() => props.clb()}>
				 {props.name}
			</button>
		</div>
	)
}

const App = () => { 
	const course_data = {
		"name": "Half stack app development",
		"parts": [
			{"name": "Fundamentals of React", "harkkoja": 10},
			{"name": "Using props to pass data", "harkkoja": 7},
			{"name": "State of a component", "harkkoja": 14},
		]	
	}

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const data = {
		"good": good,
		"neutral": neutral,
		"bad": bad
	}

	const sGood = () => {
		setGood(good+ 1);
	}
	const sNeutral = () => {
		setNeutral(neutral + 1)
	}
	const sBad = () => {
		setBad(bad + 1)
	}

	return (
		<div>
			<h1>give feedback</h1>
			<Button data={data} clb={sGood} name="good" />
			<Button data={data} clb={sNeutral} name="neutral" />
			<Button data={data} clb={sBad} name="bad" />
			<Stat data={data} />
		</div>
	)
}

export default App;
