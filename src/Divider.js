import {Box} from 'rebass';
import React from 'react';

import colors from './colors';

function Divider({children, value}) {
  return (
    <Box
      as="hr"
      bg={colors.grayLight}
      css={`
        border: none;
        height: 4px;
      `}
      my={5}
    />
  );
}

export default Divider;
