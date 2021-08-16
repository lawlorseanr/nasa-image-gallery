/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

const SummaryView = ({ element }) => {
  return (
    <div className='app-list-summary'>
      <div
        className='app-list-summary-thumbnail'
        style={{ backgroundImage: `url(${element.links[0].href})` }}
        alt='Space'
      />
      <div
        className='app-list-summary-title'
      >
        <h2 className='app-list-summary-title-text'>Title:</h2>
        <span className='app-list-summary-title-text'>{element.data[0].title || 'Space: the final frontier'}</span>
        <h3 className='app-list-summary-title-date'>Date: </h3>
        <span className='app-list-summary-title-date'>{moment(element.data[0].date_created).format('MMMM YYYY') || 'Eons ago...'}</span>
      </div>
    </div>
  );
};

export default SummaryView;
