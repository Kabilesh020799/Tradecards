/* eslint-disable import/no-extraneous-dependencies */
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onLogin, onSignup } from './apiUtils';
import { useNavigate } from 'react-router-dom';

function Login (props) {
  const { isLogin, } = props;

  const [userName, setUserName,] = useState('');
  const [password, setPassword,] = useState('');
  const navigate = useNavigate();

  const onSubmit = () => {
    if (isLogin) {
      onLogin(userName, password);
    } else {
      onSignup(userName, password);
    }
  };

  const onNavigate = () => {
    if (isLogin) {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='login'>
      {isLogin
        ? (
            <div className='login-heading'>Login In</div>
          )
        : (
            <div className='login-heading'>Sign up</div>
          )}
      <div className='login-username'>
        <label>User Name</label>
        <Input
          type='text'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className='login-password'>
        <label>Password</label>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
        {`${isLogin ? 'Do you want to Signup' : 'Have an account? Login'}`}
      </div>
    </div>
  );
}

Login.propTypes = { isLogin: PropTypes.bool, };

Login.defaultProps = { isLogin: false, };

export default Login;
