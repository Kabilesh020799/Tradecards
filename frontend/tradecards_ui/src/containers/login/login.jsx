/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onLogin, onSignup } from './apiUtils';
import { useNavigate } from 'react-router-dom';
import InputHolder from './components/input';

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
    navigate('/home');
  };

  const onNavigate = () => {
    if (isLogin) {
      navigate('/signup');
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
      {isLogin
        ? (
              <div className='login-heading'>Login In</div>
          )
        : (
              <div className='login-heading'>Sign up</div>
          )}
        <InputHolder
          value={userName}
          onChange={setUserName}
          placeholder="User Name"
        />
        <InputHolder
          value={password}
          onChange={setPassword}
          type='password'
          placeholder="Password"
        />
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
          {`${isLogin ? 'Do you want to Signup?' : 'Have an account? Login'}`}
        </div>
     </div>
    </div>
  );
}

Login.propTypes = { isLogin: PropTypes.bool, };

Login.defaultProps = { isLogin: false, };

export default Login;
