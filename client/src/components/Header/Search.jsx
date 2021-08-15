import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState('');
  return (
    <div id='app-header-search'>
      <label htmlFor='search-input'>
        Search the cosmos:
        <input
          type='text'
          id='search-input'
          name='search-input'
          placeholder='Jupiter'
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <input
        type='button'
        id='search-button'
        value='Liftoff! (Search)'
        onClick={(e) => {
          e.preventDefault();
          handleSearch(search);
        }}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
