import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';

function Container({children, maxWidth, ...otherProps}) {
  return (
    <Box
      {...otherProps}
      css={`
        margin: 0 auto;
        max-width: ${maxWidth}px;
      `}>
      {children}
    </Box>
  );
}

Container.defaultProps = {
  maxWidth: 1280,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number.isRequired,
};

export default Container;
