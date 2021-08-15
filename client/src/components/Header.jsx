import React from 'react';

import Title from './Header/Title.jsx';
import Search from './Header/Search.jsx';
import Filter from './Header/Filter.jsx';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      list: [],
      filterWords: [],
      filteredList: [],
      filterOptions: [],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id='app-header'>
        <Title />
        <Search />
        <Filter />
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
