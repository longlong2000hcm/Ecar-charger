import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

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
                <Form>
                <Form.Label>Cable: </Form.Label><Form.Control type="text" name="cable" maxLength="4"></Form.Control>
                <Form.Control type="number" name="chargerId" value={props.chargerId} hidden></Form.Control>
                <Form.Control type="text" name="username" value={props.username} hidden></Form.Control>
                <button type="submit" style={{display: props.take}}>Start Charging</button>
                </Form>
               
                
                <button onClick={props.hideInfo}>Back</button>
            </>
        )
    }
    else return null; 

}
