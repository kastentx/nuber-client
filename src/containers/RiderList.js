import React, { Component } from 'react'
import Rider from '../components/Rider'
import axios from 'axios'

export class RiderList extends Component {
  constructor(props) {
    super(props)
    this.state = { ridersData : [] }
  }
  
  componentDidMount () {
      axios.get('http://localhost:3000/api/rider/')
      .then(docs => {
        this.setState({
          ridersData : docs.data
        })
      })
      .catch (e => {
        console.error(e.message || e)
      })
  }

  handleClick = (e) => {
    let id = e.target.dataset.id;
    if (!e.target.dataset.id) {
      id = e.target.parentNode.dataset.id
    }
    console.log(`you clicked rider: ${id}`)
    this.props.setRider(id)
  }

  render() {
    console.log(this.state.ridersData)
    return (
      <div>
        {this.state.ridersData.map((rider, i) => <Rider key={i} data={rider} handleClick={this.handleClick}/>)}
      </div>
    )
    
  }
}

export default RiderList