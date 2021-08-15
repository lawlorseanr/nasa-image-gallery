/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import DetailView from './DetailView.jsx';
import SummaryView from './SummaryView.jsx';

const ListElement = ({ element }) => {
  const [isSummaryView, setView] = useState(true);

  if (isSummaryView) {
    return (
      <div
        className='app-list-container'
        aria-hidden
        onClick={() => setView(!isSummaryView)}
        onKeyPress={() => setView(!isSummaryView)}
        role='button'
      >
        <SummaryView element={element} />
      </div>
    );
  }
  return (
    <div
      className='app-list-container'
      aria-hidden
      onClick={() => setView(!isSummaryView)}
      onKeyPress={() => setView(!isSummaryView)}
      role='button'
    >
      <DetailView element={element} />
    </div>
  );
};

export default ListElement;
