import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import {getSizeValue} from './../css';

function Position({
  bottom,
  children,
  left,
  position,
  right,
  top,
  zIndex,
  css,
  ...otherProps
}) {
  return (
    <Box
      css={`
        ${css};
        position: ${position};
        bottom: ${getSizeValue(bottom)};
        left: ${getSizeValue(left)};
        right: ${getSizeValue(right)};
        top: ${getSizeValue(top)};
        z-index: ${zIndex};
      `}
      {...otherProps}>
      {children}
    </Box>
  );
}

const numberOrString = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

Position.defaultProps = {
  position: 'fixed',
};

Position.propTypes = {
  bottom: numberOrString,
  children: PropTypes.node,
  left: numberOrString,
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative']).isRequired,
  right: numberOrString,
  top: numberOrString,
  zIndex: PropTypes.number,
};

export default Position;
