import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBox from '../../components/searchBox'
import SearchAppBarComponent from '../../components/searchAppBar'
import styles from './styles'
class SearchAppBar extends Component {
  render() {
    const { classes } = this.props
    const title = 'Movies for Jeff!!'
    const onSearchPlaceHolder = (target) => console.log('Target is: ', target)
    return(
      <SearchAppBarComponent {...{title}}>
        <div className={classes.search}> 
          <SearchBox onSearch={onSearchPlaceHolder}/>
        </div>
      </SearchAppBarComponent>
    )
  }
}

export default withStyles(styles)(SearchAppBar);