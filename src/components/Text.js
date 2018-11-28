import PropTypes from 'prop-types';
import React from 'react';
import {Text as RebassText} from 'rebass';
import colors from './../colors';
import {getTypographyElementStyle} from './../typography';

const fontColors = {
  active: colors.base,
  base: colors.text,
  code: colors.base,
  inverse: colors.grayWhite,
  light: colors.gray,
  placeholder: colors.grayLight,
};

function Text({bold, centered, children, fontSize, variant}) {
  const isCode = variant === 'code';
  const typographyStyle = getTypographyElementStyle(isCode ? 'code' : 'body');
  return (
    <RebassText
      color={fontColors[variant]}
      css={{
        ...typographyStyle,
        display: 'inline-block',
      }}
      fontSize={fontSize}
      fontWeight={bold ? 'bold' : undefined}
      textAlign={centered ? 'center' : undefined}>
      {children}
    </RebassText>
  );
}

Text.defaultProps = {
  variant: 'base',
};

Text.propTypes = {
  bold: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf([
    'active',
    'base',
    'code',
    'inverse',
    'light',
    'placeholder',
  ]).isRequired,
};

export default Text;
