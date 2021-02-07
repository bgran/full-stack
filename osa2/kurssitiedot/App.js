import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course'

const Header = (props) => {
        return (
                <h1>{props.course_name}</h1>
       )
}

const Courses = (props) => {
	let o = props.courses
	return (
		<div>
			<Header course_name={"Web development curriculum"} />
			{o.map((item, index) => (
				<Course course={item} ind={index} />
			)) }
		</div>
	)

}
const App = () => {
	const courses = [
		{
                	"name": "Half Stack application development",
			id:1,
                	"parts":[
                        	{"name": "Fundamentals of Reach", "exercises":10, id:1},
                        	{"name": "Using props to pass data", "exercises":7, id:2},
                        	{"name": "State of component", "exercises":14, id:3},
				{"name": "Redux", "exercises":11, id:4}
			]
		},
		{
			"name": "Node.js",
			"id"  : 2,
			"parts": [
				{"name": "Routing", "exercises":3, id:1},
				{"name": "Middlewaret", "exercises":7, id:2}
			]
		}
	]

        return (
                <div>
			<Courses courses={courses} />
                </div>
		
        )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

