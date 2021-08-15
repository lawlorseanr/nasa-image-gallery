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
        <h3 className='app-list-summary-title-text'>{element.data[0].title}</h3>
        <h4 className='app-list-summary-title-date'>{moment(element.data[0].date_created).format('MMMM YYYY')}</h4>
      </div>
    </div>
  );
};

export default SummaryView;
