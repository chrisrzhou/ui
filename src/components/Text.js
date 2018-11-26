import React from 'react';
import PropTypes from 'prop-types';
import {Text as RebassText} from 'rebass';
import typography from './../typography';
import colors from './../colors';

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
  const {color, ...typographyStyles} = typography.toJSON()[
    isCode ? 'code' : 'body'
  ];
  return (
    <RebassText
      as="span"
      css={typographyStyles}
      color={fontColors[variant]}
      fontSize={fontSize}
      fontWeight={bold ? 'bold' : undefined}>
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
