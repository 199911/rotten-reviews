const RottenReviews = require('..')

RottenReviews.getAudienceReviews('venom_2018', 3).then(reviews => {
  console.log(JSON.stringify(reviews, null, 2))
})
