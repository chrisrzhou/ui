import Popover from './Popover';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import colors from './../colors';

function Tooltip({children, content, position, trigger, width, zIndex}) {
  const TooltipContent = (
    <Text size="xs" variant="inverse">
      {content}
    </Text>
  );
  return (
    <Popover
      background={colors.black}
      content={TooltipContent}
      position={position}
      trigger={trigger}
      width={width}
      zIndex={zIndex}>
      {children}
    </Popover>
  );
}

Tooltip.defaultProps = {
  position: 'top',
  trigger: 'hover',
  width: 'fit-content',
  zIndex: 1,
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
  trigger: PropTypes.oneOf(['hover', 'click']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.number,
};

export default Tooltip;
