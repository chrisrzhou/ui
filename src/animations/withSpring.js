import {Keyframes, animated} from 'react-spring';

import React from 'react';

export default function withSpring(animations = [], loop = false) {
  return function(WrappedComponent) {
    if (animations.length === 0) {
      return WrappedComponent;
    }

    const Spring = Keyframes.Spring(async next => {
      // run animations at least once
      do {
        for (const animation of animations) {
          await next(animation);
        }
      } while (loop);
    });

    return function AnimatedComponent(props) {
      return (
        <Spring native reset={loop}>
          {animatedStyle => (
            <animated.div style={animatedStyle}>
              <WrappedComponent animatedStyle={animatedStyle} {...props} />
            </animated.div>
          )}
        </Spring>
      );
    };
  };
}
