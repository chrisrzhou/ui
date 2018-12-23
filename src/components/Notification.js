import React, {useState} from 'react';

import Card from './Card';
import {Flex} from 'rebass';
import Icon from './Icon';
import Position from './Position';
import PropTypes from 'prop-types';
import {SpringAnimation} from './../animations';
import Text from './Text';
import colors from './../colors';
import {useStopwatch} from './../hooks';

const OFFSET_VALUE = 12;

export const OFFSETS = {
  topLeft: {
    top: OFFSET_VALUE,
    left: OFFSET_VALUE,
    translateXPrefix: '-',
  },
  topRight: {
    top: OFFSET_VALUE,
    right: OFFSET_VALUE,
    translateXPrefix: '',
  },
  bottomLeft: {
    bottom: OFFSET_VALUE,
    left: OFFSET_VALUE,
    translateXPrefix: '-',
  },
  bottomRight: {
    bottom: OFFSET_VALUE,
    right: OFFSET_VALUE,
    translateXPrefix: '',
  },
};

const STATUS_STATE = {
  success: {
    color: 'green6',
    icon: 'check',
  },
  info: {
    color: 'blue6',
    icon: 'info',
  },
  warn: {
    color: 'orange6',
    icon: 'stop',
  },
  error: {
    color: 'red6',
    icon: 'x',
  },
};

function Notification({
  content,
  duration,
  maxWidth,
  onClose,
  placement,
  positionStatic,
  status,
  title,
  zIndex,
}) {
  const [show, setShow] = useState(true);
  const stop = duration && useStopwatch(duration * 1000);

  const {top, right, bottom, left, translateXPrefix} = OFFSETS[placement];
  let IconStatus;
  let titleColor;
  if (status) {
    const {color, icon} = STATUS_STATE[status];
    IconStatus = <Icon color={color} icon={icon} pr={2} />;
    titleColor = color;
  }

  const Contents = (
    <SpringAnimation
      animations={[
        {
          from: {
            opacity: 0,
            transform: `translateX(${translateXPrefix}100%)`,
          },
          opacity: 1,
          transform: 'translateX(0%)',
        },
      ]}
      hide={!show || stop}>
      <Card bg={colors.white} px={3} py={2} style={{maxWidth}}>
        <Flex alignItems="center" justifyContent="space-between">
          {IconStatus}
          <Text color={titleColor} size="s" bold>
            {title}
          </Text>
          <Icon
            icon="x"
            onClick={() => {
              setShow(false);
              onClose && onClose();
            }}
            pl={2}
            size="s"
          />
        </Flex>
        {content && <Text size="s">{content}</Text>}
      </Card>
    </SpringAnimation>
  );

  return positionStatic ? (
    <Position position="static" zIndex={zIndex}>
      {Contents}
    </Position>
  ) : (
    <Position
      bottom={bottom}
      left={left}
      position="absolute"
      right={right}
      top={top}>
      {Contents}
    </Position>
  );
}

Notification.defaultProps = {
  maxWidth: 400,
  placement: 'topRight',
  positionStatic: false,
  zIndex: 1,
};

Notification.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  onClose: PropTypes.func,
  placement: PropTypes.oneOf([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
  ]).isRequired,
  positionStatic: PropTypes.bool,
  status: PropTypes.oneOf(['success', 'info', 'warn', 'error']),
  zIndex: PropTypes.number,
};

export default Notification;
