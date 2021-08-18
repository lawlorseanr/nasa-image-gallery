import React from 'react';
import PropTypes from 'prop-types';

import ListElement from './List/ListElement.jsx';

const List = ({ list, filter }) => {
  const { key, value } = filter;
  return (
    <div id='app-list'>
      {list.reduce((memo, element) => {
        if (key === undefined) {
          memo.push(<ListElement
            key={element.data[0].nasa_id}
            element={element}
          />);
        } else if (key && JSON.stringify(element.data[0][key]).includes(value)) {
          memo.push(<ListElement
            key={element.data[0].nasa_id}
            element={element}
          />);
        }
        return memo;
      }, [])}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default List;
