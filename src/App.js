import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
//import data from './components/data.json';

import ChargerMap from './components/ChargerMap';
import ChargerInfo from './components/ChargerInfo';

const serverdata=[
  {id: 1, name: "Neste K-Liikenneasema Linnatuuli (to south)", "Latitude": 60.8542324848567, "Longitude": 24.5964551665738}
];

export default class App extends React.Component {
  
  constructor (props) {
    super(props);
    this.state={data: serverdata};
  }

  getChargerInfo = id => {
    return this.state.data.find(charger => charger.id === id);
  }

  render() {
    console.log(this.state.data);
    return (
      <Router>
        <Route path="/"  exact render={props => <ChargerMap {...props} data={this.state.data}></ChargerMap>}></Route>
        <Route path="/charger/:id" exact render={props => <ChargerInfo {...props} data={this.state.data} getChargerInfo={this.getChargerInfo}></ChargerInfo>}></Route>
      </Router>
    )
  }
}

