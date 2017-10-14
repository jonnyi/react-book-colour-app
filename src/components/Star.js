import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ isSelected = false, onClick = (f) => f }) => {
  return (
    <div className={isSelected ? 'star selected' : 'star'} onClick={onClick} />
  );
};
Star.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Star;
