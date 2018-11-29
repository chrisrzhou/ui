import PropTypes from 'prop-types';
import React from 'react';
import {Image as RebassImage} from 'rebass';

function Image({alt, height, rounded, width, src}) {
  return (
    <RebassImage
      alt={alt}
      borderRadius={rounded ? '50%' : undefined}
      height={height}
      width={width}
      src={src}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rounded: PropTypes.bool,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default Image;
