import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({value, language}) {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={language !== 'bash'}
      style={ghcolors}>
      {value}
    </SyntaxHighlighter>
  );
}

CodeBlock.propTypes = {
  language: PropTypes.oneOf(['bash', 'css', 'javascript']).isRequired,
  value: PropTypes.string.isRequired,
};

export default CodeBlock;
