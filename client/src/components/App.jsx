import React from 'react';

import Header from './Header.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <div id='app'>
        <Header />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
