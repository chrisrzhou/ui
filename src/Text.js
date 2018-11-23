import React from 'react';
import PropTypes from 'prop-types';
import {Text as RebassText} from 'rebass';

import colors from './colors';

const fontColors = {
  primary: colors.black,
  secondary: colors.secondary,
  highlight: colors.base,
  disabled: colors.gray[2],
};

function Text({children, variant}) {
  return (
    <RebassText color={fontColors[variant]} fontFamily="system-ui, sans-serif">
      {children}
    </RebassText>
  );
}

Text.defaultProps = {
  variant: 'primary',
};

Text.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'highlight']),
};

export default Text;
