import React from 'react'
import './Map.css'
import loadGIF from './loading-map.gif'

const DirectionMap = (props) => {
  console.log(`origin=${props.lat},${props.lng}` + 
  `&destination=${props.riderLat},${props.riderLng}`)
  return (
    <div style={{'color': 'black', backgroundImage: loadGIF}}>
      <iframe
        title="sample-map"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/directions` +
        `?key=${process.env.REACT_APP_EMBED_KEY}` +
        `&origin=${props.lat},${props.lng}` + 
        `&destination=${props.riderLat},${props.riderLng}`} >
      </iframe>
    </div>
  )
}

export default DirectionMap