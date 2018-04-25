import React from 'react'
import './Rider.css'
import { formatRating } from '../utilities/tools'

const Rider = (props) => {
  return (
    <div id='content-block'>
      <p><b>Rider ID:</b> {props.data._id}</p>
      <p><b>Average Rating:</b> {formatRating(props.data.reviews)}</p>
      <p><b>Name:</b> {props.data.name}</p>
      <div id='location-section'>
      <p><b>Current Location:</b></p>
        <p><b>Latitude:</b> {props.data.location.latitude}</p>
        <p><b>Longitude:</b> {props.data.location.longitude}</p>
      </div>      
    </div>
  )
}

export default Rider