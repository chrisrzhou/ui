import {Flex} from 'rebass';
import Link from './Link';
import LogoSVG from './../assets/logo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';

function Logo({disableLink, showText, size}) {
  const fontSize = `${size * 0.4}px`;
  const logo = (
    <Flex alignItems="center">
      <LogoSVG
        style={{
          height: size,
          marginRight: showText && size / 10,
          width: size,
        }}
      />
      {showText && (
        <>
          <Text fontSize={fontSize} variant="active">
            chris
          </Text>
          <Text fontSize={fontSize} variant="light">
            r
          </Text>
          <Text fontSize={fontSize} variant="active">
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
  size: 40,
};

Logo.propTypes = {
  disableLink: PropTypes.bool,
  showText: PropTypes.bool,
  size: PropTypes.number,
};

export default Logo;
