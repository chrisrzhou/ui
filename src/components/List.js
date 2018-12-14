import {Box, Flex} from 'rebass';

import PropTypes from 'prop-types';
import React from 'react';

function List({alignItems, children, direction, spacing, wrap}) {
  const isVertical = direction === 'vertical';
  return (
    <Flex
      alignItems={alignItems}
      flexDirection={isVertical ? 'column' : 'row'}
      flexWrap={wrap ? 'wrap' : undefined}
      m={-spacing}>
      {React.Children.map(children, child => (
        <Box m={spacing}>{child}</Box>
      ))}
    </Flex>
  );
}

List.defaultProps = {
  alignItems: 'flex-start',
  direction: 'horizontal',
  spacing: 1,
  wrap: false,
};

List.propTypes = {
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
  wrap: PropTypes.bool.isRequired,
};

export default List;
