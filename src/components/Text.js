import PropTypes from 'prop-types';
import React from 'react';
import {Text as RebassText} from 'rebass';
import Tooltip from './Tooltip';
import colors from './../colors';
import {getTypographyElementStyle} from './../typography';
import {textTruncateCSS} from './../css';

const fontColors = {
  active: colors.base,
  base: colors.text,
  code: colors.base,
  inverse: colors.grayWhite,
  light: colors.gray,
  negative: colors.negative,
  placeholder: colors.grayLight,
  positive: colors.positive,
};

const FONT_SIZES = {
  small: '10px',
  medium: '16px',
  large: '32px',
};

function Text({
  bold,
  centered,
  children,
  fontSize,
  truncate,
  typographyStyle,
  variant,
  ...otherProps
}) {
  const TextComponent = (
    <RebassText
      css={`
        ${truncate ? textTruncateCSS : ''}
      `}
      style={{
        ...(variant === 'code'
          ? getTypographyElementStyle('code')
          : typographyStyle),
        color: fontColors[variant],
        fontWeight: bold ? 'bold' : undefined,
        fontSize: FONT_SIZES[fontSize],
        textAlign: centered ? 'center' : undefined,
      }}
      {...otherProps}>
      {children}
    </RebassText>
  );
  return truncate && typeof children === 'string' ? (
    <Tooltip content={children}>{TextComponent}</Tooltip>
  ) : (
    TextComponent
  );
}

Text.defaultProps = {
  truncate: false,
  typographyStyle: getTypographyElementStyle('body'),
  variant: 'base',
};

Text.propTypes = {
  bold: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  truncate: PropTypes.bool,
  typographyStyle: PropTypes.object,
  variant: PropTypes.oneOf([
    'active',
    'base',
    'code',
    'inverse',
    'light',
    'negative',
    'placeholder',
    'positive',
  ]).isRequired,
};

export default Text;
