import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DriverList from './containers/DriverList'
import RiderList from './containers/RiderList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to nUber.</h1>
        </header>        
        <h1>Drivers:</h1>
        <DriverList />
        <h1>Riders:</h1>
        <RiderList/>
      </div>
    );
  }
}

export default App;
