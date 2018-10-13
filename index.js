const Axios = require('axios').default
const cheerio = require('cheerio')

module.exports = {
  getAudienceReviews: (slug, reviewCount, isTV = false) => {
    const movieUrl = (showType, slug, page) =>
      `https://www.rottentomatoes.com/${showType}/${slug}/reviews/?page=${page}&type=user&sort=`

    const REVIEWS_PER_PAGE = 20
    const pages = Math.ceil(reviewCount / REVIEWS_PER_PAGE)

    return new Promise(resolve => {
      const pageRequests = []
      for (let i = 0; i < pages; i++) {
        pageRequests.push(Axios.get(movieUrl(isTV ? 'tv' : 'm', slug, i + 1)))
      }
      resolve(pageRequests)
    })
      .then(pageRequests => Axios.all(pageRequests))
      .catch(error => {
        if (error.response.status == 404)
          return Promise.reject({
            status: 404,
            message:
              `⚠️  Page not found for '${slug}'. You can check the page manually by opening this link:\n` +
              movieUrl(slug, 1),
          })
        return Promise.reject({
          message: `⚠️  An error occured, please try again.`,
        })
      })
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
