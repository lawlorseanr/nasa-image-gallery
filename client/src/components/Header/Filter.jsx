/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default ({ filterOptions }) => {
  const [filters, setFilterList] = useState(new Set());
  return (
    <div id='app-header-filter'>
      <div id='app-header-filter-by'>
        <span className='app-header-filter-text'>Filter by: </span>
        <select
          name='filter-choice'
          id='filter-choice'
          onChange={(e) => {
            e.preventDefault();
            setFilterList(filterOptions[e.target.value]);
          }}
        >
          <option value=''>None</option>
          <option value='center'>NASA Center</option>
          <option value='year'>Year</option>
          <option value='keyword'>Keyword</option>
        </select>
      </div>
      <div id='app-header-filter-where'>
        <span className='app-header-filter-text'>where entry contains: </span>
        <select
          name='filter-where'
          id='filter-where'
          onChange={(e) => console.log(e.target.value)}
        >
          <option value=''>None</option>
          {[...filters].sort().map((filter, i) => {
            return <option key={i} value={filter}>{filter}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
