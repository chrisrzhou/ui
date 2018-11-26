import PropTypes from 'prop-types';
import React from 'react';
import {Link as RebassLink} from 'rebass';
import colors from './../colors';

function Link({children, disableTextDecoration, href, target}) {
  return (
    <RebassLink
      css={`
        color: ${colors.gray};
        cursor: pointer;
        display: inline-block;
        text-decoration: ${disableTextDecoration ? 'none' : undefined};
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

Link.defaultProps = {
  disableTextDecoration: false,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  disableTextDecoration: PropTypes.bool.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Link;
