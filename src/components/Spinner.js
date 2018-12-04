import {Box, Flex} from 'rebass';

import Logo from './Logo';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';

function Spinner({message}) {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Logo disableLink showText={false} />
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
