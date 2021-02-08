import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { removeid } from './Database'

const Button = (props) => {
	const name = props.myname
	return (
		<button onClick={() => props.submit_clb(props.myid,name)}>delete</button>
	)
}



const Name = (props) => {

        const persons = props.persons
        const searchName = props.searchName
        const searchFunc = props.searchFunc

        const cs = props.currsearch
        let myarr = []

        if (cs === "") myarr = props.perso
        else {
                props.perso.map((item, index) => {
			let iname = item["name"].toLowerCase()
			let ics = cs.toLowerCase()
                        if (iname.includes(ics)) {
                                console.log("item name: ", item["name"])
                                console.log("cs: " , cs)
				myarr.push({name: item["name"], number: item["number"]})
                        } else {
                                console.log("item name: ", item["name"])
                                console.log("cs: " , cs)
                        }
                })
        }

        return (
                <ul>
                {myarr.map((item, index) => (
                        <li>{item["name"]}: {item["number"]} <Button myid={item["id"]} myname={item["name"]} submit_clb={props.submit_clb} clb={removeid} /></li>
                ))}
                </ul>
        )
}

export default Name
