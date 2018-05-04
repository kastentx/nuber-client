import React, { Component } from 'react'
import LocationForm from '../components/LocationForm'

export class PickupRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: '',
      lng: ''
    }
  }

  handleLatChange = (e) => {
    this.setState({
      lat : e.target.value
    })
  }

  handleLngChange = (e) => {
    this.setState({
      lng : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setDropoff(this.state)
  }

  render() {
    return (
      <div>
        <LocationForm 
          lat={this.state.lat}
          lng={this.state.lng}
          handleLatChange={this.handleLatChange}
          handleLngChange={this.handleLngChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default PickupRequest
