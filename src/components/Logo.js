import {Flex} from 'rebass';
import Link from './Link';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import colors from './../colors';

const {base: baseColor, gray} = colors;

function Logo({disableLink, showText, size}) {
  const fontSize = `${size * 0.4}px`;
  const logo = (
    <Flex alignItems="center">
      <svg
        style={{
          height: size,
          marginRight: showText && size / 10,
          width: size,
        }}
        viewBox="0 0 250 250">
        <defs />
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect x="-5.68434189e-14" y="0" width="250" height="250" />
          <rect
            fill={gray}
            transform="translate(123.516504, 124.871843) scale(1, -1) rotate(45.000000) translate(-123.516504, -124.871843) "
            x="36.2911076"
            y="112.371843"
            width="174.450793"
            height="25"
          />
          <rect
            fill={baseColor}
            transform="translate(44.194174, 98.194174) scale(1, -1) rotate(45.000000) translate(-44.194174, -98.194174) "
            x="-5.80582618"
            y="85.6941738"
            width="100"
            height="25"
          />
          <rect
            fill={baseColor}
            transform="translate(44.194174, 151.194174) rotate(45.000000) translate(-44.194174, -151.194174) "
            x="-5.80582618"
            y="138.694174"
            width="100"
            height="25"
          />
          <rect
            fill={baseColor}
            transform="translate(203.194174, 98.194174) scale(-1, -1) rotate(45.000000) translate(-203.194174, -98.194174) "
            x="153.194174"
            y="85.6941738"
            width="100"
            height="25"
          />
          <rect
            fill={baseColor}
            transform="translate(203.194174, 151.194174) scale(-1, 1) rotate(45.000000) translate(-203.194174, -151.194174) "
            x="153.194174"
            y="138.694174"
            width="100"
            height="25"
          />
        </g>
      </svg>
      {showText && (
        <>
          <Text fontSize={fontSize} variant="highlight">
            chris
          </Text>
          <Text fontSize={fontSize} variant="light">
            r
          </Text>
          <Text fontSize={fontSize} variant="highlight">
            zhou
          </Text>
        </>
      )}
    </Flex>
  );
  return disableLink ? (
    logo
  ) : (
    <Link disableTextDecoration href="https://chrisrzhou.io">
      {logo}
    </Link>
  );
}

Logo.defaultProps = {
  disableLink: false,
  showText: true,
  size: 40,
};

Logo.propTypes = {
  disableLink: PropTypes.bool.isRequired,
  showText: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

export default Logo;
