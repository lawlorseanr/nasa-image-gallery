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
        <h3 className='app-list-detail-title'>Title: </h3>
        <span className='app-list-detail-title'>{element.data[0].title || 'Space: the final frontier'}</span>
        <h4 className='app-list-detail-date'>Date: </h4>
        <span className='app-list-detail-date'>{moment(element.data[0].date_created).format('MMMM DDDD YYYY')}</span>
        <h4 className='app-list-detail-center'>Center: </h4>
        <span className='app-list-detail-center'>{element.data[0].center || 'JPL'}</span>
        <h4 className='app-list-detail-owner'>Owner: </h4>
        <span className='app-list-detail-owner'>{element.data[0].secondary_creator || 'NASA'}</span>
        <h4 className='app-list-detail-description'>Description: </h4>
        <span className='app-list-detail-description'>{element.data[0].description || 'Where no person has gone before.'}</span>
      </div>
    </div>
  );
};

export default DetailView;
