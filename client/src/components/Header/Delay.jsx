import React from 'react';
import PropTypes from 'prop-types';

const Delay = ({ delayTime, handleToggleDelay, handleDelayChange }) => {
  return (
    <div id='app-header-title-delay'>
      <span id='toggle-delay'>Toggle Delay:</span>
      <label htmlFor='delay-toggle' className='switch'>
        <input
          id='delay-toggle'
          type='checkbox'
          onChange={(e) => handleToggleDelay(e.target.checked)}
        />
        <span className='slider' />
      </label>
      <label id='delay-amount' htmlFor='delay-amount'>
        Delay (ms):
        <input
          type='text'
          id='delay-amount'
          name='delay-amount'
          value={delayTime}
          onChange={(e) => handleDelayChange(parseInt(e.target.value, 10))}
        />
      </label>
    </div>
  );
};

Delay.propTypes = {
  delayTime: PropTypes.number.isRequired,
  handleToggleDelay: PropTypes.func.isRequired,
  handleDelayChange: PropTypes.func.isRequired,
};

export default Delay;
