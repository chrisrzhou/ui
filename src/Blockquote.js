import React from 'react';
import {Text} from 'rebass';

import colors from './colors';

function Blockquote({children}) {
  return (
    <Text
      as="blockquote"
      color={colors.text}
      bg={colors.grayWhite}
      css={`
        :before {
          color: ${colors.gray};
          content: open-quote;
          font-size: 4rem;
          line-height: 0.1em;
          margin-right: 8px;
          vertical-align: -0.4em;
        }
      `}
      p={1}>
      {children}
    </Text>
  );
}

export default Blockquote;
