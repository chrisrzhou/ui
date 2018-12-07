import Button from './Button';
import Icon from './Icon';
import PropTypes from 'prop-types';
import React from 'react';

function IconButton({active, color, disabled, icon, label, onClick}) {
  return (
    <Button active={active} disabled={disabled} label={label} onClick={onClick}>
      <Icon
        color={color ? color : active ? 'white' : 'base'}
        icon={icon}
        size="medium"
      />
    </Button>
  );
}

IconButton.defaultProps = {
  label: '',
};

IconButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconButton;
