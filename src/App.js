import React, { Component } from 'react'
import logo from './deadpool-logo.png'
import './App.css'
import DriverList from './containers/DriverList'
import RiderList from './containers/RiderList'
import { getNearbyDrivers } from './utilities/tools'
import PickupRequest from './containers/PickupRequest'
import TripSummary from './components/TripSummary'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      rider : {
        id : '',
        lat : '',
        lng : '',
      },
      nearbyDrivers : [],
      selectedDriver : '',
      timeToPickup : '',
      dropoff : {
        lat : '',
        lng : '',
      },
      tripData : null 
    }
  }

  setRider = rider => {
    getNearbyDrivers(rider._id).then(docs => {
      this.setState({
        rider : {
          id : rider._id,
          lat : rider.location.latitude,
          lng : rider.location.longitude
        },
        nearbyDrivers : docs.data,
        selectedDriver : ''
      })
    })
    console.log('setRider called')
  }

  setDriver = driver => {
    this.setState({
      selectedDriver : driver._id,
      timeToPickup : driver.timeToPickup
    })
    console.log('setDriver called')
  }

  setDropoff = location => {
    this.setState({
      dropoff : {
        lat: location.lat,
        lng: location.lng
      }
    }, () => {
      console.log(`setDropoff called at ${JSON.stringify(this.state.dropoff)}`)
      this.tripRequest()
    })
    
  }

  tripRequest = () => {
    axios.post(`http://nuber-api.herokuapp.com/api/rider/${this.state.rider.id}/requestPickup`, {
      driverID: this.state.selectedDriver,
      dropoff: {
        latitude: this.state.dropoff.lat,
        longitude: this.state.dropoff.lng
      }
    })
    .then(response => {
      this.setState({
        tripData: response.data
      })
      console.log(`http://nuber-api.herokuapp.com/api/rider/${this.state.rider.id}/requestPickup`)
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">nUber: An app by Team Deadpool</h1>
        </header>
  
        { !this.state.rider.id ?
          <span>
            <RiderList 
              setRider={this.setRider} 
            /> 
          </span>
        :
          <p/>
        }
        { this.state.rider.id && !this.state.selectedDriver ? 
          <span>
            <DriverList 
              rider={this.state.rider} 
              driversData={this.state.nearbyDrivers} 
              setDriver={this.setDriver} 
            />
          </span>
        :
          <p/>
        }
        { this.state.selectedDriver && this.state.dropoff.lat === '' ? 
            <PickupRequest 
              setDropoff={this.setDropoff}  
            />
          :
            <p/>
        }
        { this.state.tripData ?
          <TripSummary data={this.state.tripData} />
        :
          <p/>
        }
      </div>
    );
  }
}

export default App;
