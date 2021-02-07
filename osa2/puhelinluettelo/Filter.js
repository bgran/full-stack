import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Filter = (props) => {

        const persons = props.perons
        const searchName = props.searchName
        const searchFunc = props.searchFunc

        //const handleSearchName = (props) => {
        //      console.log("handleSearchName ->")
        //      const needle = props.target.value
        //      setSearchName(needle)
        //}
        return (
                <div>
                        filter shown with: <input
                                value={searchName}
                                onChange={searchFunc}
                        />
                </div>

        )
}

export default Filter
