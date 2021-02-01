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

const foo_high_id = (v) => {

	var m = 0
	var k = 1
	var tk = 0
	var first = 1;

	for (let key in v) {
		if (first) {
			first = 0;
			m = v[key]
			tk = key
		} else {
			if (m < v[key]) {
				m = v[key]
				tk = key
			}
		}
	}
	return([m, tk])
}

const highest_id = () => {
        var max1 = 0
        var first = 1
        var key = 0
        var this_key = 0

        for (key in votes) {
                if (first) {
                        first = 0
                        max1 = votes[key]
                        this_key = key
                } else {
                        if (max1 < votes[key]) {
                                max1 = votes[key]
                                this_key = key
                        }
                }

        }
        return ([max1, this_key])
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

const TopVote = (props) => {
	let votes_found = 0
	for (var key in props.v) {
		if (props.v[key] != 0) {
			votes_found = 1
			break
		}
	}
	if (!votes_found) {
		return (
			<div>
			<br/><br />
			<h1>Anecdotes with most votes</h1>
			<p>
				No votes cast yet
			</p>
			</div>
		)
	}

	let v = props.v
	let a = props.a
	let [korkein, avain] = highest_id(v)

	return (
		<div>
		<br/> <br/>
		<h1>Anecdotes with most votes</h1>
		<p>
			{a[avain]}<br/><br/>
			{korkein}
		</p>
		</div>
	)
}

const App = (props) => { 
	let rv = Math.round(Math.random()*999999) % (anecdotes.length-1)
	//let rv = 0
	const [selected, setSelected] = useState(rv)
	const [highest, setHigh] = useState(0)
	const [hSelected, setHSelected] = useState(0)

	const curr_ptr = () => {
		return selected
	}

	const push_button = () => {
		let r = Math.round((Math.random()*99999) % (anecdotes.length - 1))
		setSelected(r)
	}

	const cast_vote = (idx) => {
		votes[idx] ++ 
		setSelected(idx)

		let [korkein, avain] = highest_id()
		
		setHSelected(avain)
		setHigh(korkein)
	}

	const get_data = (s) => {
		return (anecdotes[s])
	}
	const get_votes = (s) => {
		return (votes[s])
	}
/*
 *
 *	{anecdotes[selected]}<br/>
 *	has {votes[selected]} votes
 */

	let foo = votes[curr_ptr()]
	return (
		<div>
			<p>
				{get_data(selected)}<br/>
				has {get_votes(selected)} votes
				<Button
					name="next anecdote"
					clb={push_button}
					vote_clb={cast_vote}
					curr_ptr={curr_ptr} />
			</p>
			<p>
				<TopVote v={votes} a={anecdotes} />
			</p>
		</div>
	)
}

export default App;
ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

