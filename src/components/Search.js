import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

//
export default function Search(props) {
    let filtered= props.data.filter(i => i.name.toLowerCase().includes(props.textInput.toLowerCase()));
    if (props.textInput === "") {
        return (
            <Router>
                <input className="" placeholder="Search..." onChange={props.textInputChange}></input>
                {props.data.map((i,index) => <div key={index}><Link to={"/charger/"+i.id}>{i.name}</Link></div>)}
            </Router>
        )
    }
    else {
        return (
            <Router>
                <input className="" placeholder="Search..." onChange={props.textInputChange} value={props.search}></input>
                {filtered.map((i,index) => <div key={index}><Link to={'/charger/' + i.id} >{i.name}</Link></div>)}
            </Router>
        )
    }
    

}

