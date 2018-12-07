import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import {getSizeValue} from './../css';

function Container({children, maxWidth, ...otherProps}) {
  return (
    <Box
      css={`
        margin: 0 auto;
        max-width: ${getSizeValue(maxWidth)};
      `}
      {...otherProps}>
      {children}
    </Box>
  );
}

Container.defaultProps = {
  maxWidth: 1280,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default Container;
