import React from 'react';
import PropTypes from 'prop-types';

import ListElement from './List/ListElement.jsx';

const List = ({ list }) => {
  return (
    <div>
      {list.map((element) => <ListElement key={element.data[0].nasa_id} element={element} />)}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
