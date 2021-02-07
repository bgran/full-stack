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

//const Total = (props) => {
//        let total = 0
//        for (let i=0; i<props.course_data["parts"].length; i++) {
//                total += props.course_data["parts"][i]["harkkoja"]
//        }
//        return (
//                <div>
//                        {total} harkkoja
//                </div>
//        )
//}

const Course = (props) => {
	console.log("Course ->")
	return (
		<div>
			<Header course={props.course} />
			<Content course={props.course} />
		</div>
	)

}
const App = () => {
        const course = {
                "name": "Half Stack -sovelluskehitys",
                "parts":[
                        {"name": "Reacting perusteet", "exercises":10, id:1},
                        {"name": "Tiedonvälitys propseilla", "exercises":7, id:2},
                        {"name": "Kompoenttien tila", "exercises":14, id:3}
                ]
        }


        //const part1 = 'Reactin perusteet'
        //const exercises1 = 10
        //const part2 = 'Tiedonvälitys propseilla'
        //const exercises2 = 7
        //const part3 = 'Komponenttien tila'
        //const exercises3 = 14

        return (
                <div>
			<Course course={course} />
                </div>
		
        )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

