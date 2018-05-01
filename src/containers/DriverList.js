import React, { Component } from 'react'
import Driver from '../components/Driver'

class DriverList extends Component {
  render() {
    return (
      <div>
        <h1>nUber Drivers:</h1>  
        <h3>select a driver to request a pickup.</h3>
        {this.props.driversData.map((driver, i) => {
          return <Driver key={i} data={driver} riderLat={this.props.rider.lat} riderLng={this.props.rider.lng}/>
        })}
      </div>
    )
  }
}

export default DriverList
