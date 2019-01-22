import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCardComponent from '../../components/movieCard'

class MovieCard extends Component {
  state = { expanded: false };

  onClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(){
      const { title, date, overview, imgSrc } = this.props
      const { expanded } = this.state
      return(
        <MovieCardComponent {...{title, date, overview, imgSrc, expanded}} onClick={this.onClick} />
      )
  }

}

MovieCard.PropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default MovieCard