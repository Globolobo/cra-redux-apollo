import React, { Component } from 'react';
import SearchAppBar from './containers/SearchAppBar'
import MovieResultsContainer from './containers/MovieResultsContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <SearchAppBar />
          <MovieResultsContainer/>
        </>
      </div>
    );
  }
}

export default App;
