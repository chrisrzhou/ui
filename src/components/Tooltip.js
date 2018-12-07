import React, {useState} from 'react';

import {Box} from 'rebass';
import PropTypes from 'prop-types';
import colors from './../colors';
import {getSizeValue} from './../css';
import useClickOutside from './../hooks/useClickOutside';

const TOOLTIP_ARROW_CSS = {
  top: `
    top: 0;
    left: 50%;
    margin-top: -8px;
  `,
  right: `
    top: 50%;
    left: 100%;
    margin-left: 2px;
    transform: translateY(-50%) rotate(90deg);
  `,
  bottom: `
    top: 100%;
    left: 50%;
    margin-top: 6px;
    transform: translateY(-50%) rotate(180deg);
  `,
  left: `
    left: 0%;
    top: 50%;
    margin-left: -10px;
    transform: translateY(-50%) rotate(-90deg);
  `,
};

const TOOLTIP_CONTAINER_CSS = {
  top: `
    margin-top: -8px;
    top: 0;
    left: 50%;
  `,
  right: `
    left: 100%;
    top: 50%;
    margin-left: 8px;
    transform: translateX(0%) translateY(-50%);
  `,
  bottom: `
    top: 100%;
    left: 50%;
    margin-top: 8px;
    transform: translateX(-50%) translateY(0%);
  `,
  left: `
    left: 0%;
    top: 50%;
    margin-left: -8px;
    transform: translateX(-100%) translateY(-50%);
  `,
};

function Tooltip({children, content, maxWidth, position, trigger}) {
  const [show, toggleShow] = useState(false);
  const ref = useClickOutside(handleClickOutside);

  const clickTrigger = trigger === 'click';

  function handleClick() {
    clickTrigger && toggleShow(!show);
  }

  function handleClickOutside() {
    clickTrigger && toggleShow(false);
  }

  const opacity = clickTrigger ? (show ? 1 : 0) : 0;
  const hoverOpacity = clickTrigger ? undefined : 1;

  return (
    <Box
      css={`
        cursor: ${clickTrigger ? 'pointer' : undefined};
        position: relative;
        ::before {
          border-color: ${colors.black} transparent transparent transparent;
          border-style: solid;
          border-width: 4px 4px 0 4px;
          content: '';
          opacity: ${opacity};
          position: absolute;
          transform: translateX(-50%);
          z-index: 99;
          ${TOOLTIP_ARROW_CSS[position]};
        }
        ::after {
          background: ${colors.black};
          border-radius: 4px;
          color: ${colors.white};
          content: attr(data-tooltip-content);
          font-size: 10px;
          opacity: ${opacity};
          padding: 4px 8px;
          pointer-events: none;
          position: absolute;
          transform: translateX(-50%) translateY(-100%);
          max-width: ${getSizeValue(maxWidth)};
          width: max-content;
          z-index: 100;
          ${TOOLTIP_CONTAINER_CSS[position]};
        }
        :hover::after,
        :hover::before {
          opacity: ${hoverOpacity};
        }
      `}
      data-tooltip-content={content}
      onClick={handleClick}
      position="relative"
      ref={ref}>
      {children}
    </Box>
  );
}

Tooltip.defaultProps = {
  maxWidth: 300,
  position: 'top',
  trigger: 'hover',
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
  trigger: PropTypes.oneOf(['hover', 'click']),
};

export default Tooltip;
