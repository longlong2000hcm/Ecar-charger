import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ChargerMap(props) {
    return (
        props.data.map(i=><Link to={'/charger/'+i.id} key={i.id}>{i.name}</Link>)
    )
}

