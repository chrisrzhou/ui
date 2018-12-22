import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import {clickCSS} from './../css';
import {getColorValue} from './../colors';
import iconography from './../iconography';

const SIZES = {
  s: 14,
  m: 20,
  l: 40,
};

function Icon({active, color, icon, size, onClick, ...otherProps}) {
  return (
    <Box
      css={`
        cursor: ${onClick ? 'pointer' : undefined};
        display: inline-flex;
        svg {
          ${onClick ? clickCSS : ''};
          path {
            fill: ${active ? 'base' : getColorValue(color)};
          }
          height: ${SIZES[size]}px;
          width: ${SIZES[size]}px;
        }
      `}
      dangerouslySetInnerHTML={{__html: iconography[icon]}}
      onClick={onClick}
      {...otherProps}
    />
  );
}

Icon.defaultProps = {
  color: 'black',
  size: 'm',
};

Icon.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  onClick: PropTypes.func,
};

export default Icon;
