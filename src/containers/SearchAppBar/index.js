import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import SearchBox from '../../components/searchBox'
import SearchAppBarComponent from '../../components/searchAppBar'
import styles from './styles'
import search from './actions'
class SearchAppBar extends Component {
  render() {
    const { classes } = this.props 
    const title = 'Movies for Jeff!!'
    const onSearchPlaceHolder = (target) => console.log('Target is: ', target) // TODO add this.props.search(target)
    return(
      <SearchAppBarComponent {...{title}}>
        <div className={classes.search}> 
          <SearchBox onSearch={onSearchPlaceHolder}/>
        </div>
      </SearchAppBarComponent>
    )
  }
}

export default connect(null, { search })(withStyles(styles)(SearchAppBar));
