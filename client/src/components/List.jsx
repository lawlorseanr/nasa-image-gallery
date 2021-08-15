import React from 'react';
import PropTypes from 'prop-types';

import ListElement from './List/ListElement.jsx';

const List = ({ list }) => {
  return (
    <div id='app-list'>
      {list.map((element) => (
        <ListElement
          key={element.data[0].nasa_id}
          element={element.data[0]}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default List;
