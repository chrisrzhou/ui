import {Box, Flex} from 'rebass';

import PropTypes from 'prop-types';
import React from 'react';

function List({children, spacing, wrap}) {
  return (
    <Flex
      alignItems="center"
      flexWrap={wrap ? 'wrap' : undefined}
      mx={-spacing}>
      {React.Children.map(children, child => (
        <Box m={spacing}>{child}</Box>
      ))}
    </Flex>
  );
}

List.defaultProps = {
  wrap: false,
  spacing: 1,
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
  wrap: PropTypes.bool.isRequired,
};

export default List;
