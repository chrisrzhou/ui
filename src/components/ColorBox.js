import {Box, Flex} from 'rebass';
import {getColorValue, getTextVariantFromColor} from './../colors';

import ClipboardBox from './ClipboardBox';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';

function ColorBox({color, label, width}) {
  const colorValue = getColorValue(color);
  return (
    <ClipboardBox value={colorValue}>
      <Box bg={colorValue} p={2} width={width}>
        <Text fontSize="small" variant={getTextVariantFromColor(colorValue)}>
          {label && (
            <Flex>
              <b>{label}</b>
            </Flex>
          )}
          <Flex>{colorValue}</Flex>
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
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ColorBox;
