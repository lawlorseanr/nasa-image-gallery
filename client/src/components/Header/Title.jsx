import React from 'react';
import PropTypes from 'prop-types';

import Delay from './Delay.jsx';

const Title = ({ handleToggleDelay, handleDelayChange }) => {
  return (
    <div id='app-header-title'>
      <div id='app-header-title-banner'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'
          alt='NASA!'
        />
        <h1>NASA Image Gallery</h1>
      </div>
      <Delay
        handleToggleDelay={handleToggleDelay}
        handleDelayChange={handleDelayChange}
      />
    </div>
  );
};

Title.propTypes = {
  handleToggleDelay: PropTypes.func.isRequired,
  handleDelayChange: PropTypes.func.isRequired,
};

export default Title;
