import {clickCSS, hoverCSS} from './../css';
import {getColorValue, getTextVariantFromColor} from './../colors';

import {Flex} from 'rebass';
import Icon from './Icon';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';

function Tag({label, color, onClick, onRemove}) {
  const colorValue = getColorValue(color);
  const textVariant = getTextVariantFromColor(colorValue);
  const removeIcon = onRemove && (
    <Icon
      color={textVariant === 'base' ? '#000' : '#fff'}
      ml={1}
      icon="x"
      onClick={onRemove}
      size={12}
    />
  );
  return (
    <Flex
      alignItems="center"
      bg={colorValue}
      css={`
        border-radius: 4px;
        ${onClick ? clickCSS : hoverCSS}
      `}
      px={2}
      py={1}
      onClick={onClick}>
      <Text fontSize="10px" variant={textVariant}>
        {label}
      </Text>
      {removeIcon}
    </Flex>
  );
}

Tag.defaultProps = {
  color: 'base',
};

Tag.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Tag;
