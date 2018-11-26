import {Box, Flex} from 'rebass';
import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import colors from './../colors';
import ClipboardBox from './ClipboardBox';

function getLuma(hex) {
  const hexValue = hex.replace(/#/, '');
  const r = parseInt(hexValue.substr(0, 2), 16);
  const g = parseInt(hexValue.substr(2, 2), 16);
  const b = parseInt(hexValue.substr(4, 2), 16);
  return [0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255;
}

function getColorHex(color) {
  if (colors[color]) {
    return colors[color];
  } else if (colors[color.slice(0, color.length - 1)]) {
    return colors[color.slice(0, color.length - 1)][color[color.length - 1]];
  } else {
    return colors[color] || color;
  }
}

function ColorBox({color, label, width}) {
  const colorHex = getColorHex(color);
  const variant = getLuma(colorHex) > 0.5 ? 'base' : 'inverse';
  const fontSize = '12px';
  return (
    <ClipboardBox value={colorHex}>
      <Box bg={colorHex} fontSize="12px" m={1} p={2} width={width}>
        <Flex>
          <Text fontSize={fontSize} variant={variant}>
            <b>{label}</b>
          </Text>
        </Flex>
        <Flex>
          <Text fontSize={fontSize} variant={variant}>
            {colorHex}
          </Text>
        </Flex>
      </Box>
    </ClipboardBox>
  );
}

ColorBox.defaultProps = {
  width: 100,
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ColorBox;
