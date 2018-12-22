import {Box, Flex} from 'rebass';

import Logo from './Logo';
import PropTypes from 'prop-types';
import React from 'react';
import SpringAnimation from './../animations/SpringAnimation';
import Text from './Text';

function Spinner({message}) {
  return (
    <Flex alignItems="center" flexDirection="column">
      <SpringAnimation
        animations={[
          {
            from: {
              transform: 'scaleX(1)',
            },
            transform: 'scaleX(-1)',
          },
          {delay: 300},
          {
            from: {
              transform: 'scaleX(-1)',
            },
            transform: 'scaleX(1)',
          },
        ]}
        loop>
        <Logo disableLink showText={false} />
      </SpringAnimation>
      {message && (
        <Box>
          <Text variant="light">{message}</Text>
        </Box>
      )}
    </Flex>
  );
}

Spinner.propTypes = {
  message: PropTypes.string,
};

export default Spinner;
