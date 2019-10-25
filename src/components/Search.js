import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default function Search(props) {
    let filtered= props.data.filter(i => i.name.toLowerCase().includes(props.textInput.toLowerCase()));
    if (props.textInput === "") {
        return (
            <Router>
                <input className="" placeholder="Search..." onChange={props.textInputChange}></input>
                {props.data.map((i,index) => <div key={index} className="my-3 d-block"  onClick={()=>props.showInfoOf(i.idCharger)}>{i.name}</div>)}
            </Router>
        )
    }
    else {
        return (
            <Router>
                <Form.Control className="" placeholder="Search..." onChange={props.textInputChange} value={props.search}></Form.Control>
                {filtered.map((i,index) => <div key={index} className="my-3 d-block"  onClick={()=>props.showInfoOf(i.idCharger)}>{i.name}</div>)}
            </Router>
        )
    }
    

}

