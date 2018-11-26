import {Box, Flex} from 'rebass';
import React, {useState} from 'react';

import PropTypes from 'prop-types';
import Text from './Text';

function ClipboardBox({children, value}) {
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

  const message = copied ? 'Copied!' : 'Click to copy';
  return (
    <Box
      css={`
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: all 0.125s ease;
        &:hover {
          box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08),
            0 16px 16px 0 rgba(0, 0, 0, 0.08);
          .colorpill-copy {
            opacity: 1;
          }
        }
        &:active {
          transform: scale(0.9);
        }
      `}
      onClick={copyToClipboard}
      onMouseLeave={setCopied.bind(null, false)}>
      {children}
      <Flex
        alignItems="center"
        bg="rgba(0, 0, 0, 0.8)"
        className="colorpill-copy"
        css={`
          opacity: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
        `}
        justifyContent="center">
        <Text fontSize="10px" variant="inverse">
          {message}
        </Text>
      </Flex>
    </Box>
  );
}

ClipboardBox.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default ClipboardBox;
