import Heading from './Heading';
import PropTypes from 'prop-types';
import React from 'react';
import {Card as RebassCard} from 'rebass';
import {boxShadowStyle} from './../css';

function Card({children, title, ...otherProps}) {
  const Title = title && <Heading level={2}>{title}</Heading>;
  return (
    <RebassCard
      {...otherProps}
      borderRadius={8}
      boxShadow={boxShadowStyle}
      p={4}>
      {Title}
      {children}
    </RebassCard>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Card;
