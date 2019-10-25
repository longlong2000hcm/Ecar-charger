import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './components/Search';
import Map from './components/Map';
import ChargerInfo from './components/ChargerInfo';
//import Login from './components/Login';
//import Register from './components/Register';

//import Test from "./Test.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      logedin: false,
      wrongUsernameOrPass: false,
      textInput: "",
      isLoaded: false,
      focusLat: 65.015344000000000000000000000000,
      focusLng: 25.475991000000000000000000000000,
      showingCharger: null,
      infoHidden: "none"
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/chargers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  getChargerInfo = id => {
    return this.state.data.find(charger => charger.idCharger === id);
  }

  textInputChange = (event) => {
    this.setState({ textInput: event.target.value });
  }

  logedin = (event) => {
    this.setState({ logedin: true });
  }

  wrongUsernameOrPass = (event) => {
    this.setState({ wrongUsernameOrPass: true });
  }

  showInfoOf = id => {
    let chargerInfo = this.getChargerInfo(id);
    this.setState({ focusLat: chargerInfo.latitude, focusLng: chargerInfo.longitude, showingCharger: chargerInfo.idCharger, infoHidden:"block" });
  }

  hideInfo = () => {
    this.setState({ showingCharger: null, infoHidden: "none", textInput: ""});
  }

  render() {
    return (
        <React.Fragment>
          <div style={{height: "100%", width: "100%", overflow: "hidden"}}>
          <Row className="m-0 p-0" style={{ height: "100vh" }}>
            <Col md="2" className="m-0 p-2">
              <Search className="" data={this.state.data} textInputChange={this.textInputChange} textInput={this.state.textInput} showInfoOf={this.showInfoOf}> </Search>
            </Col>
            <Col md="2" className="m-0 p-2" style={{position:"absolute", "zIndex": 2, "backgroundColor": "white", height: "100vh", display: this.state.infoHidden}} >
              <ChargerInfo chargerId={this.state.showingCharger} getChargerInfo={this.getChargerInfo} hideInfo={this.hideInfo}></ChargerInfo>
            </Col>
            <Col className="p-2">
              <Row>
                <button className="ml-auto mr-4  my-2">Login</button>
              </Row>
              <Row className="">
                <Map className="w-100 h-100" data={this.state.data} textInput={this.state.textInput} focusLat={this.state.focusLat} focusLng={this.state.focusLng}></Map>
              </Row>
            </Col>
          </Row>
          </div>
          
        </React.Fragment>



      /* <Router>
        <Route path="/"  exact render={props => <ChargerMap {...props} data={this.state.data} textInputChange={this.textInputChange} search={this.state.textInput}></ChargerMap>}></Route>
        <Route path="/charger/:id" exact render={props => <ChargerInfo {...props} data={this.state.data} getChargerInfo={this.getChargerInfo}></ChargerInfo>}></Route>
        <Route path="/login" exact render={props => <Login {...props} logedin={this.logedin} wrongUsernameOrPass={this.wrongUsernameOrPass} stateWrongUsernameOrPass={this.state.wrongUsernameOrPass}></Login>}></Route>
        <Route path="/register" exact render={props => <Register {...props} ></Register>}></Route>
        <Route path="/test" exact render={props => <Test {...props} ></Test>}></Route>
      </Router> */
    )
  }
}

