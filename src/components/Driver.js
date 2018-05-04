import React from 'react'
import './Driver.css'
import { formatRating } from '../utilities/tools'
import LocationMap from './LocationMap'
import DirectionMap from './DirectionMap'

const Driver = (props) => {
  return (
    <div id='driver-content' data-id={props.data._id} onClick={props.handleClick}>
      <p><b>Driver ID:</b> {props.data._id}</p>
      <p><b>Average Rating:</b> {formatRating(props.data.reviews)}</p>
      <p><b>Name:</b> {props.data.name}</p>
      <p><b>Vehicle:</b> {props.data.vehicle}</p>
      <p><b>Capacity:</b> {props.data.capacity}</p>
      <p><b>Available:</b> {props.data.available ? 'True' : 'False'}</p>
      <p><b>Current Trip:</b> {props.data.currentTrip || 'none'}</p>
      <div id='driver-location'>
        <p><b>Current Location:</b></p>
        {
          props.data.timeToPickup ?
            <DirectionMap 
              lat={props.data.location.latitude} 
              lng={props.data.location.longitude} 
              riderLat={props.riderLat}
              riderLng={props.riderLng}
            />
          : 
            <LocationMap 
              lat={props.data.location.latitude} 
              lng={props.data.location.longitude} 
            />
      }
      </div>
      { props.data.timeToPickup ? 
        <p>
          <b>Estimated Pickup Time:</b> {props.data.timeToPickup}
        </p> 
      : 
        <p/> 
      }
    </div>
  )
}

export default Driver