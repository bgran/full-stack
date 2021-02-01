//import React from 'react'
//import React, { Component } from 'react';
import React, {useState} from 'react';
import ReactDOM from 'react-dom'

//import logo from './logo.svg';

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



const ItemWidget = (props) => {
	return(
		<div>
			{props.name}: {props.val}
		</div>
	)
}

const StatisticsLine = (props) => {
	let percent = 0
	if (props.percent === 1) {
		percent = 1
	}

	return (
		<tr>
			<td>{props.t}</td><td>{props.val} {percent && '%'}</td>
		</tr>
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
		<StatisticsLine t="good" val={good} />
		<StatisticsLine t="neutral" val={neutral} />
		<StatisticsLine t="bad" val={bad} />
		<StatisticsLine t="all" val={total} />
		<StatisticsLine t="average" val={average} />
		<StatisticsLine t="positive" val={positive} percent={1}/>

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

const App = (props) => { 
	const [selected, setSelected] = useState(0)

	const next_clb = () => {
		let randomv = Math.round((Math.random()*999999) % (anecdotes.length-1))
		if (randomv == selected) {
			// no change
		} else {
			setSelected(randomv)
		}
	}

	return (
		<div>
			<p>{anecdotes[selected]}</p>
			<p><Button name="next anecdote" clb={next_clb} /></p>
		</div>
	)
}

export default App;
