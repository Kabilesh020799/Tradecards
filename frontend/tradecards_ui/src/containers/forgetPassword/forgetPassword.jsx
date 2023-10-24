/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onForgotPassword } from './apiUtils';
import { useNavigate } from 'react-router-dom';
import InputHolder from '../login/components/input';

function ForgetPassword (props) {
  const { isForgetPassword, } = props;

  const [email, setEmail,] = useState('');
  const [confirmation, setConfirmation,] = useState('');
  const navigate = useNavigate();

  const onSubmit = () => {
    onForgotPassword(email);
    setConfirmation('Password reset link sent!');
  };

  const onNavigate = () => {
    if (isForgetPassword) {
      navigate('/forget-password');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='login-wrapper'>
      <img
        className='login-image'
        src='/img/logo.png'
      />
     <div className='login'>
        <div className='login-heading'>Enter your email below:</div>
        <InputHolder
          value={email}
          onChange={setEmail}
          placeholder="Your registered email address"
        />
        <div className='login-switch'>
          {confirmation}
        </div>
        <Button
          variant="contained"
          onClick={onSubmit}
          className='login-submit'
        >
          Submit
        </Button>
        <div
          onClick={onNavigate}
          className='login-switch'
        >
          {'Go back'}
        </div>
     </div>
    </div>
  );
}

ForgetPassword.propTypes = { isForgetPassword: PropTypes.bool, };

ForgetPassword.defaultProps = { isForgetPassword: false, };

export default ForgetPassword;
