/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

const DetailView = ({ element }) => {
  return (
    <div className='app-list-detail'>
      <div
        className='app-list-detail-image'
        style={{ backgroundImage: `url(${element.links[0].href})` }}
        alt='Space'
      />
      <div className='app-list-detail-content'>
        <h3 className='app-list-detail'>Title: </h3>
        <span className='app-list-detail'>{element.data[0].title || 'Space: the final frontier'}</span>
        <h4 className='app-list-detail'>Date: </h4>
        <span className='app-list-detail'>{moment(element.data[0].date_created).format('MMMM DDDD YYYY')}</span>
        <h4 className='app-list-detail'>Center: </h4>
        <span className='app-list-detail'>{element.data[0].center || 'JPL'}</span>
        <h4 className='app-list-detail'>Owner: </h4>
        <span className='app-list-detail'>{element.data[0].secondary_creator || 'NASA'}</span>
        <h4 className='app-list-detail'>Description: </h4>
        <span className='app-list-detail'>{element.data[0].description || 'Where no person has gone before.'}</span>
        <h4 className='app-list-detail'>Keywords: </h4>
        <span className='app-list-detail'>
          {element.data[0].keywords.map((word, i) => {
            if (i === element.data[0].keywords.length - 1) {
              return `${word}`;
            }
            return ` ${word}, `;
          })}
        </span>
      </div>
    </div>
  );
};

export default DetailView;
