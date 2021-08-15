import React from 'react';
import PropTypes from 'prop-types';

import ListElement from './List/ListElement.jsx';

const List = ({ list }) => {
  return (
    <div>
      {list.map((element, i) => <ListElement key={i} element={element} />)}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
