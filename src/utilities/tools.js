export const formatRating = reviews => 
  reviews.map(
    review => review.score).reduce(
    (a, b) => {return a + b}, 0) / reviews.length || 'no ratings yet'