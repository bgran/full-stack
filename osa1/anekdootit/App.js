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

//const votes = [
//	0, 0, 0, 0, 0, 0]
const votes = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0
}


const update_tbl = (which) => {
	votes[which] += 1
}

const ItemWidget = (props) => {
	return(
		<div>
			{props.name}: {props.val}
		</div>
	)
}

const Widget = (k, v) => {
	return (
		<div>
			{k}: {v}
		</div>
	)
}

const Button = (props) => {
	return (
		<div>
			<button onClick={() => props.clb()}>
				 {props.name}
			</button>
			<button onClick={() => props.vote_clb(props.curr_ptr())}>
				vote
			</button>
		</div>
	)
}

const ButtonVote = (props) => {
	return (
		<div>
		<button onClick={() => props.clb()}>
			 {props.name}
		</button>
		<button onClick={() => props.vote_clb(props.curr_ptr())}>
			vote
		</button>
		</div>
	)
}

const App = (props) => { 
	//let rv = Math.round(Math.random()*999999) % (anecdotes.length-1)
	let rv = 0
	const [selected, setSelected] = useState(rv)

	//let ir = 0
	//let init = use
	//
	
	const curr_ptr = () => {
		return selected
	}

	const push_button = () => {
		let r = Math.round((Math.random()*99999) % (anecdotes.length - 1))
		setSelected(r)
	}

	const next_clb = () => {
		let randomv = Math.round((Math.random()*999999) % (anecdotes.length-1))
		if (randomv == selected) {
			console.log("randomv == selected");
			// no change
		} else {
			console.log("randomv: ", randomv);
			setSelected(randomv)
		}
	}
	const cast_vote = (idx) => {
		update_tbl(curr_ptr())
	}

	return (
		<div>
			<p>
				{anecdotes[selected]}<br/>
				has {votes[curr_ptr()]} votes
				<Button
					name="next anecodte"
					clb={push_button}
					vote_clb={cast_vote}
					curr_ptr={curr_ptr} />
			</p>
		</div>
	)
}

export default App;
ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

