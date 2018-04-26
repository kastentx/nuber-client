import axios from "axios";

export const formatRating = reviews => 
  reviews.map(
    review => review.score).reduce(
    (a, b) => {return a + b}, 0) / reviews.length || 'no ratings yet'

export const getNearbyDrivers = riderID => axios.get(`http://localhost:3000/api/rider/${riderID}/findDrivers`)

export const getMapLink = location => `https://www.google.com/maps/place/${location.latitude},${location.longitude}`