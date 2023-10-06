import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@mui/material';

const InputHolder = (props) => {
  const {
    className,
    label,
    onChange,
    value,
    type,
  } = props;

  return (
    <div className={`login-input ${className}`}>
    <label>{ label }</label>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
  );
};

InputHolder.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

InputHolder.defaultProps = {
  className: '',
  type: 'text',
};

export default InputHolder;
