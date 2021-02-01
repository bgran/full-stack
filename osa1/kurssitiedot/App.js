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

const Item = (props) => {
	return (
		<div>
			{props.name}: {props.harkkoja}
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
			{props.course_data["parts"].map((item, index) => (
				<p><Item name={item["name"]} harkkoja={item["harkkoja"]} key={index} /></p>
			))}
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
	const course_data = {
		"name": "Half stack app development",
		"parts": [
			{"name": "Fundamentals of React", "harkkoja": 10},
			{"name": "Using props to pass data", "harkkoja": 7},
			{"name": "State of a component", "harkkoja": 14},
		]	
	}

	let n = 0
	for(var i=0; i<course_data["parts"].length; i++) {
		n = n + course_data["parts"][i]["harkkoja"];
	}

	return (
		<div>
			<h1><Header name={course_data["name"]} /></h1>
			<Content course_data={course_data} />
			<Total foo={n} />
		</div>
	)
}

export default App;
