import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Title from './Header/Title.jsx';
import Search from './Header/Search.jsx';
import Filter from './Header/Filter.jsx';

import NASA from '../lib/NASA.js';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterOptions: {
        all: new Set(),
        center: new Set(),
        date_created: new Set(),
        keywords: new Set(),
      },
      isDelayed: false,
      delayTime: 0,
    };

    this.setList = props.setList;
    this.handleToggleDelay = this.handleToggleDelay.bind(this);
    this.handleDelayChange = this.handleDelayChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch('Jupiter');
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
    const gif = document.getElementById('loading-gif');
    gif.style.opacity = 1;
    setTimeout(() => {
      NASA.get('/search', {
        params: {
          q: search,
          media_type: 'image',
          page: 1,
        },
      })
        .then((response) => {
          const list = response.data.collection.items;
          const filterOptions = {
            all: new Set(),
            center: new Set(),
            date_created: new Set(),
            keywords: new Set(),
          };
          list.forEach((entry) => {
            filterOptions.center.add(entry.data[0].center);
            filterOptions.date_created.add(moment(entry.data[0].date_created).format('YYYY'));
            if (entry.data[0].keywords) {
              entry.data[0].keywords.forEach((keyword) => filterOptions.keywords.add(keyword));
            }
          });
          this.setState({
            filterOptions,
          });
          this.setList(list);
        })
        .catch((error) => console.error(error))
        .finally(() => { gif.style.opacity = 0; });
    }, this.state.delayTime);
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
          filterOptions={this.state.filterOptions}
          handleFilterChange={this.props.handleFilterChange}
        />
      </div>
    );
  }
}

Header.propTypes = {
  setList: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Header;
