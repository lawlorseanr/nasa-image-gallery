import React from 'react';
import PropTypes from 'prop-types';

const Delay = ({ handleToggleDelay, handleDelayChange }) => {
  return (
    <div id='app-header-title-delay'>
      <label htmlFor='delay-toggle' className='switch'>
        <input id='delay-toggle' type='checkbox' />
        <span className='slider' />
      </label>
      <label htmlFor="delay-amount">
        Delay (ms):
        <input type="text" id="delay-amount" name="delay-amount" />
      </label>
    </div>
  );
};

Delay.propTypes = {
  handleToggleDelay: PropTypes.func.isRequired,
  handleDelayChange: PropTypes.func.isRequired,
};

export default Delay;
