import {Box} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import colors from './../colors';
import {hoverFadeCSS} from './../css';
import iconography from './../iconography';

function Icon({active, icon, size, onClick}) {
  return (
    <Box
      css={`
        cursor: ${onClick ? 'pointer' : undefined};
        svg {
          ${hoverFadeCSS};
          path {
            fill: ${active ? colors.base : undefined};
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
  size: 20,
};

Icon.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Icon;
