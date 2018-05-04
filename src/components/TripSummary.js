import React from 'react'
import './TripSummary.css'

const TripSummary = (props) => {
  return (
    <div id='trip-content' data-id={props.data._id} >
      <p><b>Driver ID:</b> {props.data.driverID}</p>
      <p><b>Rider ID:</b> {props.data.riderID}</p>
      <p><b>Pickup Address:</b> {props.data.pickup.address}</p>
      <p><b>Dropoff Address:</b> {props.data.dropoff.address}</p>
      <p><b>Estimated Pickup Time:</b> {props.data.timeToPickup}</p>
      <p><b>Estimated Travel Time:</b> {props.data.travelTime}</p>
      <p><b>Rate:</b> {props.data.rate}</p>
      <p><b>Cost:</b> {props.data.cost}</p>
    </div>
  )
}

export default TripSummary