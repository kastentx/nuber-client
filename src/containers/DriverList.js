import React, { Component } from 'react'
import Driver from '../components/Driver'

class DriverList extends Component {
  handleClick = (driver) => {
    console.log(`you clicked driver: ${driver._id}`)
    this.props.setDriver(driver)
  }
  
  render() {
    return (
      <div>
        <h1>nUber Drivers:</h1>  
        <h3>select a driver to request a pickup.</h3>
        { this.props.driversData.length > 0 ?
          this.props.driversData.map((driver, i) => {
          return (
            <Driver 
              key={i} 
              data={driver} 
              riderLat={this.props.rider.lat} 
              riderLng={this.props.rider.lng}
              handleClick={() => this.handleClick(driver)}
            />
          )})
        :
          <h4>We're sorry, but there are no active drivers in your area.</h4>
        }
      </div>
    )
  }
}

export default DriverList
