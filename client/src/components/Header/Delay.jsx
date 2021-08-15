import React from 'react';
import PropTypes from 'prop-types';

const Delay = ({ handleToggleDelay, handleDelayChange }) => {
  return (
    <div id='app-header-title-delay'>
      <label htmlFor='delay-toggle' className='switch'>
        <input
          id='delay-toggle'
          type='checkbox'
          onChange={(e) => handleToggleDelay(e.target.checked)}
        />
        <span className='slider' />
      </label>
      <label htmlFor="delay-amount">
        Delay (ms):
        <input
          type="text"
          id="delay-amount"
          name="delay-amount"
          onChange={(e) => handleDelayChange(parseInt(e.target.value, 10))}
        />
      </label>
    </div>
  );
};

Delay.propTypes = {
  handleToggleDelay: PropTypes.func.isRequired,
  handleDelayChange: PropTypes.func.isRequired,
};

export default Delay;