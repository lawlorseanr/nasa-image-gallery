import React from 'react';

import Header from './Header.jsx';
import List from './List.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      filter: {},
    };

    this.setList = this.setList.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(key, value) {
    this.setState({
      filter: {
        key,
        value,
      },
    });
  }

  setList(list) {
    this.setState({ list });
  }

  render() {
    return (
      <div id='app'>
        <Header
          setList={this.setList}
          handleFilterChange={this.handleFilterChange}
        />
        <List
          list={this.state.list}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
