import {Keyframes, animated} from 'react-spring';

import PropTypes from 'prop-types';
import React from 'react';

function createSpring(animations, loop) {
  return Keyframes.Spring(async next => {
    // run animations at least once
    do {
      for (const animation of animations) {
        await next(animation);
      }
    } while (loop);
  });
}

function SpringAnimator({animations, children, config, duration, loop}) {
  const Spring = createSpring(animations, loop);
  return (
    <Spring native reset={loop} config={{...config, duration}}>
      {style => <animated.div style={style}>{children}</animated.div>}
    </Spring>
  );
}

SpringAnimator.defaultProps = {
  animations: [],
  loop: false,
};

SpringAnimator.propTypes = {
  animations: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.objectOf(PropTypes.any),
      from: PropTypes.objectOf(PropTypes.any),
    }),
  ).isRequired,
  children: PropTypes.node,
  config: PropTypes.objectOf(PropTypes.any),
  duration: PropTypes.number,
  loop: PropTypes.bool.isRequired,
};

export default SpringAnimator;
