import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
//const ScriptLoaded = require("./docs/ScriptLoaded").default;

function RenderMarkers(props) {
    let filtered= props.data.filter(i => i.name.toLowerCase().includes(props.textInput.toLowerCase()));
    if (filtered===[]) {
        return(props.data.map((i,index) => <Marker key={index} position={{"lat": i.latitude, "lng": i.longtitude}}></Marker>));
        }
    else {
        return(filtered.map((i,index) => <Marker key={index} position={{"lat": i.latitude, "lng": i.longitude}}></Marker>));}
}


export default function Map(props) {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDL4YopF5CO1tvYxPhImg3p2ktm5zqeq58" style={{ width: "100%", height: "100%" }}>
                <GoogleMap
                    id="marker-example"
                    mapContainerStyle={{ width: "80vw", height: "90vh" }}
                    zoom={10}
                    center={{
                        lat: props.focusLat,
                        lng: props.focusLng
                    }}
                >
                <RenderMarkers data={props.data} textInput={props.textInput}></RenderMarkers>
                    
                </GoogleMap>
            </LoadScript>
    )
}
