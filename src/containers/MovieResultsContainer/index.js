import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import MovieCard from '../MovieCard'

class MovieResultsContainer extends Component {
  render() {
    return(
      this.props.movieResults && this.props.movieResults.length > 0 &&
        <GridList cellHeight={160} cols={3}> 
          {this.props.movieResults.map((curr, i) =>
            <MovieCard key={curr.id} {...{...curr}}/>
          )}
        </GridList> || <div />
      )
  }
}

MovieResultsContainer.propTypes = {
  movieResults: PropTypes.array.isRequired
}

const mapStateToProps = ({ movieResults }) => movieResults

export default connect(mapStateToProps)(MovieResultsContainer);
