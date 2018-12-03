import colors, {getColorValue} from './../colors';

import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import {clickCSS} from './../css';
import iconography from './../iconography';

function Icon({active, color, icon, size, onClick, ...otherProps}) {
  return (
    <Box
      {...otherProps}
      css={`
        cursor: ${onClick ? 'pointer' : undefined};
        display: inline-flex;
        svg {
          ${onClick ? clickCSS : ''};
          path {
            fill: ${active ? colors.base : getColorValue(color)};
          }
          height: ${size}px;
          width: ${size}px;
        }
      `}
      dangerouslySetInnerHTML={{__html: iconography[icon]}}
      onClick={onClick}
    />
  );
}

Icon.defaultProps = {
  color: colors.black,
  size: 20,
};

Icon.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Icon;
