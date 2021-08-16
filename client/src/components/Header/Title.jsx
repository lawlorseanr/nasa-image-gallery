import React from 'react';
import PropTypes from 'prop-types';

import Delay from './Delay.jsx';

const Title = ({ delayTime, handleToggleDelay, handleDelayChange }) => {
  return (
    <div id='app-header-title'>
      <div id='app-header-title-banner'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'
          alt='NASA!'
        />
        <h1>NASA Image Gallery</h1>
      </div>
      {/* <img id='loading-gif' src="./assets/spiffygif_46x46.gif" alt='Spinner' /> */}
      <Delay
        delayTime={delayTime}
        handleToggleDelay={handleToggleDelay}
        handleDelayChange={handleDelayChange}
      />
    </div>
  );
};

Title.propTypes = {
  delayTime: PropTypes.number.isRequired,
  handleToggleDelay: PropTypes.func.isRequired,
  handleDelayChange: PropTypes.func.isRequired,
};

export default Title;
