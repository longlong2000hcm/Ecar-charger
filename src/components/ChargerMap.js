import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//
export default function ChargerMap(props) {
    let filtered = props.data.filter(i => i.name.toLowerCase().includes(props.search.toLowerCase()));
    if (props.search === "") {
        return (
            <>
                <input className="col-3" placeholder="Search..." onChange={props.textInputChange}></input>
                {props.data.map(i => <div key={i.id}><Link to={'/charger/' + i.id} >{i.name}</Link></div>)}
            </>
        )
    }
    else {
        return (
            <>
                <input className="col-3" placeholder="Search..." onChange={props.textInputChange} value={props.search}></input>
                {filtered.map(i => <div key={i.id}><Link to={'/charger/' + i.id} >{i.name}</Link></div>)}
            </>
        )
    }
    

}

