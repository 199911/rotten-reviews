const RottenReviews = require('..')

RottenReviews.getAudienceReviews('doctor_who/s11', 3, true).then(reviews => {
  console.log(JSON.stringify(reviews, null, 2))
})
