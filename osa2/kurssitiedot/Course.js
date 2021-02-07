import React from 'react'

const Course = (props) => {
        let o = props.course
        let i = props.ind
        return (
                <div>
                        <h2>{o["name"]}</h2>
                        <Content course={o} />
                        <Total course_data={o} ind={i} />
                </div>
        )
}

const Total = (props) => {
        //const ind = props.ind
        const o = props.course_data

        const o2 = o
        const w_tot = o2["parts"].reduce((a, b) => {
                return a + b["exercises"]
        }, 0 )

        return (
                <div>
                        yhteensä {w_tot} tehtävää
                </div>
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


export default Course;
