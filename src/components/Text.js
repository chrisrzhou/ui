import PropTypes from 'prop-types';
import React from 'react';
import {Text as RebassText} from 'rebass';
import colors from './../colors';
import typography from './../typography';

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
  children: PropTypes.node.isRequired,
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
