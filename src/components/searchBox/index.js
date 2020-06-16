import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import styles from './styles'

const SearchBox = ({ onSearch, classes }) => (
  <div className={classes.margin}>
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <FontAwesomeIcon icon={faSearch}/>
      </Grid>
      <Grid item>
        <TextField id="movie-title-input" label="Enter your movie title" onChange={({target}) => onSearch(target.value)}/>
      </Grid>
    </Grid>
  </div>
)

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default withStyles(styles)(SearchBox)
