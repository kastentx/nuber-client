import React from 'react'
import './Driver.css'
import { formatRating } from '../utilities/tools'

const Driver = (props) => {
  return (
    <div id='content-block'>
      <p><b>Driver ID:</b> {props.data._id}</p>
      <p><b>Average Rating:</b> {formatRating(props.data.reviews)}</p>
      <p><b>Name:</b> {props.data.name}</p>
      <p><b>Vehicle:</b> {props.data.vehicle}</p>
      <p><b>Capacity:</b> {props.data.capacity}</p>
      <p><b>Available:</b> {props.data.available}</p>
      <p><b>Current Trip:</b> {props.data.location.currentTrip || 'none'}</p>
      <div id='location-section'>
      <p><b>Current Location:</b></p>
        <p><b>Latitude:</b> {props.data.location.latitude}</p>
        <p><b>Longitude:</b> {props.data.location.longitude}</p>
      </div>      
    </div>
  )
}

export default Driver