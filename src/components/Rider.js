import React from 'react'
import './Rider.css'
import { formatRating, getMapLink } from '../utilities/tools'

const Rider = (props) => {
  return (
    <div id='content-block' data-id={props.data._id} onClick={props.handleClick}>
      <p><b>Rider ID:</b> {props.data._id}</p>
      <p><b>Average Rating:</b> {formatRating(props.data.reviews)}</p>
      <p><b>Name:</b> {props.data.name}</p>
      <div id='location-section'>
      <p><b>Current Location:</b></p>
        <p><b>Latitude:</b> {props.data.location.latitude}</p>
        <p><b>Longitude:</b> {props.data.location.longitude}</p>
        <a target="_blank" href={getMapLink(props.data.location)}>Click here to view on Google Maps.</a>
      </div>      
    </div>
  )
}

export default Rider