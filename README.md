# rotten-reviews

Scrape audience reviews from Rotten Tomatoes 🍅

## Description

This Node.js scrapes Rotten Tomatoes audience reviews pages and scrapes the
contents by getting the reviewer name, date, total stars, and review excerpt.

Future features are listed on the [roadmap](#roadmap).

## Requirements

- Node.js

## Usage

## Running from binaries

All binaries are compiled using [`pkg`](https://github.com/zeit/pkg) using Node.js `v8.12.0`.
See the [releases page](https://github.com/grikomsn/rotten-reviews/releases) for the binaries' download links.

Example running the binaries on `darwin`:

```console
$ ./rotten-reviews-macos
Usage: rotten-reviews [options] <title> <count>

scrapes audience movie/tv reviews from rotten tomatoes

Options:
  --csv       exports to csv (defaults to json)
  --tv        <title> is a tv show (defaults to movie)
  -h, --help  output usage information
```

## Running from global install (`npm` or `yarn`)

- Install package globally by running:

```sh
# install using npm
npm -g i rotten-reviews

# install using yarn
yarn global add rotten-reviews
```

- Run `rotten-reviews` with the `movieSlug` and `count` (number of reviews) parameter, for example:

```console
$ rotten-reviews venom_2018 2
[
  {
    "reviewer": "Melissa B",
    "date": "October 11, 2018",
    "stars": 5,
    "review": "I loved it! Didn't expect to like it as much as I did.Some really funny parts and amazing action scenes. Ignore the critics, go see it!"
  },
  {
    "reviewer": "Andrew O",
    "date": "October 11, 2018",
    "stars": 2.5,
    "review": "Despite a surprising amount of humor and chemistry between Venom and his host, Venom is mostly inept as both an action and a horror film, with only the slightest amount of soul peering through the thoughtful characterization of Hardy's role. This is a movie you can enjoy while watching and forget the moment you're done."
  }
]
```

### Running from package

- Install package by running:

  ```sh
  # install using npm
  npm i rotten-reviews

  # install using yarn
  yarn add rotten-reviews
  ```

- Example usage source code:

  ```js
  // import the package
  const RottenReviews = require('rotten-reviews')

  // https://www.rottentomatoes.com/m/venom_2018/reviews
  const movieSlug = 'venom_2018'

  // get 500 reviews
  const numOfReviews = 500

  // is this a TV show ?
  // default value is false
  const isTV = false

  // get using the getAudienceReviews function
  RottenReviews.getAudienceReviews(movieSlug, numOfReviews, isTV).then(reviews => {
    console.log(JSON.stringify(reviews, null, 2))
  })
  ```

- Here's the result of the source code above:

  ```json
  [
    {
      "reviewer": "Melissa B",
      "date": "October 11, 2018",
      "stars": 5,
      "review": "I loved it! Didn't expect to like it as much as I did.Some really funny parts and amazing action scenes. Ignore the critics, go see it!"
    },
    ...
  ]
  ```

## Roadmap

- [x] Scrape defined number of reviews instead of pages ([#6](https://github.com/grikomsn/rotten-reviews/pull/6), soon on `v1.1.0`)
- [x] Error handling if movie page doesn't exist ([#2](https://github.com/grikomsn/rotten-reviews/pull/2), soon on `v1.1.0`)
- [ ] Include scraping TV series reviews

## Credits

- [`axios`](https://github.com/axios/axios) for fetching webpages
- [`cheerio`](https://github.com/cheeriojs/cheerio) for scraping the webpage contents
- [`commander.js`](https://github.com/tj/commander.js) for running this package as a CLI app
- [`json2csv`](https://github.com/zemirco/json2csv) for converting scraped reviews to CSV on the CLI app
- [`pkg`](https://github.com/zeit/pkg) for compiling to binaries

## License

MIT
