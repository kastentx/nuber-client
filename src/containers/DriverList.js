import React, { Component } from 'react'
import Driver from '../components/Driver'
import axios from 'axios'

export class DriverList extends Component {
  constructor(props) {
    super(props)
    this.state = {driversData : []}
  }
  
  componentDidMount () {
      axios.get('http://localhost:3000/api/driver/')
      .then(docs => {
        this.setState({
          driversData : docs.data
        })
      })
      .catch (e => {
        console.log(e.message || e)
      })
      
}

  render() {
    console.log(this.state.driversData)
    return (
      <div>
        {this.state.driversData.map((driver, i) => <Driver key={i} data={driver}/>)}
        
      </div>
    )
    
  }
}

export default DriverList