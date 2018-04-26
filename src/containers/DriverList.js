import React, { Component } from 'react'
import Driver from '../components/Driver'

export class DriverList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.driversData.map((driver, i) => <Driver key={i} data={driver}/>)}
      </div>
    )
    
  }
}

export default DriverList