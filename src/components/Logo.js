import {Flex} from 'rebass';
import Link from './Link';
import LogoSVG from './../assets/logo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';

const SIZES = {
  small: 16,
  medium: 32,
  large: 40,
};

function Logo({disableLink, showText, size}) {
  const logo = (
    <Flex alignItems="center">
      <LogoSVG
        style={{
          height: SIZES[size],
          marginRight: showText && SIZES[size] / 8,
          width: SIZES[size],
        }}
      />
      {showText && (
        <>
          <Text fontSize={size} variant="active">
            chris
          </Text>
          <Text fontSize={size} variant="light">
            r
          </Text>
          <Text fontSize={size} variant="active">
            zhou
          </Text>
        </>
      )}
    </Flex>
  );
  return disableLink ? (
    logo
  ) : (
    <Link disableTextDecoration href="https://chrisrzhou.io" target="_blank">
      {logo}
    </Link>
  );
}

Logo.defaultProps = {
  showText: true,
  size: 'medium',
};

Logo.propTypes = {
  disableLink: PropTypes.bool,
  showText: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Logo;
