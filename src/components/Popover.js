import React, {useState} from 'react';

import {Box} from 'rebass';
import Card from './Card';
import PropTypes from 'prop-types';
import {clickCSS} from './../css';
import colors from './../colors';
import {useClickOutside} from './../hooks';

const POSITION_CSS = {
  bottom: {
    arrow: `
      box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.1);
      left: 50%;
      top: 4px;
      transform: translateX(-50%) rotate(45deg)
    `,
    container: `
      bottom: 0;
      left: 50%;
      padding-top: 8px;
      transform: translateX(-50%) translateY(100%);
    `,
  },
  left: {
    arrow: `
      right: 4px;
      box-shadow: 2px -2px 4px rgba(0, 0, 0, 0.1);
      top: 50%;
      transform: translateY(-50%) rotate(45deg)
    `,
    container: `
      left: 0;
      padding-right: 8px;
      top: 50%;
      transform: translateX(-100%) translateY(-50%);
    `,
  },
  right: {
    arrow: `
      left: 4px;
      box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
      top: 50%;
      transform: translateY(-50%) rotate(45deg)
    `,
    container: `
      right: 0;
      padding-left: 8px;
      top: 50%;
      transform: translateX(100%) translateY(-50%);
    `,
  },
  top: {
    arrow: `
      bottom: 4px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      left: 50%;
      transform: translateX(-50%) rotate(45deg)
    `,
    container: `
      left: 50%;
      padding-bottom: 8px;
      top: 0;
      transform: translateX(-50%) translateY(-100%);
    `,
  },
};

function Popover({
  background,
  children,
  content,
  position,
  trigger,
  width,
  zIndex,
}) {
  const [show, toggleShow] = useState(false);
  const ref = useClickOutside(handleClickOutside);

  const clickTrigger = trigger === 'click';

  function handleMouseEnter() {
    !clickTrigger && toggleShow(true);
  }

  function handleMouseLeave() {
    !clickTrigger && toggleShow(false);
  }

  function handleClick() {
    clickTrigger && toggleShow(!show);
  }

  function handleClickOutside() {
    clickTrigger && toggleShow(false);
  }

  return (
    <Box
      css={`
        position: relative;
        ${clickTrigger && clickCSS};
      `}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}>
      {show && (
        <Box
          css={`
            position: absolute;
            width: ${width};
            z-index: ${zIndex};
            ${POSITION_CSS[position].container}
          `}>
          <Card bg={background} px={2} py={1}>
            {content}
            <Box
              bg={background}
              css={`
                position: absolute;
                height: 8px;
                width: 8px;
                ${POSITION_CSS[position].arrow}
              `}
            />
          </Card>
        </Box>
      )}
      {children}
    </Box>
  );
}

Popover.defaultProps = {
  background: colors.white,
  position: 'top',
  trigger: 'hover',
  width: 'fit-content',
  zIndex: 1,
};

Popover.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
  trigger: PropTypes.oneOf(['hover', 'click']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.number,
};

export default Popover;
