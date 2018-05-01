import React from 'react'
import './Rider.css'
import LocationMap from './LocationMap'
import { formatRating } from '../utilities/tools'

const Rider = (props) => {
  return (
    <div id='content-block' data-id={props.data._id} onClick={props.handleClick}>
      <p><b>Rider ID:</b> {props.data._id}</p>
      <p><b>Average Rating:</b> {formatRating(props.data.reviews)}</p>
      <p><b>Name:</b> {props.data.name}</p>
      <div id='location-section'>
        <p><b>Current Location:</b></p>
        <LocationMap 
          lat={props.data.location.latitude} 
          lng={props.data.location.longitude} 
        />
      </div>      
    </div>
  )
}

export default Rider