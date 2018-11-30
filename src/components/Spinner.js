import {Box, Flex} from 'rebass';

import Logo from './Logo';
import PropTypes from 'prop-types';
import React from 'react';
import SpringAnimator from './../animations/SpringAnimator';
import Text from './Text';

function Spinner({animated, message}) {
  const spinner = <Logo disableLink showText={false} />;
  return (
    <Flex alignItems="center">
      {animated ? (
        <SpringAnimator
          animations={[
            {to: {opacity: 1}, from: {opacity: 0}},
            {to: {opacity: 0}, from: {opacity: 1}},
          ]}
          duration={1000}
          loop>
          {spinner}
        </SpringAnimator>
      ) : (
        spinner
      )}
      {message && (
        <Box ml={1}>
          <Text fontSize="12px" variant="placeholder">
            {message}
          </Text>
        </Box>
      )}
    </Flex>
  );
}

Spinner.defaultProps = {
  animated: true,
};

Spinner.propTypes = {
  animated: PropTypes.bool,
  message: PropTypes.string,
};

export default Spinner;
