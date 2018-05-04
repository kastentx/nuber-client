import React from 'react'
import './LocationForm.css'

const LocationForm = (props) => {
  return (
    <div id='input-block'>
      <h2>Enter Dropoff Location:</h2>
      <form>
        <label>
          Latitude: 
          <input 
            type="text" 
            value={props.lat}
            onChange={props.handleLatChange}
          />
        </label>
        <br/>
        <label>
          Longitude: 
          <input 
            type="text" 
            value={props.lng}
            onChange={props.handleLngChange}
          />
        </label>
        <button type="submit" onClick={props.handleSubmit}>
          Request Pickup
        </button>
      </form>
    </div>
  )
}

export default LocationForm
