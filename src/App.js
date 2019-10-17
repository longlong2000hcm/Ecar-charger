import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ChargerMap from './components/ChargerMap';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/"><ChargerMap></ChargerMap></Route>
      </Router>
    )
  }
}

