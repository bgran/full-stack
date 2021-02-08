import React, { Component, useState } from 'react'
import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const create = newObj => {
	const req = axios.post(baseUrl, newObj)
	return req.then(response => response.data)
}

const update = (id, newObj) => {
	const req = axios.put(`${baseUrl}/${id}`, newObj)
	return req.then(response => response.data)
}

const Removeid = (myid) => {
	const req = axios.delete(`${baseUrl}/${myid}`)
	return req.then (response => response.data)
}

function removeid2 (myid) {
	const req = axios.delete(`${baseUrl}/${myid}`)
	return req.then (response => response.data)
}

const Foo = (myid) => {
	const req = axios.delete(`${baseUrl}/${myid}`)
	return req.then (response => response.data)
}

const Huoh = () => {
	console.log("Huoh...")
}


export default { create, update, Removeid, removeid2, Foo , Huoh}
