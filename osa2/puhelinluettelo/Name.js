import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Name = (props) => {

        const persons = props.persons
        const searchName = props.searchName
        const searchFunc = props.searchFunc

        const cs = props.currsearch
        let myarr = []

        if (cs === "") myarr = props.perso
        else {
                //console.log("props: ", props)
                props.perso.map((item, index) => {
			let iname = item["name"].toLowerCase()
			let ics = cs.toLowerCase()
                        //console.log("NAME: ", item)
                        //console.log("NAME2: " , index)
                        if (iname.includes(ics)) {
                                console.log("item name: ", item["name"])
                                console.log("cs: " , cs)
				myarr.push({name: item["name"], number: item["number"]})
                        } else {
                                console.log("item name: ", item["name"])
                                console.log("cs: " , cs)
                                //myarr.push({name: item["name"], number: item["number"]})
                        }
                })
        }

        return (
                <ul>
                {myarr.map((item, index) => (
                        <li>{item["name"]}: {item["number"]}</li>
                ))}
                </ul>
        )
}

export default Name
