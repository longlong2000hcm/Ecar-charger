import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ChargerInfo(props) {
    let chargerInfo = props.getChargerInfo(parseInt(props.match.params.id));
    return (
        <>
            <div>id: {chargerInfo.id}</div>
            <div>name: {chargerInfo.name}</div>
            
            
        </>
    )
}
