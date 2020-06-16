import React from 'react';
import { useDispatch } from 'react-redux'
import SearchBox from '../../components/searchBox'
import SearchAppBarComponent from '../../components/searchAppBar'
import search from './actions'

const SearchAppBar = () => {
    const title = 'Movie Search'
    const dispatch = useDispatch();
    const onSearch = (target) => dispatch(search(target));

    return(
      <SearchAppBarComponent {...{title}}>
          <SearchBox {...{onSearch}}/>
      </SearchAppBarComponent>
    )
  }

export default SearchAppBar;
