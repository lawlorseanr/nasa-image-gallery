/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default ({ filterOptions, handleFilterChange }) => {
  const [filterKey, setFilterKey] = useState('');
  const [filters, setFilterList] = useState(filterOptions.all);
  const [whereValue, setWhereValue] = useState('all');
  return (
    <div id='app-header-filter'>
      <div id='app-header-filter-by'>
        <span className='app-header-filter-text'>Filter by: </span>
        <select
          name='filter-choice'
          id='filter-choice'
          onChange={(e) => {
            e.preventDefault();
            setFilterKey(e.target.value);
            setFilterList(filterOptions[e.target.value]);
            setWhereValue('all');
            handleFilterChange(undefined, undefined);
          }}
        >
          <option value='all'>None</option>
          <option value='center'>NASA Center</option>
          <option value='date_created'>Year</option>
          <option value='keywords'>Keyword</option>
        </select>
      </div>
      <div id='app-header-filter-where'>
        <span className='app-header-filter-text'>where entries contain: </span>
        <select
          name='filter-where'
          id='filter-where'
          value={whereValue}
          onChange={(e) => {
            setWhereValue(e.target.value);
            handleFilterChange(filterKey, e.target.value);
          }}
        >
          <option value=''>All</option>
          {[...filters].sort().map((filter, i) => {
            return <option key={i} value={filter}>{filter}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
