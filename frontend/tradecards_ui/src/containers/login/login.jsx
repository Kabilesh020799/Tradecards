/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { onLogin, onSignup } from './apiUtils';
import InputHolder from './components/input';
import { setStorage } from '../../common-utils';

function Login (props) {
  const { isLogin, } = props;

  const [userName, setUserName,] = useState('');
  const [password, setPassword,] = useState('');
  const [firstName, setFirstName,] = useState('');
  const [lastName, setLastName,] = useState('');
  const [isSignupSuccess, setIsSignupSuccess,] = useState('');

  const navigate = useNavigate();

  const onSubmit = () => {
    if (isLogin) {
      onLogin(userName, password).then((res) => {
        if (res.token) {
          setStorage('userInfo', JSON.stringify(res));
          navigate('/home');
        }
      });
    } else {
      onSignup(userName, password, firstName, lastName).then((res) => {
        if (res.token) {
          navigate('/login');
          setIsSignupSuccess(true);
          setTimeout(() => {
            setIsSignupSuccess(false);
          }, 4000);
        }
      });
    }
  };

  const onNavigate = () => {
    if (isLogin) {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };

  const onForgotPasswordNavigate = () => {
    navigate('/forget-password');
  };

  return (
    <div className='login-wrapper '>

     <div className='login'>
      <div className='login-image'>
          <img
            src='/img/logo.png'
          />
        </div>
      {isLogin
        ? (
              <div className='login-heading'>Log In</div>
          )
        : (
              <div className='login-heading'>Sign up</div>
          )}
        <InputHolder
          value={userName}
          onChange={setUserName}
          placeholder="Email Id"
        />
        <InputHolder
          value={password}
          onChange={setPassword}
          type='password'
          placeholder="Password"
        />
        {
          isLogin === false && (
            <>
              <InputHolder
                value={firstName}
                onChange={setFirstName}
                type='text'
                placeholder="First Name"
              />
              <InputHolder
                value={lastName}
                onChange={setLastName}
                type='text'
                placeholder="Last Name"
              />
            </>
          )
        }
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
        <div
          onClick={onForgotPasswordNavigate}
          className='login-switch'
        >
          {'Forgot password?'}
        </div>
        <Snackbar
          open={isSignupSuccess}
          autoHideDuration={4000}
        >
        <Alert
          severity="success"
          sx={{ width: '100%', }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
     </div>
    </div>
  );
}

Login.propTypes = { isLogin: PropTypes.bool, };

Login.defaultProps = { isLogin: false, };

export default Login;
