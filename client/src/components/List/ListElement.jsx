import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DetailView from './DetailView.jsx';
import SummaryView from './SummaryView.jsx';

const ListElement = ({ element }) => {
  const [isSummaryView, setView] = useState(true);

  if (isSummaryView) {
    return (
      <div
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
      aria-hidden
      onClick={() => setView(!isSummaryView)}
      onKeyPress={() => setView(!isSummaryView)}
      role='button'
    >
      <DetailView
        element={element}
      />
    </div>
  );
};

ListElement.propTypes = {
  element: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ).isRequired,
};

export default ListElement;
