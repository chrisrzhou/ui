import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import {getTypographyElementStyle} from './../typography';

function Heading({children, level, variant}) {
  const typographyStyle = getTypographyElementStyle(`h${level}`);
  return (
    <Text as={`h${level}`} typographyStyle={typographyStyle} variant={variant}>
      {children}
    </Text>
  );
}

Heading.defaultProps = {
  variant: 'base',
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  variant: PropTypes.oneOf([
    'active',
    'base',
    'code',
    'inverse',
    'light',
    'negative',
    'placeholder',
    'positive',
  ]).isRequired,
};

export default Heading;
