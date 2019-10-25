import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ChargerInfo(props) {
    if (props.chargerId!==null) {
        const chargerInfo = props.getChargerInfo(props.chargerId);
        console.log(chargerInfo);
        if (chargerInfo.pricing==="energy") {var price=<div>Pricing: 18c/KWh</div>} 
        else if (chargerInfo.pricing==="time") {var price=<div>Pricing: 0.2e/min</div>}
        else {var price=<div>Pricing: free</div>}
        return (
            <>
                <img src={chargerInfo.image} style={{width:"100%"}}></img>
                <div>Name: {chargerInfo.name}</div>
                <div>Address: {chargerInfo.address}</div>
                <div>Connector: {chargerInfo.connector}</div>
                <div>Power: {chargerInfo.power}</div>
                {price}
                <div>Status: {chargerInfo.status}</div>
                <label>Cable: </label><input type="text" maxLength="4"></input>
                <button onClick={props.hideInfo}>Back</button>
            </>
        )
    }
    else return null; 

}
