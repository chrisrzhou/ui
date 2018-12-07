import {Box, Flex} from 'rebass';

import Logo from './Logo';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import {withSpring} from './../animations';

const AnimatedLogo = withSpring(
  [
    {
      from: {transform: 'scaleX(1)'},
      transform: 'scaleX(-1)',
    },
    {delay: 300},
    {
      from: {transform: 'scaleX(-1)'},
      transform: 'scaleX(1)',
    },
  ],
  true,
)(Logo);

function Spinner({message}) {
  return (
    <Flex alignItems="center" flexDirection="column">
      <AnimatedLogo disableLink showText={false} />
      {message && (
        <Box>
          <Text fontSize="medium" variant="light">
            {message}
          </Text>
        </Box>
      )}
    </Flex>
  );
}

Spinner.propTypes = {
  message: PropTypes.string,
};

export default Spinner;
