const Axios = require('axios').default
const cheerio = require('cheerio')

module.exports = {
  getAudienceReviews: (slug, reviewCount) => {
    const movieUrl = (slug, page) =>
      `https://www.rottentomatoes.com/m/${slug}/reviews/?page=${page}&type=user&sort=`

    const REVIEWS_PER_PAGE = 20
    const pages = Math.ceil(reviewCount / REVIEWS_PER_PAGE)

    return new Promise(resolve => {
      const pageRequests = []
      for (let i = 0; i < pages; i++) {
        pageRequests.push(Axios.get(movieUrl(slug, i + 1)))
      }
      resolve(pageRequests)
    })
      .then(pageRequests => Axios.all(pageRequests))
      .then(
        Axios.spread((...requests) => {
          const reviews = []
          requests.forEach(request => {
            reviews.push.apply(reviews, module.exports.scrapePage(request.data))
          })
          return reviews.slice(0, reviewCount)
        })
      )
  },
  scrapePage: data => {
    const $ = cheerio.load(data)
    const reviews = []

    $('.review_table_row').each((i, element) => {
      const stars = $(element).find('.glyphicon.glyphicon-star').length
      const hasHalf = $(element).find('span:contains("½")').length ? 0.5 : 0

      const [reviewer, date, review] = [
        '.bold.unstyled.articleLink',
        '.fr.small.subtle',
        '.user_review',
      ].map(classes =>
        $(element)
          .find(classes)
          .text()
          .trim()
      )

      reviews.push({
        reviewer: reviewer,
        date: date,
        stars: stars + hasHalf,
        review: review,
      })
    })

    return reviews
  },
}
