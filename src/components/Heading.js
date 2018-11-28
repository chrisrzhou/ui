import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'rebass';
import {getTypographyElementStyle} from './../typography';

function Heading({level, children}) {
  const typographyStyle = getTypographyElementStyle(`h${level}`);
  return (
    <Text as={`h${level}`} css={typographyStyle}>
      {children}
    </Text>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

export default Heading;
