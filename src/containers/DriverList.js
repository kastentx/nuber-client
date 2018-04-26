import React from 'react'
import Driver from '../components/Driver'

const DriverList = (props) => {
  return (
    <div>
      {props.driversData.map((driver, i) => <Driver key={i} data={driver}/>)}
    </div>
  )
}

export default DriverList
