import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'rebass';

function Heading({level, children}) {
  return (
    <Text as={`h${level}`} fontFamily="system-ui, sans-serif">
      {children}
    </Text>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
