import React from 'react';
import PropTypes from 'prop-types';
import {Text as RebassText} from 'rebass';

import colors from './colors';

const fontColors = {
  base: colors.text,
  light: colors.gray,
  inverse: colors.grayWhite,
  highlight: colors.base,
  placeholder: colors.grayLight,
  code: colors.gray,
};

function Text({bold, children, fontSize, variant}) {
  const isCode = variant === 'code';
  const bg = isCode ? colors.grayWhite : undefined;
  const fontFamily = isCode ? 'monaco, monospace' : 'system-ui, sans-serif';
  return (
    <RebassText
      as="span"
      bg={bg}
      color={fontColors[variant]}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={bold ? 'bold' : undefined}
      py={isCode && 1}
      px={isCode && 2}>
      {children}
    </RebassText>
  );
}

Text.defaultProps = {
  variant: 'base',
};

Text.propTypes = {
  bold: PropTypes.bool,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf([
    'base',
    'light',
    'placeholder',
    'highlight',
    'inverse',
    'code',
  ]),
};

export default Text;
