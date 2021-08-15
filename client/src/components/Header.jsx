import React from 'react';
import PropTypes from 'prop-types';

import Title from './Header/Title.jsx';
import Search from './Header/Search.jsx';
import Filter from './Header/Filter.jsx';

import NASA from '../lib/NASA.js';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      list: [],
      filterWords: [],
      filteredList: [],
      filterOptions: [],
      isDelayed: false,
      delayTime: 0,
    };

    this.setList = props.setList;
    this.handleToggleDelay = this.handleToggleDelay.bind(this);
    this.handleDelayChange = this.handleDelayChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch('jupiter');
  }

  handleToggleDelay() {
    const { isDelayed, delayTime } = this.state;
    const updateDelay = isDelayed ? 0 : delayTime;
    this.setState({
      isDelayed: !isDelayed,
      delayTime: updateDelay,
    });
  }

  handleDelayChange(delayTime) {
    this.setState({ delayTime });
  }

  handleSearch(search) {
    this.setState({ search }, () => {
      setTimeout(() => {
        NASA.get('/search', {
          params: {
            q: this.state.search,
            media_type: 'image',
            page: 1,
          },
        })
          .then((response) => {
            this.setList(response.data.collection.items);
          })
          .catch((error) => console.error(error));
      }, this.state.delayTime);
    });
  }

  render() {
    return (
      <div id='app-header'>
        <Title
          delayTime={this.state.delayTime}
          handleToggleDelay={this.handleToggleDelay}
          handleDelayChange={this.handleDelayChange}
        />
        <Search
          handleSearch={this.handleSearch}
        />
        <Filter
          filters={this.state.filterOptions}
        />
      </div>
    );
  }
}

Header.propTypes = {
  setList: PropTypes.func.isRequired,
};

export default Header;
