import React, { Component } from 'react'
import Rider from '../components/Rider'
import axios from 'axios'

class RiderList extends Component {
  constructor(props) {
    super(props)
    this.state = { ridersData : [] }
  }
  
  componentDidMount () {
      axios.get('http://nuber-service.herokuapp.com/api/rider/')
      .then(docs => {
        this.setState({
          ridersData : docs.data
        })
      })
      .catch (e => {
        console.error(e.message || e)
      })
  }

  handleClick = (rider) => {
    console.log(`you clicked rider: ${rider._id}`)
    this.props.setRider(rider)
  }

  render() {
    console.log(this.state.ridersData)
    return (
      <div>
        <h1>nUber Riders:</h1>  
        <h3>click to login.</h3>
        {this.state.ridersData.map((rider, i) => <Rider key={i} data={rider} handleClick={() => this.handleClick(rider)} />)}
      </div>
    )
  }
}

export default RiderList