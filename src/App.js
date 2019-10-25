import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/data.json';

import ChargerMap from './components/ChargerMap';
import ChargerInfo from './components/ChargerInfo';
import Login from './components/Login';
import Register from './components/Register';

import Test from "./Test.js";

const serverdata=[
  {id: 1, name: "Neste K-Liikenneasema Linnatuuli (to south)", "Latitude": 60.8542324848567, "Longitude": 24.5964551665738},
  {id: 2, name: "Neste K-Liikenneasema Linnatuuli (to north)", "Latitude": 60.8552362147167, "Longitude": 24.5974905710851}
];

export default class App extends React.Component {
  
  constructor (props) {
    super(props);
    this.state={
      data: serverdata,
      textInput: ""
    };
  }

  getChargerInfo = id => {
    return this.state.data.find(charger => charger.id === id);
  }

  textInputChange = (event) => {
    this.setState({textInput: event.target.value});
  }

  render() {
    return (
      <Router>
        <Route path="/"  exact render={props => <ChargerMap {...props} data={this.state.data} textInputChange={this.textInputChange} search={this.state.textInput}></ChargerMap>}></Route>
        <Route path="/charger/:id" exact render={props => <ChargerInfo {...props} data={this.state.data} getChargerInfo={this.getChargerInfo}></ChargerInfo>}></Route>
        <Route path="/login" exact render={props => <Login {...props} ></Login>}></Route>
        <Route path="/register" exact render={props => <Register {...props} ></Register>}></Route>
        <Route path="/test" exact render={props => <Test {...props} ></Test>}></Route>
      </Router>
    )
  }
}

