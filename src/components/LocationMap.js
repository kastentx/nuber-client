import React from 'react'
import './Map.css'
import loadGIF from './loading-map.gif'

const LocationMap = (props) => {
  console.log('map')
  return (
    <div style={{'color': 'black', backgroundImage: loadGIF}}>
      <iframe
        title="sample-map"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place` +
        `?key=${process.env.REACT_APP_EMBED_KEY}` +
        `&q=${props.lat},${props.lng}` + (props.dest ? 
        `&destination=${props.destLat},${props.destLng}` : ``) } >
      </iframe>
    </div>
  )
}

export default LocationMap