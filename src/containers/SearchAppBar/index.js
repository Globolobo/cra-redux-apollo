import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SearchBox from '../../components/searchBox'
import SearchAppBarComponent from '../../components/searchAppBar'
import search from './actions'
class SearchAppBar extends Component {
  render() {
    const title = 'Movies for Jeff!!'
    const onSearch = (target) => this.props.search(target)

    return(
      <SearchAppBarComponent {...{title}}>
          <SearchBox {...{onSearch}}/>
      </SearchAppBarComponent>
    )
  }
}

SearchAppBar.propTypes = {
  search: PropTypes.func.isRequired
} 

export default connect(null, { search })(SearchAppBar);
