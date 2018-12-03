import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';

function ScrollTo({children, y}) {
  return (
    <Box onClick={() => window.scrollTo({left: 0, top: y, behavior: 'smooth'})}>
      {children}
    </Box>
  );
}

ScrollTo.defaultProps = {
  y: 0,
};

ScrollTo.propTypes = {
  children: PropTypes.node.isRequired,
  y: PropTypes.number.isRequired,
};

export default ScrollTo;
