import PropTypes from 'prop-types';
import React from 'react';
import {Text as RebassText} from 'rebass';
import colors from './../colors';
import {getTypographyElementStyle} from './../typography';
import {textTruncateCSS} from './../css';

const fontColors = {
  active: colors.base,
  base: colors.text,
  code: colors.base,
  inverse: colors.grayWhite,
  light: colors.gray,
  placeholder: colors.grayLight,
};

const FONT_SIZES = {
  small: '10px',
  medium: '16px',
  large: '32px',
};

function Text({bold, centered, children, fontSize, truncate, variant}) {
  const isCode = variant === 'code';
  const typographyStyle = getTypographyElementStyle(isCode ? 'code' : 'body');
  return (
    <RebassText
      css={`
        ${truncate ? textTruncateCSS : ''}
      `}
      style={{
        ...typographyStyle,
        color: fontColors[variant],
        fontWeight: bold ? 'bold' : undefined,
        fontSize: FONT_SIZES[fontSize],
        textAlign: centered ? 'center' : undefined,
      }}>
      {children}
    </RebassText>
  );
}

Text.defaultProps = {
  truncate: false,
  variant: 'base',
};

Text.propTypes = {
  bold: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  truncate: PropTypes.bool,
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
