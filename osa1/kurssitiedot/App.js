//import React from 'react'
//import React, { Component } from 'react';
import React from 'react';
//import logo from './logo.svg';
import './App.css';


const Header = (props) => {
	return (
		<div>
			<p>Hello {props.name}</p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
			<p>{props.name} {props.val}</p>
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises: {props.foo}</p>
		</div>
	)
}


const App = () => { 
	const course = "Half stack app development"

	const part1 = "Fundamentals of React"
	const exercises1 = 10

	const part2 = "Using props to pass data"
	const exercises2 = 7

	const part3 = "State of a component"
	const exercises3 = 14

	const n = exercises1 + exercises2 + exercises3

	return (
		<div>
			<h1><Header name={course} /></h1>
			<Content name={part1} val={exercises1} />
			<Content name={part2} val={exercises2} />
			<Content name={part3} val={exercises3} />
			<Total foo={n} />
		</div>
	)

			
}

export default App;
