import {Flex} from 'rebass';
import Link from './Link';
import LogoSVG from './../assets/logo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';

const SIZES = {
  s: 16,
  m: 32,
  l: 40,
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
          <Text size={size} variant="active">
            chris
          </Text>
          <Text size={size} variant="light">
            r
          </Text>
          <Text size={size} variant="active">
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
  size: 'm',
};

Logo.propTypes = {
  disableLink: PropTypes.bool,
  showText: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default Logo;
