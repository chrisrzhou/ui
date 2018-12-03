import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';

function Position({
  bottom,
  children,
  left,
  position,
  right,
  top,
  zIndex,
  ...otherProps
}) {
  return (
    <Box
      {...otherProps}
      css={`
        position: ${position};
        bottom: ${bottom};
        left: ${left};
        right: ${right};
        top: ${top};
        z-index: ${zIndex};
      `}>
      {children}
    </Box>
  );
}

const numberOrArray = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

Position.defaultProps = {
  position: 'absolute',
};

Position.propTypes = {
  bottom: numberOrArray,
  children: PropTypes.node,
  left: numberOrArray,
  position: PropTypes.oneOf(['absolute', 'relative']).isRequired,
  right: numberOrArray,
  top: numberOrArray,
  zIndex: PropTypes.number,
};

export default Position;
