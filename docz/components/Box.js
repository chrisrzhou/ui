import React from 'react';
import {Box as RebassBox} from 'rebass';
import colors from './../../src/colors';

function Box({...otherProps}) {
  return (
    <RebassBox
      bg={colors.grayLight}
      p={3}
      style={{minWidth: '100px'}}
      {...otherProps}
    />
  );
}

export default Box;
