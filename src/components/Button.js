import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import colors from './../colors';

function Button({active, disabled, label, onClick}) {
  return (
    <Box
      as="button"
      bg={active ? colors.base : colors.white}
      css={`
        border: 2px solid ${colors.base};
        cursor: pointer;
        outline: none;
        :hover {
          opacity: 0.7;
        }
        :disabled {
          cursor: not-allowed;
          opacity: 0.4;
        }
      `}
      disabled={disabled}
      onClick={onClick}
      px={3}
      py={2}>
      <Text bold variant={active ? 'inverse' : 'active'}>
        {label}
      </Text>
    </Box>
  );
}

Button.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
