import {Box, Flex} from 'rebass';

import ClipboardBox from './ClipboardBox';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import colors from './../colors';

function getLuma(color) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (color.includes('rgba')) {
    const rgbaColor = color
      .replace('rgba(', '')
      .replace(')', '')
      .split(',');
    r = parseInt(rgbaColor[0], 10);
    g = parseInt(rgbaColor[1], 10);
    b = parseInt(rgbaColor[2], 10);
  } else if (color[0] === '#') {
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);
  }
  return [0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255;
}

/* color can be of the following valid formats:
 * - valid color key: 'base', 'gray', 'grayWhite'
 * - valid hex or rgba color: '#aabb11', 'rgba(0, 0, 0, 0.3)'
 * - valid palette color: 'gray1', 'green3', 'red9'
 */
function getColorHex(color) {
  const paletteColorIndex = color.length - 1;
  const paletteColor = colors[color.slice(0, paletteColorIndex)];
  if (colors[color]) {
    return colors[color];
  } else if (paletteColor) {
    return paletteColor[color[paletteColorIndex]];
  } else {
    return color;
  }
}

function ColorBox({color, label, width}) {
  const colorHex = getColorHex(color);
  return (
    <ClipboardBox value={colorHex}>
      <Box bg={colorHex} m={1} p={2} width={width}>
        <Text
          fontSize="10px"
          variant={getLuma(colorHex) > 0.5 ? 'base' : 'inverse'}>
          <Flex>
            <b>{label}</b>
          </Flex>
          <Flex>{colorHex}</Flex>
        </Text>
      </Box>
    </ClipboardBox>
  );
}

ColorBox.defaultProps = {
  width: 80,
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ColorBox;
