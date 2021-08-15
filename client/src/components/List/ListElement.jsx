/* eslint-disable react/prop-types */
import React, { useState, Suspense } from 'react';

const DetailView = React.lazy(() => import('./DetailView.jsx'));
const SummaryView = React.lazy(() => import('./SummaryView.jsx'));

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
        <Suspense fallback={(<div>Loading...</div>)}>
          <SummaryView element={element} />
        </Suspense>
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
      <Suspense fallback={(<div>Loading...</div>)}>
        <DetailView element={element} />
      </Suspense>
    </div>
  );
};

export default ListElement;
