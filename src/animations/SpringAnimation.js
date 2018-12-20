import {Keyframes, animated, config} from 'react-spring';

import PropTypes from 'prop-types';
import React from 'react';

function SpringAnimation({animations, configType, children, loop}) {
  if (animations.length === 0) {
    return children;
  }
  const Spring = Keyframes.Spring(async next => {
    // run animations at least once
    do {
      for (const animation of animations) {
        await next(animation);
      }
    } while (loop);
  });
  return (
    <Spring config={config[configType]} native reset={loop}>
      {animatedStyle => (
        <animated.div style={animatedStyle}>{children}</animated.div>
      )}
    </Spring>
  );
}

SpringAnimation.defaultProps = {
  animations: [],
  configType: 'default',
};

SpringAnimation.propTypes = {
  animations: PropTypes.arrayOf(PropTypes.object),
  configType: PropTypes.oneOf([
    'default',
    'gentle',
    'wobbly',
    'stiff',
    'slow',
    'molasses',
  ]),
  children: PropTypes.node,
  loop: PropTypes.bool,
};

export default SpringAnimation;
