import React, { Component } from 'react';
import IncidentAppBar from './components/incidentAppBar'
import Incident from './containers/Incident'
class App extends Component {
  render() {
    const title = 'Outalator'

    return (
      <div className="App">
        <>
          <IncidentAppBar {...{title}} />
          <Incident />
        </>
      </div>
    );
  }
}

export default App;
