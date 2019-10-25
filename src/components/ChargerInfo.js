import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ChargerInfo(props) {
    const chargerInfo = props.getChargerInfo(props.match.params.id);
    return (
        <>
            <div>name: {chargerInfo.name}</div>           
        </>
    )

}
