const rp = require('request-promise-native')
const apiKey = '057dfa32a18eed0f2dc23dc2e80ed8a0'
const baseUrl = `https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key=${apiKey}`
module.exports = {
  Query: {
    MovieResults: async (_, {title}) => {
      const searchUrl = `${baseUrl}&query=${title}`
      const { results } = await rp({uri: searchUrl, json: true})
      
      return results
    }
  },
  Movie: {
    date: ({ release_date }) => release_date,
    imgSrc: async ({poster_path}) => {
      console.log('poster_path: ', poster_path);
      const baseImgUrl = 'https://image.tmdb.org/t/p/original/'
      return `${baseImgUrl}${poster_path}`
    }
  }
}
