import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const UserForm = (props) => {
	const persons = props.persons
	const null_editN = props.form1
	const null_editNu = props.form2
	const set_num = props.set_num
	const set_name = props.set_name
	const val_name = props.val_name
	const val_num = props.val_num
	const addName = props.add_name
	const name_callback = props.name_callback

	const nameObj = {
		name: val_name,
		numbert: val_num
	}

	return(
		<div>
			<form onSubmit={name_callback}>
				<div>
					name: <input
						value={val_name}
						onChange={null_editN}
					/><br/>
					number: <input
						value={val_num}
						onChange={null_editNu}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</div>
	)




}

export default UserForm
