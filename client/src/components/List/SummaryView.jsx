/* eslint-disable react/prop-types */
import React from 'react';

const SummaryView = ({ element }) => {
  return (
    <div className='app-list-summary'>
      <div
        className='app-list-summary-thumbnail'
        style={{ backgroundImage: `url(${element.links[0].href})` }}
        alt='Space'
      />
      <div
        className='app-list-summary-thumbnail'
      >
        {`Title: ${element.data[0].title}`}
      </div>
    </div>
  );
};

export default SummaryView;
