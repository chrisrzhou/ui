import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import {getColorValue} from './../colors';
import {getSizeValue} from './../css';

function BackgroundImage({
  backgroundColor,
  borderRadius,
  children,
  height,
  image,
}) {
  return (
    <Box
      css={`
        background-color: ${backgroundColor && getColorValue(backgroundColor)};
        background-image: url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        border-radius: ${borderRadius};
        height: ${getSizeValue(height)};
      `}>
      {children}
    </Box>
  );
}

const numberOrString = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

BackgroundImage.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: numberOrString,
  children: PropTypes.node,
  height: numberOrString,
  image: PropTypes.string,
};

export default BackgroundImage;
