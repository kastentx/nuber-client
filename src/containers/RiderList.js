import React, { Component } from 'react'
import Rider from '../components/Rider'
import axios from 'axios'

export class RiderList extends Component {
  constructor() {
    super()
    this.state = {ridersData : []}
  }
  
  componentDidMount () {
      axios.get('http://localhost:8888/api/rider/')
      .then(docs => {
        this.setState({
          ridersData : docs.data
        })
      })
      .catch (e => {
        console.error(e.message || e)
      })
}

  render() {
    console.log(this.state.ridersData)
    return (
      <div>
        {this.state.ridersData.map((rider, i) => <Rider key={i} data={rider}/>)}
      </div>
    )
    
  }
}

export default RiderList