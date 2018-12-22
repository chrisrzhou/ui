import colors, {getColorValue} from './../colors';

import PropTypes from 'prop-types';
import React from 'react';
import {Text as RebassText} from 'rebass';
import Tooltip from './Tooltip';
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
  xs: '10px',
  s: '12px',
  m: '16px',
  l: '32px',
};

function Text({
  bold,
  centered,
  children,
  color,
  size,
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
        color: color ? getColorValue(color) : fontColors[variant],
        fontWeight: bold ? 'bold' : undefined,
        fontSize: FONT_SIZES[size],
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
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']),
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
