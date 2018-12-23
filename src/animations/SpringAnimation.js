import {Keyframes, animated} from 'react-spring';
import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

function SpringAnimation({animations, children, hide, loop}) {
  const [iteration, setIteration] = useState(0);

  useEffect(() => setIteration(iteration + 1), [hide]);

  // return child nodes if nothing to animate
  if (animations.length === 0) {
    return children;
  }

  // if hidden by default, return nothing
  if (hide && iteration === 1) {
    return null;
  }

  const Spring = Keyframes.Spring(async next => {
    // run animations at least once
    do {
      for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        if (hide) {
          await next({...animation, reverse: true});
        } else {
          await next(animation);
        }
      }
    } while (loop);
  });

  return (
    <Spring native reset={loop}>
      {animatedStyle => (
        <animated.div style={animatedStyle}>{children}</animated.div>
      )}
    </Spring>
  );
}

SpringAnimation.defaultProps = {
  animations: [],
  hide: false,
};

SpringAnimation.propTypes = {
  animations: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  hide: PropTypes.bool.isRequired,
  leaveAnimation: PropTypes.object,
  loop: PropTypes.bool,
};

export default SpringAnimation;
