import SEARCH from './constants'

const search = (queryString) => {
  return {
    type: SEARCH,
    queryString,
  }
}

export default search