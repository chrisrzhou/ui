import {Box, Flex} from 'rebass';
import React, {useState} from 'react';

import PropTypes from 'prop-types';
import Text from './Text';
import {clickCSS} from './../css';
import colors from './../colors';

function ClipboardBox({children, message, value}) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    const element = document.createElement('textarea');
    element.value = value;
    element.setAttribute('readonly', '');
    element.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    setCopied(true);
  }

  return (
    <Box
      css={`
        display: inline-block;
        position: relative;
        ${clickCSS};
      `}
      onClick={copyToClipboard}
      onMouseLeave={setCopied.bind(null, false)}>
      {children}
      <Flex
        alignItems="center"
        bg={colors.blackAlpha}
        css={`
          opacity: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          :hover {
            opacity: 1;
          }
        `}
        justifyContent="center">
        <Text fontSize="10px" variant="inverse">
          {copied ? 'Copied!' : message}
        </Text>
      </Flex>
    </Box>
  );
}

ClipboardBox.defaultProps = {
  message: 'Click to copy',
};

ClipboardBox.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default ClipboardBox;
