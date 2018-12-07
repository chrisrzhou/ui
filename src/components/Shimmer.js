import styled, {css, keyframes} from 'styled-components';

import {Flex} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import {getSizeValue} from './../css';

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

const SHIMMER_LIGHT = '#f6f7f9';
const SHIMMER_DARK = '#e9ebee';

const ShimmerBox = styled.div`
  animation: ${animation} 1s linear infinite forwards;
  background: ${SHIMMER_LIGHT};
  background-image: linear-gradient(
    to right,
    ${SHIMMER_LIGHT} 0%,
    ${SHIMMER_DARK} 20%,
    ${SHIMMER_LIGHT} 40%,
    ${SHIMMER_LIGHT} 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100px;
  border-radius: ${props => (props.rounded ? '50%' : undefined)};
  display: inline-block;
  flex-shrink: 0;
  margin-bottom: 8px;
  height: ${({height}) => {
    return getSizeValue(height);
  }};
  width: ${({width}) => {
    return getSizeValue(width);
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
