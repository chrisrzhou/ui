import React from 'react';
import PropTypes from 'prop-types';
import {Link as RebassLink} from 'rebass';

import colors from './colors';

function Link({children, href, target}) {
  return (
    <RebassLink
      css={`
        color: ${colors.secondary};
        cursor: pointer;
        display: inline-block;
        :hover {
          color: ${colors.base};
          text-decoration: none;
        }
      `}
      href={href}
      target={target}>
      {children}
    </RebassLink>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Link;
