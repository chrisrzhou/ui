import styled, {css, keyframes} from 'styled-components';

import {Flex} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import colors from './../colors';

const animationName = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const animation = ({animated}) => {
  return animated
    ? css`
        ${animationName} 1s linear infinite forwards;
      `
    : '';
};

const ShimmerBox = styled.div`
  animation: ${animation} 1s linear infinite forwards;
  background: ${colors.gray[0]};
  background-image: linear-gradient(
    to right,
    ${colors.gray[0]} 0%,
    ${colors.gray[1]} 20%,
    ${colors.gray[0]} 40%,
    ${colors.gray[0]} 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100px;
  border-radius: ${props => (props.rounded ? '50%' : undefined)};
  display: inline-block;
  flex-shrink: 0;
  margin-bottom: 8px;
  height: ${({height}) => {
    return `${height}${Number.isInteger(height) ? 'px' : ''}`;
  }};
  width: ${({width}) => {
    return `${width}${Number.isInteger(width) ? 'px' : ''}`;
  }};
  position: relative;
`;

function Shimmer({animated, avatar, rows}) {
  const Rows = rows.map((row, i) => {
    return (
      <ShimmerBox
        animated={animated}
        height={row.height}
        width={row.width}
        key={i}
      />
    );
  });
  const Avatar = avatar && (
    <ShimmerBox
      animated={animated}
      height={avatar.height}
      rounded={avatar.rounded}
      width={avatar.height}
    />
  );
  return (
    <Flex
      alignItems="flex-start"
      css={`
        width: 100%;
      `}>
      {Avatar}
      {Rows.length > 0 && (
        <Flex
          css={`
            width: 100%;
          `}
          flexDirection="column"
          ml={3}>
          {Rows}
        </Flex>
      )}
    </Flex>
  );
}

const defaultRow = {
  height: 16,
  width: '100%',
  rounded: false,
};

Shimmer.defaultProps = {
  animated: true,
  rows: [defaultRow, defaultRow, defaultRow, defaultRow],
};

const numberOrStringType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const boxType = PropTypes.shape({
  height: numberOrStringType,
  rounded: PropTypes.bool,
  width: numberOrStringType,
});

Shimmer.propTypes = {
  animated: PropTypes.bool.isRequired,
  avatar: boxType,
  rows: PropTypes.arrayOf(boxType).isRequired,
};

export default Shimmer;
