import React from 'react';
import PropTypes from 'prop-types';

const Delay = ({ handleToggleDelay, handleDelayChange }) => {
  return (
    <div>
      Delay
    </div>
  );
};

Delay.propTypes = {
  handleToggleDelay: PropTypes.func.isRequired,
  handleDelayChange: PropTypes.func.isRequired,
};

export default Delay;
