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
      rider : {
        id : '',
        lat : '',
        lng : '',
      },
      nearbyDrivers : [] }
  }

  setRider = rider => {
    getNearbyDrivers(rider._id).then(docs => {
      this.setState({
        rider: {
          id : rider._id,
          lat: rider.location.latitude,
          lng : rider.location.longitude
        },
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
        { !this.state.rider.id ?
          <span>
            <RiderList setRider={this.setRider}/> 
          </span>
        : 
          <span>
            <DriverList rider={this.state.rider} driversData={this.state.nearbyDrivers} />
          </span>
        }

      </div>
    );
  }
}

export default App;
