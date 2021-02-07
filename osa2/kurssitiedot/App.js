import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
        return (
                <h1>{props.course["name"]}</h1>
        )

}

const Part = (props) => {
        return (
                <div>
                        {props.name}: {props.harkkoja}
                </div>
        )
}

const Content = (props) => {

        return (
                <div>
                        {props.course["parts"].map((item, index) => (
                                <Part name={item["name"]} harkkoja={item["exercises"]} key={index} />
                        ))}
                </div>
        )
}

const Total = (props) => {
	const o = props.course_data
	const w_tot = o["parts"].reduce((a, b) => {
		return a + b["exercises"]
	}, 0 )

	console.log("w_tot: ", w_tot)

        return (
                <div>
                        <b>total of {w_tot} exercises</b>
                </div>
        )
}

const Course = (props) => {
	console.log("Course ->")
	return (
		<div>
			<Header course={props.course} />
			<Content course={props.course} />
			<Total course_data={props.course} />
		</div>
	)

}
const App = () => {
        const course = {
                "name": "Half Stack application development",
                "parts":[
                        {"name": "Fundamentals of React", "exercises":10, id:1},
                        {"name": "Using props to pass data", "exercises":7, id:2},
                        {"name": "State of component", "exercises":14, id:3},
			{"name": "Redux", "exercises":14, id:4}
                ]
        }


        return (
                <div>
			<Course course={course} />
                </div>
		
        )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

