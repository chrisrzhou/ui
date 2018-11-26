import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'rebass';
import typography from './../typography';

function Heading({level, children}) {
  const {color, ...typographyStyles} = typography.toJSON()[`h${level}`];
  return (
    <Text as={`h${level}`} css={typographyStyles}>
      {children}
    </Text>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
