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

	return(
		<div>
			<ItemWidget name="good" val={good} />
			<ItemWidget name="netural" val={neutral} />
			<ItemWidget name="bad" val={bad} />
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
