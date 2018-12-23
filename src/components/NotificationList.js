import Notification, {OFFSETS} from './Notification';

import List from './List';
import Position from './Position';
import PropTypes from 'prop-types';
import React from 'react';

function NotificationList({
  duration,
  maxWidth,
  notifications,
  onClose,
  placement,
  zIndex,
}) {
  const {top, right, bottom, left} = OFFSETS[placement];
  return (
    <Position
      bottom={bottom}
      left={left}
      position="absolute"
      right={right}
      top={top}>
      <List alignItems="stretch" direction="vertical">
        {notifications.map(({content, status, title}, i) => {
          return (
            <Notification
              key={i}
              content={content}
              duration={duration}
              maxWidth={maxWidth}
              onClose={onClose}
              placement={placement}
              positionStatic
              status={status}
              title={title}
              zIndex={zIndex}
            />
          );
        })}
      </List>
    </Position>
  );
}

NotificationList.defaultProps = {
  maxWidth: 400,
  placement: 'topRight',
  zIndex: 1,
};

NotificationList.propTypes = {
  duration: PropTypes.number,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      title: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['success', 'info', 'warn', 'error']),
    }),
  ).isRequired,
  onClose: PropTypes.func,
  placement: PropTypes.oneOf([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
  ]).isRequired,
  zIndex: PropTypes.number,
};

export default NotificationList;
