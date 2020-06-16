import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieCardComponent from '../../components/movieCard'

const MovieCard = ({ title, date, overview, imgSrc }) => {
  const [{ expanded }, setExpanded] = useState({ expanded: false })

  const onClick = () => setExpanded(state => ({ expanded: !state.expanded }));

      return(
        <MovieCardComponent {...{title, date, overview, imgSrc, expanded}} {...{ onClick }}/>
      )

}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default MovieCard