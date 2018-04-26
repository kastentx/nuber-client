import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DriverList from './containers/DriverList'
import RiderList from './containers/RiderList'
import { getNearbyDrivers } from './utilities/tools'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      riderID : '',
      nearbyDrivers : [] }
  }

  setRiderID = rider => {
    getNearbyDrivers(rider).then(docs => {
      //console.log(docs.data)
      this.setState({
        riderID: rider,
        nearbyDrivers : docs.data
      })
    })
    console.log('setriderID called')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to nUber.</h1>
        </header>        
        
        { !this.state.riderID ?
          <span>
            <h1>nUber Riders:</h1>
            <h3>click to login.</h3>
            <RiderList setRider={this.setRiderID}/> 
          </span>
        : 
        <DriverList driversData={this.state.nearbyDrivers} />
        }

      </div>
    );
  }
}

export default App;
