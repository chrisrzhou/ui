import {Box, Flex} from 'rebass';

import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import {clickCSS} from './../css';
import colors from './../colors';

function Button({active, children, disabled, label, onClick}) {
  return (
    <Box
      as="button"
      bg={active ? colors.base : colors.white}
      css={`
        border: 2px solid ${colors.base};
        ${clickCSS}
        outline: none;
      `}
      disabled={disabled}
      onClick={onClick}
      px={3}
      py={2}>
      <Flex alignItems="center">
        {children}
        <Text bold variant={active ? 'inverse' : 'active'}>
          {label}
        </Text>
      </Flex>
    </Box>
  );
}

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
