import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCardComponent from '../../components/MovieCard'

class MovieCard extends Component {
  state = { expanded: false };

  onClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(){
      const { title, classes, date, overview, imgSrc } = this.props
      const { expanded } = this.state
      return(
        <MovieCardComponent {...{title, classes, date, overview, imgSrc, expanded}} onClick={this.onClick} />
      )
  }

}
export default MovieCard