import {Flex, Text} from 'rebass';
import React from 'react';
import PropTypes from 'prop-types';

const getFontColor = hex => {
  const hexValue = hex.replace(/#/, '');
  const r = parseInt(hexValue.substr(0, 2), 16);
  const g = parseInt(hexValue.substr(2, 2), 16);
  const b = parseInt(hexValue.substr(4, 2), 16);
  const luma = [0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255;
  return luma > 0.5 ? 'black' : 'white';
};

function ColorPill({color, label}) {
  return (
    <Text
      bg={color}
      color={getFontColor(color)}
      fontSize="12px"
      textAlign="center"
      p={2}
      width="100px">
      <Flex flexDirection="column">
        <span>
          <b>{label}</b>
        </span>
        <span>({color})</span>
      </Flex>
    </Text>
  );
}

ColorPill.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ColorPill;
