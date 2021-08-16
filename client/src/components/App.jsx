import React from 'react';

import Header from './Header.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      filter: '',
    };

    this.setList = this.setList.bind(this);
  }

  setList(list) {
    this.setState({ list });
  }

  render() {
    return (
      <div id='app'>
        <Header setList={this.setList} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
