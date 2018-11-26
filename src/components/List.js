import {Box, Flex} from 'rebass';
import React from 'react';
import PropTypes from 'prop-types';

function List({children, spacing}) {
  return (
    <Flex alignItems="center" flexWrap="wrap" mx={-spacing}>
      {React.Children.map(children, child => (
        <Box m={spacing}>{child}</Box>
      ))}
    </Flex>
  );
}

List.propTypes = {
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
};

List.defaultProps = {
  spacing: 1,
};

export default List;
